import { useEffect, useState, type FC } from "react";
import Title from "../../components/Section/Title/Title";
import Section from "../../components/Section/Section";
import { getNotices } from "../../redux/notices/noticesOperations";
import { useDispatch, useSelector } from "react-redux";
import { noticesSelector } from "../../redux/notices/noticesSelectors";
import { AppDispatch } from "../../redux/store";
import NoticesList from "./NoticesList/NoticesList";
import Pagination from "../../components/Pagination/Pagination";
import { ReactPaginateProps } from "react-paginate";
import NoticesSearch from "./NoticesSearch/NoticesSearch";

const NoticesPage: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const dispatch: AppDispatch = useDispatch();
  const { results, totalPages } = useSelector(noticesSelector);

  useEffect(() => {
    dispatch(getNotices({ page, inputValue }));
  }, [dispatch, page, inputValue]);

  const handlePageClick: ReactPaginateProps["onPageChange"] = (e) => {
    setPage(e.selected + 1);
  };

  const onChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <Section>
      <Title text="Find your favorite pet" />
      <NoticesSearch inputValue={inputValue} onChange={onChange} />
      {results.length > 0 ? (
        <>
          <NoticesList notices={results} />
          <Pagination
            handlePageClick={handlePageClick}
            totalPages={totalPages}
          />
        </>
      ) : (
        <p>Sorry, no find any news with these search parameter</p>
      )}
    </Section>
  );
};

export default NoticesPage;
