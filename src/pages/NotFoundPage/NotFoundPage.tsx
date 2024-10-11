import type { FC } from "react";
import Section from "../../components/Section/Section";
import Title from "../../components/Section/Title/Title";
import { useNavigate } from "react-router-dom";
import style from "./NotFoundPage.module.scss";

const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  return (
    <Section>
      <Title text="404 - Page Not Found" />

      <a onClick={() => navigate("/")} className={style.link}>
        Back to home page
      </a>
    </Section>
  );
};

export default NotFoundPage;
