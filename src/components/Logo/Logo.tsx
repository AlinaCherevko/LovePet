import type { FC } from "react";
import logo from "/img/logo/logo-min.svg";
import logoWhite from "/img/logo/logo-white.svg";
import style from "./Logo.module.scss";

const Logo: FC = () => {
  const isHomePage = false;
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
