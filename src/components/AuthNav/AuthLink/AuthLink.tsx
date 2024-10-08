import type { FC } from "react";
import { NavLink } from "react-router-dom";
import { NavProps } from "../../Navigation/NavigationLink/NavigationLink";
import classNames from "classnames";
import style from "./AuthLink.module.scss";

const AuthLink: FC<NavProps> = ({ type, to, text, onClick }) => {
  const className = classNames(style["auth-link"], style[`auth-link--${type}`]);
  return (
    <>
      {to ? (
        <NavLink to={to} className={className}>
          {text}
        </NavLink>
      ) : (
        <a className={className} onClick={onClick}>
          {text}{" "}
        </a>
      )}
    </>
  );
};

export default AuthLink;
