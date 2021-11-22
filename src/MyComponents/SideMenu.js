import React, { useState } from 'react'

import { FcTimeline ,FcBusinesswoman} from "react-icons/fc";
import MenuItem from './MenuItem';
const SideMenu = (props) => {


  

    const [inactive, setInactive] = useState(false);
     const menuItems=[
        {name: 'Dashboard' , to: '/'},
        {
          name:'Content',to:'/content',
          submenu: [{name:"courses"},{name:"videos"}]
        },
        {name: 'Design' ,to :'/design'}
      
    ]
    return (
        <div className={`side-menu ${inactive ? "inactive" : ""}`}>
            <div className="top-section">
                <div className="logo">
                    <img src="https://icon-library.com/images/icon-dashboard/icon-dashboard-9.jpg" />

                </div>
                <div className="toggle-menu-btn" onClick={() => setInactive(!inactive)} >
                       {inactive ?(<i class="bi bi-arrow-right-circle-fill"></i>
                       ):(
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
                  menuItems.map((menuItem,index)=>(
                    <MenuItem 
                      key={index}
                      name={menuItem.name}
                      to={menuItem.to}
                      submenu={menuItem.submenu || [] }
                    />
                  ))
                }
              </ul>
              {/* <ul>
                <li>                
                  <a className="menu-item">
                    <div className="menu-icon"><FcTimeline/></div>
                    <span>Courses</span></a>
                </li>
                <li>                
                  <a className="menu-item">
                    <div className="menu-icon"><FcTimeline/></div>
                    <span>Courses</span></a>
                </li>

                <MenuItem
                  name={"Content"}
                  submenu={[{name:"Book"},{name: "Video"}]}
                />
                <li>                
                  <a className="menu-item">
                    <div className="menu-icon"><FcTimeline/></div>
                    <span>Courses</span></a>
                </li>
                <li>                
                  <a className="menu-item">
                    <div className="menu-icon"><FcTimeline/></div>
                    <span>Courses</span></a>
                </li>              
                </ul> */}
            </div>

            <div className="side-menu-footer">

              <div>
                {/* <img src=""></img> */}
                <div className="avtar">
                <FcBusinesswoman/>
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