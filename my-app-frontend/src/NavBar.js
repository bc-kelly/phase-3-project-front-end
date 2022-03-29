import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-header">
                <div>
                    {/* <NavLink exact to="/">Movie Trotter</NavLink> */}
                </div>
                <div>
                    {/* <NavLink activeStyle={{textDecoration:"underline"}} exact to="/">| House List |</NavLink>
                    <NavLink activeStyle={{textDecoration:"underline"}} to="/addahouse">| Add a House |</NavLink>
                    <NavLink activeStyle={{textDecoration:"underline"}} to="/travellist">| Travel Log |</NavLink> */}
                </div>
            </div>
        </nav>
    );
}

export default NavBar;