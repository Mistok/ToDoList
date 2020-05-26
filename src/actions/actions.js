


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
export const filterToday = (filter) =>(
    {
        type: 'FILTER',
        payload: filter,
    }
);
export const filterDate = (filter) =>(
    {
        type: 'DATE',
        payload: filter,
    }
);