import styles from "./style.module.css";
import filmsData from "../../json/filmsData.json";
import { BlockProps, TrendingNowProps } from "../../models/IProps";
import List from "../../components/List";
import { useState } from "react";

const Search = ({ setFilmId, setForRendering, forRendering }: TrendingNowProps) => {
    const [value, setValue] = useState("");
    const data = filmsData.TendingNow.filter(filmInfo => filmInfo.Title.toLowerCase().startsWith(value));

    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return (
        <div className={styles.container} id="search">
            <List title="Search" data={data} setFilmId={setFilmId} setForRendering={setForRendering} forRendering={forRendering} >
                <input type="text" placeholder="kino name" onChange={changeValue} className={styles.searchInp} />
            </List>
        </div>
    )
}

export default Search