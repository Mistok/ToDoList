
const defaultData = [
    {
        id: 1,
        author: 'Roger Bridges',
        date: '',
        time: '06:00',
        title: 'Training - Excercises',
        location: 'Sport Life',
        text: 'Legs day is the hardest day of the weak. And don`t forget to do some crunches 3/30',
        friends: [
            {
                name: 'David',
                avatar: 'path'
            },
            {
                name: 'Sara',
                avatar: 'path'
            },
            {
                name: 'Eddie',
                avatar: 'path'
            },
            {
                name: 'John',
                avatar: 'path'
            }

        ]
    },
    {
        id: 2,
        author: 'Roger Bridges',
        date: '',
        time: '10:00',
        title: 'Lunch with partner',
        location: 'Mushlya cafe',
        text: 'The Ad Hoc Committee was therefore invited either to extend the deadline for the submission of information by States or to reverse its previous decision regarding the analytical study.',
        friends: [
            {
                name: 'Dinesh',
                avatar: 'path'
            }

        ]
    }
    ,{
        id: 3,
        author: 'Roger Bridges',
        date: '',
        time: '11:40',
        title: 'Work on Presentation for Conference',
        location: 'Office',
        text: 'Make an awesome presentation with my collegues and friends Allisa and Roger.  If you don\'t have a site in place or are looking for new ideas, you\'ll want to look elsewhere for labeling presentation. The open nature of the Web encourages an atmosphere of benevolent plagiarism',
        friends: [
            {
                name: 'Alice',
                avatar: 'path'
            },
            {
                name: 'Roger',
                avatar: 'path'
            }

        ]
    },
    {
        id: 4,
        author: 'Roger Bridges',
        date: '',
        time: '20:00',
        title: 'Adams birthday party',
        location: 'Adam`s house',
        text: 'Be carefull you must to look amazing if you wanna connect with the most glamours people all over the world...',
        friends: [
            {
                name: 'Alice',
                avatar: 'path'
            },
            {
                name: 'Roger',
                avatar: 'path'
            },
            {
                name: 'David',
                avatar: 'path'
            },
            {
                name: 'Sara',
                avatar: 'path'
            },
            {
                name: 'Eddie',
                avatar: 'path'
            },
            {
                name: 'John',
                avatar: 'path'
            },
            {
                name: 'Dinesh',
                avatar: 'path'
            }
        ]
    }
];

const  reducer = (store = [...defaultData], action) => {
    switch (action.type) {
        case 'REMOVE': {
            store = store.filter(item => item.id !== action.payload);
            //localStorage.setItem('tasks', JSON.stringify(store));
            return store;
            break
        }
        case 'UPDATE': {
            store = store.map( task => task.id === action.payload.id ? action.payload : task );
           // localStorage.setItem('tasks', JSON.stringify(store));
            return store;
            break
        }
        case 'ADD' : {
            store = ([action.payload, ...store]);
           // localStorage.setItem('tasks', JSON.stringify(store));
            return store;
            break
        }
        default: {
            return store
        }
    }
};

export default reducer;