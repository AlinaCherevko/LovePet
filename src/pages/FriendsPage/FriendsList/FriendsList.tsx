import { type FC } from "react";
import FriendsItem from "../FriendsItem/FriendsItem";
import { IFriends } from "../../../redux/friends/types";

import style from "./FriendsList.module.scss";

export interface IFriendsProps {
  friends: IFriends[];
}

const FriendsList: FC<IFriendsProps> = ({ friends }) => {
  return (
    <ul className={style.friendsList}>
      {friends &&
        friends.map((item) => <FriendsItem key={item._id} item={item} />)}
    </ul>
  );
};

export default FriendsList;
