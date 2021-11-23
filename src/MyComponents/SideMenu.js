import React, { useEffect, useState } from 'react'

import { FcTimeline, FcBusinesswoman } from "react-icons/fc";
import MenuItem from './MenuItem';
import MenuHook from './MenuHook';
const SideMenu = (props) => {

  const [inactive, setInactive] = useState(false);
  const { menuItems } = MenuHook();

  useEffect(() => {
    if (inactive) {
      document.querySelectorAll('.sub-menu').forEach(el => {
        el.classList.remove('active')
      })
    }
    props.onCollapse(inactive);

  }, [inactive])
  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <img src="https://icon-library.com/images/icon-dashboard/icon-dashboard-9.jpg" />

        </div>
        <div className="toggle-menu-btn" onClick={() => setInactive(!inactive)} >
          {inactive ? (<i class="bi bi-arrow-right-circle-fill"></i>
          ) : (
            <i class="bi bi-arrow-left-circle-fill"></i>
          )
          }
        </div>
      </div>
      <div className="search-controller">
        <button onClick={() => setInactive(!inactive)} className="search-btn">
          <i class="bi bi-search"></i>
        </button>
        <input type="text" placeholder="search" />
      </div>

      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          {
            menuItems.map((menuItem, index) => (
              <MenuItem
                key={index}
                name={menuItem.name}
                exact={menuItem.exact}
                to={menuItem.to}
                submenu={menuItem.submenu || []}
                iconClassName={menuItem.iconClassName}
                onClick={() => {
                  if (inactive) {
                    setInactive(false)
                  }
                }}
              />
            ))
          }
        </ul>
      </div>

      <div className="side-menu-footer">

        <div>
          {/* <img src=""></img> */}
          <div className="avtar">
            <FcBusinesswoman />
          </div>
          <div className="user-info">
            <h5>Nehali Bhalerao</h5>
            <p>neha@gmail.com</p>


          </div>
        </div>

      </div>


    </div>
  )
}
export default SideMenu