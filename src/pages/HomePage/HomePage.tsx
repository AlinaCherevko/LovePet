import type { FC } from "react";
import style from "./HomePage.module.scss";

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
      <picture>
        <source
          srcSet="/img/home/home-desktop-1x-min.png 1x,
          /img/home/home-desktop-2x-min.png 2x
        "
          media="(min-width: 1440px)"
        />
        <source
          srcSet="
          /img/home/home-tablet-1x-min.png 1x,
          /img/home/home-tablet-2x-min.png 2x
        "
          media="(min-width: 768px)"
        />
        <source
          srcSet="
          /img/home/home-mob-1x-min.png 1x,
          /img/home/home-mob-2x-min.png 2x
        "
          media="(min-width: 320px)"
        />
        <img
          className={style.home__image}
          src=" /img/home/home-mob-1x-min.png"
          alt="home-img"
        />
      </picture>
    </div>
  );
};

export default HomePage;
