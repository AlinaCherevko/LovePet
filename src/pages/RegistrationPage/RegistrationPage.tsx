import type { FC } from "react";
import style from "./RegisterPage.module.scss";

const RegistrationPage: FC = () => {
  return (
    <section className={style.register}>
      {" "}
      <div className="container">
        <picture>
          <source
            srcSet="/img/register/register-desktop-1x-min.png 1x,
    /img/register/register-desktop-2x-min.png 2x
  "
            media="(min-width: 1440px)"
          />
          <source
            srcSet="
    /img/register/register-tablet-1x-min.png 1x,
    /img/register/register-tablet-2x-min.png 2x
  "
            media="(min-width: 768px)"
          />
          <source
            srcSet="
    /img/register/register-mob-1x-min.png 1x,
    /img/register/register-mob-2x-min.png 2x
  "
            media="(min-width: 320px)"
          />
          <img
            className={style.register__image}
            src=" /img/register/register-mob-1x-min.png"
            alt="register-img"
          />
        </picture>
      </div>
    </section>
  );
};

export default RegistrationPage;
