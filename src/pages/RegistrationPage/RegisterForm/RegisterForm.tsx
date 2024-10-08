import { type FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Title from "../../../components/Section/Title/Title";
import classNames from "classnames";
import { Link } from "react-router-dom";
import ButtonForm from "../../../components/Button/ButtonForm";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { IFormInput } from "../types";
import { signup } from "../../../redux/auth/authOperations";

import style from "./RegisterForm.module.scss";
import { useValidNavigate } from "../../../constants/hooks";

const RegisterForm: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  useValidNavigate();
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
    dispatch(
      signup({ name: data.name, email: data.email, password: data.password })
    );

    reset();
  };
  const isNameValid = !errors.name && getValues("name");
  const isEmailValid = !errors.email && getValues("email");
  const isPasswordValid = !errors.password && getValues("password");
  const isConfirmedPasswordValid =
    !errors.confirmedPassword && getValues("confirmedPassword");

  return (
    <div className={style.formWrapper}>
      <Title text="Registration" />
      <p className={style.formWrapper__text}>
        Thank you for your interest in our platform.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <div className={style.form__wrapper}>
          <div className={style.form__inputWrapper}>
            <input
              className={classNames(style.form__input, {
                [style.form__inputError]: errors.name,
                [style.form__inputSuccess]: isNameValid && !isValidating,
              })}
              placeholder="Name"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
            />
            {errors.name && (
              <p className={style.form__error}>{errors.name?.message}</p>
            )}
          </div>
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
          <div className={style.form__inputWrapper}>
            <input
              className={classNames(style.form__input, {
                [style.form__inputError]: errors.confirmedPassword,
                [style.form__inputSuccess]:
                  isConfirmedPasswordValid && !isValidating,
              })}
              placeholder="Confirm password"
              {...register("confirmedPassword", {
                required: "Password is required",
                validate: (value) =>
                  value === getValues("password") || "Passwords do not match",
              })}
            />
            {errors.confirmedPassword && (
              <p className={style.form__error}>
                {errors.confirmedPassword?.message}
              </p>
            )}
            {isConfirmedPasswordValid && !isValidating && (
              <p className={style.form__success}>Confirmed password is match</p>
            )}
          </div>
        </div>
        <ButtonForm text="REGISTRATION" />
      </form>
      <div className={style.linkWrapper}>
        <p className={style.linkWrapper__text}>Already have an account?</p>
        <Link className={style.linkWrapper__link} to={"/login"}>
          Log in
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
