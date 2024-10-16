import type { FC } from "react";
import AddImgBlock from "../AddImgBlock/AddImgBlock";
import style from "./AddPage.module.scss";

const AddPetPage: FC = () => {
  return (
    <section className={style.add}>
      <div className="container">
        <div className={style.add__wrapper}>
          <AddImgBlock />
        </div>
      </div>
    </section>
  );
};

export default AddPetPage;
