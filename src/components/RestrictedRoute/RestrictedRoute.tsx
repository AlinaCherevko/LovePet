import { type FC } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsAuth } from "../../redux/auth/authSelectors";

export type Route = {
  children: React.ReactNode;
  redirectTo?: string;
};

const RestrictedRoute: FC<Route> = ({ redirectTo = "/", children }) => {
  const isAuth = useSelector(selectIsAuth);

  return isAuth ? <Navigate to={redirectTo} /> : children;
};

export default RestrictedRoute;
