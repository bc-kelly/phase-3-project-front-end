import React from "react";
import HouseCard from './HouseCard'
// import { FcGlobe } from "react-icons/fc";

function HouseList({houses, handleClickHouse}) {

    const showHouses = houses.map((house) => {
       
        return (
            <HouseCard 
                key={house.id}
                house={house}
                handleClickHouse={handleClickHouse}
                
            />
        )
    })

    return (
        <div>
            <h1 className="house-list-header">
                <div className="welcome-globes">
                    {/* Welcome to M<FcGlobe size=".75em"/>vie Tr<FcGlobe size=".75em"/>tter */}
                </div> 
            </h1>
            <h3 className="welcome-description">
                Thanks for visiting Movie Trotter! Click on any movie below to add it to your <em>Travel Log,</em> or feel free to add in the details of your favorite movie in the <em>Add a Movie</em> section. 
            </h3>

            <div className="houses-container">
                {showHouses}
            </div>
        </div>
    )
}

export default HouseList;