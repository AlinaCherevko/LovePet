import type { FC } from "react";
import AuthLink from "../AuthNav/AuthLink/AuthLink";
import { ColorTheme } from "../Navigation/NavigationLink/NavigationLink";
import style from "./UserNav.module.scss";

const UserNav: FC = () => {
  return (
    <div className={style.navigation}>
      <AuthLink type={ColorTheme.White} text="LOG OUT"></AuthLink>
    </div>
  );
};

export default UserNav;
