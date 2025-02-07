import React from "react";
import picture from "../images/Food.jpg"

const Homepage = () =>{

    //console.log("Imported picture:", picture);
    return (

        
        <>
        <div className="image-container">
            <div className="overlay"></div>
                <img src={picture} alt="Fish and chips" className="homepage-background"/>
                <div className="text-overlay">
                    <p>For your management of you Chip shp business</p>
                    <p>Please hit the login button to log in</p>
                </div>
        </div>
        </>
    )

}

export default Homepage;