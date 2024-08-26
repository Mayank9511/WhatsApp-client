import React, { useState } from "react";

function Navbar() {

  const handleScroll = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  const sections = [
    { name: "About Us", id: "aboutUsSection" },
    { name: "Get Started", id: "getStartedSection" },
    { name: "Contact Us", id: "contactUsSection" },
  ];

  return (
    <div className="fixed bg-zinc-900 opacity-75 z-[999] w-full pl-10 px-6 py-4 md:px-10 md:py-6 lg:px-20 lg:py-8 font-['Neue Montreal'] flex justify-between items-center">

      <div className="links flex gap-[5vw] text-sm md:text-base lg:text-lg">
        {sections.map((section, index) => (
          <a
            key={index}
            href="#"
            onClick={(e) => handleScroll(e, section.id)}
            className="capitalize font-light hover:text-white transition-colors"
          >
            {section.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
