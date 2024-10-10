import { type FC } from "react";
import style from "./ButtonIcon.module.scss";

export type ButtonIconProps = {
  text: string;
  children: JSX.Element;
  onClick?: () => void;
};

const ButtonIcon: FC<ButtonIconProps> = ({ text, children, onClick }) => {
  return (
    <button className={style.button} type="submit" onClick={onClick}>
      <span className={style.button__text}>{text}</span>
      {children}
    </button>
  );
};

export default ButtonIcon;
