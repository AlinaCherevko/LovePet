import type { FC } from "react";
import style from "./ButtonForm.module.scss";

export type ButtonProps = {
  text: string;
  onClick?: () => void;
};

const ButtonForm: FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className={style.button} type="submit" onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonForm;
