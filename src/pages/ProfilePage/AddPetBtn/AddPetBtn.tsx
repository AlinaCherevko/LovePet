import type { FC } from "react";
import style from "./AddPetBtn.module.scss";
//import Icon from "../../../components/Icon/Icon";

const AddPetBtn: FC = () => {
  return (
    <div className={style.user}>
      <span className={style.user__text}>Add pet +</span>
      {/* <Icon id="icon-user" fill="#ffffff" width="18px" height="18px" /> */}
    </div>
  );
};

export default AddPetBtn;
