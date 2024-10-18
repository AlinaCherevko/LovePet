import { type FC } from "react";
import { useSelector } from "react-redux";
import { selectPets } from "../../../redux/auth/authSelectors";
import style from "./AddPetList.module.scss";
import AddPetItem from "../AddPetItem/AddPetItem";

const AddPetList: FC = () => {
  const pets = useSelector(selectPets);

  return (
    <ul className={style.addList}>
      {pets && pets.map((item) => <AddPetItem key={item._id} item={item} />)}
    </ul>
  );
};

export default AddPetList;
