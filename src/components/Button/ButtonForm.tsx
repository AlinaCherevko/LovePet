import type { FC } from "react";
import style from "./ButtonForm.module.scss";

export type ButtonProps = {
  text: string;
};

const ButtonForm: FC<ButtonProps> = ({ text }) => {
  return (
    <button className={style.button} type="submit">
      {text}
    </button>
  );
};

export default ButtonForm;
