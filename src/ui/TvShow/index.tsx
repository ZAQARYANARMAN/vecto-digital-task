import styles from "./style.module.css";
import filmsData from "../../json/filmsData.json";
import { TrendingNowProps } from "../../models/IProps";
import List from "../../components/List";

const TvShow = ({ setFilmId, setForRendering, forRendering }: TrendingNowProps) => {
    const data = filmsData.TendingNow.filter(filmInfo => filmInfo.Category === "TV Show")

    return (
        <div className={styles.container} id="tvshow">
            <List title="TV Shows" data={data} setFilmId={setFilmId} setForRendering={setForRendering} forRendering={forRendering} />
        </div>
    )
}

export default TvShow