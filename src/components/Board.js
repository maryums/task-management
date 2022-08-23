import React, { useState } from 'react'
import { useParams, useNavigate, Link } from "react-router-dom";
import useData from '../DataContext'
import { useLocation } from "react-router-dom"
import { nanoid } from 'nanoid'
import EachTask from './EachTask';

const Board = () => {
    let individualTask;
    const [showModal, setshowModal] = useState(false)
    const [currTask, setCurrTask] = useState(null)

    const { boards } = useData()
    let { boardIndex } = useParams();

    let currentBoard = (boards[boardIndex])
    const boardColumns = currentBoard.columns

    const launchModel = (task) => {
        setCurrTask(task)
        setshowModal(prevState => !prevState)

    }

    const renderBoardInfo = boardColumns.map(item => {

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
                                <p className='subtasks'>  {(task.subtasks).filter(each => each.isCompleted).length} of {(task.subtasks).length} subtasks completed</p>
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
                onClick={launchModel}> Launch Model

            </button>
            <div className="tasks-container">{renderBoardInfo}</div>

            {showModal &&
                <EachTask
                    setshowModal={setshowModal}
                    task={currTask}
                />}

        </>



    )
}

export default Board