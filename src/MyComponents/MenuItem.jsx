import React, { useState } from 'react'
import { FcTimeline, FcBusinesswoman } from "react-icons/fc";
import { NavLink, Link } from "react-router-dom";

const MenuItem = (props) => {

    const { name, submenu, iconClassName, onClick, to, exact } = props;
    const [expand, setExpand] = useState(false);


    return (
        <div>
            <li onClick={props.onClick}>
                <NavLink
                    exact 
                    to={to}
                    onClick={() => setExpand(!expand)}
                    className={`menu-item`}
                >
                <div className="menu-icon">
                    <i class={iconClassName}></i>
                </div>
                <span>{name} <i class="bi bi-chevron-compact-right"></i> </span>

                </NavLink>

                {
                    submenu && submenu.length > 0 ? (
                        <ul className={`sub-menu ${expand ? "active" : ""}`}>
                            {submenu.map((menu, index) => (
                                <li key={index}>
                                    <i class="bi bi-record2"></i><NavLink to={menu.to}>{menu.name}</NavLink>
                                </li>
                            ))}

                        </ul>
                    ) : null
                }
            </li>

        </div>
    )
}

export default MenuItem
