import React from "react";
import { FiMenu } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";

import "./Navbar.css";

const Navigation = () => {
    return (
        <>
            <nav className="main-nav">
                <div className="logo">
                    <div className="header"><h2> BUDDHA BHUMI TAXI SERVICE </h2></div>
                </div>

                <div className="menu-link">
                    <span className="menu-icon"> <FiMenu /> </span>
                    <div className="searchbar">
                        <span>
                            <FiSearch />
                            <input type="text" className="search" placeholder="Search By Vehicle Number, Example Lu pa 2459." />
                        </span>
                    </div>
                </div>

                <div className="icons">
                    <div className="icons-desktop">
                        <IoMdNotificationsOutline />
                        <span className="topIconBadge">1</span>
                    </div>

                    <div className="icons-desktop">
                        <AiOutlineMail />
                        <span className="topIconBadge">1</span>
                    </div>

                    <div className="icons-desktop">
                        <img src="https://picsum.photos/id/91/200/300" alt="" className="topAvatar" />
                    </div>

                    <div className="icons-desktop">
                        <p>Rakshya Khanal</p>
                    </div>

                    <div className="icons-desktop">
                        <RiArrowDropDownLine />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation;
