import React, { useState } from "react";

function AddAReview({ handleAddReview, houses, users }) {
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState ({
        content: "",
        rating: "",
        user_id: "",
        house_id: ""
    });

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }
  
    function handleSubmit(event) {
        event.preventDefault();
      
        if(formData.content === "") {
          setErrorMessage('Error! Complete All Fields');
          setFormData({
            content: "",
            rating: "",
        })
        } else if (formData.rating === "") {
            setErrorMessage('Error! Complete All Fields');
            setFormData({
                content: "",
                rating: "",
            })
        // } else if (formData.location === "") {
        //     setErrorMessage('Error! Complete All Fields');
        //     setFormData({
        //         content: "",
        //         rating: "",
        //     })
        } else {
            
        fetch('http://localhost:9292/reviews', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: formData.content,
            rating: formData.rating,
            user_id: formData.user_id,
            house_id: formData.house_id
          }),
        })
        .then(resp => resp.json())
        .then((newReview) => handleAddReview(newReview))

        setFormData({
            content: "",
            rating: "",
            user_id: 1,
            house_id: 1
        })
        alert("Added to reviews list");
      }
    }

    return (
        <div className="add-a-house">
          <h1 className="house-form-header">Add Your Own Review</h1>
          <h3 className="house-form-description">
            Add a review below! 
          </h3>
          {errorMessage && (
            <p className="error"> {errorMessage} </p>
          )}
        <form className="house-form" onSubmit={handleSubmit}> 
            <label className="form-labels">
            Content:
            <input
                className="capitalize"
                type="text"
                name="content"
                placeholder="Add Review Content..."
                value={formData.content}
                onChange={handleChange}
            />
            </label>
            <label className="form-labels">
            Rating:
            <select
                type="integer"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
            >
                <option value="0"> Select a Rating </option>
                <option value="1"> 1 </option>
                <option value="2"> 2 </option>
                <option value="3"> 3 </option>
                <option value="4"> 4 </option>
                <option value="5"> 5 </option>

            </select>
            </label>
            <label className="form-labels">
            House:
            <select 
                type="text"
                name="house_id"
                value={formData.house_id}
                onChange={handleChange}
            >
                <option> Select a House </option>
                {houses.map(house => (
                    // console.log(house.location)
                    <option key={house.id} value={house.id}>
                        {house.location}
                    </option>
                ))}     
            </select>
            </label>
            <label className="form-labels">
            User:
            <select 
                type="text"
                name="user_id"
                value={formData.user_id}
                onChange={handleChange}
            >
                <option> Select User </option>
                {users.map(user => (
                    // console.log("User:", user)
                    <option key={user.id} value={user.id}>
                        {user.username}
                    </option>
                ))}     
            </select>
            </label>
            <input className="submit-btn" type="submit" value="Submit" />
        </form>
    </div>
    )
}

export default AddAReview