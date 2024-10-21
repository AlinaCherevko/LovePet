import { FC } from "react";
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
  const changedOptions = [{ value: "all", label: "Show all" }, ...options];

  const onSelectChange = (newValue: unknown) => {
    if (newValue && typeof newValue === "object" && "value" in newValue) {
      const selectedOption = newValue as Option;

      if (selectedOption.value === "all") {
        onChange("");
      } else {
        onChange(selectedOption.value);
      }
    }
  };

  return (
    <div className={style.filters}>
      <Select
        className={style.selector}
        isClearable
        onChange={onSelectChange}
        name="type"
        options={changedOptions}
        placeholder={placeholder}
        styles={selectStyles}
        value={options.find((option) => option.value === value) || null}
      />
    </div>
  );
};

export default SelectEl;
