import { StylesConfig } from "react-select";

export type Option = { value: string; label: string };

export type ISelect = {
  options: Array<Option>;
  placeholder: string;
  onChange: (value: string) => void;
  value?: string;
  selectStyles?: StylesConfig;
};
