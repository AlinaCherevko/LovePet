import { type FC } from "react";
import { Route } from "../RestrictedRoute/RestrictedRoute";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsAuth } from "../../redux/auth/authSelectors";

const PrivateRoute: FC<Route> = ({ children, redirectTo = "/login" }) => {
  const isAuth = useSelector(selectIsAuth);

  return isAuth ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
