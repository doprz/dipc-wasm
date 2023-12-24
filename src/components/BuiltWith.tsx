import astroLogo from "@assets/astro-logo-dark.svg";
import solidLogo from "@assets/solid-logo.svg";
import tsLogo from "@assets/ts-logo-256.svg";
import tailwindcssMark from "@assets/tailwindcss-mark.svg";
import rustLogo from "@assets/rust-logo-blk.svg";

const imageProps = {
  class: "col-span-2 max-h-12 w-full object-contain lg:col-span-1",
  width: "158",
  height: "48",
} as const;

const BuiltWith = () => {
  return (
    <>
      <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 class="text-center text-lg font-semibold leading-8 text-gray-900">
            Built With
          </h2>
          <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img src={astroLogo.src} alt="Astro" {...imageProps} />
            <img src={solidLogo.src} alt="Solid" {...imageProps} />
            <img src={tsLogo.src} alt="TypeScript" {...imageProps} />
            <img src={tailwindcssMark.src} alt="Tailwind CSS" {...imageProps} />
            <img src={rustLogo.src} alt="Rust" {...imageProps} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BuiltWith;
