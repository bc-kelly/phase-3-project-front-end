import React from "react";
import HouseCard from './HouseCard'
import AddReview from "./AddReview";

function TravelList({travel, handleSaveClick, newComment}) {
    const showReviews = travel.map((review) => {
        // console.log(review)
        return (
            <div key={review.id} className="travel-card-container">
                <HouseCard 
                    house={review.house}
                    className="house-cards"
                />
                <AddReview handleSaveClick={handleSaveClick} review={review} newComment={newComment}/>
            </div>
        )
    })
    return (
        <div className="travel-list">
            <h1 className="travel-list-header">Reviews</h1>
            <h3 className="travel-list-description">
                Check out the reviews... 
            </h3>
            <div className="travel-container">
                {showReviews}
            </div>
        </div>

    )
}

export default TravelList;