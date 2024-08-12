import type { FC } from "react";
import style from "./LoginPage.module.scss";
import LoginImgBlock from "./LoginImgBlock/LoginImgBlock";

import LoginForm from "./LoginForm/LoginForm";

const LoginPage: FC = () => {
  return (
    <section className={style.login}>
      <div className="container">
        <div className={style.login__wrapper}>
          <LoginImgBlock />
          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
