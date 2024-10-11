import { type FC } from "react";
import { ColorTheme } from "../Navigation/NavigationLink/NavigationLink";
import classNames from "classnames";
import style from "./ButtonIcon.module.scss";
import sprite from "/symbol-defs.svg";

export type ButtonIconProps = {
  text: string;
  onClick?: () => void;
  type: ColorTheme;
  id?: string;
  width?: string;
  height?: string;
};

const ButtonIcon: FC<ButtonIconProps> = ({
  text,
  onClick,
  type,
  id,
  width,
  height,
}) => {
  return (
    <button
      className={classNames(style.button, style[`button--${type}`])}
      type="button"
      onClick={onClick}
    >
      <span className={style.button__text}>{text}</span>
      <svg
        className={classNames(style.svg, style[`svg--${type}`])}
        width={width}
        height={height}
      >
        <use href={`${sprite}#${id}`}></use>
      </svg>
    </button>
  );
};

export default ButtonIcon;
