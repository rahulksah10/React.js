import React, { useState } from 'react'

const TodoList = () => {

    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')



    function handleInputChange(e) {
        setNewTask(e.target.value);

    }

    function handleAddTask() {

        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");

        }

    }

    function handledeletetask(index) {
        const updatetask = tasks.filter((_, indx) =>
            indx !== index);
        setTasks(updatetask)

    }

    function handletaskUp(index) {
        if (index > 0) {
            const updatemovetask = [...tasks];
            [updatemovetask[index], updatemovetask[index - 1]] = [updatemovetask[index - 1], updatemovetask[index]];
            setTasks(updatemovetask)
        }
    }
    function handletaskdown(index) {
        if (index < tasks.length - 1) {
            const updatemovetask = [...tasks];
            [updatemovetask[index], updatemovetask[index + 1]] = [updatemovetask[index + 1], updatemovetask[index]];
            setTasks(updatemovetask)
        }
    }


    return (
        <div className='flex flex-col gap-4 items-center mt-16 '>
            <>
                <h1 className='text-5xl font-bold '>To Do List</h1>
                <div className='space-x-2'>
                    <input
                        type="text"
                        placeholder='enter task here...'
                        className='border  px-4 py-2'
                        value={newTask}
                        onChange={handleInputChange}
                    />
                    <button
                        className='button border px-4 bg-green-500 py-2 cursor-pointer'
                        onClick={handleAddTask}
                    >
                        Add
                    </button>
                </div>

                <ol className=''>
                    {tasks.map((task, index) =>
                        <li
                            className='flex gap-2  border p-2  m-2'
                            key={index}>
                            <span className='text-3xl flex-1   ' >{task}</span>
                            <button
                                className='delte  border bg-red-800 px-4 py-1'
                                onClick={() => handledeletetask(index)}
                            >❌</button>
                            <button
                                className='up border bg-blue-500 px-4 py-1'
                                onClick={() => handletaskUp(index)}
                            >👆</button>
                            <button
                                className='down border bg-blue-500 px-4 py-1'
                                onClick={() => handletaskdown(index)}
                            >👇</button>
                        </li>
                    )}
                </ol>
            </>
        </div>
    )
}

export default TodoList
