import { useState, type FC } from "react";
import style from "./ProfilePage.module.scss";
import EditBtn from "./EditBtn/EditBtn";
import Avatar from "./Avatar/Avatar";
import UserInfo from "./UserInfo/UserInfo";
import MyPets from "./MyPets/MyPets";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelectors";
import Modal from "../../components/Modal/Modal";
import UserModal from "../../components/Modal/UserModal/UserModal";
import { AvatarSizes } from "./Avatar/types";

const ProfilePage: FC = () => {
  const user = useSelector(selectUser);
  const [isVisibleUserModal, setIsVisibleUserModal] = useState(false);

  const handleUserModalClick = () => {
    setIsVisibleUserModal(true);
  };

  const onClose = () => {
    setIsVisibleUserModal(false);
  };

  return (
    <>
      <section className={style.profile}>
        <div className="container">
          <div className={style.profile__wrapper}>
            <EditBtn handleUserModalClick={handleUserModalClick} />
            <Avatar
              id="icon-user"
              size={AvatarSizes.Medium}
              url={user.avatar}
            />
            <UserInfo />
            <MyPets />
          </div>
        </div>
      </section>
      {isVisibleUserModal && (
        <Modal onClose={onClose}>
          <UserModal onClose={onClose} />
        </Modal>
      )}
    </>
  );
};

export default ProfilePage;
