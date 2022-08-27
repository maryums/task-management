import react, { useState, useContext } from 'react'
import useData from '../DataContext'

export const AddNewTask = ({ setShowAddNewTask, boardIndex }) => {

    const { saveFormData } = useData()

    const [formData, setFormData] = useState(
        {
            title: "",
            description: "",
            status: "",
            subtasks: []
        }
    )



    const handleChange = (event) => {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    const handleSubmit = () => {
        let statusIndex;

        if (formData.status === "Todo") {
            statusIndex = 0
        }
        else if (formData.status === "Doing") {
            statusIndex = 1
        }
        else {
            statusIndex = 2
        }
        saveFormData(formData, boardIndex, statusIndex)

        setFormData({
            title: "",
            description: "",
            status: "",
            subtasks: []
        })
        setShowAddNewTask(prevState => !prevState)

    }

    const { boards } = useData()

    return (

        <div className='modal'>
            <div className="modal_content">
                <span
                    className="close"
                    onClick={() => setShowAddNewTask(prevState => !prevState)}
                >
                    &times;
                </span>

                <div className='add-ask-form'>
                    <h1>AddNewTask</h1>

                    <label htmlFor='title'> Title</label>
                    <input
                        type="title"
                        id="title"
                        value={formData.title}
                        name="title"
                        placeholder="e.g. Take a coffee break"
                        onChange={handleChange}
                    />

                    <label htmlFor='description'> Description</label>

                    <textarea
                        rows="4"
                        cols="50"
                        id="description"
                        name="description"
                        value={formData.description}
                        placeholder="e.g. It's always nice a take a coffee break and lorem epsum dolem blah blah blah"
                        onChange={handleChange}
                    />

                    <label htmlFor='subtasks'>Subtasks</label>
                    <button>Add New Subtask</button>

                    <label htmlFor='status'>Status </label>
                    <select
                        name="status"
                        value={formData.status}
                        id="status"
                        onChange={handleChange}
                    >
                        <option value="">Select</option>
                        <option value="Todo">Todo</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                    </select>

                    <button
                        onClick={handleSubmit}>
                        Create Task
                    </button>
                </div>

            </div>
        </div>



    )
}
