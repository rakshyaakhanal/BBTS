import React from 'react';
import { SidebarData } from './SidebarData';
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <>
        <div className="Sidebar">
            <ul className="SidebarList">
                {SidebarData.map((val, key) => {
                    return (
                        <li key={key} className="row"> {" "}
                            <div id="icon">{val.icon}</div> {" "}
                            <div id="title">{val.title}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
        </>
    )
}

export default Sidebar;
