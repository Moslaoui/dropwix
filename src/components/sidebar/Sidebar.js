import './sidebar.scss'
import { FiHome } from 'react-icons/fi'
import {AiOutlineTrophy} from 'react-icons/ai'
import { BiStore } from 'react-icons/bi'
import { MdNotificationsNone } from 'react-icons/md'
import { SiGoogleanalytics} from 'react-icons/si'
import { RiBookmarkLine } from 'react-icons/ri'
import {useState, useContext} from 'react'
import { ToggleContext } from '../../App'
import {Link} from "react-router-dom"



function Sidebar() {
    
    const ToggleTheme = useContext(ToggleContext)

    const data = [
        {id: 0, title: 'Home', icon: (<FiHome className='icon'></FiHome>), link: ''  },
        {id: 1, title:'Featured products', icon: (<AiOutlineTrophy className='icon'></AiOutlineTrophy>), link: 'products'},
        {id: 2, title: 'Notifications', icon: (<MdNotificationsNone className='icon'></MdNotificationsNone>), link: '/notifications'},
        {id: 3, title: 'Analytics', icon: (<SiGoogleanalytics className='icon'></SiGoogleanalytics>), link: '/analytics'},
        {id: 4, title: 'Saved', icon: (<RiBookmarkLine className='icon'></RiBookmarkLine>), link: '/saved'},
        {id: 5, title: 'Imported', icon: (<BiStore className='icon'></BiStore>), link: '/imported'}
    ]

    const [appState, changeState] = useState({
        activeobject: null,
        objects: data
        
    })

    function ToggleActive(index){
        changeState({...appState, activeobject: appState.objects[index]});
        
    }

    function ToggleActiveStyle(index){
        if(appState.objects[index] === appState.activeobject){
            return 'active'
        } else{
            return ''
        }
    }
        
  return ( 
    
    <div className={ToggleTheme.isActive? 'navigation active': 'navigation'}>
        <ul>
            {appState.objects.map((e) => (
            <Link to={e.link} style={{textDecoration: 'none'}} >
            <li key={e.id} className={ToggleActiveStyle(e.id)} onClick = {() => {
                ToggleActive(e.id)
            }}>
                <a href="#">
                    <span className="icon-contenair">{e.icon}</span>
                    <span className={ToggleTheme.isActive? 'title active' : 'title'}>{e.title}</span>
                </a>
            </li>
            </Link>
            ))}
            
        </ul>
        <div className={ToggleTheme.isActive? 'toggle active' : 'toggle'} onClick={ToggleTheme.handleToggle}>
        </div>
    </div>
  )
}

export default Sidebar