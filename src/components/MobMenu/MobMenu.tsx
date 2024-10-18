import { useState, type FC } from "react";
import AuthLink from "../AuthNav/AuthLink/AuthLink";
import NavigationLink, {
  ColorTheme,
} from "../Navigation/NavigationLink/NavigationLink";
import CloseBtn from "./CloseBtn/CloseBtn";
import classNames from "classnames";
import { selectIsAuth } from "../../redux/auth/authSelectors";
import { useSelector } from "react-redux";
import LogOutModal from "../Modal/LogOutModal/LogOutModal";
import Modal from "../Modal/Modal";
import style from "./MobMenu.module.scss";

export type MenuProps = {
  onClose: () => void;
  type?: string;
};
const MobMenu: FC<MenuProps> = ({ onClose, type }) => {
  const isAuth = useSelector(selectIsAuth);
  const [isVisibleLogOutModal, setIsVisibleLogOutModal] = useState(false);

  const handleLogOutClick = () => {
    setTimeout(() => {
      setIsVisibleLogOutModal(true);
    }, 500);
  };

  const onCloseLogOutModal = () => {
    setTimeout(() => {
      setIsVisibleLogOutModal(false);
    }, 500);
    onClose();
  };

  const className = classNames(
    style["menu"],
    style[`menu--${type}`],
    isVisibleLogOutModal ? style["menu--open"] : ""
  );
  return (
    <>
      <div className={className}>
        <CloseBtn onClose={onClose} />
        <div className={style.menu__wrapper}>
          <div className={style.menu__navigation}>
            <NavigationLink
              type={ColorTheme.White}
              to={"/news"}
              text="News"
            ></NavigationLink>
            <NavigationLink
              type={ColorTheme.White}
              to={"/notices"}
              text="Find pet"
            ></NavigationLink>
            <NavigationLink
              type={ColorTheme.White}
              to={"/friends"}
              text="Our friends"
            ></NavigationLink>
          </div>

          {isAuth ? (
            <div className={style.menu__logOut}>
              <AuthLink
                onClick={handleLogOutClick}
                type={ColorTheme.White}
                text="LOG OUT"
              ></AuthLink>
            </div>
          ) : (
            <div className={style.menu__auth}>
              <AuthLink
                to={"/login"}
                text="LOG IN"
                type={ColorTheme.White}
              ></AuthLink>
              <AuthLink
                to={"/register"}
                text="REGISTRATION"
                type={ColorTheme.White}
              ></AuthLink>
            </div>
          )}
        </div>
      </div>
      {isVisibleLogOutModal && (
        <Modal onClose={onCloseLogOutModal}>
          <LogOutModal onClose={onCloseLogOutModal} />
        </Modal>
      )}
    </>
  );
};

export default MobMenu;
