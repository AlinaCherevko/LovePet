import { useEffect, useState, type FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Title from "../../../components/Section/Title/Title";
import { Link, useNavigate } from "react-router-dom";
import ButtonForm from "../../../components/Button/ButtonForm";
import classNames from "classnames";
import { logIn } from "../../../redux/auth/authOperations";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { selectError, selectIsAuth } from "../../../redux/auth/authSelectors";
import { toast } from "react-toastify";

import style from "./LoginForm.module.scss";

import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLog } from "../../../shemas/shemas";

interface IFormInput {
  email: string;
  password: string;
}

const LoginForm: FC = () => {
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);
  const error = useSelector(selectError);

  useEffect(() => {
    if (!isFirstRender) {
      if (isAuth) {
        toast.success("User successfully logIn");
        navigate("/profile");
      }
      if (error) {
        toast.error(error as string);
      }
    }
  }, [error, navigate, isAuth]);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValidating },
    reset,
  } = useForm<IFormInput>({
    resolver: yupResolver(schemaLog),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setIsFirstRender(false);
    dispatch(logIn({ email: data.email, password: data.password }));

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
              {...register("email")}
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
              {...register("password")}
            />
            {errors.password && (
              <p className={style.form__error}>{errors.password?.message}</p>
            )}
            {isPasswordValid && !isValidating && (
              <p className={style.form__success}>Password is secure</p>
            )}
          </div>
        </div>
        <ButtonForm text="LOG IN" type="submit" />
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
