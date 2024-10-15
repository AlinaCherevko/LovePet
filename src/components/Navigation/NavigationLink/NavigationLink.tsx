import { NavLink } from "react-router-dom";
import style from "./NavigationLink.module.scss";
import classNames from "classnames";
import type { FC } from "react";

export type NavProps = {
  type: ColorTheme;
  to?: string;
  text: string;
  onClick?: () => void;
  href?: string | undefined | null;
};
export enum ColorTheme {
  White = "white",
  Orange = "orange",
}

const NavigationLink: FC<NavProps> = ({ type, to, text, onClick }) => {
  const className = classNames(style["nav-link"], style[`nav-link--${type}`]);
  return (
    <>
      {to ? (
        <NavLink to={to} className={className} onClick={onClick}>
          {text}
        </NavLink>
      ) : (
        <a className={className} onClick={onClick}>
          {text}
        </a>
      )}
    </>
  );
};

export default NavigationLink;
