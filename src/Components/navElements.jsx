import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

const NavElements = (props) => {
  useEffect(() => {
    const navBg = document.querySelector(".navElements");
    if (window.innerWidth <= 1024) {
      navBg.classList.add("background-navBar");
      navBg.classList.add("navbar-padding");
    } else {
      navBg.classList.remove("background-navBar");
      navBg.classList.remove("navbar-padding");
    }
  }, []);

  return (
    <ul
      className={`background-navBar navbar-padding navElements h-[${props.h}] flex ${props.direction} links-text-color items-center text-center gap-8`}
      ref={props.refs}
    >
      <li>
        <a
          className="nav-elements flex gap-2 items-center text-underline-animation"
          href="#"
        >
          <span className="text-base">Card access</span>{" "}
          <FaAngleDown className="cursor-pointer" size={20} />
        </a>
      </li>
      <li>
        <a className="nav-elements text-underline-animation" href="#">
          Banking
        </a>
      </li>
      <li>
        <a className="nav-elements text-underline-animation" href="#">
          Processing
        </a>
      </li>
      <li>
        <a className="nav-elements text-underline-animation" href="#">
          About
        </a>
      </li>
      <li>
        <a className="nav-elements text-underline-animation" href="#">
          Carrier
        </a>
      </li>
      <li>
        <a className="nav-elements text-underline-animation" href="#">
          Contact
        </a>
      </li>
    </ul>
  );
};

export default NavElements;
