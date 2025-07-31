import styles from "./style.module.css";
import "swiper/css";
import filmsData from "../../json/filmsData.json";
import { sortTrendingNow } from "../../helpers/helperFunctions";
import FilmBlock from "../../components/FilmBlock";
import { TrendingNowProps } from "../../models/IProps";
import { FilmDataType } from "../../models/IData";
import { useEffect, useState } from "react";
import List from "../../components/List";

const TrendingNow = ({ setFilmId, setForRendering, forRendering }: TrendingNowProps) => {
  const [trendingData, setTrendingData] = useState<FilmDataType[] | null>(null)

  useEffect(() => {
    setTrendingData(sortTrendingNow());
  }, [])

  return (
    <div className={styles.container} id="trendingnow">
      <List title="Trending Now" data={trendingData? trendingData: null} setFilmId={setFilmId} setForRendering={setForRendering} forRendering={forRendering} />
    </div>
  )
}

export default TrendingNow