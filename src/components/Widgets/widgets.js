/**
 * Widget component which is rendered underneath the audio player on the Player page
 */

import React, { useEffect, useState } from 'react'
import WidgetCard from './WidgetCard/widgetCard';
import apiClient from '../../spotify';
import './widgets.css';

export default function Widgets({ artistID }) {

  const [similarArtists, setSimilarArtists] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [newRelease, setNewRelease] = useState([]);
  const id = artistID?.artists[0]?.id;

  /**
   * Runs whenever id changes, which is the first artist in the artistId passed in
   */
  useEffect(() => {

    //grabs related artists from Spotify API
    // grabs top 3 artists
    apiClient.get(`/artists/${id}/related-artists`)
      .then(res => {
        const artists = res.data?.artists.slice(0, 3);
        setSimilarArtists(artists);
      })
      .catch(error => console.error(error));

      // browse featured playlists
      apiClient.get(`/browse/featured-playlists`)
      .then(res => {
        const featuredList = res.data?.playlists.items.slice(0, 3);
        setFeatured(featuredList);
      })
      .catch(error => console.error(error));

      apiClient.get(`browse/new-release`)
      .then(res => {
        const release = res.data?.albums.items.slice(0, 3);
        setNewRelease(release);
      })
      .catch(error => console.error(error));
  }, [id])

  return (
    <section className="widgets-body flex">
      <WidgetCard title="Similar Artists" similar={similarArtists} />
      <WidgetCard title="Made For You" similar={featured} />
      <WidgetCard title="New Releases" similar={newRelease} />
    </section>
  )
}
