

/* TaskList actions */

export const removeTask = (id,e) => (
   {
        type: 'REMOVE',
        payload: id,
        event: e
   }
);
export const updateTask = (task) =>(
   {
        type: 'UPDATE',
        payload: task,
   }
);
export const addTask = (task) =>(
    {
        type: 'ADD',
        payload: task,
    }
);

/* Filter actions */

export const setFilter = (filter) =>(
    {
        type: 'SET_FILTER',
        payload: filter,
    }
);

/* Return filtered task list */


export const filteredTaskList = (filter) =>(
    {
        type: 'FILTER_TASK_LIST',
        payload: filter,
    }
);