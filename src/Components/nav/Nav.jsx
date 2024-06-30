import React from "react";
import "./nav.css";
import { FaHome } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDots } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState(`#`);
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav(`#`)}
        className={activeNav === `#` ? `active` : ``}
      >
        <FaHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav(`#about`)}
        className={activeNav === `#about` ? `active` : ``}
      >
        <FaRegUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav(`#experience`)}
        className={activeNav === `#experience` ? `active` : ``}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav(`#services`)}
        className={activeNav === `#services` ? `active` : ``}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav(`#contact`)}
        className={activeNav === `#contact` ? `active` : ``}
      >
        <BiMessageSquareDots />
      </a>
    </nav>
  );
};

export default Nav;
