import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import AddAHouse from "./AddAHouse";
import TravelList from "./TravelList";
import HouseList from "./HouseList";
import "./index.css";
// import { FcGlobe } from "react-icons/fc";

function App() {
    const [houses, setHouses] = useState([]);
    const [travel, setTravel] = useState ([]);
    const [newComment, setNewComment] = useState ('');

    useEffect (() => {
        fetch('http://localhost:9292/houses')
        .then(resp => resp.json())
        .then(houseData => {
            setHouses(houseData);
        })
    }, []);


    useEffect (() => {
        fetch('http://localhost:9292/reviews')
        .then(resp => resp.json())
        .then(reviewData => {
            console.log(reviewData);
            setTravel(reviewData);
        })
    }, []);


    function handleAddHouse (newHouse) {
        setHouses([...houses, newHouse])
    }
   
    // // //PATCH HERE WHEN USER CLICKS SAVE
    // function handleSaveClick(updatedMovie, savedComment) {
    //     console.log(updatedMovie)
    //     fetch(`http://localhost:3000/houses/${updatedMovie.id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({"comment": savedComment})
    //     })
    //             updatedMovie.comment = savedComment;
    //             // setNewComment(savedComment)
    // }

    function handleClickHouse(clickedHouse) {
        if (!travel.includes(clickedHouse)) {
        setTravel([...travel, clickedHouse]);
        }
    }
    
  return (
      <div className="App">
         <NavBar />
          <Routes>

              <Route exact path ="/" element= { <HouseList houses={houses} handleClickHouse={handleClickHouse} /> } /> 
              <Route path="/addahouse" element= { <AddAHouse houses={houses} setHouses={setHouses} handleAddHouse={handleAddHouse} />} />
              <Route path="/travellist" element= { <TravelList travel={travel} newComment={newComment} />} />       

          </Routes>
        
          <div className="footer">
              
              <div className="our-logo">
                  <div className="second-one">
                 {/* M<FcGlobe size=".75em"/>vie Tr<FcGlobe size=".75em"/>tter */}
                 </div>
              </div>
              <div>
                Find us on LinkedIn: 
                <li className="list-item">
                    <a href="https://www.linkedin.com/in/bridget-kelly-594009127/" target="_blank"> Bridget Kelly </a>
                </li>
                <li className="list-item">
                    <a href="https://www.linkedin.com/in/miguel-nazario"target="_blank">   Miguel Nazario</a>
                </li>
              </div>
              
          </div>
      </div>
  );
}

export default App;
