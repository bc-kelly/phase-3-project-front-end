import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import AddAHouse from "./AddAHouse";
import AddAReview from "./AddAReview";
import TravelList from "./TravelList";
import HouseList from "./HouseList";
import Home from "./Home"
import "./index.css";
import { GiMountains } from "react-icons/gi";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";



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
              <AiOutlineCopyrightCircle size=".75em"/> 2022 Air BnB But Betta, Inc. All rights reserved.
                  <div className="second-one">
                  {/* <h3> <GiMountains /> <GiMountains /> <GiMountains /> </h3> */}
                 {/* <AiOutlineTrademarkCircle size=".75em"/> */}
                 </div>
              </div>
              <div className="find">
                Find us on LinkedIn: 
                <li className="social-btn flex-center" id="linkedin">
                    <a href="https://www.linkedin.com/in/bridget-kelly-594009127/" target="_blank"> <svg xmlns="https://www.linkedin.com/in/bridget-kelly-594009127/" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                    </a>
                    <span>bridget kelly</span>
                </li>
                <li className="social-btn flex-center" id="linkedin">
                    <a href="https://www.linkedin.com/in/matt-mckay-cpa-a2447a116" target="_blank"> <svg xmlns="https://www.linkedin.com/in/matt-mckay-cpa-a2447a116" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                    </a>
                <span>matt mckay</span>
                </li>
              </div>
              
          </div>
      </div>
  );
}

export default App;


{/* <li className="list-item">
                    <a href="https://www.linkedin.com/in/bridget-kelly-594009127/" target="_blank"> <AiFillLinkedin /> <span>Bridget Kelly</span></a>
                </li> */}

{/* <li className="list-item">
                <a href="https://www.linkedin.com/in/matt-mckay-cpa-a2447a116" target="_blank"> <AiFillLinkedin /> Matt McKay </a>
            </li> */}