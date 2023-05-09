import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900">
      <div className="mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex items-center">
            <a href="/" className="text-white font-bold text-2xl">
              Dahook
            </a>
          </div>
          {/* <div className="hidden md:flex md:items-center">
            <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Home
            </a>
            <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Shop
            </a>
            <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </a>
            <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Cart
            </a>
          </div> */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-white focus:outline-none focus:text-white"
              aria-label="toggle menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                {isOpen ? (
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 18L18 6M6 6l12 12"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke="white"
                  />
                ) : (
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                    fill="white"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "" : "hidden"
        } md:hidden bg-gray-800`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Home
          </a>
          <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Shop
          </a>
          <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Contact
          </a>
          <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Cart
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
