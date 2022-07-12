import React, { useContext, useState } from 'react'
import {context} from '../Provider/Provider'


const AddTask = () => {

    // set React component's state & useContext
    const [todo, setTodo] = useState("");
    const { dispatch } = useContext(context);

    // function triggered when pressed submit btn
    function handleSubmit(event: any) {
        event.preventDefault();
        dispatch({ type: "ADD_NEW_TASK", payload: todo });
    }

    // function triggered when pressed enter (on keyboard)
    function handleKeyDown(event: any) {
        if (event.keyCode === 13) {
            handleSubmit(event);
        }
    }

    return (
        <div>
            {/* add new task input option */}
            <input 
                placeholder='add Task' 
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