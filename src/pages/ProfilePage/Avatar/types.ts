export enum AvatarSizes {
  Small = "small",
  Medium = "medium",
  Tiny = "tiny",
  Big = "big",
}
export type AvatarProps = {
  id: string;
  size: AvatarSizes;
  url?: string;
  onClick?: () => void;
};
