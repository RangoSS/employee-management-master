import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './../Mystyles/sytleLogin.css'
import Title from './../Title'

const LoginPage = () => {
    const [loginDetails, setLoginDetails] = useState({ username: "", password: "" });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginDetails({ ...loginDetails, [name]: value });
    };

    const handleLogin = () => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (
            storedUser &&
            storedUser.username === loginDetails.username &&
            storedUser.password === loginDetails.password
        ) {
            navigate("/home");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="container">
            <Title subTitle='Wellcome back' title='We are delighted to have you' />
            <div className="login">
                <h2 className="fw-bold mb-3">Login</h2>
                <input className="form-control mb-3"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={loginDetails.username}
                    onChange={handleInputChange}
                />
                <input className="form-control mb-3"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={loginDetails.password}
                    onChange={handleInputChange}
                />
                <div className="d-flex justify-content-between">
                    <button className="btn btn-dark" onClick={handleLogin}>Login</button>
                    <a href="/register" class="link-underline-warning">Do not haveaccount .Register here</a>
                </div>

            </div>
        </div>
    );
};

export default LoginPage;
