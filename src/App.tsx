import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Suspense, useEffect } from "react";
import MainLayout from "./components/MainLayout/MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import NewsPage from "./pages/NewsPage/NewsPage";
import NoticesPage from "./pages/NoticesPage/NoticesPage";
import FriendsPage from "./pages/FriendsPage/FriendsPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AddPetPage from "./pages/AddPetPage/AddPetPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./redux/store";
import { refreshUser } from "./redux/auth/authOperations";
import { selectRefreshing } from "./redux/auth/authSelectors";

function App() {
  // const isAuth = useSelector(selectIsAuth);
  const isRefreshing = useSelector(selectRefreshing);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Loading...</div>
  ) : (
    <Suspense>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/notices" element={<NoticesPage />} />
          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/add-pet" element={<AddPetPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
