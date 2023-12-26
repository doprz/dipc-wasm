import dipcExamples from "@assets/dipc_examples.png";

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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="absolute left-1 top-1 h-5 w-5 text-cyan-500"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"
                      />
                    </svg>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="absolute left-1 top-1 h-5 w-5 text-cyan-500"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
                      />
                    </svg>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="absolute left-1 top-1 h-5 w-5 text-cyan-500"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
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
            src={dipcExamples.src}
            alt="dipc examples"
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
