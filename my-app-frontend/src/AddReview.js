import React, { useState } from "react";

function AddReview({ handleSaveClick, review, newComment}) {
    const [reviewText, setReviewText] = []
	const characterLimit = 200;

	function handleChange(event){
		if (characterLimit - event.target.value.length >= 0) {
			setReviewText(event.target.value);
		}
	}

	function saveClick() {
        handleSaveClick(reviewText);
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
                <small>
                    {/* {characterLimit - reviewText.length} Remaining */}
                </small>
                <button className='save' 
                onClick={saveClick}
                >
                    Save
                </button>
            </div>
        </div>
    );
}

export default AddReview;