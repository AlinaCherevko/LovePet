import { type FC } from "react";
import style from "./AddImgBlock.module.scss";

const AddImgBlock: FC = () => {
  return (
    <picture>
      <source
        srcSet="/img/add-pet/add-desktop-1x.png 1x,
/img/add-pet/add-desktop-2x.png 2x
"
        media="(min-width: 1440px)"
      />
      <source
        srcSet="
/img/add-pet/add-tablet-1x.png 1x,
/img/add-pet/add-tablet-2x.png 2x
"
        media="(min-width: 768px)"
      />
      <source
        srcSet="
/img/add-pet/add-mob-1x.png 1x,
/img/add-pet/add-mob-2x.png 2x
"
        media="(min-width: 320px)"
      />
      <img
        className={style.img}
        src=" /img/add-pet/add-mob-1x.png"
        alt="add-img"
      />
    </picture>
  );
};

export default AddImgBlock;
