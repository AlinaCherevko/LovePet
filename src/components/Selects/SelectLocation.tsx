import { useEffect, useMemo, type FC } from "react";
import Select, { StylesConfig } from "react-select";
import style from "./SelectType.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { locationsSelector } from "../../redux/notices/noticesSelectors";
import { AppDispatch } from "../../redux/store";
import { getLocations } from "../../redux/notices/noticesOperations";
import { useMediaQuery } from "react-responsive";

// export interface ISelectType {
//   selectValue?: string;
//   handleByType?: () => void;
//   speciesData?: [];
// }

interface IOptions {
  value: string;
  label: string;
}

const SelectLocation: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const locations = useSelector(locationsSelector);

  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);

  const locationOptions = useMemo(
    () =>
      locations.map(({ cityEn, stateEn }) => ({
        value: cityEn,
        label: `${cityEn}, ${stateEn}`,
      })),
    [locations]
  );

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const customStyles: StylesConfig<IOptions> = {
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

  return (
    <div className={style.filters}>
      <Select
        options={locationOptions}
        placeholder="Location"
        styles={customStyles}
        isClearable
      />
    </div>
  );
};

export default SelectLocation;
