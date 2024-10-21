import type { FC } from "react";
import NoticesItem from "../NoticesItem/NoticesItem";
import { motion } from "framer-motion";
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
    <motion.ul
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ delay: 0.3, duration: 1.5 }}
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
    </motion.ul>
  );
};

export default NoticesList;
