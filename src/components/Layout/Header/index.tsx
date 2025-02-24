"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import Image from "next/image";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import { useTheme } from "next-themes";

const Header: React.FC = () => {
  const pathUrl = usePathname();
  const { theme, setTheme } = useTheme();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen]);

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [navbarOpen]);

  return (
    <header
      className={`z-40 w-full transition-all fixed top-0 duration-300 ${
        sticky ? "shadow-lg bg-white py-4" : "shadow-none bg-header py-6"
      }`}
    >
      <div className="lg:py-0 py-2">
        <div className="container  mx-auto lg:max-w-screen-xl md:max-w-screen-md flex items-center justify-between px-4">
          <Logo />
          <nav className="relative right-20 hidden lg:flex flex-grow items-center gap-32 justify-center md:ml-20">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="block lg:hidden p-2 rounded-lg"
            aria-label="Toggle mobile menu"
          >
            <span className="block w-6 h-0.5 rounded-full bg-black"></span>
            <span className="block w-6 h-0.5 rounded-full bg-black mt-1.5"></span>
            <span className="block w-6 h-0.5 rounded-full bg-black mt-1.5"></span>
          </button>
        </div>
        {navbarOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40" />
        )}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 max-w-xs ${
            navbarOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}
        >
          <div className="flex items-center justify-between p-4">
            <h2 className="text-lg font-bold text-midnight_text dark:text-midnight_text">
              <Logo />
            </h2>

            {/*  */}
            <button
              onClick={() => setNavbarOpen(false)}
              className="bg-[url('/images/closed.svg')] bg-red-600 p-3 rounded-[50%] bg-no-repeat bg-contain w-5 h-5 absolute top-0 right-0 mr-8 mt-8 dark:invert z-[999]"
              aria-label="Close menu Modal"
            ></button>
          </div>
          <nav className="relative left-10 bottom-20 bg-transparent flex flex-col items-center justify-center h-screen gap-10 p-4 text-2xl font-semibold">
            {headerData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
