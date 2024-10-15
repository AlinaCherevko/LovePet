import { useEffect, type FC } from "react";
import Icon from "../../../components/Icon/Icon";
import { AvatarSizes } from "./types";
import classNames from "classnames";
import style from "./Avatar.module.scss";

export type AvatarProps = {
  id: string;
  size: AvatarSizes;
  url: string;
  onClick?: () => void;
};

const Avatar: FC<AvatarProps> = ({ id, size, url, onClick }) => {
  //const user = useSelector(selectUser);

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
