import { useState, type FC } from "react";
import { ColorTheme } from "../../../components/Navigation/NavigationLink/NavigationLink";
import { useSelector } from "react-redux";
import AuthLink from "../../../components/AuthNav/AuthLink/AuthLink";
import NoticesList from "../../NoticesPage/NoticesList/NoticesList";
import { SizeItem } from "../../NoticesPage/types";
import { selectFavorites } from "../../../redux/auth/authSelectors";
import style from "./Favorite.module.scss";
import { viewedSelector } from "../../../redux/notices/noticesSelectors";

const FavoriteTabs: FC = () => {
  const [activeTab, setActiveTab] = useState("favorite");

  const favorites = useSelector(selectFavorites);
  const viewed = useSelector(viewedSelector);

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
            <NoticesList
              notices={viewed}
              type={SizeItem.Small}
              isViewedPage={true}
            />
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
