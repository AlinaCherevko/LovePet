import { type FC } from "react";
import classNames from "classnames";
import style from "./ButtonIcon.module.scss";
import sprite from "/symbol-defs.svg";
import { ButtonIconProps } from "./types";

const ButtonIcon: FC<ButtonIconProps> = ({
  text,
  onClick,
  type,
  id,
  width,
  height,
  size,
}) => {
  return (
    <button
      className={classNames(
        style.button,
        style[`button--${type}`],
        style[`button--${size}`]
      )}
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
