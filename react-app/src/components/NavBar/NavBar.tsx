import React from 'react'
import styles from '../NavBar/navBar.module.css'
import menuIcon from '../../assets/Images/menu.png'
import homeIcon from '../../assets/Images/home.png'
import searchIcon from '../../assets/Images/search.png'

const NavBar = () => {
    return (
        <div className={styles.navBar}>
            <div className={styles.left__header__links}>
                <ul>
                    <li><a href="#" title="img"><img src= {menuIcon} alt="menuIcon"></img></a></li>
                    <li><a href="#" title="img"><img src= {homeIcon} alt="homeIcon"></img></a></li>
                    <li><a href="#" title="img"><img src= {searchIcon} alt="searchIcon"></img></a></li>
                </ul>
        </div>
        </div>
    )
}

export default NavBar