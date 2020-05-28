import {createStore} from "redux";
import tasks_reducer from '../reducer/tasks_reducer'; // редюсер 1
import filters_reducer from '../reducer/filters_reducer'; // редюсер 2
import {loadState, saveState} from '../utility/localStorage';
import { combineReducers } from 'redux';

let serializedTasks = loadState(); // предварительно имеющиеся таски в LocalStorage

let combinedReducer = combineReducers({ tasks: tasks_reducer ,  filter: filters_reducer}); // объеденяю редюсеры в один

const store = createStore(combinedReducer, serializedTasks); // создаю из объедененного редюсера стор



// setting changes to LocalStorage

store.subscribe(()=>{
    saveState(store.getState())
});

export default store;

