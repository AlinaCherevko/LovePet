import { type FC } from "react";
import style from "./UserModal.module.scss";
import ProfileForm from "../../../pages/ProfilePage/ProfileForm/ProfileForm";
import Avatar from "../../../pages/ProfilePage/Avatar/Avatar";

export type LogBtnProps = {
  onClose: () => void;
  url: string;
};

const UserModal: FC<LogBtnProps> = ({ onClose, url }) => {
  return (
    <div className={style.modal}>
      <h2 className={style.modal__title}>Edit information</h2>
      <Avatar id="icon-user" url={url} />
      <ProfileForm onClose={onClose} />
    </div>
  );
};

export default UserModal;
