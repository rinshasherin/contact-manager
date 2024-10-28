import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import './bootstrap.min.css'
import Home from './pages/Home'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { Routes,Route } from 'react-router-dom'
import Add from './components/Add'
import View from './components/View'
import Edit from './components/Edit'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add' element={<Add/>} />
        <Route path='/view/:contactId' element={<View/>} />
        <Route path='/edit/:contactId' element={<Edit/>} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
