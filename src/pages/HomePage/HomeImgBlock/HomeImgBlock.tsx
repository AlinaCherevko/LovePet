import type { FC } from "react";

const HomeImgBlock: FC = () => {
  return (
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
      <img src=" /img/home/home-mob-1x-min.png" alt="home-img" />
    </picture>
  );
};

export default HomeImgBlock;
