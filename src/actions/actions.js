


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
// export const showMore = (limit) =>(
//     {
//         type: 'SHOW_MORE',
//         payload: limit,
//     }
// );