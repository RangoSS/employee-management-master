import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from './../Title'

const RegistrationPage = () => {
    const [userDetails, setUserDetails] = useState({
        username: "",
        password: "",
        email: "",
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
    };

    const handleRegister = () => {
        localStorage.setItem("user", JSON.stringify(userDetails));
        navigate("/login");
    };

    return (
        <div className="container">
            <Title subTitle='Wellcome onboard' title='We are delighted to have you' />
            <div className="row">
                <div className="col-md-4 col-sm-12 register">
                    <div className="register-2">
                        <h2>Register</h2>
                        <input className="form-control mb-2"
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={userDetails.username}
                            onChange={handleInputChange}
                        />
                        <input className="form-control mb-2"
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={userDetails.email}
                            onChange={handleInputChange}
                        />
                        <input className="form-control mb-2"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={userDetails.password}
                            onChange={handleInputChange}
                        />
                        <button className="btn btn-dark" onClick={handleRegister}>Register</button>

                    </div>
                </div>
                <div className="col-md-8 col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            Wellcome to our Team:
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">We are delighted to have you among us. On behalf of all the members and the management, we would like to extend our warmest welcome and good wishes!

                                Welcome to the team! We are thrilled to have you at our office. You’re going to be a valuable asset to our company, and we can’t wait to see all that you accomplish.

                                The entire team of [name of the company] is thrilled to welcome you on board. We hope you’ll do some amazing work here!

                                A warm welcome and lots of good wishes on becoming part of our growing team. Congratulations and on behalf of all the members. We are all happy and excited about your input and contribution to our company..</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;
