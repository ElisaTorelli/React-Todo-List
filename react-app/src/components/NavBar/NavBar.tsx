import React from 'react'
import styles from '../NavBar/navBar.module.css'
import menuIcon from '../../assets/Images/menu.png'
import homeIcon from '../../assets/Images/home.png'
import searchIcon from '../../assets/Images/search.png'
import addIcon from '../../assets/Images/add.png'
import helpIcon from '../../assets/Images/help.png'
import ringBellIcon from '../../assets/Images/notifications.png'
import profileIcon from '../../assets/Images/profile.png'

const NavBar = () => {
    return (
        <div className={styles.navBar}>
            <div className={styles.generalContainer}>
            <div className={styles.left__header__links}>
                <ul className={styles.icons}>
                    <li><a href="#" title="img"><img src= {menuIcon} alt="menuIcon" className={styles.iconImg}></img></a></li>
                    <li><a href="#" title="img"><img src= {homeIcon} alt="homeIcon" className={styles.iconImg}></img></a></li>
                    <li><input type='text' placeholder='Search...' className={styles.searchField}></input></li>
                </ul>
            </div>
            <div className={styles.right__header__links}>
                <ul className={styles.icons}>
                    <li><a href="#" title="img"><img src= {addIcon} alt="addIcon" className={styles.iconImg}></img></a></li>
                    <li><a href="#" title="img"><img src= {helpIcon} alt="helpIcon" className={styles.iconImg}></img></a></li>
                    <li><a href="#" title="img"><img src= {ringBellIcon} alt="ringBellIcon" className={styles.iconImg}></img></a></li>
                    <li><a href="#" title="img"><img src= {profileIcon} alt="profileIcon" className={styles.iconImg}></img></a></li>
                    
                </ul>
            </div>
            </div>
        </div>
    )
}

export default NavBar