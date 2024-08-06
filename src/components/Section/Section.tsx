import { FC, ReactNode } from "react";
import style from "./Section.module.scss";

type Props = {
  title: string;
  children?: ReactNode;
};

const Section: FC<Props> = ({ title, children }) => {
  return (
    <section className={style.section}>
      <div className="container">
        <h2 className={style.title}>{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
