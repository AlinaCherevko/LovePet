import { useEffect, useMemo, type FC } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { locationsSelector } from "../../redux/notices/noticesSelectors";
import { useSelectStyles } from "../../constants/selectors";

import MenuList from "./LocationMenu";
import { getLocations } from "../../redux/notices/noticesOperations";
import style from "./SelectType.module.scss";
import { AppDispatch } from "../../redux/store";

// export interface ISelectType {
//   selectValue?: string;
//   handleByType?: () => void;
//   speciesData?: [];
// }

const SelectLocation: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);

  const locations = useSelector(locationsSelector);
  // console.log(locations);

  const locationOptions = useMemo(
    () =>
      locations.map(({ cityEn, stateEn }) => ({
        value: cityEn,
        label: `${cityEn}, ${stateEn}`,
      })),
    [locations]
  );
  console.log(locationOptions);

  return (
    <div className={style.filters}>
      <Select
        components={{ MenuList }}
        options={locationOptions}
        placeholder="By Location"
        styles={useSelectStyles()}
      />
    </div>
  );
};

export default SelectLocation;
