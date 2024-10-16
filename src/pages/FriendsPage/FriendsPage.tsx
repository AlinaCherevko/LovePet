import { useEffect, type FC } from "react";
import Section from "../../components/Section/Section";
import Title from "../../components/Section/Title/Title";
import { useDispatch, useSelector } from "react-redux";
import { friendsSelector } from "../../redux/friends/friendsSelectors";
import FriendsList from "./FriendsList/FriendsList";
import { getFriends } from "../../redux/friends/friendsOperations";
import { AppDispatch } from "../../redux/store";

const FriendsPage: FC = () => {
  const friends = useSelector(friendsSelector);
  const dispatch: AppDispatch = useDispatch();
  console.log(friends);

  useEffect(() => {
    dispatch(getFriends());
  }, [dispatch]);

  return (
    <Section>
      <Title text="Our friends" />

      <FriendsList friends={friends} />
    </Section>
  );
};

export default FriendsPage;
