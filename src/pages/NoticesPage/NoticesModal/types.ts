import { INotices } from "../../../redux/notices/types";

export type LogBtnProps = {
  onClose?: () => void;
  item: INotices;
  inFavorite: boolean;
  toggleFavorite: () => void;
};
