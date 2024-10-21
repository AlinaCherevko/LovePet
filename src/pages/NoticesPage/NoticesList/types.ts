import { INotices } from "../../../redux/notices/types";
import { SizeItem } from "../types";

export interface INoticesProps {
  notices: INotices[];
  type: SizeItem;
  isNoticesPage?: boolean;
  isViewedPage?: boolean;
}
