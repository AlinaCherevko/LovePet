export interface IState {
  user: IUser;
  //blob: string | null;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isAuthLoading: boolean;
  error: string | null | unknown;
}

export interface IUser {
  name: string;
  email: string;
  avatar: string;
  phone: string;
}

export interface ISignup {
  name: string;
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IPet {
  name: string;
  title: string;
  imgURL: string;
  species: string;
  birthday: string;
  sex: string;
}

export interface IRegData {
  name: string;
  email: string;
  token: string;
}
export interface IRefresh {
  _id: string;
  name: string;
  email: string;
  token: string;
  avatar: string;
  phone: string;
}
