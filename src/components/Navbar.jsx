import React, { useState, useEffect, useRef, useCallback } from "react";
import { useMediaQuery } from "react-responsive";
import { Tooltip } from "antd";
import "./CustomButtons.css";

const HamburgerMenu = ({ onClick }) => (
  <i
    className="fa-solid fa-bars text-2xl clr-neutral cursor-pointer lg:hidden"
    onClick={onClick}
  ></i>
);

const NavList = ({ menuOpen }) => (
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

export default function Navbar() {
  const prevScrollPosRef = useRef(0);
  const [navbarState, setNavbarState] = useState({ visible: true, bg: false });
  const [menuOpen, setMenuOpen] = useState(false);

  const isMdOrLarger = useMediaQuery({ minWidth: 1023 });

  useEffect(() => {
    if (isMdOrLarger) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  }, [isMdOrLarger]);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    const shouldBeVisible =
      prevScrollPosRef.current > currentScrollPos || currentScrollPos < 10;
    const shouldBeBg = currentScrollPos >= 20;

    setNavbarState({ visible: shouldBeVisible, bg: shouldBeBg });
    prevScrollPosRef.current = currentScrollPos;
  }, []);

  useEffect(() => {
    if (isMdOrLarger) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMdOrLarger, handleScroll]);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      id="navbar"
      className={`flex ff-accent clr-neutral lg:gap-6 px-5 py-2 lg:px-7 lg:py-3 fs-nav fixed w-full z-30 ${
        isMdOrLarger
          ? `nav-desktop ${navbarState.bg ? "bg-nav" : "bg-transparent"} ${
              navbarState.visible ? "animate-navbar-down" : "animate-navbar-up"
            }`
          : "nav-mobile flex-wrap"
      }`}
    >
      <div className="flex justify-between basis-[100%]">
        {/* Curriculum Button */}
        <Tooltip title="Vedi CV" placement="bottom">
          <a
            className="btn-sm lg:btn btn-full lg:btn-empty fw-b-bold"
            href="https://drive.google.com/file/d/1-ou0ULzuRT-2NYwDZU733-PTc87l6tZk/view?usp=share_link"
            target="_blank"
          >
            Curriculum
          </a>
        </Tooltip>
        {/* Hamburger Menu */}
        <HamburgerMenu onClick={handleMenuClick} />
      </div>
      {/* Navlist */}
      <NavList menuOpen={menuOpen} />
    </nav>
  );
}
