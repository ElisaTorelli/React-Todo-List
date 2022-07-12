import React, { useContext } from 'react'
import styles from '../ToDoCard/toDoCard.module.css'
// import { useEffect } from 'react';
import { context } from "../Provider/Provider";
import ToDoList from '../ToDoList/ToDoList';
import AddTask from '../AddTask/AddTask';
// import listIcon from '../../assets/Images/list.png'


const ToDoCard = () => {

    const {dispatch} = useContext(context)
    
    function handleClearButtonClick(event: any){
        event.preventDefault();
        dispatch({type: 'REMOVE_ALL_TASKS'});
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.headerContainer}>
                <h2>Today</h2>
            </div>
            <ToDoList />
            <AddTask />
            <button onClick={handleClearButtonClick}>Cancel</button>
        </div>
    )
}

export default ToDoCard