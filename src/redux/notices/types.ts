export interface INoticesParams {
  page: number;
  inputValue: string;
  categoryValue: string;
  speciesValue: string;
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
}

export interface ILocation {
  cityEn: string | "";
  countyEn: string;
  stateEn: string;
  useCounty: string;
  _id: string;
}
export interface INoticesState {
  notices: INoticesResults;
  notice: INotices | null;
  species: string[];
  sex: string[];
  categories: string[];
  locations: ILocation[];
  favorites: string[];
  viewed: INotices[];
  isLoading: boolean;
  isError: boolean;
}
