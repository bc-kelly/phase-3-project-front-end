import React from 'react';
import { GiMountains } from "react-icons/gi";

function Home() {
    const style = { fontSize: "4vw" }
    
    return ( 
        <div >
            <div className="hp-image">
                <div className='home-pic'> </div>
                <h2 className="home-page">Welcome to Retro BnB</h2>
                <p className="future"> The Pinnacle of Stays</p>
                <h3 className="hp-mountains"> <GiMountains style={style}/> <GiMountains style={style}/> <GiMountains style={style}/> </h3>
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