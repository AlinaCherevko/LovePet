import type { FC } from "react";
import style from "./Avatar.module.scss";
import Icon from "../../../components/Icon/Icon";

export type AvatarProps = {
  id: string;
};

const Avatar: FC<AvatarProps> = ({ id }) => {
  return (
    <>
      <div className={style.fakePhoto}>
        <Icon id={id} fill="#f6b83d" width="40px" height="40px"></Icon>
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
