import React from 'react'
import { HumanCard } from '../HumansCard/HumanCard'

import './HumanList.css';
export const HumansList = ({ humans }) => {
  return (
    <div className='list'>
    {
        humans.map( human => <HumanCard key={human.id} human={human}/>)
    }
    </div>
  )
}
