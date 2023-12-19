/**
 * Widget component which is rendered underneath the audio player on the Player page
 */

import React, { useEffect, useState } from 'react'
import WidgetCard from './Card/widgetCard';
import apiClient from '../../spotify';
import './widgets.css';

export default function Widgets({ artistID }) {

  const [similarArtists, setSimilarArtists] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [newRelease, setNewRelease] = useState([]);

  /**
   * Runs whenever id changes, which is the first artist in the artistId passed in
   */
  useEffect(() => {

    if (artistID) {
      apiClient.get(`/artists/${artistID}/related-artists`)
      .then(res => {
        const artists = res.data?.artists?.slice(0, 3);
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

      apiClient.get(`browse/new-releases`)
      .then(res => {
        const release = res.data?.albums.items.slice(0, 3);
        setNewRelease(release);
      })
      .catch(error => console.error(error));
    }
    //grabs related artists from Spotify API
    // grabs top 3 artists
  }, [artistID])

  return (
    <section className="widgets-body flex">
      <WidgetCard title="Similar Artists" similarArtists={similarArtists} />
      <WidgetCard title="Made For You" featured={featured} />
      <WidgetCard title="New Releases" newRelease={newRelease} />
    </section>
  )
}
