import React, { useState } from "react";

function AddNote({ handleSaveClick, movie, newComment}) {
    const [noteText, setNoteText] = useState(movie.comment);
	const characterLimit = 200;

	function handleChange(event){
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	}

	function saveClick() {
        handleSaveClick(movie, noteText);
	}

    function clickFavorite(event) {
        if (event.target.textContent === "\u2606") {
            return event.target.textContent="\u2605";
        } else {
            return event.target.textContent="\u2606";
        }
    }

    return (
        <div className='note'>
            <div className="note-header">
                <textarea
                    rows='8'
                    cols='25'
                    placeholder='Type to add a note...'
                    value={noteText}
                    onChange={handleChange}
                >{movie.comment}
                </textarea>
                <div className="favorite-icon" onClick={clickFavorite}>{"\u2606"}</div>
            </div>
            <div className='note-footer'>
                <small>
                    {characterLimit - noteText.length} Remaining
                </small>
                <button className='save' onClick={saveClick}>
                    Save
                </button>
            </div>
        </div>
    );
}

export default AddNote;