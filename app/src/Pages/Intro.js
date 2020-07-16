import React, { useEffect, useState } from 'react'
import { Camera } from 'react-feather'

import Images from '../Utils/Images'

let index = 0

const Intro = ({ isLoggedInHandler }) => {
  const [name, setName] = useState('')
  const [addedName, setAddedName] = useState(false)
  const [imageUrl, setImageUrl] = useState('')
  const [showEditOverlay, setShowEditOverlay] = useState(false)
  const [bgImgSrc, setBgImgSrc] = useState({})

  // useEffect(() => {
  //   changeBgImg()
  // })

  // const changeBgImg = () => {
  //   // console.log(Images)
  //   let src
  //   for (let i = 0; i < Images.length; i++) {
  //     src = Images[i]
  //   }

  //   index++
  //   if (index > Images.length) {
  //     index = 1
  //   }
  //   let style = {
  //     background: `url(${Images[index - 1].src})`
  //   }
  //   setBgImgSrc(style)
  //   // setInterval(changeBgImg, 1000)
  // }

  const addImageHandler = (e) => {
    const imageBlobUrl = URL.createObjectURL(e.target.files[0])
    setImageUrl(imageBlobUrl)

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    console.log(e.target.files[0])

    const img = new Image()
    img.src = e.target.files[0]

    img.addEventListener('load', () => {
      ctx.drawImage(img, 0, 0)
    })
  }

  const inputNameHandler = (e) => {
    if (name && e.key === 'Enter') {
      setName(name)
      setAddedName(true)
    }
  }

  return (
    <div className="vh-100 w-100 body-wrapper intro" style={bgImgSrc}>
      <div className="h-100 w-100 home-overlay d-flex align-items-center justify-content-center">
        {addedName ? (
          <div className="h-100 w-100 d-flex align-items-center flex-column justify-content-center text-white animate__animated animate__slideInRight animate__faster">
            <h2 className="text-uppercase">You're almost there {name}</h2>
            <br />
            <p>Select an Avatar</p>

            {imageUrl ? (
              <div
                className="avatar-ctn"
                onMouseOver={() => setShowEditOverlay(true)}
                onMouseLeave={() => setShowEditOverlay(false)}>
                <img className="img-fluid position-absolute" src={imageUrl} alt="avatar" />
                <div className={showEditOverlay ? 'img-edit-overlay' : 'img-edit-overlay hide'}>
                  <span className="change-photo-icon" title="Change photo">
                    <Camera size={'28'} />
                    <span>Change photo</span>
                  </span>
                  <input
                    type="file"
                    className="custom-file-input"
                    name="avatar"
                    id="avatar"
                    accept="image/png, image/jpeg"
                    onChange={addImageHandler}
                  />
                </div>
              </div>
            ) : (
              <div className="avatar-ctn">
                <span style={{ cursor: 'pointer', position: 'absolute' }}>
                  <Camera size={'28'} />
                </span>
                <input
                  type="file"
                  id="avatar"
                  className="custom-file-input"
                  name="avatar"
                  accept="image/png, image/jpeg"
                  onChange={addImageHandler}
                />
              </div>
            )}

            <br />
            <div className="btn-ctn-intro d-flex align-items-center justify-content-end">
              <button
                className={
                  imageUrl
                    ? 'btn btn-success animate__animated animate__fadeIn animate__faster'
                    : 'btn btn-success hide'
                }
                onClick={() => isLoggedInHandler(name, imageUrl)}
                title="Finish">
                Finish
              </button>
            </div>
          </div>
        ) : (
          <div className="h-100 w-100 d-flex align-items-center flex-column justify-content-center text-white">
            <h1>
              Hi there{' '}
              <span className="wave" role="img" aria-label="wave">
                👋
              </span>
            </h1>
            <br />
            <h2>What do I call you?</h2>
            <br />
            <input
              className="name-input-intro p-3 text-center"
              placeholder="Enter Nickname"
              onChange={(e) => setName(e.target.value)}
              onKeyPress={(e) => inputNameHandler(e)}
              autoFocus={true}
            />
            <br />
            <div className="btn-ctn-intro d-flex align-items-center justify-content-end">
              <button
                className={
                  name ? 'btn btn-success animate__animated animate__fadeIn animate__faster' : 'btn btn-success hide'
                }
                onClick={
                  name
                    ? () => {
                        setAddedName(true)
                      }
                    : null
                }>
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Intro
