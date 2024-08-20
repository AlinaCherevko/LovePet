import { useEffect, useState, type FC } from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import UserNav from "../UserNav/UserNav";
import AuthNav from "../AuthNav/AuthNav";
import MobMenu from "../MobMenu/MobMenu";

import style from "./Header.module.scss";
import BurgerBtn from "../MobMenu/BurgerBtn/BurgerBtn";
import { ColorTheme } from "../Navigation/NavigationLink/NavigationLink";
import { useLocation } from "react-router-dom";

const Header: FC = () => {
  const isAuth = true;
  const [isHomePage, setIsHomePage] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/home" || location.pathname === "/") {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, [location.pathname]);

  const [isVisibleMobMenu, setIsVisibleMobMenu] = useState<boolean>(false);
  const onClose = () => {
    setIsVisibleMobMenu(false);
  };
  const onOpen = () => {
    setIsVisibleMobMenu(true);
  };

  return (
    <section className={style.header}>
      <div className="container">
        {isHomePage ? (
          <div className={style.header__wrapper}>
            <Logo isHomePage={isHomePage} />
            <Navigation isHomePage={isHomePage} />
            {isAuth ? <UserNav /> : <AuthNav />}
            <BurgerBtn onOpen={onOpen} isHomePage={isHomePage} />
          </div>
        ) : (
          <div className={style.header__wrapper2}>
            <Logo isHomePage={isHomePage} />
            <Navigation isHomePage={isHomePage} />
            {isAuth ? <UserNav /> : <AuthNav />}
            <BurgerBtn onOpen={onOpen} isHomePage={isHomePage} />
          </div>
        )}
      </div>
      {isVisibleMobMenu && (
        <MobMenu type={ColorTheme.White} onClose={onClose} />
      )}
    </section>
  );
};

export default Header;
Header;
