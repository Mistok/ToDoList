export const loadState = () => {
    const serializedState = localStorage.getItem('tasksState');

    console.log(serializedState);

    if(serializedState === null) {
        return undefined
    }
    return JSON.parse(serializedState)
};
export const saveState = (state) => {
    const serializedState = JSON.stringify(state);

    localStorage.setItem('tasksState', serializedState)
};