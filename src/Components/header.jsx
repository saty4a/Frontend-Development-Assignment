import React, { useEffect, useState, useRef } from "react";
import NavBar from "./navBar";
import NavElements from "./navElements";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { FaArrowRightToBracket } from "react-icons/fa6";
import logo from "../assets/Logo.png";
import Image from "next/image";

const Header = () => {
  const styles = "sticky top-0 z-50 blur-background";
  const [showNavBar, setShowNavBar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [styleNavBar, setStyleNavBar] = useState(
    window.innerWidth <= 1024 ? "" : styles
  );
  const [navAnimation, setNavAnimation] = useState("slide-in-done");

  const ref = useRef();
  const handleNavBar = () => {
    if (showNavBar) {
      setNavAnimation("slide-out-done");
      setTimeout(() => {
        setShowNavBar(!showNavBar);
        setNavAnimation("slide-in-done");
      }, 600);
    } else {
      setShowNavBar(!showNavBar);
    }
  };

  useEffect(() => {
    if (showNavBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [setShowNavBar, showNavBar]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 1024) {
        setShowNavBar(false);
      }
      if (window.innerWidth <= 1024) {
        setStyleNavBar("");
      } else {
        setStyleNavBar(styles);
      }
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <nav className={`navBar ${styleNavBar} border-2`}>
      <div className="flex  items-center mx-4 my-4 justify-between lg:justify-evenly">
        <Image src={logo} className="" alt="logo" />
        {windowWidth >= 1024 ? (
          <NavElements refs={ref} h={"full"} directions={"flex-row"} />
        ) : !showNavBar ? (
          <div className="flex gap-5 items-center">
            <button className="flex gap-2 text-[#5A6475] font-medium items-center rounded-xl border-2 bg-[#EEEFEF] px-3 py-1 border hover:border-black shadow hover:shadow-lg">
              <span className="text-base">Login</span>
              <FaArrowRightToBracket className="cursor-pointer" size={20} />
            </button>
            <FaBars
              className="cursor-pointer text-[#363C46]"
              size={30}
              onClick={handleNavBar}
            />
          </div>
        ) : (
          <FaXmark
            className="z-50 cursor-pointer"
            size={35}
            onClick={handleNavBar}
          />
        )}
        {windowWidth >= 1024 ? (
          <button className="flex gap-2 text-[#5A6475] font-medium items-center rounded-xl border-2 bg-[#EEEFEF] px-3 py-1 border hover:border-black shadow hover:shadow-lg">
            <span className="text-base">Login</span>
            <FaArrowRightToBracket className="cursor-pointer" size={20} />
          </button>
        ) : (
          ""
        )}
      </div>
      {showNavBar ? (
        <NavBar
          setShowNavBar={setShowNavBar}
          navAnimation={navAnimation}
          setNavAnimation={setNavAnimation}
        />
      ) : (
        ""
      )}
    </nav>
  );
};

export default Header;
