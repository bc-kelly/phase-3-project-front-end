import React from 'react';
import { GiMountains } from "react-icons/gi";

function Home() {
    return ( 
        <div>
            <h1 className="home-page">Welcome to AirBnB But Betta</h1>
            <h3 className="hp-mountains"> <GiMountains size={100}/> <GiMountains size={100}/> <GiMountains size={100}/> </h3>
            <p className="future"> The future of stays</p>
            <p className='booking'> Give us a call to book!</p>
            <a className="lefty-call" href="https://www.youtube.com/watch?v=U4SmvlRmdsY"> Righty calls only - no lefty calls... </a>
        </div> 
    );
}

export default Home;