// import {Dispatcher} from 'flux';
// import store_old from '../store/store_old'
//
// const dispatcher = new Dispatcher();
//
// dispatcher.register((action) => {
//     switch (action.type) {
//         case 'REMOVE': {
//             store_old.deleteTask([action.payload, action.event]);
//             break
//         }
//         case 'UPDATE': {
//             store_old.updateTask(action.payload);
//             break
//         }
//         case 'ADD' : {
//             store_old.addNewTask(action.payload);
//             break
//         }
//     }
//     store_old.emitStore()
// });
//
// export default dispatcher;