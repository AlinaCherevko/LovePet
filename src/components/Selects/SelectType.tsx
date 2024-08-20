import type { FC } from "react";
import Select, { StylesConfig } from "react-select";
import style from "./SelectType.module.scss";
// import { useMediaQuery } from "react-responsive";

// export interface ISelectType {
//   selectValue?: string;
//   handleByType?: () => void;
//   speciesData?: [];
// }

interface OptionType {
  value: string;
  label: string;
}
const customStyles: StylesConfig<OptionType> = {
  placeholder: (provided) => ({
    ...provided,
    color: "#262626",
    fontSize: "14px",
    lineHeight: "18px",
    fontWeight: "400",
    //paddingLeft: "4px",
  }),
  control: (provided) => ({
    ...provided,
    marginTop: "8px",
    backgroundColor: "#ffffff",
    border: "none",
    width: "295px",
    height: "42px",
    boxShadow: "none",
    borderRadius: "30px",
    "&:hover": {
      border: "1px solid #f6b83d",
    },
  }),

  singleValue: (provided) => ({
    ...provided,
    fontSize: "18px",
    lineHeight: "20px",
    fontWeight: "500",
    color: "var(--primary-black-121417)", // Колір обраного значення
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "var(--primary-black-121417)", // Колір стрілочки
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "10px",
    marginTop: "4px",
  }),
  menuList: (provided) => ({
    ...provided,
    padding: "0",
    borderRadius: "10px",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "var( --primary-green-9FBAAE)"
      : "var(--primary-white-FFFFFF)",
    color: state.isSelected
      ? "var(--primary-white-FFFFFF)"
      : "var(--primary-black-121417)",
    "&:hover": {
      backgroundColor: state.isSelected
        ? "var( --primary-green-9FBAAE)"
        : "var(--secondary-green-CBDED3)",
      color: state.isSelected
        ? "var(--primary-white-FFFFFF)"
        : "var(--primary-black-121417)",
    },
  }),
};

const SelectType: FC = () => {
  return (
    <div className={style.filters}>
      <Select
        className={style.selector}
        classNamePrefix="selector"
        //onChange={onSelectChange}
        name="type"
        //options={}
        placeholder="By type"
        styles={customStyles}
      />
    </div>
  );
};

export default SelectType;
