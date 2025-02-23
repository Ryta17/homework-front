import {Task} from "./App.tsx";

type Props = {
    title: string
    tasks: Task[]
}

export const TodolistItem = ({title, tasks}: Props) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            {tasks.length === 0 ? (
                <p>Тасок нет</p>) : (
                <ul>
                    {tasks.map((task) => {
                        return (
                            <li>
                                <input type="checkbox" checked={task.isDone}/> <span>{task.title}</span>
                            </li>)
                    })
                    }
                </ul>)}
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}
