import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/LocalStorage'

export const AuthContext= createContext()

const AuthProvider = ({children}) => {
  const [data, setdata] = useState(null)
  
  useEffect(() => {
    const {employees,admin}=getLocalStorage()
    setdata({employees,admin})
  }, [])
  
  

  return (
    <AuthContext.Provider value={data}>{children}</AuthContext.Provider >
  )
}

export default AuthProvider