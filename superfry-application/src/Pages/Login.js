import React, {useState} from "react";
import axios from "axios";
import picture from "../images/Food.jpg"
import picture2 from "../images/fish.PNG"
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // const EmployeePage = () =>{
    //     navigate('/EmployeePage')
    // }

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5322/login-user',{
                userName,
                password
            });

            const data = response.data;

              if (data.status === "ok") {
                // Save the token in local storage or context
              localStorage.setItem('token', data.data);
              localStorage.setItem('userName', userName)
              navigate('/EmployeePage');
              } else {
              setError(data.error);
              }
        } catch (error) {
            setError('an error occurred.')
            
        }
    }
    return (
        <>
            <div className="image-container">
                <div className="overlay"></div>
                <img src={picture} alt="Fish and chips" className="homepage-background" />

                <form className="login-overlay" onSubmit={handleLogin}>
                    <img src={picture2}
                        alt="fish"
                    />
                    <div className="container-overlay">
                        <br />
                        <label>Enter your Username: </label>
                        <br />
                        <input 
                        type="text" 
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                        />
                        <br />
                        <label>Enter your Password: </label>
                        <br />
                        <input
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                        <br />
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <button type="submit" >Login</button>
                    </div>
                </form>


            </div>
        </>
    )
}

export default Login