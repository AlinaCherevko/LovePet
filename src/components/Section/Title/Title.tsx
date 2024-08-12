import type { FC } from "react";
import style from "./Title.module.scss";

export type TitleProps = {
  text: string;
};
const Title: FC<TitleProps> = ({ text }) => {
  return <h1 className={style.title}>{text}</h1>;
};

export default Title;
