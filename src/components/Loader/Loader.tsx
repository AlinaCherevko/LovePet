import { ColorRing } from "react-loader-spinner";
import style from "./Loader.module.scss";

const Loader = () => (
  <div className={style.loader}>
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
    />
  </div>
);

export default Loader;
