import type { FC } from "react";
import style from "./LoginPage.module.scss";

const LoginPage: FC = () => {
  return (
    <section className={style.login}>
      <div className="container">
        <picture>
          <source
            srcSet="/img/login/login-desktop-1x-min.png 1x,
        /img/login/login-desktop-2x-min.png 2x
      "
            media="(min-width: 1440px)"
          />
          <source
            srcSet="
        /img/login/login-tablet-1x-min.png 1x,
        /img/login/login-tablet-2x-min.png 2x
      "
            media="(min-width: 768px)"
          />
          <source
            srcSet="
        /img/login/login-mob-1x-min.png 1x,
        /img/login/login-mob-2x-min.png 2x
      "
            media="(min-width: 320px)"
          />
          <img
            className={style.login__image}
            src=" /img/login/login-mob-1x-min.png"
            alt="login-img"
          />
        </picture>
      </div>
    </section>
  );
};

export default LoginPage;
