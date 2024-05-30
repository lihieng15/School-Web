import React, { useState } from "react";
import Dropdown from "./Dropdown";
import NestedDropdown from "./NestedDropdown";
function Navbar() {
  const services = [
    { label: "Service 1", href: "/service1" },
    { label: "Service 2", href: "/service2" },
    { label: "Service 3", href: "/service3" },
  ];
  const nestedItems = [
    {
      title: "Sub Menu 1",
      items: [
        { label: "Sub Item 1", href: "/subitem1" },
        { label: "Sub Item 2", href: "/subitem2" },
        { label: "Sub Item 3", href: "/subitem3" },
      ],
    },
    {
      title: "Sub Menu 2",
      items: [
        { label: "Sub Item 1", href: "/subitem1" },
        { label: "Sub Item 2", href: "/subitem2" },
        { label: "Sub Item 3", href: "/subitem3" },
      ],
    },
  ];

  return (
    <nav className="bg-gradient-to-r from-indigo-700 to-purple-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="text-white text-lg">
                Logo
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="/"
                  className="text-white hover:bg-indigo-500 hover:bg-opacity-25 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="text-white hover:bg-indigo-500 hover:bg-opacity-25 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </a>
                <Dropdown title="Services" items={services} />
                <NestedDropdown title="Our Programs" items={nestedItems} />
                <a
                  href="/contact"
                  className="text-white hover:bg-indigo-500 hover:bg-opacity-25 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          {/* Responsive menu button */}
          <div className="flex items-center md:hidden">
            <Dropdown
              title="Menu"
              items={[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                ...services,
                { label: "Contact", href: "/contact" },
              ]}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
