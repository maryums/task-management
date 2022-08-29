import react, { useState, useContext, useEffect } from 'react'
import MainBoard from './components/MainBoard'
import Sidebar from './components/Sidebar'
import Board from './components/Board'
import useData from './DataContext'
import { Routes, Route } from "react-router-dom";


const Home = () => {
    return (
        <div className='Home'>
            <div>
                <Sidebar />
            </div>

            <div>
                <MainBoard />

            </div>




        </div>
    )
}

export default Home