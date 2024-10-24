import { useState, type FC } from "react";
import AuthLink from "../AuthNav/AuthLink/AuthLink";
import NavigationLink from "../Navigation/NavigationLink/NavigationLink";
import CloseBtn from "./CloseBtn/CloseBtn";
import { motion } from "framer-motion";
import classNames from "classnames";
import { selectIsAuth } from "../../redux/auth/authSelectors";
import { useSelector } from "react-redux";
import LogOutModal from "../Modal/LogOutModal/LogOutModal";
import Modal from "../Modal/Modal";
import style from "./MobMenu.module.scss";
import { MenuProps } from "./types";
import { ColorTheme } from "../Navigation/NavigationLink/types";

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
      <motion.div
        className={className}
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 0, duration: 1 }}
      >
        <CloseBtn onClose={onClose} />
        <div className={style.menu__wrapper}>
          <div className={style.menu__navigation}>
            <NavigationLink
              type={ColorTheme.White}
              to={"/news"}
              text="News"
              onClick={onClose}
            ></NavigationLink>
            <NavigationLink
              type={ColorTheme.White}
              to={"/notices"}
              text="Find pet"
              onClick={onClose}
            ></NavigationLink>
            <NavigationLink
              type={ColorTheme.White}
              to={"/friends"}
              text="Our friends"
              onClick={onClose}
            ></NavigationLink>
          </div>

          {isAuth ? (
            <div className={style.menu__logOut}>
              <AuthLink
                onClick={handleLogOutClick}
                type={ColorTheme.White}
                text="LOG OUT"
              />
            </div>
          ) : (
            <div className={style.menu__auth}>
              <AuthLink
                to={"/login"}
                text="LOG IN"
                type={ColorTheme.White}
                onClick={onClose}
              />
              <AuthLink
                to={"/register"}
                text="REGISTRATION"
                type={ColorTheme.White}
                onClick={onClose}
              />
            </div>
          )}
        </div>
      </motion.div>
      {isVisibleLogOutModal && (
        <Modal onClose={onCloseLogOutModal}>
          <LogOutModal onClose={onCloseLogOutModal} />
        </Modal>
      )}
    </>
  );
};

export default MobMenu;
