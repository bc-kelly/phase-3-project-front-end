import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-header">
                <div>
                    <NavLink exact to="/">Air BnB But Betta</NavLink>
                </div>
                <div>
                    <NavLink activeStyle={{textDecoration:"underline"}} exact to="/">| Home |</NavLink>
                    <NavLink activeStyle={{textDecoration:"underline"}} to="/addahouse">| Post a Stay |</NavLink>
                    <NavLink activeStyle={{textDecoration:"underline"}} to="/travellist">| Post a Review |</NavLink>
             </div>
            </div>
        </nav>
    );
}

export default NavBar;