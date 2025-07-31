import styles from "./style.module.css";
import filmsData from "../../json/filmsData.json";
import { TrendingNowProps } from "../../models/IProps";
import List from "../../components/List";

const MentionedMovies = ({ setFilmId, setForRendering, forRendering }: TrendingNowProps) => {
    const mentionedMovies = JSON.parse(localStorage.getItem("mentionedMovies") || "[]");
    const data = filmsData.TendingNow.filter(filmInfo => mentionedMovies.includes(filmInfo.Id))

    return (
        <div className={styles.container} id="mentionedmovies">
            <List title="Mentioned Movies" data={data} forRendering={forRendering} setFilmId={setFilmId} setForRendering={setForRendering} />
        </div>
    )
}

export default MentionedMovies