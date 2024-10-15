import { type FC } from "react";
import Select from "react-select";
import style from "./SelectType.module.scss";
import MenuList from "./LocationMenu";
import { useSelectStyles } from "../../hooks/hooks";

type Option = { value: string; label: string };

type ISelect = {
  options: Array<Option>;
  placeholder: string;
  setSelectValue: (value: string) => void;
};

const SelectEl: FC<ISelect> = ({ options, placeholder, setSelectValue }) => {
  const onSelectChange = (newValue: Option | unknown) => {
    console.log(newValue);

    if (newValue && typeof newValue === "object" && "value" in newValue) {
      const selectedOption = newValue as Option;
      setSelectValue(selectedOption.value);
    }
  };

  return (
    <div className={style.filters}>
      <Select
        components={{ MenuList }}
        className={style.selector}
        classNamePrefix="selector"
        onChange={onSelectChange}
        name="type"
        options={options}
        placeholder={placeholder}
        styles={useSelectStyles()}
      />
    </div>
  );
};

export default SelectEl;

// actionMeta: ActionMeta<Option>
// selectedOptions: SingleValue<{ value: string; label: string }>
