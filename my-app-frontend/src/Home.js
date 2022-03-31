import React from 'react';
import { GiMountains } from "react-icons/gi";

function Home() {
    return ( 
        <div>
            <h1 className="home-page">Welcome to AirBnB But Betta</h1>
            <h3 className="hp-mountains"> <GiMountains /> <GiMountains /> <GiMountains /> </h3>
            <p className="future"> The future of stays</p>
        </div> 
    );
}

export default Home;