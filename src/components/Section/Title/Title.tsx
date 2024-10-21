import type { FC } from "react";
import { motion } from "framer-motion";
import style from "./Title.module.scss";

export type TitleProps = {
  text: string;
};
const Title: FC<TitleProps> = ({ text }) => {
  return (
    <motion.h1
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ delay: 0.3, duration: 1.5 }}
      className={style.title}
    >
      {text}
    </motion.h1>
  );
};

export default Title;
