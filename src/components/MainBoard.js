import React, { useState } from 'react'
import { useParams, useNavigate, Link, Outlet } from "react-router-dom";

import useData from '../DataContext'
import { nanoid } from 'nanoid'
import NewBoardModal from './NewBoardModal'


const MainBoard = () => {

    return (

        <div>



            <Outlet />
        </div>


    )
}

export default MainBoard