import type { FC } from "react";
import Icon from "../../Icon/Icon";

import style from "./BurgerBtn.module.scss";

type BurgerBtnProps = {
  onOpen: () => void;
};

const BurgerBtn: FC<BurgerBtnProps> = ({ onOpen }) => {
  return (
    <button className={style.button} type="button" onClick={onOpen}>
      <Icon id="icon-menu" stroke="#262626" width="32px" height="32px" />
    </button>
  );
};

export default BurgerBtn;
