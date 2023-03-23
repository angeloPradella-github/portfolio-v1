import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import "./CustomButtons.css";

export default function Navbar() {
  const prevScrollPosRef = useRef(0);
  const [visible, setVisible] = useState(true);
  const [bg, setBg] = useState(false);

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
      className={`flex justify-between ff-accent clr-neutral gap-6 px-5 py-2 lg:px-7 lg:py-3 fs-nav fixed w-full ${
        isMdOrLarger
          ? `nav-desktop ${bg ? "bg-nav" : "bg-transparent"} ${
              visible ? "animate-navbar-down" : "animate-navbar-up"
            }`
          : "nav-mobile items-center"
      }`}
    >
      <div id="navList" className="flex gap-6 items-center disappear">
        <a className="" href="">
          <li className="list-none underline-hover fw-b-bold">Profilo</li>
        </a>
        <a className="" href="">
          <li className="list-none underline-hover fw-b-bold">Competenze</li>
        </a>
        <a className="" href="">
          <li className="list-none underline-hover fw-b-bold">Progetti</li>
        </a>
        <a className="" href="">
          <li className="list-none underline-hover fw-b-bold">Contattami</li>
        </a>
      </div>
      <a className="btn-sm lg:btn btn-full lg:btn-empty fw-b-bold" href="">
        Curriculum
      </a>
      {/* Hamburger Menu */}
      <i className="fa-solid fa-bars text-2xl clr-neutral"></i>
    </nav>
  );
}
