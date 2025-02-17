import React from "react";

const Footer = () => {
  return (
    <footer class="bg-gray-50 py-16">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid grid-cols-5 gap-8">
          <div>
            <h3 class="text-2xl font-bold text-black">Brainwave.io</h3>
            <p class="text-gray-600 mt-4">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
            <div class="flex space-x-4 mt-4">
              <a href="#" class="text-gray-600 hover:text-gray-800">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="text-gray-600 hover:text-gray-800">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#" class="text-gray-600 hover:text-gray-800">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="text-gray-600 hover:text-gray-800">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-4">Company</h4>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  About us
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-4">Product</h4>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  Features
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  News
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  Help desk
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-4">Services</h4>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  Content Writing
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  SEO for Business
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  UI Design
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 mb-4">Legal</h4>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  Return Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
