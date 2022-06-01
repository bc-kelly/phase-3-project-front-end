import React from 'react';
import { GiMountains } from "react-icons/gi";

function Home() {
    return ( 
        <div >
            <div className="hp-image">
                <div className='home-pic'> </div>
                <h1 className="home-page">Welcome to Retro BnB</h1>
                <h3 className="hp-mountains"> <GiMountains size={100}/> <GiMountains size={100}/> <GiMountains size={100}/> </h3>
                <p className="future"> The pinnacle of stays</p>
                <p className='booking'> Give us a call to book!</p>
                <div  className="booking">  (555) 555-5555 </div>
                <div className="lefty-call-div">
                 
                    {/* <a className="lefty-call" href="https://www.youtube.com/watch?v=U4SmvlRmdsY" target="_blank"> (Righty calls only - no lefty calls...) </a>   */}
                </div>      
            </div> 
        </div> 
    );
}

export default Home;