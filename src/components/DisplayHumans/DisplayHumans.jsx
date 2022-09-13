import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import { HumansList } from '../HumansList/HumansList';

export const DisplayHumans = () => {

    const { humans } = useContext(AppContext);
    console.log(humans);
  return (
    <div>
        <h2>Display humans</h2>

        <HumansList humans={humans}/>
    </div>
  )
}
