import React, { useState } from 'react'

function HouseCard ({house, handleClickHouse}) {
    // const [className, setClassName] = useState(false);



    function clickHouse(){
        handleClickHouse(house);
    }
    
    return (
        <div className="house-card" onClick={clickHouse}>
            {/* <h3>{house.name}</h3> */}
            <h3>{house.location}</h3>
            <img src={house.image} alt={house.name} />
            <p>{house.description}</p>
        </div>
    )
}

export default HouseCard;