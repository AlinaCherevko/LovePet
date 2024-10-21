export interface IInput {
  type?: string;
  value: string;
  onChange: (prop: string) => void;
  placeholder: string;
}
