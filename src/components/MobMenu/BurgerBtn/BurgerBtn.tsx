import type { FC } from "react";
import Icon from "../../Icon/Icon";
import { BurgerBtnProps } from "./types";
import style from "./BurgerBtn.module.scss";

const BurgerBtn: FC<BurgerBtnProps> = ({ onOpen, isHomePage }) => {
  return (
    <button className={style.button} type="button" onClick={onOpen}>
      <Icon
        id="icon-menu"
        stroke={isHomePage ? "#ffffff" : "#262626"}
        width="32px"
        height="32px"
      />
    </button>
  );
};

export default BurgerBtn;
