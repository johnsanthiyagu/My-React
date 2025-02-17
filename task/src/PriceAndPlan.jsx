import React from "react";

const Priceandplan = () => {
  return (
    <>
      <div class="container mx-auto mt-10 ">
        <section class="bg-gray-900 text-white py-16">
          <div class="max-w-6xl mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-4">Pricing & Plans</h2>
            <p class="text-sm text-gray-400 text-center mb-10">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
          </div>

          <div class="flex justify-center space-x-6 m-8 mb-15">
            {/* <!-- basic plan --> */}
            <div class="bg-white text-gray-900 rounded-lg p-8 flex flex-col items-center">
              <span class="text-indigo-700 font-semibold mb-4">BASIC</span>
              <h2 class="text-4xl font-bold mb-3">$29</h2>
              <p class="text-gray-600 mb-6">One time purchase</p>
              <p class="text-gray-600 mb-8 text-center">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page.
              </p>
              <button
                class="bg-indigo-600 text-white px-6 py-3 
                        rounded-full "
              >
                Get Started for free
              </button>
            </div>

            {/* <!-- standard plan -->                 */}
            <div class="bg-white text-gray-900 rounded-lg p-8 flex flex-col items-center">
              <span class="text-indigo-700 font-semibold mb-4">STANDARD</span>
              <h2 class="text-4xl font-bold mb-3">$29</h2>
              <p class="text-gray-600 mb-6">One time purchase</p>
              <p class="text-gray-600 mb-8 text-center">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page.
              </p>
              <button
                class="bg-indigo-600 text-white px-6 py-3 
                        rounded-full "
              >
                Get Started for free
              </button>
            </div>

            {/* <!-- premium plan --> */}
            <div class="bg-white text-gray-900 rounded-lg p-8 flex flex-col items-center">
              <span class="text-indigo-700 font-semibold mb-4">PREMIUM</span>
              <h2 class="text-4xl font-bold mb-3">$29</h2>
              <p class="text-gray-600 mb-6">One time purchase</p>
              <p class="text-gray-600 mb-8 text-center">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page.
              </p>
              <button
                class="bg-indigo-600 text-white px-6 py-3 
                    rounded-full "
              >
                Get Started for free
              </button>
            </div>
          </div>

          <div>
            <div class="grid grid-cols-2 gap-8">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full"></div>
                <div>
                  <h4 class="font-semibold mb-2">
                    Can I use Albino for my clients?
                  </h4>
                  <p class="text-gray-400">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page. Intuitive
                    timeline sagittis interdum halkanastra.
                  </p>
                  <a href="#" class="text-indigo-400 mt-2 inline-block">
                    Click to learn more ›
                  </a>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full"></div>
                <div>
                  <h4 class="font-semibold mb-2">
                    Does it work with WordPress?
                  </h4>
                  <p class="text-gray-400">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page. Intuitive
                    timeline sagittis interdum halkanastra.
                  </p>
                  <a href="#" class="text-indigo-400 mt-2 inline-block">
                    Click to learn more ›
                  </a>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full"></div>
                <div>
                  <h4 class="font-semibold mb-2">Do I get free updates?</h4>
                  <p class="text-gray-400">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page. Intuitive
                    timeline sagittis interdum halkanastra.
                  </p>
                  <a href="#" class="text-indigo-400 mt-2 inline-block">
                    Click to learn more ›
                  </a>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full"></div>
                <div>
                  <h4 class="font-semibold mb-2">Will you provide support?</h4>
                  <p class="text-gray-400">
                    With lots of unique blocks, you can easily build a page
                    without coding. Build your next landing page. Intuitive
                    timeline sagittis interdum halkanastra.
                  </p>
                  <a href="#" class="text-indigo-400 mt-2 inline-block">
                    Click to learn more ›
                  </a>
                </div>
              </div>
            </div>

            <p class="text-center mt-12 text-gray-400">
              Haven't got your answer?{" "}
              <a href="#" class="text-indigo-400">
                Contact our support now
              </a>
            </p>
          </div>
        </section>
      </div>

      {/* <!-- Blocks Section --> */}
      <div class="flex justify-center space-x-6 bg-white py-16">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-black  mr-20">
            Build better landing page fast
          </h2>
          <p class="text-gray-600 mt-2 text-wrap text-left ml-34 ">
            With lots of unique blocks, you can easily build a page without
            coding. <br /> Build your next landing page.
          </p>
        </div>
        <div class="flex justify-evenly space-x-6 mt-8 ">
          <button class="w-25 h-10 px-2 bg-blue-100 text-blue-700 rounded ml-16">
            Learn more{" "}
          </button>
          <button class="w-25 h-10 px-2 bg-blue-600 text-white  rounded">
            Get it now{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Priceandplan;
