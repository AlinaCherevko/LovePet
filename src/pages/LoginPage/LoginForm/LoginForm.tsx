import type { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import style from "./LoginForm.module.scss";
import Title from "../../../components/Section/Title/Title";
import { Link } from "react-router-dom";
import ButtonForm from "../../../components/Button/ButtonForm";
import classNames from "classnames";

interface IFormInput {
  email: string;
  password: string;
}

const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValidating },
    reset,
  } = useForm<IFormInput>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(errors);
    console.log(data);
    reset();
  };

  const isEmailValid = !errors.email && getValues("email");
  const isPasswordValid = !errors.password && getValues("password");

  return (
    <div className={style.formWrapper}>
      <Title text="Log in" />
      <p className={style.formWrapper__text}>
        Welcome! Please enter your credentials to login to the platform:
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <div className={style.form__wrapper}>
          <div className={style.form__inputWrapper}>
            <input
              className={classNames(style.form__input, {
                [style.form__inputError]: errors.email,
                [style.form__inputSuccess]: isEmailValid && !isValidating,
              })}
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className={style.form__error}>{errors.email?.message}</p>
            )}
            {isEmailValid && !isValidating && (
              <p className={style.form__success}>Valid email format</p>
            )}
          </div>
          <div className={style.form__inputWrapper}>
            <input
              className={classNames(style.form__input, {
                [style.form__inputError]: errors.password,
                [style.form__inputSuccess]: isPasswordValid && !isValidating,
              })}
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 7,
                  message: "Password must be at least 7 characters",
                },
              })}
            />
            {errors.password && (
              <p className={style.form__error}>{errors.password?.message}</p>
            )}
            {isPasswordValid && !isValidating && (
              <p className={style.form__success}>Password is secure</p>
            )}
          </div>
        </div>
        <ButtonForm text="LOG IN" />
      </form>
      <div className={style.linkWrapper}>
        <p className={style.linkWrapper__text}>Don’t have an account?</p>
        <Link className={style.linkWrapper__link} to={"/register"}>
          Register
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
