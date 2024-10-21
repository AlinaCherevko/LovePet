import { useState, type FC } from "react";
import AuthLink from "../../../components/AuthNav/AuthLink/AuthLink";
import Modal from "../../../components/Modal/Modal";
import LogOutModal from "../../../components/Modal/LogOutModal/LogOutModal";
import ButtonIcon from "../../../components/ButtonIcon/ButtonIcon";
import { BtnIconSizes } from "../../../components/ButtonIcon/types";
import { useNavigate } from "react-router-dom";
import AddPetList from "../../AddPetPage/AddPetList/AddPetList";
import style from "./MyPets.module.scss";
import { ColorTheme } from "../../../components/Navigation/NavigationLink/types";

const MyPets: FC = () => {
  const navigate = useNavigate();
  const [isVisibleLogOutModal, setIsVisibleLogOutModal] = useState(false);

  const handleLogOutClick = () => {
    setTimeout(() => {
      setIsVisibleLogOutModal(true);
    }, 300);
  };

  const onClose = () => {
    setTimeout(() => {
      setIsVisibleLogOutModal(false);
    }, 300);
  };

  const handleAddPetClick = () => {
    navigate("/add-pet");
  };

  return (
    <>
      <div className={style.myPets}>
        <div className={style.myPets__wrapper}>
          <h2 className={style.myPets__title}>My pets</h2>
          <ButtonIcon
            type={ColorTheme.Orange}
            text="Add pet"
            id="icon-plus"
            size={BtnIconSizes.Medium}
            width="18px"
            height="18px"
            onClick={handleAddPetClick}
          />
        </div>

        <AddPetList />

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
