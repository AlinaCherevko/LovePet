import { type FC } from "react";
import { IFriends } from "../../../redux/friends/types";
import style from "./FriendsItem.module.scss";

type FriendsProps = {
  item: IFriends;
};

const FriendsItem: FC<FriendsProps> = ({ item }) => {
  return (
    <li className={style.friendsItem}>
      <div className={style.hours}>
        <p className={style.hours__time}>09:00 - 20:00</p>
      </div>
      <div className={style.friendsItem__wrapper}>
        <img
          className={style.friendsItem__img}
          src={item.imageUrl}
          alt="friends-photo"
        />
        <div className={style.friendsItem__textWrapper}>
          <h2 className={style.friendsItem__title}>{item.title}</h2>
          <ul>
            {item.email && (
              <li className={style.friendsItem__item}>
                <span className={style.friendsItem__span}>Email:</span>
                <p className={style.friendsItem__text}>{item.email}</p>
              </li>
            )}
            {item.address && (
              <li className={style.friendsItem__item}>
                <span className={style.friendsItem__span}>Address:</span>
                <p className={style.friendsItem__text}>{item.address}</p>
              </li>
            )}
            {item.phone && (
              <li className={style.friendsItem__item}>
                <span className={style.friendsItem__span}>Phone:</span>
                <p className={style.friendsItem__text}>{item.phone}</p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default FriendsItem;
