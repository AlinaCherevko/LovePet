import { FC } from "react";
import style from "./NewsItem.module.scss";
import { NewsProps } from "./types";

const NewsItem: FC<NewsProps> = ({ item }) => {
  return (
    <li className={style.newsItem}>
      <div className={style.newsItem__wrapper}>
        <img
          src={item.imgUrl}
          alt="news-photo"
          className={style.newsItem__image}
        />
        <h2 className={style.newsItem__title}>{item.title}</h2>
        <p className={style.newsItem__description}>{item.text}</p>
      </div>
      <div className={style.newsItem__info}>
        <p className={style.newsItem__date}>{item.date.split("T")[0]}</p>
        <button className={style.newsItem__more}>Read more</button>
      </div>
    </li>
  );
};

export default NewsItem;
