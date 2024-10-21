import type { FC } from "react";
import sprite from "/symbol-defs.svg";
import classNames from "classnames";
import { IconProps } from "./types";
import style from "./Icon.module.scss";

const Icon: FC<IconProps> = ({ id, fill, stroke, width, height, type }) => {
  return (
    <svg
      className={classNames(style.svg, style[`svg--${type}`])}
      fill={fill}
      stroke={stroke}
      width={width}
      height={height}
    >
      <use href={`${sprite}#${id}`}></use>
    </svg>
  );
};

export default Icon;
