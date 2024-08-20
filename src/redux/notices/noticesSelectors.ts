import { RootState } from "../store";

export const noticesSelector = (state: RootState) => state.notices.notices;
