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
  news: INews[];
  isLoading: boolean;
  isError: boolean;
}
