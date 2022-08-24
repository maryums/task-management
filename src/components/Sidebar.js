import React, { useState } from 'react'
import { Link } from "react-router-dom";
import useData from '../DataContext'
import { nanoid } from 'nanoid'
import AddNewBoard from './NewBoardModal'

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

                    {board.name}

                </Link>

            </li>

        )
    }

    )


    return (

        <div>
            <h3>All Boards ( {boardz.length} ) </h3>
            <ul>
                {boardNames}
                <li onClick={() => setShowModal(prevState => !prevState)}>Create New Board</li>
            </ul>

            {showModal && <AddNewBoard
                setShowModal={setShowModal} />}

        </div>
    )
}

export default Sidebar