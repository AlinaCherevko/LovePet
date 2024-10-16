export interface IFriendsState {
  friends: IFriends[];
  isLoading: boolean;
  isError: boolean;
}

export interface IFriends {
  _id: string;
  url: string;
  title: string;
  addressUrl: string;
  imageUrl: string;
  address: string;
  workDays: IDays[];
  phone: string;
  email: string;
}

export interface IDays {
  _id: string;
  isOpen: boolean;
  from?: string;
  to?: string;
}
