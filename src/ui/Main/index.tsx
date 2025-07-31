import { useState } from "react";
import FeaturedMovie from "../FeaturedMovie";
import TopNav from "../FeaturedMovie";
import TrendingNow from "../TrendingNow";
import styles from "./style.module.css";
import TvShow from "../TvShow";
import Movie from "../Movie";
import Search from "../Search";
import MentionedMovies from "../MentionedMovies";
import FilteredFilmGenre from "../FilteredFilmGenre";

const Main = () => {
    const [filmId, setFilmId] = useState("");
    const [forRendering, setForRendering] = useState(true)

    return (
        <div className={styles.container}>
            <FeaturedMovie filmId={filmId} />
            <TrendingNow forRendering={forRendering} setFilmId={setFilmId} setForRendering={setForRendering} />
            <TvShow forRendering={forRendering} setFilmId={setFilmId} setForRendering={setForRendering} />
            <Movie forRendering={forRendering} setFilmId={setFilmId} setForRendering={setForRendering} />
            <Search forRendering={forRendering} setFilmId={setFilmId} setForRendering={setForRendering} />
            <MentionedMovies forRendering={forRendering} setFilmId={setFilmId} setForRendering={setForRendering} />
            <FilteredFilmGenre />
        </div>
    )
}

export default Main