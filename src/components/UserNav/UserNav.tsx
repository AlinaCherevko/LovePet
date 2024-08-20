import type { FC } from "react";
import AuthLink from "../AuthNav/AuthLink/AuthLink";
import { ColorTheme } from "../Navigation/NavigationLink/NavigationLink";
import style from "./UserNav.module.scss";
import BtnIcon from "./UserBtn/UserBtn";

const UserNav: FC = () => {
  return (
    <div className={style.navigation}>
      <AuthLink type={ColorTheme.White} text="LOG OUT"></AuthLink>
      <BtnIcon />
    </div>
  );
};

export default UserNav;
