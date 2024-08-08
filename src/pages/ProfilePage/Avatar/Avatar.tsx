import type { FC } from "react";
import style from "./Avatar.module.scss";
import Icon from "../../../components/Icon/Icon";

const Avatar: FC = () => {
  return (
    <>
      <div className={style.fakePhoto}>
        <Icon id="icon-user" fill="#f6b83d" width="40px" height="40px"></Icon>
      </div>
      <div className={style.fakeLink}>
        <a className={style.fakeLink__link} href="">
          Upload photo
        </a>
      </div>
    </>
  );
};

export default Avatar;
