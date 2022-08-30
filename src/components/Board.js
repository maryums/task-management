import React, { useState } from 'react'
import { useParams, useNavigate, Link } from "react-router-dom";
import useData from '../DataContext'
import { useLocation } from "react-router-dom"
import { nanoid } from 'nanoid'
import EachTask from './EachTask'
import { AddNewTask } from './AddNewTask'
import '../styles/board.css'

const Board = () => {

    const [showEachTask, setShowEachTask] = useState(false)
    const [showAddNewTask, setShowAddNewTask] = useState(false)
    const [currTask, setCurrTask] = useState(null)
    const [taskIndex, setTaskIndex] = useState(null)

    const { boards } = useData()

    let { boardIndex } = useParams();

    let boardz = boards.newData



    let currentBoard = (boardz[boardIndex])

    const launchModel = (task, taskIndex) => {
        setTaskIndex(taskIndex)
        setCurrTask(task)
        setShowEachTask(prevState => !prevState)
    }

    const renderBoard = (currentBoard.columns).map(item => {

        let boardArr = currentBoard.columns




        return <div
            key={nanoid()}
            className={item.name}
        >
            <p> {item.name} ( {(item.tasks).length} ) </p>
            <div>

                <ul>
                    {(item.tasks).map(task => {

                        let taskArr = item.tasks
                        let taskIndex = taskArr.indexOf(task)

                        return (

                            <li
                                className='card'
                                onClick={() => launchModel(task, taskIndex)}
                                key={nanoid()}
                            >
                                {task.title} <br />
                                <div className='subtasks'>
                                    {(task.subtasks).filter(each => each.isCompleted).length}
                                    {''} of {''}
                                    {(task.subtasks).length} subtasks completed</div>
                            </li>
                        )

                    }


                    )}
                </ul>

            </div>
        </div>
    })


    return (
        <div className="board">
            <div className='board-top'>
                <h3>{currentBoard.name} </h3>
                <button
                    onClick={() => setShowAddNewTask(prevState => !prevState)}
                >Add a New Task</button>
            </div>

            <div className="tasks-container">{renderBoard}</div>

            {showEachTask &&
                <EachTask
                    setShowEachTask={setShowEachTask}
                    task={currTask}
                    boardIndex={boardIndex}
                    taskIndex={taskIndex}
                />}

            {showAddNewTask &&
                <AddNewTask
                    boardIndex={boardIndex}
                    setShowAddNewTask={setShowAddNewTask}
                    task={currTask}
                />}

        </div>



    )

}

export default Board