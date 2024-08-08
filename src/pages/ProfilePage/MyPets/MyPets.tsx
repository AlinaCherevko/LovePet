import type { FC } from "react";
import style from "./MyPets.module.scss";
import AuthLink from "../../../components/AuthNav/AuthLink/AuthLink";
import { ColorTheme } from "../../../components/Navigation/NavigationLink/NavigationLink";
import AddPetBtn from "../AddPetBtn/AddPetBtn";

const MyPets: FC = () => {
  return (
    <div className={style.myPets}>
      <div className={style.myPets__wrapper}>
        <h2 className={style.myPets__title}>My pets</h2>
        <AddPetBtn />
      </div>

      <AuthLink type={ColorTheme.White} text="LOG OUT"></AuthLink>
    </div>
  );
};

export default MyPets;
