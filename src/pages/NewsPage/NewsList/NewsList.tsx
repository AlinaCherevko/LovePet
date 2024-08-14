import type { FC } from "react";
import { INews } from "../../../redux/news/types";
import NewsItem from "../NewsItem/NewsItem";
import style from "./NewsList.module.scss";

export interface INewsProps {
  news: INews[];
}

const NewsList: FC<INewsProps> = ({ news }) => {
  return (
    <ul className={style.newsList}>
      {news && news.map((item) => <NewsItem key={item._id} item={item} />)}
    </ul>
  );
};

export default NewsList;
