import { useState } from 'react'
import { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import { v4 as uuidv4 } from 'uuid';
import './AddHumanForm.css';

export const AddHumansForm = () => {

    const { handleAdd } = useContext(AppContext);
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [status, setStatus] = useState('');
    const [empty, setEmpty] = useState(false);
    const onSubmit = ( e ) =>{
        e.preventDefault();

        if(name !== '' && gender !== '' && status !== ''){
            handleAdd({id: uuidv4(),name, gender, status});
            setEmpty(false);
            return;
        }
        else{
            setEmpty(true);
        }

    }

  return (
    <div>


    <h2 className='title-add'>Add</h2>
    <div className='form'>

    <form onSubmit={ onSubmit }>
        
        <div className='input-text-container'>
            <label htmlFor="">Nombre:</label>
            <input className='input-text' type="text" onChange={(text)=>setName(text.target.value)} />
        </div>

        <div className='input-text-container'> 
            <select className='select-input' name="gender" id="" onClick={(e)=>setGender(e.target.value)}>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="Neutral">Neutral</option>
            </select>
        </div>

        <div>
            <label>
                <input type="radio" value='alive' checked={status === 'alive'} onChange={()=>setStatus('alive')} />
                Alive
            </label>
        </div>

            <div>

            <label >
                <input type="radio" value='dead' checked={status === 'dead'} onChange={()=>setStatus('dead')}/>
                Dead
            </label>
            </div>


            <div>

            <label >
                <input type="radio"  value='missing' checked={status === 'missing'} onChange={()=>setStatus('missing')}/>
                missing
            </label>
            </div>
        <button className='button' type='submit'>Add</button>
            
            { empty && (<p>Algún campo esta vacio</p>) }
    </form>
    </div>
    </div>
  )
}
