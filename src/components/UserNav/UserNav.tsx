import { useState, type FC } from "react";
import AuthLink from "../AuthNav/AuthLink/AuthLink";
import { ColorTheme } from "../Navigation/NavigationLink/NavigationLink";
import Modal from "../Modal/Modal";
import { useNavigate } from "react-router-dom";
import LogOutModal from "../Modal/LogOutModal/LogOutModal";
import style from "./UserNav.module.scss";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import { BtnIconSizes } from "../ButtonIcon/types";

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
        <ButtonIcon
          type={ColorTheme.White}
          id="icon-user"
          onClick={handleClickNavigate}
          width="18px"
          height="18px"
          size={BtnIconSizes.Small}
        />
        {/* <BtnIcon id="icon-user" onClick={handleClickNavigate} /> */}
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
