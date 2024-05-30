import React, { useState } from "react";

function Dropdown({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="text-white hover:bg-indigo-500 hover:bg-opacity-25 px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring focus:border-blue-300"
      >
        {title}
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 bg-white border border-gray-200 divide-y divide-gray-200 rounded-md shadow-lg">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
