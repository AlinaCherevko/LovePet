import { INotices } from "../../../redux/notices/types";
import { SizeItem } from "../types";

export type NoticesProps = {
  item: INotices;
  type: SizeItem;
  isNoticesPage?: boolean;
  isViewedPage?: boolean;
};
