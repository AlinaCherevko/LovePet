import { useEffect, type FC } from "react";
import Icon from "../../../components/Icon/Icon";
import classNames from "classnames";
import style from "./Avatar.module.scss";
import { AvatarProps } from "./types";

const Avatar: FC<AvatarProps> = ({ id, size, url, onClick }) => {
  useEffect(() => {}, []);

  return (
    <>
      <div
        onClick={onClick}
        className={classNames(style.fakePhoto, style[`fakePhoto--${size}`])}
      >
        {url ? (
          <img src={url} className={style.fakePhoto__img} alt="user-avatar" />
        ) : (
          <Icon id={id} fill="#f6b83d" width="40px" height="40px"></Icon>
        )}
      </div>
    </>
  );
};

export default Avatar;
