import React, { useState } from 'react'
import { Link } from "react-router-dom";
import useData from '../DataContext'
import { nanoid } from 'nanoid'
import AddNewBoard from './NewBoardModal'
import '../styles/sidebar.css'
import boardSVG from '../assets/icon-board.svg'

const Sidebar = () => {
    const { boards } = useData()

    const [showModal, setShowModal] = useState(false)

    let boardz = boards.newData


    const boardNames = boardz.map(board => {
        let boardIndex = boardz.indexOf(board)
        return (
            <li key={nanoid()}>
                <Link
                    to={`/${boardIndex}`}
                    key={nanoid()}
                >
                    <img className="boardsvg" src={boardSVG} /> <span>{board.name}</span>
                </Link>

            </li>

        )
    }

    )


    return (

        <div className='sidebar'>
            <h2>kanban </h2>
            <h3>All Boards ( {boardz.length} ) </h3>
            <ul>
                {boardNames}
                <li onClick={() => setShowModal(prevState => !prevState)}>
                    <img className="boardsvg" src={boardSVG} /> <span className='createnewboard'> + Create New Board</span>
                </li>
            </ul>

            {showModal && <AddNewBoard
                setShowModal={setShowModal} />}

        </div>
    )
}

export default Sidebar