import { useState } from 'react'
import { fields } from '../data/data'
import { AppContext } from './AppContext'

export const AppProvider = ({ children }) => {

    const [humans, setHumnas] = useState(fields);

    const handleAdd = ( human ) =>{
        setHumnas( prev => [...prev, human]);
    }

    const handleDelete = ( id ) =>{
        const deleted = humans.filter(human => human.id !== id);
        setHumnas(deleted);
    }

  return (

    <AppContext.Provider value={{ humans, handleAdd, handleDelete }}>
        { children }
    </AppContext.Provider>
  )
}
