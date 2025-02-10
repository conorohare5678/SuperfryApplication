import React from "react";
import picture from "../images/Food.jpg"
<<<<<<< HEAD
import Button from 'react-bootstrap/Button'
=======
import picture2 from "../images/fish.PNG"
>>>>>>> f684ff6a95f2ead87afe9f1a340f4a601b6a6f38

const Login = () => {

    return (
        <>
            <div className="image-container">
                <div className="overlay"></div>
                <img src={picture} alt="Fish and chips" className="homepage-background" />

<<<<<<< HEAD
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
=======
                <form className="login-overlay">
                    <img src={picture2}
                        alt="fish"
                    />
                    <div className="container-overlay">
                        <br />
                        <label>Enter your Username: </label>
                        <br />
                        <input type="text" />
                        <br />
                        <label>Enter your Password: </label>
                        <br />
                        <input type="password" />
                        <br />
                        <button>Login</button>
                    </div>
                </form>


            </div>
>>>>>>> f684ff6a95f2ead87afe9f1a340f4a601b6a6f38
        </>
    )
}

export default Login