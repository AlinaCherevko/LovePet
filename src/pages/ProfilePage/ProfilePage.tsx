import { useState, type FC } from "react";
import Avatar from "./Avatar/Avatar";
import UserInfo from "./UserInfo/UserInfo";
import MyPets from "./MyPets/MyPets";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelectors";
import Modal from "../../components/Modal/Modal";
import UserModal from "../../components/Modal/UserModal/UserModal";
import { AvatarSizes } from "./Avatar/types";
import ButtonIcon from "../../components/ButtonIcon/ButtonIcon";
import { BtnIconSizes } from "../../components/ButtonIcon/types";
import Icon from "../../components/Icon/Icon";
import FavoriteTabs from "./Favorite/Favorite";
import style from "./ProfilePage.module.scss";
import { ColorTheme } from "../../components/Navigation/NavigationLink/types";

const ProfilePage: FC = () => {
  const user = useSelector(selectUser);
  const [isVisibleUserModal, setIsVisibleUserModal] = useState(false);

  const handleUserModalClick = () => {
    setTimeout(() => {
      setIsVisibleUserModal(true);
    }, 300);
  };

  const onClose = () => {
    setTimeout(() => {
      setIsVisibleUserModal(false);
    }, 300);
  };

  return (
    <>
      <section className={style.profile}>
        <div className="container">
          <div className={style.profile__wrap}>
            <div className={style.profile__wrapper}>
              <div className={style.profile__btnWrapper}>
                <ButtonIcon
                  type={ColorTheme.Orange}
                  text="User"
                  id="icon-user"
                  width="18px"
                  height="18px"
                  size={BtnIconSizes.Medium}
                />
                <button
                  onClick={handleUserModalClick}
                  className={style.profile__button}
                  type="button"
                >
                  <Icon
                    id="icon-edit"
                    stroke="#f6b83d"
                    fill="transparent"
                    width="20px"
                    height="20px"
                  />
                </button>
              </div>
              <Avatar
                id="icon-user"
                size={AvatarSizes.Medium}
                url={user.avatar}
              />
              <UserInfo />
              <MyPets />
            </div>
            <FavoriteTabs />
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
