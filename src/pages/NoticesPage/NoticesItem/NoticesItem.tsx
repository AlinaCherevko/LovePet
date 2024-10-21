import { useState, type FC } from "react";
import ButtonForm from "../../../components/Button/ButtonForm";
import Icon from "../../../components/Icon/Icon";
import Modal from "../../../components/Modal/Modal";
import NoticesModal from "../NoticesModal/NoticesModal";
import { AppDispatch } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth } from "../../../redux/auth/authSelectors";
import {
  addNotice,
  removeNotice,
} from "../../../redux/notices/noticesOperations";
import { toast } from "react-toastify";
import {
  favoritesSelector,
  viewedSelector,
} from "../../../redux/notices/noticesSelectors";
import classNames from "classnames";
import style from "./NoticesItem.module.scss";
import AttentionModal from "../../../components/Modal/AttentionModal/AttentionModal";
import { addToViewed } from "../../../redux/notices/noticesSlise";
import { NoticesProps } from "./types";

const NoticesItem: FC<NoticesProps> = ({
  item,
  type,
  isNoticesPage,
  isViewedPage,
}) => {
  const [isVisibleUserModal, setIsVisibleUserModal] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const favorites = useSelector(favoritesSelector);
  const viewed = useSelector(viewedSelector);

  const inFavorite =
    favorites &&
    favorites.length > 0 &&
    favorites.some((favorite) => favorite === item._id);

  const isViewed =
    viewed && viewed.length > 0 && viewed.some((el) => el._id === item._id);

  const handleUserModalClick = () => {
    setTimeout(() => {
      setIsVisibleUserModal(true);
    }, 300);
    if (!isViewed) {
      dispatch(addToViewed(item));
    }
  };

  const onClose = () => {
    setTimeout(() => {
      setIsVisibleUserModal(false);
    }, 300);
  };

  const toggleFavorite = () => {
    if (!isAuth) {
      toast.error("You are not authorized to access this functionality");
    } else if (inFavorite) {
      dispatch(removeNotice(item._id));
    } else {
      dispatch(addNotice(item._id));
    }
  };

  return (
    <>
      <li
        className={classNames(style.noticesItem, style[`noticesItem--${type}`])}
      >
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
            <p className={style.noticesItem__comment}>{item.comment}</p>
          </div>
          <div className={style.buttonWrapper}>
            <ButtonForm
              text="Learn more"
              onClick={handleUserModalClick}
              type="button"
            />
            {!isViewedPage && (
              <button
                className={style.button}
                type="button"
                onClick={toggleFavorite}
              >
                <Icon
                  id={
                    isNoticesPage
                      ? inFavorite
                        ? "icon-trash"
                        : "icon-heart"
                      : "icon-trash"
                  }
                  stroke="#f6b83d"
                  fill="transparent"
                  width="20px"
                  height="20px"
                />
              </button>
            )}
          </div>
        </div>
      </li>
      {isVisibleUserModal && (
        <Modal onClose={onClose}>
          {isAuth ? (
            <NoticesModal
              onClose={onClose}
              item={item}
              inFavorite={inFavorite}
              toggleFavorite={toggleFavorite}
            />
          ) : (
            <AttentionModal />
          )}
        </Modal>
      )}
    </>
  );
};

export default NoticesItem;
