import dispatcher from "../dispatcher/dispatcher";

export const removeTask = (id,e) =>{
    dispatcher.dispatch({
        type: 'REMOVE',
        payload: id,
        event: e
    })
};
export const updateTask = (task) =>{
    dispatcher.dispatch({
        type: 'UPDATE',
        payload: task,
    })
};
export const addTask = (task) =>{
    dispatcher.dispatch({
        type: 'ADD',
        payload: task,
    })
};