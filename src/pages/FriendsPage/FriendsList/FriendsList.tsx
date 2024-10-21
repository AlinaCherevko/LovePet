import { type FC } from "react";
import FriendsItem from "../FriendsItem/FriendsItem";
import { IFriends } from "../../../redux/friends/types";
import { motion } from "framer-motion";
import style from "./FriendsList.module.scss";

export interface IFriendsProps {
  friends: IFriends[];
}

const FriendsList: FC<IFriendsProps> = ({ friends }) => {
  return (
    <motion.ul
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ delay: 0.3, duration: 1.5 }}
      className={style.friendsList}
    >
      {friends &&
        friends.map((item) => <FriendsItem key={item._id} item={item} />)}
    </motion.ul>
  );
};

export default FriendsList;
