const defaultData = {
    type: null,
    character: null

};

const filters_reducer = (store = defaultData, action) => {

    switch (action.type) {

        case 'ALL':
            store.type = action.type;
            store.character = action.payload;
            return store;
        case 'TODAY':
            store.type = action.type;
            store.character = action.payload;
            return store;
        case 'PASS':
            store.type = action.type;
            store.character = action.payload;
            return store;
        case 'SCHEDULED':
            store.type = action.type;
            store.character = action.payload;
            return store;
        case 'DATE':
            store.type = action.type;
            store.character = action.payload;
            return store;
        default:
            return store
    }
};

export default filters_reducer;