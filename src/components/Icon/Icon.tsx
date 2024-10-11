import type { FC } from "react";
import sprite from "/symbol-defs.svg";
import { ColorTheme } from "../Navigation/NavigationLink/NavigationLink";
import classNames from "classnames";

import style from "./Icon.module.scss";

type IconProps = {
  id: string;
  fill?: string;
  stroke?: string;
  width?: number | string;
  height?: number | string;
  type?: ColorTheme;
};

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
