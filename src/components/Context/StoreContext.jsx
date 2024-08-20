import React, { createContext } from 'react'
import {projects} from '../../assets/data'
import profile from '../../assets/profile.jpg'


export const ContextProvider = createContext()

const StoreContext = ({children}) => {

    const data = {
        projects,
        profile
    }

  return (
    <ContextProvider.Provider value={data}>
        {children}
    </ContextProvider.Provider>
  )
}

export default StoreContext