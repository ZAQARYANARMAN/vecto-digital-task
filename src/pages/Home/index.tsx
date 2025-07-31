import Header from "../../ui/Header";
import Main from "../../ui/Main";
import styles from "./style.module.css";

const Home = () => {
    if (!sessionStorage.getItem("filmsId")){
        sessionStorage.setItem("filmsId", "[]");
    }

    return (
        <div className={styles.container}>
            <Header />
            <Main />
        </div>
    )
}

export default Home