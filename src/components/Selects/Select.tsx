import { type FC } from "react";
import Select from "react-select";
import style from "./SelectType.module.scss";
import MenuList from "./LocationMenu";
import { useSelectStyles } from "../../hooks/hooks";

interface ISelect {
  options: Array<{ value: string; label: string }>;
  placeholder: string;
  onSelectChange?: (value: string) => void;
}

const SelectEl: FC<ISelect> = ({ options, placeholder }) => {
  return (
    <div className={style.filters}>
      <Select
        components={{ MenuList }}
        className={style.selector}
        classNamePrefix="selector"
        //onChange={onSelectChange}
        name="type"
        options={options}
        placeholder={placeholder}
        styles={useSelectStyles()}
      />
    </div>
  );
};

export default SelectEl;
