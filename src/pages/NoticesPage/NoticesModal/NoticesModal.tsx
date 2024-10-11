import { type FC } from "react";
import Avatar from "../../ProfilePage/Avatar/Avatar";
import { AvatarSizes } from "../../ProfilePage/Avatar/types";
import { INotices } from "../../../redux/notices/types";
import AuthLink from "../../../components/AuthNav/AuthLink/AuthLink";
import { ColorTheme } from "../../../components/Navigation/NavigationLink/NavigationLink";
import ButtonIcon from "../../../components/ButtonIcon/ButtonIcon";

import style from "./NoticesModal.module.scss";

export type LogBtnProps = {
  onClose?: () => void;
  item: INotices;
};

const NoticesModal: FC<LogBtnProps> = ({ item }) => {
  return (
    <div className={style.modal}>
      <Avatar size={AvatarSizes.Big} id="user-search" url={item.imgURL} />
      <div>
        <h2 className={style.modal__title}>{item.title}</h2>
        <span className={style.modal__popularity}>{item.popularity}</span>

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

        <p className={style.modal__comment}>{item.comment}</p>
        <div className={style.modal__btnWrapper}>
          <ButtonIcon
            width="18px"
            height="18px"
            text="Add to"
            id="icon-heart"
            type={ColorTheme.Orange}
          />
          <AuthLink text="Contact" type={ColorTheme.White} />
        </div>
      </div>
    </div>
  );
};

export default NoticesModal;
