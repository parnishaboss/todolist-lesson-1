import React from 'react';
import './App.css';
import {Todolist} from './Todolist';

const App = () => {

    const tasks1 = [
        {id: 1, title: "CSS", isDone:true},
        {id: 2, title: "JS", isDone:false},
        {id: 3, title: "React", isDone:false}
    ]
    const tasks2 = [
        {id: 1, title: "Film 1", isDone:true},
        {id: 2, title: "Film 2", isDone:false},
        {id: 3, title: "Multitki", isDone:false}
    ]

    return (
        <div className="App">
            <Todolist title="What to learn?" tasks={tasks1}/>
            <Todolist title="What to watch!?" tasks={tasks2}/>
        </div>
    );
}

export default App;
