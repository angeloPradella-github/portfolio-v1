import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import "./CustomButtons.css";

export default function Navbar() {
  const prevScrollPosRef = useRef(0);
  const [visible, setVisible] = useState(true);
  const [bg, setBg] = useState(false);
  const [mobile, setMobile] = useState(false);

  const isMdOrLarger = useMediaQuery({ minWidth: 1023 });

  useEffect(() => {
    if (isMdOrLarger) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMdOrLarger]);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPosRef.current > currentScrollPos || currentScrollPos < 10) {
      setVisible(true);
      if (currentScrollPos < 20) {
        setBg(false);
      } else {
        setBg(true);
      }
    } else {
      setVisible(false);
    }

    prevScrollPosRef.current = currentScrollPos;
  };

  return (
    <nav
      id="navbar"
      className={`flex ff-accent clr-neutral gap-4 lg:gap-6 px-5 py-2 lg:px-7 lg:py-3 fs-nav fixed w-full ${
        isMdOrLarger
          ? `nav-desktop ${bg ? "bg-nav" : "bg-transparent"} ${
              visible ? "animate-navbar-down" : "animate-navbar-up"
            }`
          : "nav-mobile flex-wrap"
      }`}
    >
      <div className="flex justify-between basis-[100%]">
        {/* Curriculum Button */}
        <a className="btn-sm lg:btn btn-full lg:btn-empty fw-b-bold" href="">
          Curriculum
        </a>
        {/* Hamburger Menu */}
        <i className="fa-solid fa-bars text-2xl clr-neutral cursor-pointer lg:hidden"></i>
      </div>
      {/* Navlist */}
      <div
        id="navList"
        className="flex items-center flex-col lg:flex-row gap-2 lg:gap-6 items-start lg:items-center w-full lg:w-auto"
      >
        <a
          className="py-2 border-b-acc lg:border-none w-full text-center"
          href=""
        >
          <li className="list-none lg:underline-hover fw-b-bold">Profilo</li>
        </a>
        <a
          className="py-2 border-b-acc lg:border-none w-full text-center"
          href=""
        >
          <li className="list-none lg:underline-hover fw-b-bold">Competenze</li>
        </a>
        <a
          className="py-2 border-b-acc lg:border-none w-full text-center"
          href=""
        >
          <li className="list-none lg:underline-hover fw-b-bold">Progetti</li>
        </a>
        <a
          className="py-2 border-b-acc lg:border-none w-full text-center"
          href=""
        >
          <li className="list-none lg:underline-hover fw-b-bold">Contattami</li>
        </a>
      </div>
    </nav>
  );
}
