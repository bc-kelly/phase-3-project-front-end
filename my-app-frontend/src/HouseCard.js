import React, { useState } from 'react'
import { NavLink } from "react-router-dom"


function HouseCard ({house, handleClickHouse}) {
    // const [className, setClassName] = useState(false);



    function clickHouse(){
        handleClickHouse(house);
    }
    
    return (
        <div className="house-card" onClick={clickHouse}>
            {/* <h3>{house.name}</h3> */}
            <h3>{house.location}</h3>
            <div className="picture" >
                <img src={house.image} alt={house.name} />
            </div>
            <p>{house.description}</p>
            <div className='house-card-footer'> 
                <button className='post'>
                <NavLink activeStyle={{textDecoration:"underline"}} to="/addareview"> Post a Review </NavLink>
                    {/* <a href="/addareview">Post a Review</a> */}
                </button>
                <button className='book'>
                    <a href="https://hotelproject-react.netlify.app/">Book</a>
                </button>
            </div>
        </div>
    )
}

export default HouseCard;