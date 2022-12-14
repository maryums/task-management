import React, { useState } from 'react'
import '../styles/newboardmodal.css'

const AddNewBoard = ({ setShowModal }) => {

    return (
        <div>
            <div className='modal'>
                <div className="modal_content">
                    <span
                        className="close"
                        onClick={() => setShowModal(prevState => !prevState)}>
                        &times;
                    </span>
                    <div className='popup_info'>


                        <h2>Add New Board</h2>
                        <label>Title</label>
                        <input />
                        <br />
                        <label>Description</label>
                        <input />

                        <br />
                        <button> Create Task</button>


                    </div>

                </div>
            </div>

        </div>
    )
}

export default AddNewBoard