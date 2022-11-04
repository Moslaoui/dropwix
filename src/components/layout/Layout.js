import './layout.scss'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import Home from '../../pages/home/Home'
import {useContext} from 'react'
import { ToggleContext } from '../../App'

function Layout(props) {

  const ToggleTheme = useContext(ToggleContext)

  return (
    <div className='home'>
        <Navbar></Navbar>
        <div className='Contenair'> 
          <Sidebar></Sidebar>
          <div className={ToggleTheme.isActive? 'content active': 'content' }> {props.children} </div>
        </div>
    </div>
        
       

  )
}

export default Layout
