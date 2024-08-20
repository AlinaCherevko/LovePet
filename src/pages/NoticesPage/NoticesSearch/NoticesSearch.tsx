import type { FC } from "react";
import SearchInput from "../../../components/SearchInput/SearchInput";
import SelectType from "../../../components/Selects/SelectType";
import style from "./NoticesSearch.module.scss";

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
      <div className={style.search__wrapper}></div>
      <SelectType />
    </div>
  );
};

export default NoticesSearch;
