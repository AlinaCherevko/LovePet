import { useState, type FC } from "react";
import AuthLink from "../AuthNav/AuthLink/AuthLink";
import { ColorTheme } from "../Navigation/NavigationLink/NavigationLink";
import style from "./UserNav.module.scss";
import BtnIcon from "./UserBtn/UserBtn";
import Modal from "../Modal/Modal";
import LogOutModal from "../Modal/LogOutModal/LogOutModal";

const UserNav: FC = () => {
  const [isVisibleLogOutModal, setIsVisibleLogOutModal] = useState(false);

  const handleLogOutClick = () => {
    setIsVisibleLogOutModal(true);
  };

  const onClose = () => {
    setIsVisibleLogOutModal(false);
  };

  return (
    <>
      <div className={style.navigation}>
        <AuthLink
          onClick={handleLogOutClick}
          type={ColorTheme.White}
          text="LOG OUT"
        ></AuthLink>
        <BtnIcon />
      </div>
      {isVisibleLogOutModal && (
        <Modal onClose={onClose}>
          <LogOutModal onClose={onClose} />
        </Modal>
      )}
    </>
  );
};

export default UserNav;
