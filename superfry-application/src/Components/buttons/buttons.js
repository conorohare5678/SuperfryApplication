import React from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';


const Button_Navigation = () =>{
    const navigate = useNavigate();

    const ButtonsPageNav = ({ButtonName}) =>{
        if(ButtonName.name === "Rota Page"){
            navigate("/ActionPage")
        }
        
    }
    return (
        <Button variant="primary" onClick={ButtonsPageNav}>Click Here</Button>
    );
}

export default Button_Navigation;