import React from "react";
import picture from "../images/Food.jpg"
import Button from 'react-bootstrap/Button'

const Login = () =>{

    return(
        <>
        <div className="image-container">
                    <div className="overlay"></div>
                        <img src={picture} alt="Fish and chips" className="homepage-background"/>
                        <form className="login-overlay">
                            <label>Enter your Username: </label>
                            <br/>
                            <input type="text"/>

                            <br/>
                            <label>Enter your Password: </label>
                            <br/>
                            <input type="password"/>
                            <br/>
                            <div className="button-style">
                            <Button variant="light">Login</Button>
                            </div>
                        </form>
                        
                </div>
        </>
    )
}

export default Login