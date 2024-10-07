import { useEffect, type FC } from "react";
import Select from "react-select";
import style from "./SelectType.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { categoriesSelector } from "../../redux/notices/noticesSelectors";
import { AppDispatch } from "../../redux/store";
import { getNoticesCategories } from "../../redux/notices/noticesOperations";

import { useSelectStyles } from "../../constants/selectors";

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
        styles={useSelectStyles()}
      />
    </div>
  );
};

export default SelectCategory;
