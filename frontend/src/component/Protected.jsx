import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import UserContext from '../context/UserContext'

export default function Protected({children}) {
    let user= true
    if(user){
        return children
    } else {
        return<Navigate to= '/admin/adminlogin'/>
    }
  
}
