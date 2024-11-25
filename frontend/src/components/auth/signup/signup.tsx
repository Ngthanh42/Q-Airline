import React, { useState } from "react";

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    };

    return (
        <div className="auth-page section container">
            <div className="auth-container">
                <h2>Sign Up</h2>
                <p>Create your account to get started!</p>

                <form onSubmit={handleSubmit} className="form">
                    <div className="inputGroup">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                        />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit" className="btn">
                        Sign Up
                    </button>
                </form>

                <div className="separator">
                    <span>or</span>
                </div>

                <p>
                    Already have an account? <a href="/signin">Sign In</a>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
