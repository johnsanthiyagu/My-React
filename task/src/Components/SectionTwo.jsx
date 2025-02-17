import React from "react";

const SectionTwo = () => {
  return (
    <>
      <div class="container mx-auto mt-12 bg-gray-100">
        <section class="flex justify-center items-center py-10">
          <div class="w-1/2 px-10 text-left">
            <h2 class="text-3xl font-bold text-black">
              Getting started with Albino is easier than ever
            </h2>
            <p class=" mt-5 text-sm text-gray-600">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page so quickly with Albino.
            </p>
            <button class="mt-5 bg-blue-600 text-white px-5 py-2 rounded text-sm">
              Getting Started Free
            </button>
          </div>
          <div class="w-1/2 flex justify-center">
            <img
              src="./assests/secondimage.png"
              alt=""
              class="rounded shadow-sm"
            />
          </div>
        </section>
      </div>

      <section class="bg-white">
        <div class="flex justify-around text-center">
          <div class="mt-12 mb-12">
            <h2 class="text-2xl font-bold">1M+</h2>
            <p class="text-cxl text-gray-600 mt-3">
              Customers visit Albino every month
            </p>
          </div>
          <div class="mt-12 mb-12">
            <h2 class="text-2xl font-bold">93%</h2>
            <p class="text-cxl text-gray-600 mt-3">
              Satisfaction rate from our customers
            </p>
          </div>
          <div class="mt-12 mb-12">
            <h2 class="text-2xl font-bold">4.9</h2>
            <p class="text-cxl text-gray-600 mt-3">
              Average customer rating on our platform
            </p>
          </div>
        </div>
      </section>

      <div class="container mx-auto mt-10">
        <section class="bg-gray-100 py-16">
          <div class="text-center mb-10">
            <h1 class="text-4xl font-bold text-black mb-4">
              Manage your projects fast
            </h1>
            <p class="text-gray-600">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
          </div>
          <div class="flex justify-center items-center gap-16">
            <div class="flex justify-center items-center w-96">
              <img
                src="./assests/thirdimage.png"
                alt=""
                class="rounded shadow-lg"
              />
            </div>

            <div class="space-y-8">
              <div class="flex items-start space-x-4">
                <div class="text-white w-8 h-8 bg-blue-600 rounded-full text-sm flex flex-shrink-0 items-center justify-center">
                  1
                </div>
                <div class="-mt-1">
                  <h3 class="text-2xl font-semibold text-black">
                    Create a project
                  </h3>
                  <p class="text-sm text-gray-600 mt-2">
                    With lots of unique blocks, you can easily build a page
                    without coding
                  </p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="text-white w-8 h-8 bg-blue-600 rounded-full text-sm flex flex-shrink-0 items-center justify-center">
                  2
                </div>
                <div class="-mt-1">
                  <h3 class="text-2xl font-semibold text-black">
                    Assign related people
                  </h3>
                  <p class="text-sm text-gray-600 mt-2">
                    With lots of unique blocks, you can easily build a page
                    without coding
                  </p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="text-white w-8 h-8 bg-blue-600 rounded-full text-sm flex flex-shrink-0 items-center justify-center">
                  3
                </div>
                <div class="-mt-1">
                  <h3 class="text-2xl font-semibold text-black">
                    Make it done on-time
                  </h3>
                  <p class="text-sm text-gray-600 mt-2">
                    With lots of unique blocks, you can easily build a page
                    without coding
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SectionTwo;
