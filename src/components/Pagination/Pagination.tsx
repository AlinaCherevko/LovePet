import type { FC } from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import style from "./Pagination.module.scss";

export interface IPagination {
  handlePageClick: ReactPaginateProps["onPageChange"];
  totalPages: number;
  page?: number;
}
const Pagination: FC<IPagination> = ({ handlePageClick, totalPages, page }) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      marginPagesDisplayed={0}
      pageCount={totalPages}
      previousLabel="<"
      renderOnZeroPageCount={null}
      containerClassName={style.pagination}
      pageClassName={style.pagination__item}
      pageLinkClassName={style.pagination__link}
      previousClassName={style.pagination__prev}
      nextClassName={style.pagination__next}
      activeClassName={style.selected}
      disabledClassName={style.disable}
      forcePage={(page ?? 1) - 1}
    />
  );
};

export default Pagination;
