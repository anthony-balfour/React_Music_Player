/**
 * The entry on a WidgetCard located on a Widget component
 * on the Player page
 */

import React from 'react'
import './widgetEntry.css'

export default function WidgetEntry({title, subtitle, image}) {
  return (
    <section className="entry-body flex">
      
      <img src={image} alt={title} className="entry-image" />
      <section className="entry-right-body flex">
        <p className="entry-title">{title}</p>
        <p className="entry-subtitle">{subtitle}</p>
      </section>

    </section>
  )
}
