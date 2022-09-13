
import { AddHumansForm } from '../components/AddHumansForm/AddHumansForm';
import { DisplayHumans } from '../components/DisplayHumans/DisplayHumans';
import './Layout.css';
export const Layout = () => {
  return (
    <div className='layout'>
        <h1>Add Humans</h1>

        <div className='bottom-container'>
            <AddHumansForm/>
            <DisplayHumans/>
        </div>
    </div>
  )
}
