import React from 'react'
import './sidebarButton.css'
import { Link, useLocation } from 'react-router-dom'
import { IconContext } from 'react-icons/'

export const SidebarButton = (props) => {

  // to determine which is the active url, can use the hook useLocation
  const location = useLocation();
  const isActive = location.pathname ===  props.to;

  const buttonClass = isActive ? "button-body active" : "button-body";

  return (
    <>
    <Link to={props.to}>
      <section className={buttonClass}>
        {/* IconContext for adjusting icon size, initally imported with react-icons/lib, but can delete lib*/}
        <IconContext.Provider value={{size: '24px', className: 'button-icon'}}>
          {props.icon}
          <p className="button-title">{props.title}</p>
        </IconContext.Provider>
      </section>
    </Link>
    </>
  )
}
