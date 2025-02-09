import React from "react";
import picture from "../images/Food.jpg"
import picture2 from "../images/fish.PNG"

const Login = () => {

    return (
        <>
            <div className="image-container">
                <div className="overlay"></div>
                <img src={picture} alt="Fish and chips" className="homepage-background" />

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
        </>
    )
}

export default Login