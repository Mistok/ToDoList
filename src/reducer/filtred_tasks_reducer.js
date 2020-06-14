const defaultData = [];

const filters_reducer = (store = defaultData, action) => {

    switch (action.type) {

        case 'FILTER_TASK_LIST':
            store.filter_type = action.payload;
            return store;
        default:
            return store
    }
};

export default filters_reducer;