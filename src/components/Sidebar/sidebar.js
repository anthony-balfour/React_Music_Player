import React, { useState, useEffect } from 'react'
import './sidebar.css'
import headshot from '../../assets/self-photo.png';
import { SidebarButton } from '../sidebarButtons/sidebarButton';
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";

export default function Sidebar() {

  // grabbing user icon from Spotify Profile calling API

  const [image, setImage] = useState({headshot});

  useEffect(() => {

  }, [])
  return (
    <div className="sidebar-container">
      <img className="profile-img" alt="profile headshot" src={image}></img>

      <section>
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />}/>
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite />} />
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
      </section>
      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />

    </div>
  )
}
