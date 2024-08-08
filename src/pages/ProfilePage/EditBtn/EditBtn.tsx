import Icon from "../../../components/Icon/Icon";
import style from "./EditBtn.module.scss";

const EditBtn = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.user}>
        <span className={style.user__text}>User</span>
        <Icon id="icon-user" fill="#ffffff" width="18px" height="18px" />
      </div>
      <button type="button" className={style.button}>
        <Icon
          id="icon-edit"
          stroke="#f6b83d"
          fill="transparent"
          width="18px"
          height="18px"
        />
      </button>
    </div>
  );
};

export default EditBtn;
