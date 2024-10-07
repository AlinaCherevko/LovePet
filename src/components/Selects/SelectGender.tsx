import { useEffect, type FC } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { genderSelector } from "../../redux/notices/noticesSelectors";
import { AppDispatch } from "../../redux/store";
import { getNoticesSex } from "../../redux/notices/noticesOperations";
import { useSelectStyles } from "../../constants/selectors";

import style from "./SelectType.module.scss";

interface IOptions {
  value: string;
  label: string;
}

const SelectGender: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const genders = useSelector(genderSelector);

  useEffect(() => {
    dispatch(getNoticesSex());
  }, [dispatch]);

  const speciesOptions: IOptions[] = genders.map((item) => ({
    value: item,
    label: item.charAt(0).toUpperCase() + item.slice(1),
  }));

  const onSelectChange = () => {};

  return (
    <div className={style.filters}>
      <Select
        className={style.selector}
        classNamePrefix="selector"
        onChange={onSelectChange}
        name="type"
        options={speciesOptions}
        placeholder="By gender"
        styles={useSelectStyles()}
      />
    </div>
  );
};

export default SelectGender;
