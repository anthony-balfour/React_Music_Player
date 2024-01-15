import React, { useState, useEffect } from 'react'
import './sidebar.css'
import headshot from '../../assets/default_headshot_rhaenyra.jpg';
import { SidebarButton } from '../sidebarButtons/sidebarButton';
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import apiClient from '../../spotify';

export default function Sidebar() {



  const [icon, setIcon] = useState(headshot);


  // grabbing user icon from Spotify Profile calling API
  // setting the user icon at the top of the sidebar
  // if not available sets the icon to the default headshot
  useEffect(() => {
    // "me" gives the currently logged in user with the current access token
    apiClient.get("me")
      .then(response => {
      if (response.data.images[0]) {
        setIcon(response.data.images[0].url)
      }
    })
    .catch(response => {
      setIcon(headshot);
    })
  }, [])

  return (
    <div className="sidebar-container">
      <img className="profile-img" alt="profile headshot" src={icon}></img>

      <section className="sidebar-button-container">
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
