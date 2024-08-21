import type { FC } from "react";
import SearchInput from "../../../components/SearchInput/SearchInput";
import SelectType from "../../../components/Selects/SelectType";
import style from "./NoticesSearch.module.scss";
import SelectGender from "../../../components/Selects/SelectGender";
import SelectCategory from "../../../components/Selects/SelectCategory";
import SelectLocation from "../../../components/Selects/SelectLocation";

export interface INoticesSearchProps {
  inputValue: string;
  onChange: (prop: string) => void;
}

const NoticesSearch: FC<INoticesSearchProps> = ({ onChange, inputValue }) => {
  return (
    <div className={style.search}>
      <SearchInput
        placeholder="Search"
        onChange={onChange}
        value={inputValue}
      />

      <SelectCategory />
      <SelectGender />
      <SelectType />
      <SelectLocation />
    </div>
  );
};

export default NoticesSearch;
