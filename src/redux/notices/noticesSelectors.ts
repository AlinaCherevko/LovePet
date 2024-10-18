import { RootState } from "../store";

export const noticesSelector = (state: RootState) => state.notices.notices;
export const noticeSelector = (state: RootState) => state.notices.notice;
export const speciesSelector = (state: RootState) => state.notices.species;
export const genderSelector = (state: RootState) => state.notices.sex;
export const categoriesSelector = (state: RootState) =>
  state.notices.categories;
export const locationsSelector = (state: RootState) => state.notices.locations;
export const isErrorSelector = (state: RootState) => state.notices.isError;
export const isLoadingSelector = (state: RootState) => state.notices.isLoading;
export const favoritesSelector = (state: RootState) => state.notices.favorites;
export const viewedSelector = (state: RootState) => state.notices.viewed;
