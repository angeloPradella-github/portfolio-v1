import React from "react";

const NavList = ({ menuOpen }) => {
  return (
    <div
      id="navList"
      className={`flex items-center flex-col lg:flex-row gap-2 lg:gap-6 items-start lg:items-center w-full lg:w-auto pb-3 lg:pb-0 ${
        menuOpen ? "" : "hidden"
      }`}
    >
      <a
        className="py-2 border-b-acc lg:border-none w-full text-center"
        href="#about"
      >
        <li className="list-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.2)]  lg:underline-hover fw-b-bold">
          Profilo
        </li>
      </a>
      <a
        className="py-2 border-b-acc lg:border-none w-full text-center"
        href="#skills"
      >
        <li className="list-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.2)] lg:underline-hover fw-b-bold">
          Competenze
        </li>
      </a>
      <a
        className="py-2 border-b-acc lg:border-none w-full text-center"
        href="#projects"
      >
        <li className="list-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.2)]  lg:underline-hover fw-b-bold">
          Progetti
        </li>
      </a>
      <a
        className="py-2 border-b-acc lg:border-none w-full text-center"
        href="#contacts"
      >
        <li className="list-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.2)]  lg:underline-hover fw-b-bold">
          Contattami
        </li>
      </a>
    </div>
  );
};
export default NavList;
