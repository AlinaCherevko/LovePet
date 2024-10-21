import type { FC } from "react";
import style from "./ButtonForm.module.scss";
import { ButtonProps } from "./types";

const ButtonForm: FC<ButtonProps> = ({ text, onClick, type }) => {
  return (
    <button className={style.button} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonForm;
