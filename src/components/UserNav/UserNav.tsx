import { useState, type FC } from "react";
import AuthLink from "../AuthNav/AuthLink/AuthLink";
import { ColorTheme } from "../Navigation/NavigationLink/NavigationLink";
import Modal from "../Modal/Modal";
import { useNavigate } from "react-router-dom";
import LogOutModal from "../Modal/LogOutModal/LogOutModal";
import Icon from "../Icon/Icon";
import style from "./UserNav.module.scss";

const UserNav: FC = () => {
  const navigate = useNavigate();

  const [isVisibleLogOutModal, setIsVisibleLogOutModal] = useState(false);

  const handleLogOutClick = () => {
    setTimeout(() => {
      setIsVisibleLogOutModal(true);
    }, 500);
  };

  const onClose = () => {
    setTimeout(() => {
      setIsVisibleLogOutModal(false);
    }, 500);
  };

  const handleClickNavigate = () => {
    setTimeout(() => {
      navigate("/profile");
    }, 300);
  };

  return (
    <>
      <div className={style.navigation}>
        <AuthLink
          onClick={handleLogOutClick}
          type={ColorTheme.White}
          text="LOG OUT"
        ></AuthLink>
        <button
          className={style.navigation__button}
          type="button"
          onClick={handleClickNavigate}
        >
          <Icon
            id="icon-user"
            stroke="#f6b83d"
            fill="transparent"
            width="20px"
            height="20px"
          />
        </button>
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
