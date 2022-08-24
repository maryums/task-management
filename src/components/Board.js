import React, { useState } from 'react'
import { useParams, useNavigate, Link } from "react-router-dom";
import useData from '../DataContext'
import { useLocation } from "react-router-dom"
import { nanoid } from 'nanoid'
import EachTask from './EachTask'
import { AddNewTask } from './AddNewTask'

const Board = () => {

    const [showEachTask, setShowEachTask] = useState(false)
    const [showAddNewTask, setShowAddNewTask] = useState(false)
    const [currTask, setCurrTask] = useState(null)

    const { boards } = useData()

    let { boardIndex } = useParams();

    let boardz = boards.newData


    let currentBoard = (boardz[boardIndex])

    const launchModel = (task) => {
        setCurrTask(task)
        setShowEachTask(prevState => !prevState)
    }


    const renderBoard = (currentBoard.columns).map(item => {

        return <div
            key={nanoid()}
            className={item.name}
        >
            <p> {item.name} ( {(item.tasks).length} ) </p>
            <div>

                <ul>
                    {(item.tasks).map(task => {

                        return (
                            <li
                                onClick={() => launchModel(task)}
                                key={nanoid()}
                            >
                                {task.title} <br />
                                <p className='subtasks'>
                                    {(task.subtasks).filter(each => each.isCompleted).length}
                                    {''} of {''}
                                    {(task.subtasks).length} subtasks completed</p>
                            </li>
                        )
                    }


                    )}
                </ul>

            </div>
        </div>
    })


    return (
        <>
            <h3>{currentBoard.name} </h3>

            <button
                onClick={() => setShowAddNewTask(prevState => !prevState)}
            >Add a New Task</button>

            <div className="tasks-container">{renderBoard}</div>

            {showEachTask &&
                <EachTask
                    setShowEachTask={setShowEachTask}
                    task={currTask}
                />}

            {showAddNewTask &&
                <AddNewTask
                    boardIndex={boardIndex}
                    setShowAddNewTask={setShowAddNewTask}
                    task={currTask}
                />}

        </>



    )

}

export default Board