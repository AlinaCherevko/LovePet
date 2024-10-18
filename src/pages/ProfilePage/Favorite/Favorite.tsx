import { useState, type FC } from "react";
import { ColorTheme } from "../../../components/Navigation/NavigationLink/NavigationLink";
import { useDispatch, useSelector } from "react-redux";
import AuthLink from "../../../components/AuthNav/AuthLink/AuthLink";
import NoticesList from "../../NoticesPage/NoticesList/NoticesList";
import { SizeItem } from "../../NoticesPage/types";
import { selectFavorites } from "../../../redux/auth/authSelectors";
import { viewedSelector } from "../../../redux/notices/noticesSelectors";
import ButtonForm from "../../../components/Button/ButtonForm";
import style from "./Favorite.module.scss";
import { removeViewed } from "../../../redux/notices/noticesSlise";
import { AppDispatch } from "../../../redux/store";

const FavoriteTabs: FC = () => {
  const [activeTab, setActiveTab] = useState("favorite");

  const favorites = useSelector(selectFavorites);
  const viewed = useSelector(viewedSelector);
  const dispatch: AppDispatch = useDispatch();

  const handleRemoveViewed = () => {
    dispatch(removeViewed());
  };

  return (
    <>
      <div className={style.detailsWrapper}>
        <div className={style.linkWrapper}>
          <AuthLink
            type={
              activeTab === "favorite" ? ColorTheme.Orange : ColorTheme.White
            }
            text="Favorite"
            onClick={() => setActiveTab("favorite")}
          />
          <AuthLink
            type={activeTab === "viewed" ? ColorTheme.Orange : ColorTheme.White}
            text="Viewed"
            onClick={() => setActiveTab("viewed")}
          />
        </div>

        {activeTab === "favorite" ? (
          favorites.length > 0 ? (
            <NoticesList notices={favorites} type={SizeItem.Small} />
          ) : (
            <p className={style.detailsWrapper__text}>
              Oops, looks like there aren't any furries on our adorable page
              yet. Do not worry! View your pets on the "find your favorite pet"
              page and add them to your favorites.
            </p>
          )
        ) : activeTab === "viewed" ? (
          viewed.length > 0 ? (
            <>
              <NoticesList
                notices={viewed}
                type={SizeItem.Small}
                isViewedPage={true}
              />
              {viewed.length > 0 && (
                <div className={style.button}>
                  <ButtonForm
                    text="Clean viewed list"
                    onClick={handleRemoveViewed}
                    type="button"
                  />
                </div>
              )}
            </>
          ) : (
            <p className={style.detailsWrapper__text}>
              Oops, looks like there aren't any furries on our viewed page yet.
            </p>
          )
        ) : null}
      </div>
    </>
  );
};

export default FavoriteTabs;
