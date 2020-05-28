

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

export const filterToday = (filter) =>(
    {
        type: 'TODAY',
        payload: filter,
    }
);
export const filterPass = (filter) =>(
    {
        type: 'PASS',
        payload: filter,
    }
);
export const filterScheduled = (filter) =>(
    {
        type: 'SCHEDULED',
        payload: filter,
    }
);
export const filterAll = (filter) =>(
    {
        type: 'ALL',
        payload: filter,
    }
);
export const filterDate = (filter) =>(
    {
        type: 'DATE',
        payload: filter,
    }
);