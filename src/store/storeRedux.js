import {createStore} from "redux";
import reducer from '../reducer/reducer';
import {loadState, saveState} from '../utility/localStorage';
debugger
let previousTasks = loadState();

const store = createStore(reducer, previousTasks);
console.log(store)
store.subscribe(()=>{
    saveState(store.getState())
});
export default store;

