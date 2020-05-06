import {Dispatcher} from 'flux';
import store from '../store/store'

const dispatcher = new Dispatcher();

dispatcher.register((action) => {
    switch (action.type) {
        case 'REMOVE': {
            store.deleteTask([action.payload, action.event]);
            break
        }
        case 'UPDATE': {
            store.updateTask(action.payload);
            break
        }
        case 'ADD' : {
            store.addNewTask(action.payload);
            break
        }
    }
    store.emitStore()
});

export default dispatcher;