import type { FC } from "react";
import style from "./ProfilePage.module.scss";
import EditBtn from "./EditBtn/EditBtn";
import Avatar from "./Avatar/Avatar";
import UserInfo from "./UserInfo/UserInfo";
import MyPets from "./MyPets/MyPets";

const ProfilePage: FC = () => {
  return (
    <section className={style.profile}>
      <div className="container">
        <div className={style.profile__wrapper}>
          <EditBtn />
          <Avatar id="icon-user" />
          <UserInfo />
          <MyPets />
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
