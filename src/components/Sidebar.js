import React, { useState } from 'react'
import { useParams, useNavigate, Link, Outlet } from "react-router-dom";
import useData from '../DataContext'
import { nanoid } from 'nanoid'
import NewBoardModal from './NewBoardModal'



const Sidebar = () => {


    const [showModal, setShowModal] = useState(false)
    const { boards, handleGetBoard } = useData()


    const boardNames = boards.map(board => {

        let boardIndex = boards.indexOf(board)

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
            <h3>All Boards ( {boards.length} ) </h3>
            <ul>
                {boardNames}
                <li onClick={() => setShowModal(prevState => !prevState)}>Create New Board</li>
            </ul>

            {showModal && <NewBoardModal
                setShowModal={setShowModal} />}

        </div>
    )
}

export default Sidebar