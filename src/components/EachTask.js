import React, { useState } from 'react'
import useData from '../DataContext'
import { nanoid } from 'nanoid'
import '../styles/eachtask.css'
import threedots from '../assets/icon-vertical-ellipsis.svg'
import produce from 'immer'

const EachTask = ({ task, setShowEachTask, boardIndex, taskIndex }) => {

    let originalStatus = task.status

    const { editFormData } = useData()


    const [editableItems, setEditableItems] = useState({
        title: task.title,
        description: task.description,
        subtasks: [...task.subtasks],
        status: task.status
    })

    const handleSubTasks = (event, index) => {
        const nextState = produce(task, draftState => {
            draftState.subtasks[index].isCompleted = !draftState.subtasks[index].isCompleted
        })
        let changingStatus = false
        let statusIndex;

        if (nextState.status === "Todo") {
            statusIndex = 0
        }
        else if (nextState.status === "Doing") {
            statusIndex = 1
        }
        else {
            statusIndex = 2
        }

        editFormData(nextState, boardIndex, statusIndex, taskIndex, changingStatus)
    }

    const handleEdit = (event, taskStatus) => {

        const { name, value, type, checked } = event.target

        const nextState = produce(task, draftState => {
            draftState[name] = value
        })

        let originalStatusIndex;

        if (originalStatus === "Todo") {
            originalStatusIndex = 0
        }
        else if (originalStatus === "Doing") {
            originalStatusIndex = 1
        }
        else {
            originalStatusIndex = 2
        }

        let changingStatus = true
        let statusIndex;
        if (nextState.status === "Todo") {
            statusIndex = 0
        }
        else if (nextState.status === "Doing") {
            statusIndex = 1
        }
        else {
            statusIndex = 2
        }

        console.log(originalStatusIndex)

        editFormData(nextState, boardIndex, statusIndex, originalStatusIndex, taskIndex, changingStatus)
    }

    return (
        <div className='each-task-modal'>
            <div className='modal'
                onClick={() => setShowEachTask(prevState => !prevState)}
            >
                <div className="modal_content"
                    onClick={e => e.stopPropagation()}>
                    <span
                        className="close"
                        onClick={handleEdit}
                    >
                        <img src={threedots} />
                    </span>
                    <div className='each-task-info'>

                        <h2>{task.title}</h2>

                        <p className='description'>{task.description}</p>

                        <p className='subtasks'>Subtasks ( {(task.subtasks).filter(each => each.isCompleted).length} of {(task.subtasks).length} )</p>

                        <ul>
                            {(task.subtasks).map(subtask => {
                                let subTaskArr = task.subtasks
                                let index = subTaskArr.indexOf(subtask)
                                return (
                                    <li key={nanoid()}
                                        className={subtask.isCompleted ? "strikethrough" : ""}
                                    >
                                        <input
                                            onChange={(e) => handleSubTasks(e, index)}
                                            type="checkbox"
                                            defaultChecked={subtask.isCompleted}
                                            id={subtask.title}
                                            name="subtasks"
                                            value={subtask.isCompleted}

                                        />
                                        <label htmlFor={subtask.title}>{subtask.title} </label>
                                    </li>
                                )
                            }

                            )}
                        </ul>

                        <label
                            className="task-status"
                            htmlFor='status'>Current Status</label>
                        <br />
                        <select
                            id="status"
                            name="status"
                            onChange={(e) => handleEdit(e, task.status)}
                        >
                            <option value="Todo"> Todo</option>
                            <option value="Doing"> Doing</option>
                            <option value="Done"> Done</option>

                        </select>


                    </div>

                </div>
            </div>

        </div>
    )
}

export default EachTask