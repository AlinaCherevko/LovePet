import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import type { FC } from "react";

const MainLayout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
