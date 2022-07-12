import React, { useContext, useState } from 'react'
import {context} from '../Provider/Provider'


const AddTask = () => {

    const [todo, setTodo] = useState("");
    const { dispatch } = useContext(context);

    function handleSubmit(event: any) {
        event.preventDefault();
        dispatch({ type: "ADD_TODO", payload: todo });
    }

    function handleKeyDown(event: any) {
        if (event.keyCode === 13) {
            handleSubmit(event);
        }
    }

    return (
        <div>
            <input 
                placeholder='add Task...' 
                type='text' 
                value={todo} 
                onChange={element => setTodo(element.target.value)}
                onKeyDown={handleKeyDown}
                />
                <button onClick={handleSubmit}>Add</button>
        </div>
    )
}

export default AddTask