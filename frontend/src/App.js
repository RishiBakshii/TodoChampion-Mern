import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './screens/Home'
import Login from './screens/Login'
import Signup from './screens/Signup'
import About from './screens/About'
import Community from './screens/Community'
import './App.css'

function App() {
  return (
    <Router>

       <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/community' element={<Community/>}/>
        </Routes> 

    </Router>
  )
}

export default App