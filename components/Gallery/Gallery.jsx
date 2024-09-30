import React from 'react'
import AppGallery from './AppGallery'
import WebGallery from './WebGallery'

function Gallery() {
  return (
    <div id='gallery'>
      <AppGallery/>
      <WebGallery/>
    </div>
  )
}

export default Gallery