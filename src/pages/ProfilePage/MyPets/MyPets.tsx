import { useState, type FC } from "react";
import style from "./MyPets.module.scss";
import AuthLink from "../../../components/AuthNav/AuthLink/AuthLink";
import { ColorTheme } from "../../../components/Navigation/NavigationLink/NavigationLink";
import AddPetBtn from "../AddPetBtn/AddPetBtn";
import Modal from "../../../components/Modal/Modal";
import LogOutModal from "../../../components/Modal/LogOutModal/LogOutModal";

const MyPets: FC = () => {
  const [isVisibleLogOutModal, setIsVisibleLogOutModal] = useState(false);

  const handleLogOutClick = () => {
    setIsVisibleLogOutModal(true);
  };

  const onClose = () => {
    setIsVisibleLogOutModal(false);
  };

  return (
    <>
      <div className={style.myPets}>
        <div className={style.myPets__wrapper}>
          <h2 className={style.myPets__title}>My pets</h2>
          <AddPetBtn />
        </div>

        <AuthLink
          onClick={handleLogOutClick}
          type={ColorTheme.White}
          text="LOG OUT"
        ></AuthLink>
      </div>
      {isVisibleLogOutModal && (
        <Modal onClose={onClose}>
          <LogOutModal onClose={onClose} />
        </Modal>
      )}
    </>
  );
};

export default MyPets;
