import { ColorTheme } from "../Navigation/NavigationLink/types";
import AuthLink from "./AuthLink/AuthLink";
import style from "./AuthNav.module.scss";

const AuthNav = () => {
  return (
    <div className={style.navigation}>
      <AuthLink to={"/login"} text="LOG IN" type={ColorTheme.White}></AuthLink>
      <AuthLink
        to={"/register"}
        text="REGISTRATION"
        type={ColorTheme.White}
      ></AuthLink>
    </div>
  );
};

export default AuthNav;
