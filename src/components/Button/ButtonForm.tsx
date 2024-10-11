import type { FC } from "react";
import style from "./ButtonForm.module.scss";

export type ButtonProps = {
  text: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
};

const ButtonForm: FC<ButtonProps> = ({ text, onClick, type }) => {
  return (
    <button className={style.button} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonForm;
