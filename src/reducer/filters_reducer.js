const defaultData = {
    type: null,
    character: null

};

const filters_reducer = (store = defaultData, action) => {
    switch (action.type) {
        case 'FILTER':
            store.character = action.payload;
            return store;
        default:
            return store
    }
};

export default filters_reducer;