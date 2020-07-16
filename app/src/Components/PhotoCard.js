import React from 'react'
import { Check } from 'react-feather'

const PhotoCard = ({ photo, changeBgImageHandler }) => {
  const currentImageUrl = localStorage.getItem('bgImg')
  return (
    <div className="photo-card-ctn p-0 col-4 col-md-4 col-lg-4">
      {currentImageUrl === photo.src && (
        <span className="check">
          <Check color={'#17a2b8'} strokeWidth={'3'} />
        </span>
      )}
      <div className="photo-card" onClick={() => changeBgImageHandler(photo.src)}>
        <img className="img-fluid rounded" src={photo.src} alt="bg" />
        <small className="mt-1">{photo.name}</small>
      </div>
    </div>
  )
}

export default PhotoCard
