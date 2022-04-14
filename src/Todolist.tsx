import React from 'react';

type tasksType={
    id:number
    title:string
    isDone:boolean
}
type propsType={
    title:string
    tasks: Array<tasksType>
}
export const Todolist = (props:propsType) => {

    return(
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>add +</button>
            </div>
            <ul>
                <li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>
                <li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>
                <li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}