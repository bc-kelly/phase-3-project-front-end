import React, { useState } from "react";
import HouseCard from './HouseCard'

// import { FcGlobe } from "react-icons/fc";

function HouseList({houses, handleClickHouse}) {
    const [searchText, setSearchText] = useState("")

    const filterAllHouses = houses.filter(function (house){
        return house.location.toLowerCase().includes(searchText.toLowerCase()) 
        || house.description.toLowerCase().includes(searchText.toLowerCase())
      })


    function handleSearchText (event) {
        console.log(event.target.value)
        setSearchText(event.target.value)
    }
    // const showHouses = houses.map((house) => {
        const showHouses = filterAllHouses.map((house) => {
        return (
            <HouseCard 
                key={house.id}
                house={house}
                handleClickHouse={handleClickHouse}
            />
        )
    })

    return (
        <div className="house-list-list" >
            <h1 className="house-list-header">
                <div className="welcome-globes">
                    {/* Welcome to M<FcGlobe size=".75em"/>vie Tr<FcGlobe size=".75em"/>tter */}
                </div> 
            </h1>
            <h3 className="welcome-description">
                Check out the lovely stays at <em>Retro BnB</em>
            </h3>
            <div className="travel-list-search-div">
            <   input className="travel-list-search" onChange={handleSearchText} value={searchText} id="search" type="text" placeholder="Search..."></input>
            </div>
            <div className="houses-container">
                {showHouses}
            </div>
        </div>
    )
}

export default HouseList;