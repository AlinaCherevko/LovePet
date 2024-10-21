import { ColorTheme } from "../Navigation/NavigationLink/types";

export enum BtnIconSizes {
  Small = "small",
  Big = "big",
  Medium = "medium",
}

export type ButtonIconProps = {
  text?: string;
  onClick?: () => void;
  type: ColorTheme;
  id?: string;
  width?: string;
  height?: string;
  size?: BtnIconSizes;
};
