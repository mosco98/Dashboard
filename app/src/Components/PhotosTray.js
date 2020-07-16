import React from 'react'
import { ChevronLeft, X } from 'react-feather'

import Images from '../Utils/Images'
import PhotoCard from './PhotoCard'

const PhotosTray = ({ changeBgImageHandler, photosTrayHandler, sidedrawerHandler, showPhotosTray }) => {
  return (
    <div className={showPhotosTray ? 'tray text-center shadow show' : 'tray text-center shadow hide'}>
      <span
        className="menu-btn mt-4 ml-3"
        title="Close"
        onClick={() => {
          photosTrayHandler()
          sidedrawerHandler()
        }}>
        <ChevronLeft size={'24'} />
      </span>
      <h5 className="mt-4">Photos</h5>

      <div className="row mt-2 mx-0 card-row p-4">
        {Images.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} changeBgImageHandler={changeBgImageHandler} />
        ))}
      </div>
      <span className="photo-tray-footer p-1">
        <small>
          Photos from{' '}
          <a href="http://thepatternlibrary.com" target="__blank">
            The pattern library
          </a>
        </small>
      </span>
    </div>
  )
}

export default PhotosTray
