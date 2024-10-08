import { useEffect, type FC } from "react";
import Select from "react-select";
import style from "./SelectType.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { speciesSelector } from "../../redux/notices/noticesSelectors";
import { AppDispatch } from "../../redux/store";
import { getNoticesSpecies } from "../../redux/notices/noticesOperations";

import { useSelectStyles } from "../../constants/hooks";

// export interface ISelectType {
//   selectValue?: string;
//   handleByType?: () => void;
//   speciesData?: [];
// }

interface IOptions {
  value: string;
  label: string;
}

const SelectType: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const species = useSelector(speciesSelector);

  useEffect(() => {
    dispatch(getNoticesSpecies());
  }, [dispatch]);

  const speciesOptions: IOptions[] = species.map((item) => ({
    value: item,
    label: item.charAt(0).toUpperCase() + item.slice(1),
  }));

  return (
    <div className={style.filters}>
      <Select
        className={style.selector}
        classNamePrefix="selector"
        //onChange={onSelectChange}
        name="type"
        options={speciesOptions}
        placeholder="By type"
        styles={useSelectStyles()}
      />
    </div>
  );
};

export default SelectType;
