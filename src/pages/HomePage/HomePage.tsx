import type { FC } from "react";
import style from "./HomePage.module.scss";
import HomeImgBlock from "./HomeImgBlock/HomeImgBlock";

const HomePage: FC = () => {
  return (
    <div className="container">
      <div className={style.home}>
        <h1 className={style.home__title}>
          Take good <span className={style.home__span}>care</span> of your small
          pets
        </h1>
        <p className={style.home__description}>
          Choosing a pet for your home is a choice that is meant to enrich your
          life with immeasurable joy and tenderness.
        </p>
      </div>
      <HomeImgBlock />
    </div>
  );
};

export default HomePage;
