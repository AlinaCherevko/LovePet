import { useState, type FC } from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import UserNav from "../UserNav/UserNav";
import AuthNav from "../AuthNav/AuthNav";
import MobMenu from "../MobMenu/MobMenu";

import style from "./Header.module.scss";
import BurgerBtn from "../MobMenu/BurgerBtn/BurgerBtn";
import { ColorTheme } from "../Navigation/NavigationLink/NavigationLink";

const Header: FC = () => {
  const [isVisibleMobMenu, setIsVisibleMobMenu] = useState<boolean>(false);

  const onClose = () => {
    setIsVisibleMobMenu(false);
  };
  const onOpen = () => {
    setIsVisibleMobMenu(true);
  };

  const isAuth = false;
  return (
    <section className={style.header}>
      <div className="container">
        <div className={style.header__wrapper}>
          <Logo />
          <Navigation />
          {isAuth ? <UserNav /> : <AuthNav />}
          <BurgerBtn onOpen={onOpen} />
        </div>
      </div>
      {isVisibleMobMenu && (
        <MobMenu type={ColorTheme.White} onClose={onClose} />
      )}
    </section>
  );
};

export default Header;
Header;
