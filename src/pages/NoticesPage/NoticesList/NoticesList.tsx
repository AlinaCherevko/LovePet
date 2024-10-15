import type { FC } from "react";
import NoticesItem from "../NoticesItem/NoticesItem";
import { INotices } from "../../../redux/notices/types";
import { SizeItem } from "../types";
import classNames from "classnames";
import style from "./NoticesList.module.scss";

export interface INoticesProps {
  notices: INotices[];
  type: SizeItem;
}

const NoticesList: FC<INoticesProps> = ({ notices, type }) => {
  return (
    <ul
      className={classNames(style.noticesList, style[`noticesList--${type}`])}
    >
      {notices &&
        notices.map((item) => (
          <NoticesItem key={item._id} item={item} type={type} />
        ))}
    </ul>
  );
};

export default NoticesList;
