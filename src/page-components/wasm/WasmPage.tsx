import { Show, createSignal } from "solid-js";

import FileUpload from "@components/FileUpload";
import JSONThemes from "./JSONThemes";

import "@styles/styles.scss";

const WasmPage = () => {
  const [imageDataUrl, setImageDataUrl] = createSignal<string | null>(null);

  const handleImageUpload = (dataUrl: string) => {
    setImageDataUrl(dataUrl);
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
              src={imageDataUrl()!}
              alt="Uploaded image"
            />
          </div>
        </Show>
        <JSONThemes />
      </div>
    </div>
  );
};

export default WasmPage;
