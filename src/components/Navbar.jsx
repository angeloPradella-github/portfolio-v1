import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";

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
      className={`flex justify-end lg:justify-between ff-accent clr-neutral gap-6 px-7 py-3 fs-nav fixed w-full ${
        isMdOrLarger
          ? `nav-desktop ${bg ? "bg-nav" : "bg-transparent"} ${
              visible ? "animate-navbar-down" : "animate-navbar-up"
            }`
          : "nav-mobile justify-items-end"
      }`}
    >
      <i className="fa-solid fa-bars text-lg clr-neutral"></i>
      <div className="flex gap-6 items-center disappear">
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
      <a className="btn btn-empty fw-b-bold clr-accent disappear" href="">
        Curriculum
      </a>
    </nav>
  );
}
