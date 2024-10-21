import type { FC } from "react";
import NoticesItem from "../NoticesItem/NoticesItem";

import style from "./NoticesList.module.scss";
import { INoticesProps } from "./types";
import classNames from "classnames";

const NoticesList: FC<INoticesProps> = ({
  notices,
  type,
  isNoticesPage,
  isViewedPage,
}) => {
  return (
    <ul
      className={classNames(style.noticesList, style[`noticesList--${type}`])}
    >
      {notices &&
        notices.map((item) => (
          <NoticesItem
            key={item._id}
            item={item}
            type={type}
            isNoticesPage={isNoticesPage}
            isViewedPage={isViewedPage}
          />
        ))}
    </ul>
  );
};

export default NoticesList;
