import React, { useState } from "react";

function AddAHouse({ handleAddHouse}) {
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState ({
        description: "",
        image: "",
        location: ""
    });

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }
  
    function handleSubmit(event) {
        event.preventDefault();
      
        if(formData.description === "") {
          setErrorMessage('Error! Complete All Fields');
          setFormData({
            description: "",
            image: "",
            location: ""
        })
        } else if (formData.image === "") {
            setErrorMessage('Error! Complete All Fields');
            setFormData({
                description: "",
                image: "",
                location: ""
            })
        } else if (formData.location === "") {
            setErrorMessage('Error! Complete All Fields');
            setFormData({
                description: "",
                image: "",
                location: ""
            })
        } else {
            
        fetch('http://localhost:9292/houses', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            description: formData.description,
            image: formData.image,
            location: formData.location
          }),
        })
        .then(resp => resp.json())
        .then((newHouse) => handleAddHouse(newHouse))

        setFormData({
            description: "",
            image: "",
            location: ""
        })
        alert("Added to house list");
      }
    }

    return (
        <div className="add-a-house">
          <h1 className="house-form-header">Add Your Own House</h1>
          <h3 className="house-form-description">
            Add a stay below! 
          </h3>
          {errorMessage && (
            <p className="error"> {errorMessage} </p>
          )}
          <form className="house-form" onSubmit={handleSubmit}> 
              <label className="form-labels">
                Description:
                <input
                  className="capitalize"
                  type="text"
                  name="description"
                  placeholder="Add Description..."
                  value={formData.description}
                  onChange={handleChange}
                />
              </label>
            <label className="form-labels">
              Image:
              <input
                className="capitalize"
                type="text"
                name="image"
                placeholder="Add Location Image..."
                value={formData.image}
                onChange={handleChange}
              />
            </label>
            <label className="form-labels">
              Location:
              <input
                className="capitalize"
                type="text"
                name="location"
                placeholder="Add Location..."
                value={formData.location}
                onChange={handleChange}
              />
            </label>
            <input className="submit-btn" type="submit" value="Submit" />
          </form>
        </div>
    )
}

export default AddAHouse