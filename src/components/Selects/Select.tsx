import { FC, useState } from "react";
import Select from "react-select";
import style from "./SelectType.module.scss";
import { ISelect, Option } from "./types";

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
        className={style.selector}
        classNamePrefix="selector"
        onChange={onSelectChange}
        name="type"
        options={options}
        placeholder={placeholder}
        styles={selectStyles}
        isClearable={isClearable}
        value={options.find((option) => option.value === value) || null}
      />
    </div>
  );
};

export default SelectEl;
