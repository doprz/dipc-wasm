import AbstractBackground from "@components/AbstractBackground";

type Props = {
  title: string;
  description: string;
};

const Hero = (props: Props) => {
  return (
    <div class="bg-gray-800">
      <div class="relative isolate px-6 pt-14 lg:px-8">
        <AbstractBackground
          outerClass="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          innerClass="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] bg-gradient-to-tr from-[#3f51b5] to-[#00bcd4]"
        />
        <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div class="text-center">
            <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {props.title}
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-300">
              {props.description}
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                class="rounded-md bg-cyan-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Get started
              </a>
              <a
                href="/wasm"
                class="text-sm font-semibold leading-6 text-white transition-transform transform md:hover:translate-x-4"
              >
                Try wasm <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <AbstractBackground
          outerClass="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          innerClass="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] bg-gradient-to-tr from-[#00bcd4] to-[#3f51b5]"
        />
      </div>
    </div>
  );
};

export default Hero;
