import type { FC } from "react";
import logo from "/img/logo/logo-min.svg";
import logoWhite from "/img/logo/logo-white.svg";
import style from "./Logo.module.scss";
import { LogoProps } from "./types";

const Logo: FC<LogoProps> = ({ isHomePage }) => {
  return (
    <div>
      <a href="/">
        <img
          className={style.img}
          src={isHomePage ? logoWhite : logo}
          alt="logo-img"
          loading="lazy"
        />
      </a>
    </div>
  );
};

export default Logo;
