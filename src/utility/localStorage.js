export const loadState = () => {
    const serializedState = localStorage.getItem('tasks');

    if(serializedState === null) {
        return undefined
    }
    return JSON.parse(serializedState)
};
export const saveState = (tasks) => {
    const serializedState = JSON.stringify(tasks);
    localStorage.setItem('tasks', serializedState)
};