import React, { useContext } from 'react'
import {context} from '../Provider/Provider'
import { AnimatePresence, motion } from "framer-motion";


const ToDoList = () => {
    //useContext for React component's state
    const{state, dispatch} = useContext(context)

    // function to delete a task
    function handleDelete(todo: any){
        dispatch({type: 'DELETE_TASK', payload: todo.id})
    }

    // function to check a task
    function handleCheckboxClick(todo: any) {
        dispatch({ type: "CHECK_COMPLETED_TASKS", payload: todo });
    }

    // add condition based on component's state
    if(!state.todos){
        return <div/>
    }

    return (
        <div>
            <ul className='todo-list'>
                {state.todos.map((todo: any) => {
                    return(
                        // add framer motion library features
                        <AnimatePresence exitBeforeEnter>
                            <motion.li 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className='todo-list__item'
                                key={todo.id}>
                            <span onClick={() => handleCheckboxClick(todo)}>
                            {/* condition if task completed or not */}
                            {todo.completed ? (<span className="todo-list__item__completed" />) : (<span className="todo-list__item__not-completed" />)}
                            </span>
                            {todo.text}
                            {/* delete btn option */}
                            <span className="todo-list__item__delete-button" onClick={() => handleDelete(todo)}>X</span>
                            </motion.li>
                        </AnimatePresence>
                    )
                })}
            </ul>
        </div>
    )
}

export default ToDoList