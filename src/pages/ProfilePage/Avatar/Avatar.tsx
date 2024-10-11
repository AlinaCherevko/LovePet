import { useEffect, type FC } from "react";
import Icon from "../../../components/Icon/Icon";
import {
  selectUser,
  //userBlob,
} from "../../../redux/auth/authSelectors";
import { useSelector } from "react-redux";
import style from "./Avatar.module.scss";
import { AvatarSizes } from "./types";
import classNames from "classnames";

export type AvatarProps = {
  id: string;
  size: AvatarSizes;
  url: string;
};

const Avatar: FC<AvatarProps> = ({ id, size, url }) => {
  const user = useSelector(selectUser);
  //const isRefreshing = useSelector(selectRefreshing);

  useEffect(() => {}, []);

  return (
    <>
      <div className={classNames(style.fakePhoto, style[`fakePhoto--${size}`])}>
        {user.avatar ? (
          <img src={url} className={style.fakePhoto__img} alt="user-avatar" />
        ) : (
          <Icon id={id} fill="#f6b83d" width="40px" height="40px"></Icon>
        )}
      </div>
      {/* <div className={style.fakeLink}>
        <a className={style.fakeLink__link} href="">
          Upload photo
        </a>
      </div> */}
    </>
  );
};

export default Avatar;
