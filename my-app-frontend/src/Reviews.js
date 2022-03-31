import React, { useState } from "react";

function Reviews({review, newComment}) {
    const [reviewText, setReviewText] = useState(review.content)
	const characterLimit = 200;

	function handleChange(event){
		if (characterLimit - event.target.value.length >= 0) {
			setReviewText(event.target.value);
		}
	}

    // //PATCH HERE WHEN USER CLICKS SAVE
    function handleSaveClick() {
        console.log("Updated review:", review)
        fetch(`http://localhost:9292/reviews/${review.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"content": reviewText})
        })
        review.content = reviewText
    }

    function clickFavorite(event) {
        if (event.target.textContent === "\u2606") {
            return event.target.textContent="\u2605";
        } else {
            return event.target.textContent="\u2606";
        }
    }

    return (
        <div className='review'>
            <div className="review-header">
                <textarea
                    rows='8'
                    cols='25'
                    placeholder='Type to add a review...'
                    value={reviewText}
                    onChange={handleChange}
                >{review.content}
                </textarea>
                <div className="favorite-icon" onClick={clickFavorite}>{"\u2606"}</div>
            </div>
            <div className='review-footer'>
                <button className='save' 
                onClick={() => handleSaveClick()}
                >
                    Save
                </button>
            </div>
        </div>
    );
}

export default Reviews;