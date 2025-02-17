import React from "react";

const Header = () => {
  return (
    <>
      <header class="flex justify-between items-center px-8 py-5 bg-white shadow">
        <div class="text-xl font-semibold text-black">Brainwave.io</div>
        <nav class="flex space-x-4 text-gray-600">
          <a href="" class="hover:text-gray-900">
            Demos
          </a>
          <a href="" class="hover:text-gray-900">
            Pages
          </a>
          <a href="" class="hover:text-gray-900">
            Support
          </a>
          <a href="" class="hover:text-gray-900">
            Contact
          </a>
        </nav>

        <button class="bg-blue-600 text-white px-4 py-2 rounded">
          Get Started Free
        </button>
      </header>
    </>
  );
};

export default Header;
