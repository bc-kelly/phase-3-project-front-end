import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import AddAHouse from "./AddAHouse";
import AddAReview from "./AddAReview";
import TravelList from "./TravelList";
import HouseList from "./HouseList";
import Home from "./Home"
import "./index.css";
// import { FcGlobe } from "react-icons/fc";

function App() {
    const [houses, setHouses] = useState([]);
    const [reviews, setReviews] = useState([]);
    // const [travel, setTravel] = useState ([]);
    const [users, setUsers] = useState ([]);
    // const [newComment, setNewComment] = useState ('');

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
            setReviews(reviewData);
        })
    }, []);

    useEffect (() => {
        fetch('http://localhost:9292/users')
        .then(resp => resp.json())
        .then(userData => {
            console.log("User Data:", userData);
            setUsers(userData)
        })
    }, []);


    function handleAddHouse (newHouse) {
        setHouses([...houses, newHouse])
    }

    function handleAddReview (newReview) {
        // console.log("this is new review:", newReview)
        setReviews([...reviews, newReview])
    }
   

    // function handleClickHouse(clickedHouse) {
    //     if (!reviews.includes(clickedHouse)) {
    //     setReviews([...reviews, clickedHouse]);
    //     }
    // }
    
  return (
      <div className="App">
         <NavBar />
          <Routes>
                <Route exact path ="/" element= { <Home /> } /> 
                <Route path ="/houses" element= { <HouseList houses={houses} /> } /> 
                <Route path="/addahouse" element= { <AddAHouse houses={houses} setHouses={setHouses} handleAddHouse={handleAddHouse} />} />
                <Route path="/travellist" element= { <TravelList reviews={reviews} />} />
                <Route path="/addareview" element= {<AddAReview handleAddReview={handleAddReview} houses={houses} users={users} /> } />       

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
                    <a href="https://www.linkedin.com/in/matt-mckay-cpa-a2447a116" target="_blank"> Matt McKay </a>
                </li>
              </div>
              
          </div>
      </div>
  );
}

export default App;
