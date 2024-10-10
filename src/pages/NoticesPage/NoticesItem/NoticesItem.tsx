import type { FC } from "react";
import style from "./NoticesItem.module.scss";
import { INotices } from "../../../redux/notices/types";
import ButtonForm from "../../../components/Button/ButtonForm";
import Icon from "../../../components/Icon/Icon";

type NoticesProps = {
  item: INotices;
};

const NoticesItem: FC<NoticesProps> = ({ item }) => {
  return (
    <>
      {" "}
      <li className={style.noticesItem}>
        <div className={style.noticesItem__wrapper}>
          <div>
            <img
              src={item.imgURL}
              alt="notices-photo"
              className={style.noticesItem__image}
            />
            <div className={style.noticesItem__titleWrapper}>
              <h2 className={style.noticesItem__title}>{item.title}</h2>
              <span className={style.noticesItem__popularity}>
                {item.popularity}
              </span>
            </div>
            <div className={style.table}>
              <div className={style.table__row}>
                <p className={style.table__text}>Name</p>
                <p className={style.table__afterText}>Daisy</p>
              </div>
              <div className={style.table__row}>
                <p className={style.table__text}>Birthday</p>
                <p className={style.table__afterText}>01.10.2022</p>
              </div>
              <div className={style.table__row}>
                <p className={style.table__text}>Sex</p>
                <p className={style.table__afterText}>Female</p>
              </div>
              <div className={style.table__row}>
                <p className={style.table__text}>Species</p>
                <p className={style.table__afterText}>Dog</p>
              </div>
              <div className={style.table__row}>
                <p className={style.table__text}>Category</p>
                <p className={style.table__afterText}>Sell</p>
              </div>
            </div>
            <p className={style.noticesItem__comment}>{item.comment}</p>
          </div>
          <div className={style.buttonWrapper}>
            <ButtonForm text="Learn more" />
            <button className={style.button} type="button">
              <Icon
                id="icon-heart"
                stroke="#f6b83d"
                fill="transparent"
                width="20px"
                height="20px"
              />
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default NoticesItem;
