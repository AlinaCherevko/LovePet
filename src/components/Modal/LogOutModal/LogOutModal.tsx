import { type FC } from "react";
import ButtonForm from "../../Button/ButtonForm";
import { AppDispatch } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/auth/authOperations";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import style from "./LogOutModal.module.scss";
import { LogBtnProps } from "./types";

const LogOutModal: FC<LogBtnProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());

    toast.success("Logged out");
    navigate("/");

    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div className={style.modal}>
      <div className={style.modal__fake}>
        <img
          className={style.modal__img}
          src="/cat.png"
          alt=""
          loading="lazy"
        />
      </div>
      <h2 className={style.modal__title}>Already leaving?</h2>
      <div className={style.modal__wrapper}>
        <ButtonForm onClick={handleLogOut} text="Yes" type="button" />
        <ButtonForm onClick={onClose} text="Cancel" type="button" />
      </div>
    </div>
  );
};

export default LogOutModal;
