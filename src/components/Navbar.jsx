import React, { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const prevScrollPosRef = useRef(0);
  const [visible, setVisible] = useState(true);
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      className={`flex justify-between ff-accent clr-neutral gap-6 px-7 py-3 fs-nav fixed w-full 
        ${bg ? "bg-nav" : "bg-transparent"}
        ${visible ? "animate-navbar-down" : "animate-navbar-up"}`}
    >
      <div className="flex gap-6 items-center">
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
      <a className="btn btn-empty fw-b-bold clr-accent duration-100" href="">
        Curriculum
      </a>
    </nav>
  );
}
