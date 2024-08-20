export interface INoticesParams {
  page: number;
  inputValue: string;
}

export interface INotices {
  _id: string;
  species: string;
  category: string;
  price: number;
  title: string;
  name: string;
  birthday: string;
  comment: string;
  sex: string;
  location: string;
  imgURL: string;
  createdAt: string;
  user: string;
  popularity: number;
  updatedAt: string;
}

export interface INoticesResults {
  results: INotices[];
  totalPages: number;
  perPage: number;
}

export interface INoticesState {
  notices: INoticesResults;
  species: string[];
  sex: string[];
  categories: string[];
  locations: string[];
  isLoading: boolean;
  isError: boolean;
}
