import React, { useState } from "react";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email, "Password:", password, "Remember Me:", rememberMe);
    };

    return (
        <div className="auth-page section container">
            <div className="auth-container">
                <h2>Sign In</h2>
                <p>Welcome back! Please log in to your account.</p>

                <form onSubmit={handleSubmit} className="form">
                    <div className="inputGroup">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="options">
                        <label className="rememberMe">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            Remember Me
                        </label>
                        <a href="/forgot-password" className="forgotPassword">
                            Forgot Password?
                        </a>
                    </div>
                    <button type="submit" className="btn">
                        Log In
                    </button>
                </form>

                <div className="separator">
                    <span>or</span>
                </div>

                <p>
                    Don't have an account? <a href="/signup">Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
