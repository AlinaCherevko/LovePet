import { FC } from "react";
import Icon from "../../Icon/Icon";
import style from "./UserBtn.module.scss";
import { useNavigate } from "react-router-dom";

const UserBtn: FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/profile");
  };
  return (
    <button className={style.button} type="button" onClick={handleClick}>
      <Icon id="icon-user" fill="#f6b83d" width="20px" height="20px" />
    </button>
  );
};

export default UserBtn;
