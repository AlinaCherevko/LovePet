import { useMemo, type FC } from "react";
import SearchInput from "../../../components/SearchInput/SearchInput";
import { useSelector } from "react-redux";
import {
  categoriesSelector,
  genderSelector,
  locationsSelector,
  speciesSelector,
} from "../../../redux/notices/noticesSelectors";
import SelectEl from "../../../components/Selects/Select";

import style from "./NoticesSearch.module.scss";
// import MenuList from "../../../components/Selects/LocationMenu";

export interface INoticesSearchProps {
  inputValue: string;
  onChange: (prop: string) => void;
}
interface IOptions {
  value: string;
  label: string;
}

const NoticesSearch: FC<INoticesSearchProps> = ({ onChange, inputValue }) => {
  const species = useSelector(speciesSelector);
  const categories = useSelector(categoriesSelector);
  const genders = useSelector(genderSelector);
  const locations = useSelector(locationsSelector);

  const gendersOptions: IOptions[] = genders.map((item) => ({
    value: item,
    label: item.charAt(0).toUpperCase() + item.slice(1),
  }));
  const categoriesOptions: IOptions[] = categories.map((item) => ({
    value: item,
    label: item.charAt(0).toUpperCase() + item.slice(1),
  }));
  const speciesOptions: IOptions[] = species.map((item) => ({
    value: item,
    label: item.charAt(0).toUpperCase() + item.slice(1),
  }));
  const locationOptions = useMemo(
    () =>
      locations.map(({ cityEn, stateEn }) => ({
        value: cityEn,
        label: `${cityEn}, ${stateEn}`,
      })),
    [locations]
  );

  return (
    <div className={style.search}>
      <SearchInput
        placeholder="Search"
        onChange={onChange}
        value={inputValue}
      />

      <SelectEl options={categoriesOptions} placeholder="Category" />
      <SelectEl options={gendersOptions} placeholder="By Gender" />
      <SelectEl options={speciesOptions} placeholder="By Type" />
      <SelectEl
        options={locationOptions}
        placeholder="By Location"
        //components={{ MenuList }}
      />
    </div>
  );
};

export default NoticesSearch;
