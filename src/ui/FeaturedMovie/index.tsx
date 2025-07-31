import styles from "./style.module.css";
import filmsData from "../../json/filmsData.json";
import { useEffect, useState } from "react";
import { formatDuration } from "../../helpers/helperFunctions";
import { FeaturedMovieProps } from "../../models/IProps";
import { FilmDataType } from "../../models/IData";

const FeaturedMovie = ({ filmId }: FeaturedMovieProps) => {
    const [data, setData] = useState<FilmDataType>(filmsData["Featured"])
    const filmIdInMemory = sessionStorage.getItem("filmId");

    useEffect(() => {
        if (typeof filmIdInMemory === "string") {
            setData(filmsData.TendingNow.filter(el => el.Id === filmIdInMemory)[0])
        }
    }, [filmId])

    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <h3 className={styles.filmCategory}>{data.Category}</h3>
                <img src={`/assets/images/${data.TitleImage}`} alt="" width="90%" height="70px" />
                <h4>{data.ReleaseYear} {data.MpaRating} {formatDuration(Number(data.Duration))}</h4>
                <p className={styles.aboutFilm}>{data.Description}</p>
                <div className={styles.btnList}>
                    <button className={styles.playBtn}>Play</button>
                    <button className={styles.moreInfoBtn}>More Info</button>
                </div>
            </div>
            <div className={styles.rightSide}>
                <img src={`/assets/images/${data.CoverImage}`} alt="" width="100%" height="100%" />
                {
                    data.VideoUrl ? setTimeout(() => {
                        <video
                            src="https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4"
                            autoPlay
                            muted
                            playsInline
                            loop
                            key={filmId}
                            width="100%"
                            height="100%"
                            className={styles.video} />
                    }, 2000)
                        : ""
                }
            </div>
        </div>
    )
}

export default FeaturedMovie