import { FC, useState } from "react";
import Select, { StylesConfig } from "react-select";
import style from "./SelectType.module.scss";

type Option = { value: string; label: string };

type ISelect = {
  options: Array<Option>;
  placeholder: string;
  onChange: (value: string) => void;
  value?: string;
  selectStyles?: StylesConfig;
};

const SelectEl: FC<ISelect> = ({
  options,
  placeholder,
  onChange,
  value,
  selectStyles,
}) => {
  const [isClearable, setIsClearable] = useState(true);

  const onSelectChange = (newValue: unknown) => {
    setIsClearable(!isClearable);
    console.log(newValue);

    if (newValue && typeof newValue === "object" && "value" in newValue) {
      const selectedOption = newValue as Option;
      onChange(selectedOption.value);
    } else {
      onChange("");
    }
  };

  return (
    <div className={style.filters}>
      <Select
        //components={{ MenuList }}
        className={style.selector}
        classNamePrefix="selector"
        onChange={onSelectChange}
        name="type"
        options={options}
        placeholder={placeholder}
        styles={selectStyles}
        // styles={useSelectStyles()}
        isClearable={isClearable}
        value={options.find((option) => option.value === value) || null}
      />
    </div>
  );
};

export default SelectEl;
