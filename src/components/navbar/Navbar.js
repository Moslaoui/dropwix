// import { FiMenu } from 'react-icons/fi';
import { GoSearch } from 'react-icons/go';
import {IoMdOptions} from 'react-icons/io'
import {MdDarkMode} from 'react-icons/md';
import { MdOutlineContactSupport } from 'react-icons/md';
import { MdNotificationsNone } from 'react-icons/md';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import './navbar.scss'


function Navbar() {
  return (

    <nav>
        <div className="wrapper">
            <div className="left">
                <a href="#">
                <svg className='logo' viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="200" cy="200" r="200" fill="#6868AC"/>
                  <path d="M197.867 86.5C220.733 86.5 239.867 89.5333 255.267 95.6C270.9 101.433 283.383 109.6 292.717 120.1C302.05 130.6 308.817 142.617 313.017 156.15C317.217 169.683 319.317 184.033 319.317 199.2C319.317 214.367 317.1 228.833 312.667 242.6C308.233 256.367 301.117 268.617 291.317 279.35C281.75 290.083 269.267 298.6 253.867 304.9C238.467 310.967 219.8 314 197.867 314H124.017V86.5H197.867ZM152.017 287.75H197.867C216.3 287.75 231.467 285.183 243.367 280.05C255.5 274.917 265.067 268.15 272.067 259.75C279.067 251.117 283.967 241.55 286.767 231.05C289.8 220.55 291.317 209.933 291.317 199.2C291.317 188.467 289.8 177.967 286.767 167.7C283.967 157.433 279.067 148.217 272.067 140.05C265.067 131.65 255.5 125 243.367 120.1C231.467 115.2 216.3 112.75 197.867 112.75H152.017V287.75Z" fill="white"/>
                  <path d="M101 189H346V219H101V189Z" fill="#6868AC"/>
                </svg>
                <p>Dropwix</p>
                </a>
              </div>
            <form action="" className='search'>
              <div className='search-side'>
              <button><GoSearch className='icon'></GoSearch></button>
              <input type="text" placeholder='Search in Dropwix' />
              </div>
              <button><IoMdOptions className='icon'></IoMdOptions></button>
            </form>
            <div className='right'>
              <div className='items'>
                <div className='item'>
                  <MdDarkMode className='icon'></MdDarkMode>
                </div>
                <div className='item'>
                  <MdOutlineContactSupport className='icon'></MdOutlineContactSupport>
                </div>
                <div className='item'>
                  <MdNotificationsNone className='icon'></MdNotificationsNone>
                  <div className="counter"></div>
                </div>
              </div>
                <div className='profile'>
                    <div className='avatar-side'><img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="avatar" className='avatar'/></div>
                    <MdOutlineKeyboardArrowDown className='icon'></MdOutlineKeyboardArrowDown>
                </div>
            </div>
        </div>
      </nav>

  )
}

export default Navbar