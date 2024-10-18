import { FC, ReactNode } from "react";
import style from "./Section.module.scss";

export type SectionProps = {
  children?: ReactNode;
};

const Section: FC<SectionProps> = ({ children }) => {
  return (
    <section className={style.section}>
      <div className={style.container}>{children}</div>
    </section>
  );
};

export default Section;
