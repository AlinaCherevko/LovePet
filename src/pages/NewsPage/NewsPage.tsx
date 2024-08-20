import { useEffect, useState, type FC } from "react";
import Section from "../../components/Section/Section";
import Title from "../../components/Section/Title/Title";
import { newsSelector } from "../../redux/news/newsSelectors";
import { getNews } from "../../redux/news/newsOperations";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import NewsList from "./NewsList/NewsList";
import { ReactPaginateProps } from "react-paginate";
import style from "./NewsPage.module.scss";
import SearchInput from "../../components/SearchInput/SearchInput";
import Pagination from "../../components/Pagination/Pagination";

const NewsPage: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const dispatch: AppDispatch = useDispatch();
  const { results, totalPages } = useSelector(newsSelector);

  useEffect(() => {
    dispatch(getNews({ page, inputValue }));
  }, [dispatch, page, inputValue]);

  const handlePageClick: ReactPaginateProps["onPageChange"] = (e) => {
    setPage(e.selected + 1);
  };

  const onChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <Section>
      <div className={style.wrapper}>
        <div className={style.inputWrapper}>
          <Title text="News" />
          <SearchInput
            placeholder="Search"
            type="border"
            onChange={onChange}
            value={inputValue}
          />
        </div>

        {results.length > 0 ? (
          <>
            <NewsList news={results} />
            <Pagination
              handlePageClick={handlePageClick}
              totalPages={totalPages}
            />
          </>
        ) : (
          <p>Sorry, no find any news with these search parameter</p>
        )}
      </div>
    </Section>
  );
};

export default NewsPage;
