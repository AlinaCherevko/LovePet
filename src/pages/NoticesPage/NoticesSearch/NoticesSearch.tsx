import { type FC } from "react";
import SearchInput from "../../../components/SearchInput/SearchInput";
import { useSelector } from "react-redux";
import {
  categoriesSelector,
  speciesSelector,
} from "../../../redux/notices/noticesSelectors";
import SelectEl from "../../../components/Selects/Select";

import style from "./NoticesSearch.module.scss";
import { useSelectStyles } from "../../../hooks/hooks";

export interface INoticesSearchProps {
  inputValue: string;
  onChange: (prop: string) => void;
  setSpeciesValue: (value: string) => void;
  setCategoryValue: (value: string) => void;
}
export interface IOptions {
  value: string;
  label: string;
}

const NoticesSearch: FC<INoticesSearchProps> = ({
  onChange,
  inputValue,
  setSpeciesValue,
  setCategoryValue,
}) => {
  const selectStyles = useSelectStyles(false);

  const species = useSelector(speciesSelector);
  const categories = useSelector(categoriesSelector);

  const categoriesOptions: IOptions[] = categories.map((item) => ({
    value: item,
    label: item.charAt(0).toUpperCase() + item.slice(1),
  }));
  const speciesOptions: IOptions[] = species.map((item) => ({
    value: item,
    label: item.charAt(0).toUpperCase() + item.slice(1),
  }));
  // const locationOptions = useMemo(
  //   () =>
  //     locations.map(({ cityEn, stateEn }) => ({
  //       value: cityEn,
  //       label: `${cityEn}, ${stateEn}`,
  //     })),
  //   [locations]
  // );

  return (
    <div className={style.search}>
      <SearchInput
        placeholder="Search"
        onChange={onChange}
        value={inputValue}
      />

      <SelectEl
        options={categoriesOptions}
        placeholder="Category"
        onChange={setCategoryValue}
        selectStyles={selectStyles}
      />

      <SelectEl
        options={speciesOptions}
        placeholder="By Type"
        onChange={setSpeciesValue}
        selectStyles={selectStyles}
      />
      {/* <SelectEl
        options={locationOptions}
        placeholder="By Location"
        onChange={setLocationValue}
      /> */}
    </div>
  );
};

export default NoticesSearch;
