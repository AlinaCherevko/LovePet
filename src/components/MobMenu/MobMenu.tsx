import type { FC } from "react";
import AuthLink from "../AuthNav/AuthLink/AuthLink";
import NavigationLink, {
  ColorTheme,
} from "../Navigation/NavigationLink/NavigationLink";
import CloseBtn from "./CloseBtn/CloseBtn";

import style from "./MobMenu.module.scss";
import classNames from "classnames";

export type MenuProps = {
  onClose: () => void;
  type?: string;
};
const MobMenu: FC<MenuProps> = ({ onClose, type }) => {
  const isAuth = false;

  const className = classNames(style["menu"], style[`menu--${type}`]);
  return (
    <div className={className}>
      <CloseBtn onClose={onClose} />
      <div className={style.menu__wrapper}>
        <div className={style.menu__navigation}>
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

        {isAuth ? (
          <div className={style.menu__logOut}>
            <AuthLink type={ColorTheme.White} text="LOG OUT"></AuthLink>
          </div>
        ) : (
          <div className={style.menu__auth}>
            <AuthLink
              to={"/login"}
              text="LOG IN"
              type={ColorTheme.White}
            ></AuthLink>
            <AuthLink
              to={"/register"}
              text="REGISTRATION"
              type={ColorTheme.White}
            ></AuthLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobMenu;
