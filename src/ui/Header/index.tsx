import React from "react";
import { icons } from "./data";
import styles from "./style.module.css";

const Header = () => {
    const pandingIcons = icons.map((iconData, index) => (
        <a className={styles.menuItem} href={iconData.link} key={index}>
            <img src={iconData.url} alt="icon" width="20px" height="20px" />
            <h4 className={styles.smallTitle}>{iconData.text}</h4>
        </a>
    ))

    return (
        <div className={styles.container}>
            <div className={styles.userInfoList}>
                <img src="/assets/images/userDefaultPicture.png" alt="" width="34px" height="34px" />
                <h3>Daniel</h3>
            </div>
            {
                pandingIcons
            }
        </div>
    )
}

export default Header