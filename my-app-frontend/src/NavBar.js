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
                    <NavLink activeStyle={{textDecoration:"underline"}} to="/houses">| Stays |</NavLink>
                    <NavLink activeStyle={{textDecoration:"underline"}} to="/addahouse">| Post a Stay |</NavLink>
                    <NavLink activeStyle={{textDecoration:"underline"}} to="/travellist">| Reviews |</NavLink>
                    <NavLink activeStyle={{textDecoration:"underline"}} to="/addareview">| Post a Review |</NavLink>
             </div>
            </div>
        </nav>
    );
}

export default NavBar;