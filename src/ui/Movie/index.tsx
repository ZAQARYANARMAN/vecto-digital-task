import styles from "./style.module.css";
import filmsData from "../../json/filmsData.json";
import { TrendingNowProps } from "../../models/IProps";
import List from "../../components/List";

const Movie = ({ setFilmId, setForRendering, forRendering }: TrendingNowProps) => {
    const data = filmsData.TendingNow.filter(filmInfo => filmInfo.Category === "Movie")

    return (
        <div className={styles.container} id="movie">
            <List title="Movie" data={data} setFilmId={setFilmId} setForRendering={setForRendering} forRendering={forRendering} />
        </div>
    )
}

export default Movie