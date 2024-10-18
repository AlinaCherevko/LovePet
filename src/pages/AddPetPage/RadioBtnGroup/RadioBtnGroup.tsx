import { type FC } from "react";
import Icon from "../../../components/Icon/Icon";
import classNames from "classnames";
import style from "./RadioBtnGroup.module.scss";

export type RadioBtnGroupProps = {
  onFakeMaleClick: () => void;
  onFakeFemaleClick: () => void;
  onFakeOthersClick: () => void;
};

const RadioBtnGroup: FC<RadioBtnGroupProps> = ({
  onFakeMaleClick,
  onFakeFemaleClick,
  onFakeOthersClick,
}) => {
  return (
    <>
      <div className={style.form__btnWrap}>
        <button
          className={classNames(style.form__btn, style.form__btn__pink)}
          onClick={onFakeFemaleClick}
          type="button"
        >
          <Icon
            id="icon-female"
            stroke="#f43f5e"
            fill="transparent"
            width="20px"
            height="20px"
          />
        </button>
        <button
          className={classNames(style.form__btn, style.form__btn__blue)}
          onClick={onFakeMaleClick}
          type="button"
        >
          <Icon
            id="icon-male"
            stroke="#54adff"
            fill="transparent"
            width="20px"
            height="20px"
          />
        </button>
        <button
          className={classNames(style.form__btn, style.form__btn__beige)}
          onClick={onFakeOthersClick}
          type="button"
        >
          <Icon
            id="icon-reproductive"
            stroke="#f6b83d"
            fill="transparent"
            width="20px"
            height="20px"
          />
        </button>
      </div>
    </>
  );
};

export default RadioBtnGroup;
