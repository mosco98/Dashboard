import React from 'react'
import { ChevronLeft } from 'react-feather'

const SocialsTrays = ({ showSocialsTray, socialsTrayHandler, sidedrawerHandler }) => {
  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <div
      className={showSocialsTray ? 'tray text-center shadow show' : 'tray text-center shadow hide'}
      style={{ width: '300px' }}>
      <span
        className="menu-btn mt-4 ml-3"
        title="Close"
        onClick={() => {
          socialsTrayHandler()
          sidedrawerHandler()
        }}>
        <ChevronLeft size={'24'} />
      </span>
      <h5 className="mt-4">Socials</h5>

      <ul className="list-group mt-9" style={{ overflowY: 'scroll', height: '60%' }}>
        <li className="list-group-item border-0 text-left">
          <label>Facebook</label>
          <div>
            <input className="form-control-sm w-75 border-primary" type="text" placeholder="Link to profile" />
            <button className="btn btn-sm btn-primary ml-2">Add</button>
          </div>
        </li>
        <li className="list-group-item border-0 text-left">
          <label>Twitter</label>
          <div>
            <input className="form-control-sm w-75 border-primary" type="text" placeholder="Link to profile" />
            <button className="btn btn-sm btn-primary ml-2">Add</button>
          </div>
        </li>
        <li className="list-group-item border-0 text-left">
          <label>LinkedIn</label>
          <div>
            <input className="form-control-sm w-75 border-primary" type="text" placeholder="Link to profile" />
            <button className="btn btn-sm btn-primary ml-2">Add</button>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default SocialsTrays
