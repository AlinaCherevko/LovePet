import type { FC } from "react";
import NewsItem from "../NewsItem/NewsItem";
import { INewsProps } from "./types";
import { motion } from "framer-motion";
import style from "./NewsList.module.scss";

const NewsList: FC<INewsProps> = ({ news }) => {
  return (
    <motion.ul
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ delay: 0.3, duration: 1.5 }}
      className={style.newsList}
    >
      {news && news.map((item) => <NewsItem key={item._id} item={item} />)}
    </motion.ul>
  );
};

export default NewsList;
