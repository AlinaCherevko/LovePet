import { type FC } from "react";
import ProfileForm from "../../../pages/ProfilePage/ProfileForm/ProfileForm";
import Avatar from "../../../pages/ProfilePage/Avatar/Avatar";

import style from "./UserModal.module.scss";
import { AvatarSizes } from "../../../pages/ProfilePage/Avatar/types";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/auth/authSelectors";
import { LogBtnProps } from "./types";

const UserModal: FC<LogBtnProps> = ({ onClose }) => {
  const user = useSelector(selectUser);

  return (
    <div className={style.modal}>
      <h2 className={style.modal__title}>Edit information</h2>
      <Avatar id="icon-user" size={AvatarSizes.Small} url={user.avatar} />
      <ProfileForm onClose={onClose} />
    </div>
  );
};

export default UserModal;
