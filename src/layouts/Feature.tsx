import "@styles/styles.scss";

const Feature = () => {
  return (
    <div class="overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="lg:pr-8 lg:pt-4">
            <div class="lg:max-w-lg">
              <h2
                class="text-base font-semibold leading-7 text-cyan-500 animateEnter"
                style={{ "--stagger": "0" }}
              >
                Blazingly Fast
              </h2>
              <p
                class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl animateEnter"
                style={{ "--stagger": "0" }}
              >
                Customize
              </p>
              <p
                class="mt-6 text-lg leading-8 text-gray-300 animateEnter"
                style={{ "--stagger": "1" }}
              >
                Transform your cherished images and wallpapers into personalized
                masterpieces by seamlessly incorporating your preferred color
                palettes and themes. Tailor your visual experience to reflect
                your unique style and preferences, giving a fresh and
                personalized touch to the pictures that matter most to you.
                Embrace a world of customization as you convert ordinary visuals
                into extraordinary works of art with just a splash of your
                favorite colors.
              </p>
              <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                <div
                  class="relative pl-9 animateEnter"
                  style={{ "--stagger": "1" }}
                >
                  <dt class="inline font-semibold text-gray-200">
                    {/* <svg
                      class="absolute left-1 top-1 h-5 w-5 text-cyan-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                        clip-rule="evenodd"
                      />
                    </svg> */}
                    Built-in Themes
                    <br />
                  </dt>
                  <dd class="inline">
                    Choose from a selection of over 10 meticulously crafted
                    themes, offering a diverse range of color palettes and
                    designs to suit your mood and style effortlessly.
                  </dd>
                </div>
                <div
                  class="relative pl-9 animateEnter"
                  style={{ "--stagger": "1" }}
                >
                  <dt class="inline font-semibold text-gray-200">
                    {/* <svg
                      class="absolute left-1 top-1 h-5 w-5 text-cyan-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                        clip-rule="evenodd"
                      />
                    </svg> */}
                    Blazingly Fast Rust Performance
                    <br />
                  </dt>
                  <dd class="inline">
                    Leverage the robust performance, reliability, and memory
                    safety of Rust, ensuring a smooth and efficient image
                    transformation process. The power of Rust at the core
                    guarantees a seamless and reliable customization experience.
                  </dd>
                </div>
                <div
                  class="relative pl-9 animateEnter"
                  style={{ "--stagger": "1" }}
                >
                  <dt class="inline font-semibold text-gray-200">
                    {/* <svg
                      class="absolute left-1 top-1 h-5 w-5 text-cyan-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                      <path
                        fill-rule="evenodd"
                        d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z"
                        clip-rule="evenodd"
                      />
                    </svg> */}
                    User Experience with Web Assembly
                    <br />
                  </dt>
                  <dd class="inline">
                    Enjoy a user-friendly experience as the project utilizes Web
                    Assembly, making it easy to use and accessible across
                    various platforms. Transform your favorite images with just
                    a few clicks, bringing the magic of customization to your
                    fingertips without any hassle.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <img
            src="https://github.com/doprz/dipc/raw/main/images/dipc_examples.png"
            alt="Product screenshot"
            class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 animateEnter"
            style={{ "--stagger": "1" }}
            width="2432"
            height="1442"
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
