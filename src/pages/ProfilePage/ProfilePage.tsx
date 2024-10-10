import { useEffect, useState, type FC } from "react";
import style from "./ProfilePage.module.scss";
import EditBtn from "./EditBtn/EditBtn";
import Avatar from "./Avatar/Avatar";
import UserInfo from "./UserInfo/UserInfo";
import MyPets from "./MyPets/MyPets";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelectors";
import Modal from "../../components/Modal/Modal";
import UserModal from "../../components/Modal/UserModal/UserModal";

const ProfilePage: FC = () => {
  const [url, setUrl] = useState<string>("");
  const user = useSelector(selectUser);
  const [isVisibleUserModal, setIsVisibleUserModal] = useState(false);

  useEffect(() => {
    const blob = new Blob([user.avatar], { type: "image/png" });
    setUrl(URL.createObjectURL(blob));
    console.log(url);
  }, [user.avatar]);

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
            <Avatar id="icon-user" url={url} />
            <UserInfo />
            <MyPets />
          </div>
        </div>
      </section>
      {isVisibleUserModal && (
        <Modal onClose={onClose}>
          <UserModal onClose={onClose} url={url} />
        </Modal>
      )}
    </>
  );
};

export default ProfilePage;
