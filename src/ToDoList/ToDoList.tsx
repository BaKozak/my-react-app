import { BaseSyntheticEvent, useState } from "react"
import stylesToDoList from './ToDoList.module.css'

function ToDoList() {


    const [tasks, setTasks] = useState(["Wake up", "Take a shower", "Eat breakfast", "Go to daily"])
    const [newTask, setNewTask] = useState("")

    function handleInputChange(event: BaseSyntheticEvent) {
        setNewTask(event.target.value);
    }

    function addTask() {

        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index: number) {
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks);
    }

    function moveTaskUp(index: number) {
        if (index > 0) {
            const updatedTasks = [...tasks];

            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]

            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index: number) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];

            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]

            setTasks(updatedTasks);
        }
    }

    return (
        <div className={stylesToDoList["todo-list-component"]}>
            <h1 data-cy="todo-title">My TODO List</h1>

            <div data-cy="task-input-section">
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange} />

                <button className={stylesToDoList["add-button"]}
                    onClick={addTask}>
                    Add
                </button>
            </div>

            <ol data-cy="todo-task-list">
                {tasks.map((task, index) =>
                    <li className={stylesToDoList["todo-list-entry"]} key={index}>
                        <span className={stylesToDoList["text"]}>{task} </span>
                        <button
                            className={stylesToDoList["delete-button"]}
                            onClick={() => deleteTask(index)}
                        >
                            Delete
                        </button>
                        <button
                            className={stylesToDoList["move-button"]}
                            onClick={() => moveTaskUp(index)}
                        >
                            Up
                        </button>
                        <button
                            className={stylesToDoList["move-button"]}
                            onClick={() => moveTaskDown(index)}
                        >
                            Down
                        </button>
                    </li>
                )}
            </ol>
        </div>

    )
}

export default ToDoList