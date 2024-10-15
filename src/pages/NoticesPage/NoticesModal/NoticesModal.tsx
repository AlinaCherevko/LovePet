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
  inFavorite: boolean;
  toggleFavorite: () => void;
};

const NoticesModal: FC<LogBtnProps> = ({
  item,
  inFavorite,
  toggleFavorite,
}) => {
  const href = "+380674336860";
  return (
    <div className={style.modal}>
      <Avatar size={AvatarSizes.Big} id="user-search" url={item.imgURL} />
      <div>
        <h2 className={style.modal__title}>{item.title}</h2>
        <span className={style.modal__popularity}>{item.popularity}</span>

        <div className={style.table}>
          <div className={style.table__row}>
            <p className={style.table__text}>Name</p>
            <p className={style.table__afterText}>{item.name}</p>
          </div>
          <div className={style.table__row}>
            <p className={style.table__text}>Birthday</p>
            <p className={style.table__afterText}>{item.birthday}</p>
          </div>
          <div className={style.table__row}>
            <p className={style.table__text}>Sex</p>
            <p className={style.table__afterText}>{item.sex}</p>
          </div>
          <div className={style.table__row}>
            <p className={style.table__text}>Species</p>
            <p className={style.table__afterText}>{item.species}</p>
          </div>
          <div className={style.table__row}>
            <p className={style.table__text}>Category</p>
            <p className={style.table__afterText}>{item.category}</p>
          </div>
        </div>

        <p className={style.modal__comment}>{item.comment}</p>
        <div className={style.modal__btnWrapper}>
          <ButtonIcon
            width="18px"
            height="18px"
            text={inFavorite ? "Remove from" : "Add to"}
            id="icon-heart"
            type={ColorTheme.Orange}
            onClick={toggleFavorite}
          />
          <AuthLink text="Contact" type={ColorTheme.White} href={href} />
        </div>
      </div>
    </div>
  );
};

export default NoticesModal;
