import { For, createSignal, onMount } from "solid-js";

import {
  type ColorPaletteName,
  type jsonFileData,
  isImagePalette,
  isEmojiPalette,
  colorPalettePicture,
} from "./utils";

const renderColorPalettePicture = (colorPaletteName: ColorPaletteName) => {
  const colorPalette = colorPalettePicture[colorPaletteName];
  return (
    <>
      {isImagePalette(colorPalette) ? (
        <img
          class="object-cover w-12 h-full rounded-l-lg"
          src={colorPalette.url}
          alt={colorPaletteName}
        />
      ) : isEmojiPalette(colorPalette) ? (
        <span class="text-5xl">{colorPalette.emoji}</span>
      ) : (
        <div class="ml-12" />
      )}
    </>
  );
};

type Props = {
  // eslint-disable-next-line no-unused-vars
  handleUpdatePaletteVariations: (colors: string[]) => void;
  handleDownloadImage: () => void;
};

const JSONThemes = (props: Props) => {
  const [jsonData, setJsonData] = createSignal<jsonFileData[]>([]);

  const [selectedPalette, setSelectedPalette] =
    createSignal<ColorPaletteName>("catppuccin");
  const [selectedPaletteVariations, setSelectedPaletteVariations] =
    createSignal<string[] | null>(null);
  const [selectedPaletteVariationColors, setSelectedPaletteVariationColors] =
    createSignal<string[] | null>(null);

  const [activeTab, setActiveTab] = createSignal<number>(0);

  const updatePaletteVariations = (
    colorPalette: ColorPaletteName | null = selectedPalette(),
    paletteVariationIndex: number = 0
  ) => {
    if (!colorPalette) return;

    const colorPaletteData = jsonData().find(
      (data) => data.fileName === colorPalette
    );
    // console.log(colorPaletteData);

    const variations = Object.keys(colorPaletteData?.paletteVariations);
    const colors: string[] = Object.values(
      colorPaletteData?.paletteVariations[variations[paletteVariationIndex]]
    );

    setSelectedPaletteVariations(variations);

    setSelectedPaletteVariationColors(colors);
    props.handleUpdatePaletteVariations(colors);
    // console.log(colors);
  };

  // TODO: memoize this
  const handleOnClick = (colorPalette: ColorPaletteName) => {
    setActiveTab(0);

    setSelectedPalette(colorPalette);
    // console.log(colorPalette);

    updatePaletteVariations(colorPalette);
  };

  const fetchJsonData = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/repos/doprz/dipc/contents/src/palettes?ref=main"
      );
      const data = await response.json();

      // Filter out non-JSON files
      const jsonFiles = data.filter((file: { name: string }) =>
        file.name.endsWith(".json")
      );

      // Fetch and parse each JSON file
      const jsonFileData = await Promise.all(
        jsonFiles.map(async (file: { download_url: string; name: string }) => {
          const fileResponse = await fetch(file.download_url);
          const fileData = await fileResponse.json();

          // Remove .json extension from the file name
          const fileNameWithoutExtension = file.name.replace(/\.json$/, "");
          return {
            fileName: fileNameWithoutExtension,
            paletteVariations: fileData,
          };
        })
      );

      setJsonData(jsonFileData);

      // console.log("JSON data fetched successfully!");
      // console.log(jsonFileData);

      updatePaletteVariations();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  onMount(() => {
    fetchJsonData();
  });

  return (
    <div class="mt-8">
      <div class="mt-8 bg-gray-900 rounded-lg">
        <div class="pt-12 pb-4">
          <div class="relative border-b-2 border-gray-500 sm:pb-0">
            <div class="md:flex md:justify-between md:items-center">
              <h3 class="text-base font-semibold text-gray-300">
                {selectedPalette()}
              </h3>
              <div class="flex mt-3 space-x-3 md:mt-0 md:top-3 md:right-0 md:absolute">
                <button
                  type="button"
                  class="inline-flex rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                    />
                  </svg>
                  Upload
                </button>
                <button
                  type="button"
                  class="inline-flex rounded-md bg-cyan-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 gap-2"
                  onClick={() => props.handleDownloadImage()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                  Download
                </button>
              </div>
            </div>
            <div class="mt-4">
              <div class="block">
                <nav class="flex mb-[-1px] space-x-8">
                  <For each={selectedPaletteVariations()}>
                    {(variation, index) => (
                      <span
                        class={
                          activeTab() === index()
                            ? "text-sm text-cyan-300 px-1 pb-4 border-b-2 whitespace-nowrap border-cyan-300 cursor-pointer"
                            : "text-sm text-gray-300 px-1 pb-4 border-b-2 whitespace-nowrap border-transparent cursor-pointer"
                        }
                        onClick={() => {
                          setActiveTab(index);
                          updatePaletteVariations(selectedPalette(), index());
                        }}
                      >
                        {variation}
                      </span>
                    )}
                  </For>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-8 flex flex-row flex-wrap md:w-1/2">
        <For each={selectedPaletteVariationColors()}>
          {(color) => (
            <div class="m-2">
              <div
                class="w-8 h-8 rounded-lg"
                style={{ "background-color": color }}
              />
            </div>
          )}
        </For>
      </div>
      <ul class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <For each={jsonData()}>
          {(data) => (
            <li
              class="bg-gray-800 rounded-lg hover:bg-gray-700 hover:cursor-pointer flex flex-row"
              onClick={() => handleOnClick(data.fileName)}
            >
              <div>{renderColorPalettePicture(data.fileName)}</div>
              <div class="p-6">
                <p class="text-md font-medium text-gray-300">{data.fileName}</p>
              </div>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};

export default JSONThemes;
