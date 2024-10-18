import { type FC } from "react";
import { AddResItemPet } from "./types";
import style from "./AddPetItem.module.scss";
import Icon from "../../../components/Icon/Icon";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { deletePet } from "../../../redux/auth/authOperations";

type AddItemProps = {
  item: AddResItemPet;
};

const AddPetItem: FC<AddItemProps> = ({ item }) => {
  const dispatch: AppDispatch = useDispatch();

  const handleDeletePet = () => {
    dispatch(deletePet(item._id));
  };

  return (
    <li className={style.item}>
      <img className={style.item__img} src={item.imgURL} alt="pet-img" />
      <div className={style.item__wrapper}>
        <h2 className={style.item__title}>{item.title}</h2>
        <div className={style.table}>
          <div className={style.table__row}>
            <p className={style.table__text}>Name</p>
            <p className={style.table__afterText}>{item.name}</p>
          </div>
          <div className={style.table__row}>
            <p className={style.table__text}>Birthday</p>
            <p className={style.table__afterText}>{item.birthday}</p>
          </div>
          <div className={style.table__row}>
            <p className={style.table__text}>Sex</p>
            <p className={style.table__afterText}>{item.sex}</p>
          </div>
          <div className={style.table__row}>
            <p className={style.table__text}>Species</p>
            <p className={style.table__afterText}>{item.species}</p>
          </div>
        </div>
      </div>
      <button className={style.button} type="button" onClick={handleDeletePet}>
        <Icon
          id="icon-trash"
          stroke="#f6b83d"
          fill="transparent"
          width="20px"
          height="20px"
        />
      </button>
    </li>
  );
};

export default AddPetItem;
