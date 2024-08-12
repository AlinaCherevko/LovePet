import type { FC } from "react";
import style from "./RegisterPage.module.scss";
import RegistrationImgBlocks from "./RegistrationImgBlocks/RegistrationImgBlocks";
import RegisterForm from "./RegisterForm/RegisterForm";

const RegistrationPage: FC = () => {
  return (
    <section className={style.register}>
      <div className="container">
        <div className={style.register__wrapper}>
          <RegistrationImgBlocks />
          <RegisterForm />
        </div>
      </div>
    </section>
  );
};

export default RegistrationPage;
