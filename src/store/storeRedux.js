import {createStore} from "redux";
import reducer from '../reducer/reducer';
import {loadState, saveState} from '../utility/localStorage';

// get tasks from LocalStorage
let serializedTasks = loadState();

const store = createStore(reducer, serializedTasks);

// setting changes to LocalStorage
store.subscribe(()=>{
    saveState(store.getState())
});

export default store;

