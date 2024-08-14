// import { useState, type FC } from "react";
// import ReactPaginate from "react-paginate";
// import { INews } from "../../../redux/news/types";

// export interface IPagination {
//   results: INews[];
//   totalPages: number;
//   perPage: number;
// }

// const Pagination: FC = ({ results, totalPages, perPage }) => {
//   const [itemOffset, setItemOffset] = useState(0);

//   const endOffset = itemOffset + perPage;
//   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
//   const currentItems = results.slice(itemOffset, endOffset);
//   const pageCount = Math.ceil(results.length / perPage);

//   const handlePageClick = (event) => {
//     const newOffset = (event.selected * perPage) % results.length;
//     console.log(
//       `User requested page number ${event.selected}, which is offset ${newOffset}`
//     );
//     setItemOffset(newOffset);
//   };
//   return (
//     <ReactPaginate
//       breakLabel="..."
//       nextLabel="next >"
//       onPageChange={handlePageClick}
//       pageRangeDisplayed={5}
//       pageCount={pageCount}
//       previousLabel="< previous"
//       renderOnZeroPageCount={null}
//     />
//   );
// };

// export default Pagination;
