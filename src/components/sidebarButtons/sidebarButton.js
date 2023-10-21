import React from 'react'
import './sidebarButton.css'
import { Link } from 'react-router-dom'

export const SidebarButton = (props) => {

  return (
    <>
    <Link to={props.to}>
      <section>
        {props.icon}
        <p>{props.title}</p>
      </section>
    </Link>
    </>
  )
}
