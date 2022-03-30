import React from "react";
import { NavLink } from "react-router-dom"
import { GiMountains } from "react-icons/gi";
import { FaMountain } from "react-icons/fa";


function NavBar() {
    return (
        <nav className="navbar">
                <div className="navbar-header">
                <div className="navbar-homepage">
                    <h1> Air BnB But Betta </h1>
                    {/* <h3> <FaMountain /> <FaMountain /> <FaMountain /> </h3> */}
                    <h3> <GiMountains /> <GiMountains /> <GiMountains /> </h3>

                </div>
                <div className="navbar-links">
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink activeStyle={{textDecoration:"underline"}} to="/houses">STAYS</NavLink>
                    <NavLink activeStyle={{textDecoration:"underline"}} to="/addahouse"> POST A STAY </NavLink>
                    <NavLink activeStyle={{textDecoration:"underline"}} to="/travellist"> REVIEWS </NavLink>
                    <NavLink activeStyle={{textDecoration:"underline"}} to="/addareview"> POST A REVIEW </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;