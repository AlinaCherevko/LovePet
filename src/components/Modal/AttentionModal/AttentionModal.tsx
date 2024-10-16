import { type FC } from "react";
import AuthLink from "../../AuthNav/AuthLink/AuthLink";
import { ColorTheme } from "../../Navigation/NavigationLink/NavigationLink";
import style from "./AttentionModal.module.scss";

const AttentionModal: FC = () => {
  return (
    <div className={style.modal}>
      <div className={style.modal__fake}>
        <img
          className={style.modal__img}
          src="/dog.png"
          alt=""
          loading="lazy"
        />
      </div>
      <h2 className={style.modal__title}>Attention</h2>
      <p className={style.modal__text}>
        We would like to remind you that certain functionality is available only
        to authorized users.If you have an account, please log in with your
        credentials. If you do not already have an account, you must register to
        access these features.
      </p>
      <div className={style.modal__btn}>
        <AuthLink type={ColorTheme.Orange} text="Log in" to={"/login"} />
        <AuthLink
          type={ColorTheme.Orange}
          text="Registration"
          to={"/register"}
        />
      </div>
    </div>
  );
};

export default AttentionModal;
