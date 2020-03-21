import {rerenderEntireTree} from "../index";

let state = {
    tasks: [
        {
            id: 1,
            author: 'Roger Bridges',
            date: '',
            time: '6:00',
            title: 'Training - Excercises',
            location: {
                locationTitle: 'Sport Life',
                map: 'https://goo.gl/maps/aUgCZZFgGQg8iCEq6'
            },

            text: 'Leg day is the hardest day of the weak. And don`t forget to do some crunches 3/30',
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
            location: {
                locationTitle: 'Mushlya cafe',
                map: 'https://g.page/mushlya-cafe?share'
            },
            text: 'Remember to talk about deadline and how to extend the time that left before',
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
            location: {
                locationTitle: 'Office',
                map: 'https://goo.gl/maps/5Esw7W7o8ctEaqvS6'
            },
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
            location: {
                locationTitle: 'Adam`s house',
                map: 'https://goo.gl/maps/DgihmXY8gJa5DC8LA'
            },
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
    ]
};

export let addNewTask = (newTask) =>{
    console.log(newTask);
    state.tasks.push(newTask);
    rerenderEntireTree(state);
};


export default state;