import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {MdOutlineExplore} from 'react-icons/md'
import {MdOutlineSubscriptions} from 'react-icons/md'
import {MdOutlineVideoLibrary} from 'react-icons/md'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
function LeftSideBar() {
  return (
    <>
     <div className="container_Leftsidebar">
        <NavLink to={'/'} className="icon_sidebar_div">
        <AiOutlineHome size={22} className='icon_sidebar'/>
        <div className="text_sidebar_icon">Home</div>
        </NavLink>
        <div className="icon_sidebar_div">
        <MdOutlineExplore size={22} className='icon_sidebar'/>
        <div className="text_sidebar_icon">Explore</div>
        </div>
        <div className="icon_sidebar_div">
        <MdOutlineSubscriptions size={22} className='icon_sidebar'/>
        <span className="text_sidebar_icon">Subscription</span>
        </div>
        <NavLink to={'/Library'} className="icon_sidebar_div">
        <MdOutlineVideoLibrary size={22} className='icon_sidebar'/>
        <div className="text_sidebar_icon">Library</div>
        </NavLink>
        </div> 
    </>
  )
}

export default LeftSideBar
