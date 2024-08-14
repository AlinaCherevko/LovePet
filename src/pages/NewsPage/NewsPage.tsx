import { useEffect, useState, type FC } from "react";
import Section from "../../components/Section/Section";
import Title from "../../components/Section/Title/Title";
import { newsSelector } from "../../redux/news/newsSelectors";
import { getNews } from "../../redux/news/newsOperations";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import NewsList from "./NewsList/NewsList";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import style from "./NewsPage.module.scss";

const NewsPage: FC = () => {
  const [page, setPage] = useState<number>(1);
  const dispatch: AppDispatch = useDispatch();
  const { results, totalPages } = useSelector(newsSelector);

  useEffect(() => {
    dispatch(getNews(page));
  }, [dispatch, page]);

  const handlePageClick: ReactPaginateProps["onPageChange"] = (e) => {
    setPage(e.selected + 1);
  };
  return (
    <Section>
      <Title text="News" />
      <NewsList news={results} />
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
      />
    </Section>
  );
};

export default NewsPage;
