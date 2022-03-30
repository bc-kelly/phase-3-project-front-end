import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav className="navbar">
                <div className="navbar-header">
                <div className="navbar-homepage">
                    <h1>Air BnB But Betta</h1>
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