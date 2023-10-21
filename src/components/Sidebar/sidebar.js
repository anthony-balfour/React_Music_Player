import React from 'react'
import './sidebar.css'
import headshot from '../../assets/self-photo.png';

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <img className="profile-img" alt="profile headshot" src={headshot}></img>

      <section>
        <SidebarButton />
      </section>
    </div>
  )
}
