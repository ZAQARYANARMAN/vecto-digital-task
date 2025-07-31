import styles from "./style.module.css";

const FilteredFilmGenre = () => {
    return (
        <div className={styles.container} id="filmgenre">
            <h2>Film Genre</h2>
            <div className={styles.linkList}>
                <a href="#movie">Movie</a>
                <a href="#tvshow">TV Show</a>
            </div>
        </div>
    )
}

export default FilteredFilmGenre