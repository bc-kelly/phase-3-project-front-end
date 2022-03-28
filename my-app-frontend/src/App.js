import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import AddAMovie from "./AddAMovie";
import TravelList from "./TravelList";
import HouseList from "./HouseList";
import "./index.css";
import { FcGlobe } from "react-icons/fc";

function App() {
    const [movies, setMovies] = useState([]);
    const [travel, setTravel] = useState ([]);
    const [newComment, setNewComment] = useState ('');

    

    useEffect (() => {
        fetch('http://localhost:3000/movies')
        .then(resp => resp.json())
        .then(movieData => {
            setMovies(movieData);
        })
    }, []);



    function handleAddMovie (newMovie) {
        setMovies([...movies, newMovie])
    }
   
    // //PATCH HERE WHEN USER CLICKS SAVE
    function handleSaveClick(updatedMovie, savedComment) {
        console.log(updatedMovie)
        fetch(`http://localhost:3000/movies/${updatedMovie.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"comment": savedComment})
        })
                updatedMovie.comment = savedComment;
                // setNewComment(savedComment)
    }

    function handleClickMovie(clickedMovie) {
        if (!travel.includes(clickedMovie)) {
        setTravel([...travel, clickedMovie]);
        }
    }
    
  return (
      <div className="App">
          <NavBar />
          <Switch>
              <Route path="/addamovie">
                  <AddAMovie movies={movies} setMovies={setMovies} onAddMovie={handleAddMovie} />
              </Route>
              <Route path="/travellist">
                  <TravelList 
                    travel={travel}
                    handleSaveClick={handleSaveClick}
                    newComment={newComment}
                    // saveComment={saveComment}
                  />
              </Route>
              <Route exact path="/">
                  <HouseList 
                    movies={movies}
                    handleClickMovie={handleClickMovie}
            
                  />
              </Route>
          </Switch>
          <div className="footer">
              
              <div className="our-logo">
                  <div className="second-one">
                 M<FcGlobe size=".75em"/>vie Tr<FcGlobe size=".75em"/>tter
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
