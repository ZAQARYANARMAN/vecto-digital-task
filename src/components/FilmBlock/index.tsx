import { useState } from "react";
import { BlockProps } from "../../models/IProps";
import styles from "./style.module.css";

const FilmBlock = ({ image, id, forRendering, setForRendering, setFilmId }: BlockProps) => {
    let mentionedMovies = JSON.parse(localStorage.getItem("mentionedMovies") || "[]");
    const [isSign, setIsSign] = useState<boolean>(mentionedMovies.includes(id));

    const changeMovieBeingWatched = () => {
        try {
            const filmsId = JSON.parse(sessionStorage.getItem("filmsId") || "[]");
            if (!filmsId?.includes(id)) {
                filmsId.push(id)
                sessionStorage.setItem("filmsId", JSON.stringify(filmsId));
            }
            sessionStorage.setItem("filmId", id);
            setFilmId(id);
        }
        catch (error: any) {
            console.log(`error is FilmBlock ${error}`)
        }
    }

    const changeMentionedMovies = () => {
        mentionedMovies = JSON.parse(localStorage.getItem("mentionedMovies") || "[]");

        if (isSign) {
            mentionedMovies = mentionedMovies.filter((signId: string) => signId !== id);
        } else {
            mentionedMovies.push(id)
        }
        if (setForRendering) setForRendering(prev => !prev)
        setIsSign(prev => !prev)
        localStorage.setItem("mentionedMovies", JSON.stringify(mentionedMovies))
    }

    return (
        <div className={styles.container}>
            <img src={isSign ? "/assets/icons/redLove.png" : "/assets/icons/love.png"} alt="" width="24px" height="24px" className={styles.loveIcon} onClick={changeMentionedMovies} />
            <img src={`/assets/images/${image}`} alt="" width="100%" height="100%" onClick={changeMovieBeingWatched} className={styles.filmImg} />
        </div>
    )
}

export default FilmBlock