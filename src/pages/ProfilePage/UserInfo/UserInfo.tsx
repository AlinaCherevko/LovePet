import type { FC } from "react";
import style from "./UserInfo.module.scss";

const UserInfo: FC = () => {
  return (
    <div className={style.info}>
      <h2 className={style.info__title}>My information</h2>
      <ul className={style.info__inputWrapper}>
        <li className={style.info__inputItem}>
          <p className={style.info__text}>Name</p>
        </li>
        <li className={style.info__inputItem}>
          <p className={style.info__text}>Email</p>
        </li>
        <li className={style.info__inputItem}>
          <p className={style.info__text}>+380</p>
        </li>
      </ul>
    </div>
  );
};

export default UserInfo;
