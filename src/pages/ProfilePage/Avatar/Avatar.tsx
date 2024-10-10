import { type FC } from "react";
import Icon from "../../../components/Icon/Icon";
import { selectUser } from "../../../redux/auth/authSelectors";
import { useSelector } from "react-redux";
import style from "./Avatar.module.scss";

export type AvatarProps = {
  id: string;
  url: string;
};

const Avatar: FC<AvatarProps> = ({ id, url }) => {
  //const [blob, setBlob] = useState<string>("");
  const user = useSelector(selectUser);
  //const isRefreshing = useSelector(selectRefreshing);

  return (
    <>
      <div className={style.fakePhoto}>
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
