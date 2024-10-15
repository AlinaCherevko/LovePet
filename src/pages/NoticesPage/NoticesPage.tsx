import { useEffect, useState, type FC } from "react";
import Title from "../../components/Section/Title/Title";
import Section from "../../components/Section/Section";
import {
  getLocations,
  getNotices,
  getNoticesCategories,
  getNoticesSex,
  getNoticesSpecies,
} from "../../redux/notices/noticesOperations";
import { useDispatch, useSelector } from "react-redux";
import { noticesSelector } from "../../redux/notices/noticesSelectors";
import { AppDispatch } from "../../redux/store";
import NoticesList from "./NoticesList/NoticesList";
import Pagination from "../../components/Pagination/Pagination";
import { ReactPaginateProps } from "react-paginate";
import NoticesSearch from "./NoticesSearch/NoticesSearch";
import { SizeItem } from "./types";

const NoticesPage: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [locationValue, setLocationValue] = useState<string>("");
  const [speciesValue, setSpeciesValue] = useState<string>("");
  const [categoryValue, setCategoryValue] = useState<string>("");
  //const [genderValue, setGenderValue] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const dispatch: AppDispatch = useDispatch();

  const { results, totalPages } = useSelector(noticesSelector);

  console.log(results);

  useEffect(() => {
    dispatch(
      getNotices({
        page,
        inputValue,
        locationValue,
        speciesValue,
        categoryValue,
      })
    );
  }, [
    dispatch,
    page,
    inputValue,
    speciesValue,
    categoryValue,
    //genderValue,
    locationValue,
  ]);

  useEffect(() => {
    setPage(1);
  }, [inputValue, speciesValue, categoryValue, locationValue]);

  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getNoticesSpecies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getNoticesCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getNoticesSex());
  }, [dispatch]);

  const handlePageClick: ReactPaginateProps["onPageChange"] = (e) => {
    setPage(e.selected + 1);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const onChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <Section>
      <Title text="Find your favorite pet" />
      <NoticesSearch
        inputValue={inputValue}
        onChange={onChange}
        setLocationValue={setLocationValue}
        setSpeciesValue={setSpeciesValue}
        setCategoryValue={setCategoryValue}
      />
      {results.length > 0 ? (
        <>
          <NoticesList notices={results} type={SizeItem.Big} />
          <Pagination
            handlePageClick={handlePageClick}
            totalPages={totalPages}
            page={page}
          />
        </>
      ) : (
        <p>Sorry, no find any news with these search parameter</p>
      )}
    </Section>
  );
};

export default NoticesPage;
