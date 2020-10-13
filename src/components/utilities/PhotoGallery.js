import React from 'react'
import '../../css/photoGallery.css'

const PhotoGallery = ({photos}) => {
  return (
    <div className='photo-gallery-container container'>
      <div className="photos-container">
        {photos.map((photo, index) => <img key={index} src={photo} alt="poza" className={`photo-${index}`} /> )}
      </div>
    </div>
  )
}

export default PhotoGallery
