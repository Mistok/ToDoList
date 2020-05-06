import dispatcher from "../dispatcher/dispatcher";

export const removeTask = (id,e) =>{
    dispatcher.dispatch({
        type: 'REMOVE',
        payload: id,
        event: e
    })
};
export const updateTask = (task,e) =>{
    dispatcher.dispatch({
        type: 'UPDATE',
        payload: task,
        event: e
    })
};
export const addTask = (task,e) =>{
    dispatcher.dispatch({
        type: 'ADD',
        payload: task,
        event: e
    })
};