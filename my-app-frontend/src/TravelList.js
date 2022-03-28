import React from "react";
import HouseCard from './HouseCard'
import AddNote from "./AddNote";

function TravelList({travel, handleSaveClick, newComment}) {
    const showMovies = travel.map((movie) => {
        return (
            <div key={movie.id} className="travel-card-container">
                <HouseCard 
                    movie={movie}
                    className="travel-cards"
                />
                <AddNote handleSaveClick={handleSaveClick} movie={movie} newComment={newComment}/>
            </div>
        )
    })
    return (
        <div className="travel-list">
            <h1 className="travel-list-header">Your Travel Log</h1>
            <h3 className="travel-list-description">
                Begin your travel planning now! Don't forget to save your notes... 
            </h3>
            <div className="travel-container">
                {showMovies}
            </div>
        </div>

    )
}

export default TravelList;