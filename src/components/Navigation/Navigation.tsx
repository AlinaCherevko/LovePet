import type { FC } from "react";
import style from "./Navigation.module.scss";
import NavigationLink, { ColorTheme } from "./NavigationLink/NavigationLink";

const Navigation: FC = () => {
  return (
    <div className={style.navigation}>
      <NavigationLink
        type={ColorTheme.White}
        to={"/news"}
        text="News"
      ></NavigationLink>
      <NavigationLink
        type={ColorTheme.White}
        to={"/notices"}
        text="Find pet"
      ></NavigationLink>
      <NavigationLink
        type={ColorTheme.White}
        to={"/friends"}
        text="Our friends"
      ></NavigationLink>
    </div>
  );
};

export default Navigation;
