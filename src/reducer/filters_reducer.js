const defaultData = {
    filter_type: null
};

const filters_reducer = (store = defaultData, action) => {

    switch (action.type) {

        case 'SET_FILTER':
            store.filter_type = action.payload;
            return store;
        default:
            return store
    }
};

export default filters_reducer;