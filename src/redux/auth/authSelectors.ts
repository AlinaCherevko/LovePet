import { RootState } from "../store";

export const selectUser = (state: RootState) => state.auth.user;
export const selectIsAuth = (state: RootState) => state.auth.isLoggedIn;
export const selectError = (state: RootState) => state.auth.error;
export const selectRefreshing = (state: RootState) => state.auth.isRefreshing;
export const selectFavorites = (state: RootState) =>
  state.auth.noticesFavorites;
export const selectViewed = (state: RootState) => state.auth.noticesViewed;
export const selectPets = (state: RootState) => state.auth.pets;
