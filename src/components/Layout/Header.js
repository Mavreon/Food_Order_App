import React from "react";
import styles from './Header.module.css';
import mealsImg from '../../assets/meals2.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props)=>{
    return(
        <React.Fragment>
            <header className={styles.header}>
                <h1>React Meals</h1>
                <HeaderCartButton/>
            </header>
            <div className={styles["main-image"]}>
                <img src={mealsImg} alt="A table filled with delicious food"/>
            </div>
        </React.Fragment>
    )
}

export default Header;