import { Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense, useEffect } from "react";
import MainLayout from "./components/MainLayout/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./redux/store";
import { refreshUser, refreshUserFull } from "./redux/auth/authOperations";
import { selectIsAuth, selectRefreshing } from "./redux/auth/authSelectors";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Loader from "./components/Loader/Loader";
import { favoritesSelector } from "./redux/notices/noticesSelectors";

const RegistrationPage = lazy(
  () => import("./pages/RegistrationPage/RegistrationPage")
);
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const FriendsPage = lazy(() => import("./pages/FriendsPage/FriendsPage"));
const NewsPage = lazy(() => import("./pages/NewsPage/NewsPage"));
const NoticesPage = lazy(() => import("./pages/NoticesPage/NoticesPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage/ProfilePage"));
const AddPetPage = lazy(() => import("./pages/AddPetPage/AddPetPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  const isAuth = useSelector(selectIsAuth);
  const isRefreshing = useSelector(selectRefreshing);
  const dispatch: AppDispatch = useDispatch();
  const favoritesArr = useSelector(favoritesSelector);

  useEffect(() => {
    dispatch(refreshUserFull());
  }, [dispatch, isAuth, favoritesArr]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch, isAuth]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Suspense>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/notices" element={<NoticesPage />} />
          <Route path="/friends" element={<FriendsPage />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/add-pet"
            element={
              <PrivateRoute>
                <AddPetPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute>
                <RegistrationPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
