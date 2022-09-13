import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';


import './HumanCard.css';
export const HumanCard = ({human}) => {

    const { handleDelete } = useContext( AppContext );
  return (
    <div className='card'>

        <div className='flex'>
            <p>Nombre: {human.name}</p>
            <p>Genero: {human.gender}</p>
        </div>
        <div className='flex'>
            <p>Status: {human.status}</p>
            <p className='delete' onClick={()=>handleDelete(human.id)}>Eliminar</p>
        </div>
    </div>
  )
}
