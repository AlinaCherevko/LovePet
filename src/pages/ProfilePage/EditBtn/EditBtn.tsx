import { type FC } from "react";
import Icon from "../../../components/Icon/Icon";
import style from "./EditBtn.module.scss";

export type IEditBtn = {
  handleUserModalClick: () => void;
};

const EditBtn: FC<IEditBtn> = ({ handleUserModalClick }) => {
  // const [isVisibleUserModal, setIsVisibleUserModal] = useState(false);

  // const handleUserModalClick = () => {
  //   setIsVisibleUserModal(true);
  // };

  // const onClose = () => {
  //   setIsVisibleUserModal(false);
  // };

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.user}>
          <span className={style.user__text}>User</span>
          <Icon id="icon-user" fill="#ffffff" width="18px" height="18px" />
        </div>
        <button
          onClick={handleUserModalClick}
          type="button"
          className={style.button}
        >
          <Icon
            id="icon-edit"
            stroke="#f6b83d"
            fill="transparent"
            width="18px"
            height="18px"
          />
        </button>
      </div>
      {/* {isVisibleUserModal && (
        <Modal onClose={onClose}>
          <UserModal onClose={onClose} />
        </Modal>
      )} */}
    </>
  );
};

export default EditBtn;
