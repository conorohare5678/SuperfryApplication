import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Superfry.PNG";

const Navbar = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <img src={Logo} alt="Logo" />
            <div style={{ display: 'flex', gap: '20px', marginRight: "100px" }}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
                <ul>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
