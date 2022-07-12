import React from "react";
import styles from "../SideList/sideList.module.css";
import Inbox from "../../assets/Images/inbox.png";
import Calendar from "../../assets/Images/calendar.png";
import Upcoming from "../../assets/Images/upcoming.png";
import Gridview from "../../assets/Images/gridview.png";
import Expandmore from "../../assets/Images/expandmore.png";


const SideList = () => {
    return (
    <div className={styles["containerList"]}>
        <ul>
        <li>
            <img src={Inbox} />
            Inbox
        </li>
        <li>
            <img src={Calendar} />
            Today
        </li>
        <li>
            <img src={Upcoming} />
            Upcoming
        </li>
        <li>
            <img src={Gridview} />
            Filter & Label
        </li>
        <li>
            <img src={Expandmore} />
            Project
        </li>
        <li>
            <span className={styles["circle"]}></span>
            Personal
            </li>
        </ul>
    </div>
);
};

export default SideList;