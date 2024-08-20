export interface IResults {
  results: INews[];
  totalPages: number;
  perPage: number;
}

export interface INews {
  _id: string;
  imgUrl: string;
  title: string;
  text: string;
  date: string;
  url: string;
  id: string;
}

export interface INewsState {
  news: IResults;
  isLoading: boolean;
  isError: boolean;
}

export interface INewsParams {
  page: number;
  inputValue?: string;
}
