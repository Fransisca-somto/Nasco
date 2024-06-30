import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <IoLogoGithub />
      </a>
      <a href="https://dribble.com" target="_blank">
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
