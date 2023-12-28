import { Show, createSignal, onMount } from "solid-js";

import FileUpload from "@components/FileUpload";
import JSONThemes from "./JSONThemes";

import { default as wasm, convert_data_url_to_rgba8 } from "@wasm/dipc_wasm";
import { hexColorsToRgb } from "@utils/color";

import "@styles/styles.scss";

const WasmPage = () => {
  const [imageDataUrl, setImageDataUrl] = createSignal<string | null>(null);
  const [convertedImageDataUrl, setConvertedImageDataUrl] = createSignal<
    string | null
  >(null);

  const [
    selectedPaletteVariationColorsRGBFlat,
    setSelectedPaletteVariationColorsRGBFlat,
  ] = createSignal<number[]>([]);

  onMount(() => {
    wasm().then(() => {
      console.log("WASM loaded successfully!");
    });
  });

  const handleUpdatePaletteVariations = (colors: string[]) => {
    const colorsRGB = hexColorsToRgb(colors);
    const colorsRGBFlat = colorsRGB.flat();
    setSelectedPaletteVariationColorsRGBFlat(colorsRGBFlat);

    // TODO: This is a tmp way to get the image to re-render
    if (imageDataUrl()) {
      handleImageUpload(imageDataUrl()!);
    }
  };

  const handleImageUpload = (dataUrl: string) => {
    console.log("dataUrl:", dataUrl);
    setImageDataUrl(dataUrl);

    console.log("Converting image...");
    const image = convert_data_url_to_rgba8(
      dataUrl,
      new Uint8Array(selectedPaletteVariationColorsRGBFlat())
    );

    setConvertedImageDataUrl(image);

    console.log("original:", dataUrl);
    console.log("converted:", image);
  };

  return (
    <div class="bg-gray-900 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <Show
          when={imageDataUrl()}
          fallback={<FileUpload onImageUpload={handleImageUpload} />}
        >
          <div class="flex">
            <img
              class="w-1/2 max-w-full mr-2 rounded-xl shadow-xl ring-1 ring-gray-400/10 animateEnter"
              src={imageDataUrl()!}
              alt="Uploaded image"
            />
            <img
              class="w-1/2 max-w-full ml-2 rounded-xl shadow-xl ring-1 ring-gray-400/10 animateEnter"
              src={convertedImageDataUrl()!}
              alt="Uploaded image"
            />
          </div>
        </Show>
        <JSONThemes
          handleUpdatePaletteVariations={handleUpdatePaletteVariations}
        />
      </div>
    </div>
  );
};

export default WasmPage;
