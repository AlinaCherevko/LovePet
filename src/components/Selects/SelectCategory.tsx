import { useEffect, type FC } from "react";
import Select, { StylesConfig } from "react-select";
import style from "./SelectType.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { categoriesSelector } from "../../redux/notices/noticesSelectors";
import { AppDispatch } from "../../redux/store";
import { getNoticesCategories } from "../../redux/notices/noticesOperations";
import { useMediaQuery } from "react-responsive";

// export interface ISelectType {
//   selectValue?: string;
//   handleByType?: () => void;
//   speciesData?: [];
// }

interface IOptionType {
  value: string;
}

interface IOptions {
  value: string;
  label: string;
}

const SelectCategory: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const categories = useSelector(categoriesSelector);

  useEffect(() => {
    dispatch(getNoticesCategories());
  }, [dispatch]);

  const speciesOptions: IOptions[] = categories.map((item) => ({
    value: item,
    label: item.charAt(0).toUpperCase() + item.slice(1),
  }));

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const customStyles: StylesConfig<IOptionType> = {
    placeholder: (provided) => ({
      ...provided,
      color: "#262626",
      fontSize: isMobile ? "14px" : "16px",
      lineHeight: isMobile ? "18px" : "20px",
      fontWeight: "400",
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: "#ffffff",
      border: "1px solid transparent",
      width: isMobile ? "144px" : "170px",
      height: isMobile ? "42px" : "48px",
      boxShadow: "none",
      borderRadius: "30px",
      "&:hover": {
        border: "1px solid #f6b83d",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      fontSize: isMobile ? "14px" : "16px",
      lineHeight: isMobile ? "18px" : "20px",
      fontWeight: "400",
      color: "#262626", // Колір обраного значення
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#262626", // Колір стрілочки
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
      backgroundColor: "#ffffff",
      color: state.isSelected ? " #f6b83d" : "#262626",
      "&:hover": {
        color: " #f6b83d",
      },
    }),
  };

  const onSelectChange = () => {};

  return (
    <div className={style.filters}>
      <Select
        className={style.selector}
        classNamePrefix="selector"
        onChange={onSelectChange}
        name="type"
        options={speciesOptions}
        placeholder="Category"
        styles={customStyles}
      />
    </div>
  );
};

export default SelectCategory;
