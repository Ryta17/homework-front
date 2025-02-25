import {FilterValues, Task} from "./App.tsx";
import {Button} from "./Button.tsx";
import {useState} from "react";

type Props = {
    title: string
    tasks: Task[]
    deleteTask: (taskID:string) => void
    changeFilter: (filter:FilterValues) => void
    createTask: (title:string) => void
}

export const TodolistItem = ({title, tasks, deleteTask, changeFilter, createTask}: Props) => {
   /* const inputRef = useRef<HTMLInputElement>(null);*/
    const [taskTitle, setTaskTitle] = useState("")
    return (
        <div>
            <h3>{title}</h3>
            <div>
               {/* <input ref={inputRef}/>*/}
                <input value={taskTitle} onChange={(e) => setTaskTitle(e.currentTarget.value)} />
                <Button title={'+'} onClick={()=>{
                    /*if(inputRef.current){
                        createTask(inputRef.current.value)
                        inputRef.current.value=""
                    }*/
                    createTask(taskTitle)
                    setTaskTitle('')
                }} />
            </div>
            {tasks.length === 0 ? (
                <p>Тасок нет</p>) : (
                <ul>
                    {tasks.map((task) => {
                        return (
                            <li>
                                <input type="checkbox" checked={task.isDone}/> <span>{task.title}</span>
                                <Button title={'x'} onClick={()=> {deleteTask(task.id)}}/>
                            </li>)
                    })
                    }
                </ul>)}
            <div>
                <Button title={'All'} onClick={() => changeFilter('all')}/>
                <Button title={'Active'} onClick={() => changeFilter('active')}/>
                <Button title={'Completed'} onClick={() => changeFilter('completed')}/>
            </div>
        </div>
    )
}
