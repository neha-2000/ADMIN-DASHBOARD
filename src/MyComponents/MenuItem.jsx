import React from 'react'
import { FcTimeline ,FcBusinesswoman} from "react-icons/fc";


const MenuItem = (props) => {

    const { name, submenu } = props;

    return (
        <div>
            <li>
                <a className="menu-item">
                    <div className="menu-icon"><FcTimeline /></div>
                    <span>{name}</span>
                </a>

                {
                    submenu && submenu.length > 0 ? (
                    <ul className="sub-menu">
                        {submenu.map((menu,index)=>(
                            <li key={index}>
                                <a>{menu.name}</a>
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
