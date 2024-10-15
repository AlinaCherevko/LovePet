import type { FC } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/auth/authSelectors";
import style from "./UserInfo.module.scss";

const UserInfo: FC = () => {
  const user = useSelector(selectUser);
  //console.log(user);

  return (
    <div className={style.info}>
      <h2 className={style.info__title}>My information</h2>
      <ul className={style.info__inputWrapper}>
        <li className={style.info__inputItem}>
          <p className={style.info__text}>{user.name}</p>
        </li>
        <li className={style.info__inputItem}>
          <p className={style.info__text}>{user.email}</p>
        </li>
        <li className={style.info__inputItem}>
          <p className={style.info__text}>{user.phone}</p>
        </li>
      </ul>
    </div>
  );
};

export default UserInfo;
