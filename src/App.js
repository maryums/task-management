import react, { useState, useContext, useEffect } from 'react'
import MainBoard from './components/MainBoard'
import Sidebar from './components/Sidebar'
import Board from './components/Board'
import useData from './DataContext'
import { Routes, Route } from "react-router-dom";
import Home from './Home'

const App = () => {



  return (
    <div className='App'>
      <Routes>

        <Route path="/" element={<Home />} >
          <Route path=":boardIndex" element={<Board />} />


        </Route>



      </Routes>

    </div>
  )
}

export default App