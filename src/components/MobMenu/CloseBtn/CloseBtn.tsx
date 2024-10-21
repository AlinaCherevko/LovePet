import type { FC } from "react";
import Icon from "../../Icon/Icon";

import style from "./CloseBtn.module.scss";
import { MenuProps } from "../types";

const CloseBtn: FC<MenuProps> = ({ onClose }) => {
  return (
    <button className={style.button} type="button" onClick={onClose}>
      <Icon id="icon-close" stroke="#262626" width="32px" height="32px" />
    </button>
  );
};

export default CloseBtn;
