import React from 'react'
import Navbar from './component/Navbar'
import { Outlet } from 'react-router-dom'
import UserContextProvider from './context/UserContextProvider'

export default function App() {
  return (
    <UserContextProvider>
      <Navbar/>
      <Outlet/>
    </UserContextProvider>
  )
}
