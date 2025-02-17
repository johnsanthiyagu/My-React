import React from "react";
import PropTypes from "prop-types";

const Main = (props) => {
  return (
    <>
      <main class="text-center mt-12">
        <h1 class="text-4xl font-semibold text-black">
          Get things done by awesome remote team
        </h1>
        <p class="text-gray-500 mt-4">
          We share common trends and strategies for improving your rental income
          and making sure you stay in high demand.
        </p>
        <div class="flex justify-center mt-5 space-x-6">
          <button class="bg-blue-600 text-white px-4 py-2 rounded">
            Get Started for free
          </button>
          <button class="bg-transparent border border-gray-500 px-4 py-2 rounded">
            Learn More
          </button>
        </div>

        <div class="flex justify-center mt-12">
          <img
            class="w-2/4 rounded shadow-lg"
            src="./assests/firstimage.png"
            alt=""
          />
        </div>
      </main>
    </>
  );
};

Main.propTypes = {};

export default Main;
