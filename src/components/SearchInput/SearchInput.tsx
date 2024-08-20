import { type ChangeEvent, type FC } from "react";
import Icon from "../Icon/Icon";
import style from "./SearchInput.module.scss";
import classNames from "classnames";

export interface IInput {
  type?: string;
  value: string;
  onChange: (prop: string) => void;
  placeholder: string;
}

const SearchInput: FC<IInput> = ({ type, value, onChange, placeholder }) => {
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    onChange(inputValue);
  };

  const className = classNames(style["input"], {
    [style[`input--${type}`]]: type,
  });
  return (
    <div className={style.wrapper}>
      <input
        className={className}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onInputChange}
      />
      <div className={style.icon}>
        <Icon
          id="icon-search"
          stroke="#262626"
          fill="#ffffff"
          width="18px"
          height="18px"
        />
      </div>
    </div>
  );
};

export default SearchInput;
