import React, { createContext, useEffect, useReducer } from 'react'
import produce from "immer";


let context: any;


interface Todo{
    text: string;
    id: number;
    completed: boolean;
}

interface Draft{
    tasks: Todo[];
    id: number;
}

interface State{
    tasks?: Todo[];
    id?: number;
}

//Redux Action object with different options
type Actions =
    | { type: "SET_TASK"; payload: Todo[] }
    | { type: "ADD_NEW_TASK"; payload: string }
    | { type: "DELETE_TASK"; payload: number }
    | { type: "REMOVE_ALL_TASKS" }
    | { type: "CHECK_COMPLETED_TASKS"; payload: Todo };

//Redux 'reducer' to get current state & update it
const taskReducer = produce((draft: Draft, action: Actions) => {
    switch (action.type) {
        case "SET_TASK":
            draft.tasks = action.payload;
        break;
        case "ADD_NEW_TASK":
            const todo: Todo = {
                text: action.payload,
                id: draft.id,
                completed: false
            };
            draft.tasks.push(todo);
            draft.id = draft.id + 1;
            break;
        case "DELETE_TASK":
            draft.tasks = draft['tasks'].filter(element => element.id !== action.payload);
            break;
        case "REMOVE_ALL_TASKS":
            draft.tasks = [];
            break;
        case "CHECK_COMPLETED_TASKS":
            const todoIdx = draft.tasks.findIndex(element => element.id === action.payload.id)
            draft.tasks[todoIdx].completed = !draft.tasks[todoIdx].completed
    }
})

// initial component's state
const initialState: Draft = {
    tasks: [],
    id: 0
}

interface Props{
    children: React.ReactNode;
}


//React component
const Provider = (props: Props) => {
    context = createContext<{state: State; dispatch: () => void }>({
        state: {},
        dispatch: () => {}
    });
    const [state, dispatch] = useReducer(taskReducer, initialState);

    useEffect(() => {
        const tasks: any = window.localStorage.getItem('tasks');
        //JSON.parse() method --> to parse data to JS object
        dispatch({type: "SET_TASK", payload: JSON.parse(tasks) || [] });   
    }, []);

    useEffect(() => {
        //JSON.stringify() method --> to convert JS object to JSON string
        window.localStorage.setItem("tasks", JSON.stringify(state.tasks));
    }, [state.tasks])

    return (
        <div>
            <context.Provider value={{state, dispatch}}>
                {/* add reference between opening / closing tag */}
                {props.children}
            </context.Provider>
        </div>
    )
}

export {context}
export default Provider