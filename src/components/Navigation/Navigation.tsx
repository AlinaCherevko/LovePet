import type { FC } from "react";
import style from "./Navigation.module.scss";
import NavigationLink, { ColorTheme } from "./NavigationLink/NavigationLink";

type NavProps = {
  isHomePage: boolean;
};

const Navigation: FC<NavProps> = ({ isHomePage }) => {
  return (
    <div className={style.navigation}>
      <NavigationLink
        type={isHomePage ? ColorTheme.Orange : ColorTheme.White}
        to={"/news"}
        text="News"
      ></NavigationLink>
      <NavigationLink
        type={isHomePage ? ColorTheme.Orange : ColorTheme.White}
        to={"/notices"}
        text="Find pet"
      ></NavigationLink>
      <NavigationLink
        type={isHomePage ? ColorTheme.Orange : ColorTheme.White}
        to={"/friends"}
        text="Our friends"
      ></NavigationLink>
    </div>
  );
};

export default Navigation;
