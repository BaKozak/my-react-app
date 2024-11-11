import React, { BaseSyntheticEvent, useState } from "react"
import styles from './ToDoList.module.css'

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
        <div className={styles["to-do-list"]}>
            <h1>todo List</h1>

            <div>
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange} />

                <button className={styles["add-button"]}
                    onClick={addTask}>
                    Add
                </button>
            </div>

            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task} </span>
                        <button
                            className={styles["delete-button"]}
                            onClick={() => deleteTask(index)}
                        >
                            Delete
                        </button>
                        <button
                            className={styles["move-button"]}
                            onClick={() => moveTaskUp(index)}
                        >
                            Up
                        </button>
                        <button
                            className={styles["move-button"]}
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