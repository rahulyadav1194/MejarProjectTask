import React, { useState } from 'react'
import UserContext from './UserContext'

export default function UserContextProvider({children}) {
    let [user , setUser] = useState(false)

  return (
    <UserContext.Provider value={{user , setUser}}>
      {children}
    </UserContext.Provider>
  )
}
