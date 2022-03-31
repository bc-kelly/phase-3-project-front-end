import React, { useState } from "react";
import HouseCard from './HouseCard'
import Reviews from "./Reviews";

function TravelList({reviews, newComment}) {
    const [searchText, setSearchText] = useState("")

    const filterAllReviews = reviews.filter(function (review){
        return review.house.location.toLowerCase().includes(searchText.toLowerCase()) 
        || review.content.toLowerCase().includes(searchText.toLowerCase())
        || review.house.description.toLowerCase().includes(searchText.toLowerCase())
      })


    function handleSearchText (event) {
        console.log(event.target.value)
        setSearchText(event.target.value)
    }

    const showReviews = filterAllReviews.map((review) => {
        // console.log(review)
        return (
            <div key={review.id} className="travel-card-container">
                <HouseCard 
                    house={review.house}
                    className="house-cards"
                />
                <Reviews review={review} newComment={newComment}/>
            </div>
        )
    })

    
    

    return (
        <div className="travel-list">
            <h1 className="travel-list-header">Reviews</h1>
            <h3 className="travel-list-description">
                Check out the reviews... 
            </h3>
            <div className="travel-list-search-div">
            <   input className="travel-list-search" onChange={handleSearchText} value={searchText} id="search" type="text" placeholder="Search..."></input>
            </div>
            <div className="travel-container">
                {showReviews}
            </div>
        </div>

    )
}

export default TravelList;