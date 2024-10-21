export type NavProps = {
  type: ColorTheme;
  to?: string;
  text: string;
  onClick?: () => void;
  href?: string | undefined | null;
};
export enum ColorTheme {
  White = "white",
  Orange = "orange",
}
