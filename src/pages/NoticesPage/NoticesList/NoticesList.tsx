import type { FC } from "react";
import style from "./NoticesList.module.scss";
import NoticesItem from "../NoticesItem/NoticesItem";
import { INotices } from "../../../redux/notices/types";

export interface INoticesProps {
  notices: INotices[];
}

const NoticesList: FC<INoticesProps> = ({ notices }) => {
  return (
    <ul className={style.noticesList}>
      {notices &&
        notices.map((item) => <NoticesItem key={item._id} item={item} />)}
    </ul>
  );
};

export default NoticesList;
