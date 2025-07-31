import { ListProps } from "../../models/IProps";
import FilmBlock from "../FilmBlock";
import styles from "./style.module.css";

const List = ({ children, title, data, setFilmId, setForRendering, forRendering }: ListProps) => {
    return (
        <div>
            <div className={styles.container}>
                <h2>{title}</h2>
                {children}
                <div className={styles.trendingNowContainer}>
                    {
                        data ? data.map((filmInfo, index) => (
                            <FilmBlock image={filmInfo.CoverImage} id={filmInfo.Id} setFilmId={setFilmId} key={index} forRendering={forRendering} setForRendering={setForRendering} />
                        )) : ""
                    }
                </div>
            </div>
        </div>
    )
}

export default List