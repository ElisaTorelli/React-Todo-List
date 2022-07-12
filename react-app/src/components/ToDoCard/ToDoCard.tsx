import React, { useContext, useState } from 'react'
import styles from '../ToDoCard/toDoCard.module.css'
import { useEffect } from 'react';
import { context } from "../Provider/Provider";
import ToDoList from '../ToDoList/ToDoList';
import AddTask from '../AddTask/AddTask';


const ToDoCard = () => {

    const {dispatch} = useContext(context)

    
    function handleClearButtonClick(event: any){
        event.preventDefault();
        dispatch({type: 'CLEAR_TODOS'});
    }

    return (
        <div>
            <button onClick={handleClearButtonClick}>ClearItems</button>
            <ToDoList />
            <AddTask />
        </div>
    )
}

export default ToDoCard