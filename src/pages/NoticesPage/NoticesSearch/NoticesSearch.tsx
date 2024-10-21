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
import { INoticesSearchProps, IOptions } from "./types";

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
    </div>
  );
};

export default NoticesSearch;
