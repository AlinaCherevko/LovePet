import { ReactPaginateProps } from "react-paginate";

export interface IPagination {
  handlePageClick: ReactPaginateProps["onPageChange"];
  totalPages: number;
  page?: number;
}
