import { useState, type FC } from "react";
import AuthLink from "../AuthNav/AuthLink/AuthLink";
import { ColorTheme } from "../Navigation/NavigationLink/NavigationLink";
import Modal from "../Modal/Modal";
import { useNavigate } from "react-router-dom";
import LogOutModal from "../Modal/LogOutModal/LogOutModal";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelectors";
import style from "./UserNav.module.scss";
import Avatar from "../../pages/ProfilePage/Avatar/Avatar";
import { AvatarSizes } from "../../pages/ProfilePage/Avatar/types";

const UserNav: FC = () => {
  const user = useSelector(selectUser);
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
        <Avatar
          size={AvatarSizes.Tiny}
          id="icon-user"
          url={user.avatar}
          onClick={handleClickNavigate}
        />
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
