import React from "react";

const Testimonial = () => {
  return (
    <>
      <div class="container mx-auto mt-20">
        <div class="flex justify-evenly items-center">
          {/* <!-- Testimonial 1 --> */}
          <div class="flex-col flex justify-center items-center">
            <img
              src="./assests/fourthimage.png"
              alt=""
              class="rounded-full w-16 h-16"
            />
            <h1 class="text-xl font-semibold text-black">
              "You made it so simple"
            </h1>
            <p class="text-sm text-gray-600 w-56 text-center mt-6">
              My new site is so much faster and easier to work with than my old
              site.
            </p>
            <p class="font-semibold text-xl text-black mt-8">Corey Valdez</p>
            <p class="text-sm">Founder at Zenix</p>
          </div>
          {/* <!-- Testimonial 2 --> */}
          <div>
            <img
              src="./assests/fifthimage.png"
              alt=""
              class="rounded-full w-16 h-16"
            />
            <h1 class="text-xl font-semibold text-black">
              "You made it so simple"
            </h1>
            <p class="text-sm text-gray-600 w-56 text-center mt-6">
              My new site is so much faster and easier to work with than my old
              site.
            </p>
            <p class="font-semibold text-xl text-black mt-8">Corey Valdez</p>
            <p class="text-sm">Founder at Zenix</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
