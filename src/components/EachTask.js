import React from 'react'
import { nanoid } from 'nanoid'

const EachTask = ({ task, setShowEachTask }) => {
    console.log(task)

    return (
        <div>
            <div className='modal'>
                <div className="modal_content">
                    <span
                        className="close"
                        onClick={() => setShowEachTask(prevState => !prevState)}
                    >
                        &times;
                    </span>
                    <div className='popup_info'>


                        <h2>{task.title}</h2>

                        <p>{task.description}</p>

                        <p>Subtasks of {(task.subtasks).filter(each => each.isCompleted).length} of {(task.subtasks).length} </p>

                        <ul>
                            {(task.subtasks).map(subtask => (
                                <li key={nanoid()}>{subtask.title} {subtask.isCompleted && "-- its completed"}</li>
                            ))}
                        </ul>


                    </div>

                </div>
            </div>

        </div>
    )
}

export default EachTask