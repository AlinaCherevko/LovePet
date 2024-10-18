import { useEffect, useRef, type FC } from "react";
import AddImgBlock from "./AddImgBlock/AddImgBlock";
import style from "./AddPage.module.scss";
import AddPetForm from "./AddPetForm/AddPetForm";
import { getNoticesSpecies } from "../../redux/notices/noticesOperations";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

const AddPetPage: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const maleBtnRef = useRef<HTMLInputElement>(null);
  const femaleBtnRef = useRef<HTMLInputElement>(null);
  const othersBtnRef = useRef<HTMLInputElement>(null);

  const onFakeMaleClick = () => {
    maleBtnRef.current?.click();
  };
  const onFakeFemaleClick = () => {
    femaleBtnRef.current?.click();
  };
  const onFakeOthersClick = () => {
    othersBtnRef.current?.click();
  };

  useEffect(() => {
    dispatch(getNoticesSpecies());
  }, [dispatch]);

  return (
    <section className={style.add}>
      <div className="container">
        <div className={style.add__wrapper}>
          <AddImgBlock />
          <AddPetForm
            maleBtnRef={maleBtnRef}
            femaleBtnRef={femaleBtnRef}
            othersBtnRef={othersBtnRef}
            onFakeMaleClick={onFakeMaleClick}
            onFakeFemaleClick={onFakeFemaleClick}
            onFakeOthersClick={onFakeOthersClick}
          />
        </div>
      </div>
    </section>
  );
};

export default AddPetPage;
