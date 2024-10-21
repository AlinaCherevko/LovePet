import { useEffect, useState, type FC } from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import UserNav from "../UserNav/UserNav";
import AuthNav from "../AuthNav/AuthNav";
import MobMenu from "../MobMenu/MobMenu";
import BurgerBtn from "../MobMenu/BurgerBtn/BurgerBtn";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuth, selectUser } from "../../redux/auth/authSelectors";
import Avatar from "../../pages/ProfilePage/Avatar/Avatar";
import { AvatarSizes } from "../../pages/ProfilePage/Avatar/types";
import style from "./Header.module.scss";
import { ColorTheme } from "../Navigation/NavigationLink/types";

const Header: FC = () => {
  const isAuth = useSelector(selectIsAuth);
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState<boolean>(false);
  const [isVisibleMobMenu, setIsVisibleMobMenu] = useState<boolean>(false);

  useEffect(() => {
    if (location.pathname === "/home" || location.pathname === "/") {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, [location.pathname]);

  const onClose = () => {
    setTimeout(() => {
      setIsVisibleMobMenu(false);
    }, 300);
  };
  const onOpen = () => {
    setTimeout(() => {
      setIsVisibleMobMenu(true);
    }, 300);
  };

  const handleClickNavigate = () => {
    setTimeout(() => {
      navigate("/profile");
    }, 300);
  };

  return (
    <header className={style.header}>
      <div className="container">
        {isHomePage ? (
          <div className={style.header__wrapper}>
            <Logo isHomePage={isHomePage} />
            <Navigation isHomePage={isHomePage} />
            <div className={style.header__mobWrapper}>
              {isAuth ? <UserNav isHomePage={isHomePage} /> : <AuthNav />}
              <div className={style.header__avatar}>
                <Avatar
                  size={AvatarSizes.Tiny}
                  id="icon-user"
                  url={user.avatar}
                  onClick={handleClickNavigate}
                />
              </div>
              <BurgerBtn onOpen={onOpen} isHomePage={isHomePage} />
            </div>
          </div>
        ) : (
          <div className={style.header__wrapper2}>
            <Logo isHomePage={isHomePage} />
            <Navigation isHomePage={isHomePage} />
            <div className={style.header__mobWrapper}>
              {isAuth ? <UserNav /> : <AuthNav />}
              <div className={style.header__avatar}>
                <Avatar
                  size={AvatarSizes.Tiny}
                  id="icon-user"
                  url={user.avatar}
                  onClick={handleClickNavigate}
                />
              </div>
              <BurgerBtn onOpen={onOpen} isHomePage={isHomePage} />
            </div>
          </div>
        )}
      </div>
      {isVisibleMobMenu && (
        <MobMenu type={ColorTheme.White} onClose={onClose} />
      )}
    </header>
  );
};

export default Header;
Header;
