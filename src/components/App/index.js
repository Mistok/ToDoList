import React, {useState, useEffect} from 'react';

import Header from "../Header/header.jsx";
import Nav from "../Navigation/navigation.jsx";
import Content from "../Content/Content.jsx";

 let tasks = [
        {
            id: 1,
            author: 'Roger Bridges',
            date: '',
            time: '06:00',
            title: 'Training - Excercises',
            location: {
                locationTitle: 'Sport Life',
                map: 'https://goo.gl/maps/aUgCZZFgGQg8iCEq6'
            },

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
            location: {
                locationTitle: 'Mushlya cafe',
                map: 'https://g.page/mushlya-cafe?share'
            },
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
    ];


const App = () => {
    // state = {
    //   tasksList:  tasks
    // };
    const [taskList, changeTaskList] = useState(tasks);

    const toLS = () => {


    };

    const fromLS = () => {

        localStorage.getItem('tasks') && changeTaskList( JSON.parse(localStorage.getItem('tasks')))
    };
    // addNewTask = (newTask) => {
    //     const {tasksList} = this.state;
    //
    //     this.setState ({
    //         tasksList: [newTask, ...tasksList]
    //     });
    // };

    const addNewTask = (newTask) => {
        console.log('adding the new task');
        changeTaskList([newTask, ...taskList]);
        console.log(`new taskList ${taskList}`);
        //toLS();
    };

    // deleteTask = (taskId, e) => {
    //     e.preventDefault();
    //     const {tasksList} = this.state;
    //
    //     this.setState ({
    //         tasksList: tasksList.filter(item => item.id !== taskId),
    //     });
    // };

    const deleteTask = (taskId, e) => {
        e.preventDefault();
        changeTaskList(taskList.filter(item => item.id !== taskId));
        //toLS();
    };

    // updateTask = (editedTask) => {
    //
    //     const {tasksList} = this.state;
    //
    //     this.setState({
    //         tasksList: tasksList.map( task => task.id === editedTask.id ? editedTask : task )
    //     })
    // };

    const updateTask = (editedTask) => {
        changeTaskList(taskList.map( task => task.id === editedTask.id ? editedTask : task ));
        //toLS();
    };

    // componentDidUpdate(){
    //     console.log('data to LS');
    //     localStorage.setItem('tasks', JSON.stringify(this.state.tasksList));
    // }

    // componentDidMount(){
    //     console.log('data from LS');
    //     localStorage.getItem('tasks') && this.setState({tasksList: JSON.parse(localStorage.getItem('tasks'))})
    // }
    useEffect(() => {
            if(localStorage.getItem('tasks')){
                fromLS();
                console.log('data from LS');
            }
        },
        []
    );
    useEffect(()=>{
        localStorage.setItem('tasks', JSON.stringify(taskList));
        console.log('data to LS');
    });

    return (
        <>
            <Header/>
            <Nav addNewTask={ addNewTask }/>
            <Content
                tasks={ taskList }
                removeTask= { deleteTask }
                contentEditTask = { updateTask }
            />
        </>
    );

};

export default App;