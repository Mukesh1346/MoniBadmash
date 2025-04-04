"use client";

import React from "react";
import "./login.css";

import { useState, useEffect } from "react";
import PageHeading from "@/components/PageHeading/pageHeading";
import Head from "next/head";

const page = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  // Password strength calculator
  useEffect(() => {
    let strength = 0;
    if (password.length > 8) strength += 1;
    if (password.match(/[A-Z]/)) strength += 1;
    if (password.match(/[0-9]/)) strength += 1;
    if (password.match(/[^A-Za-z0-9]/)) strength += 1;
    setPasswordStrength(strength);
  }, [password]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setResetEmailSent(false);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    setResetEmailSent(true);
  };

  return (
    <>

<Head>
        <title>Login - Access Your Account | Steel Shiva</title>
        <meta name="description" content="Log in to your Steel Shiva account to manage your orders, track deliveries, and access exclusive deals on steel almirahs, wardrobes, and metal furniture." />
        <meta name="keywords" content="login, user login, steel shiva login, customer login, sign in, track orders, steel almirah account, online furniture store login, wardrobe order tracking, secure login, metal furniture dashboard, customer portal, steel cupboard purchase history, user authentication, ecommerce login page, home storage solutions login" />
        <meta name="author" content="Steel Shiva" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="Login - Access Your Account | Steel Shiva" />
        <meta property="og:description" content="Sign in to your Steel Shiva account to manage orders, track deliveries, and access exclusive steel furniture deals. Secure and easy login process." />
        <meta property="og:image" content="/images/steelshiva-login.jpg" />
        <meta property="og:url" content="https://steelshiva.com/login" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Login - Access Your Account | Steel Shiva" />
        <meta name="twitter:description" content="Log in to manage your orders, track deliveries, and shop for premium steel almirahs, wardrobes, and storage furniture." />
        <meta name="twitter:image" content="/images/steelshiva-login.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://steelshiva.com/login" />
      </Head>

      
      <div className="container">
        <div className="row">
          <PageHeading PageTitle="LOGIN/SIGN UP" />
          <div className="animated-background">
            <div className="gradient-blob blob-1"></div>
            <div className="gradient-blob blob-2"></div>
            <div className="gradient-blob blob-3"></div>
          </div>
        </div>
      </div>
      <div className="auth-container">
        <div className="auth-card">
          {/* Auth Tabs */}
          <div className="auth-tabs">
            <button
              className={`tab-btn ${activeTab === "login" ? "active" : ""}`}
              onClick={() => handleTabChange("login")}
            >
              Login
            </button>
            <button
              className={`tab-btn ${activeTab === "signup" ? "active" : ""}`}
              onClick={() => handleTabChange("signup")}
            >
              Sign Up
            </button>
            <button
              className={`tab-btn ${activeTab === "reset" ? "active" : ""}`}
              onClick={() => handleTabChange("reset")}
            >
              Reset
            </button>
            <div
              className="tab-indicator"
              style={{
                left:
                  activeTab === "login"
                    ? "0%"
                    : activeTab === "signup"
                    ? "33.33%"
                    : "66.66%",
              }}
            ></div>
          </div>

          {/* Login Form */}
          <div className={`auth-form ${activeTab === "login" ? "active" : ""}`}>
            <h2 className="login-form-title">Welcome Back!</h2>
            <p className="login-form-subtitle">Please login to your account</p>

            <form className="login-form-content">
              <div className="login-form-group">
                <div className="login-input-icon">
                  <i className="bi bi-envelope Loginicon"></i>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="login-form-input"
                  />
                </div>
              </div>

              <div className="login-form-group">
                <div className="login-input-icon">
                  <i className="bi bi-lock Loginicon"></i>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={formState.password}
                    onChange={(e) =>
                      setFormState({ ...formState, password: e.target.value })
                    }
                    className="login-form-input"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <i className="bi bi-eye-slash Loginicon"></i>
                    ) : (
                      <i className="bi bi-eye Loginicon"></i>
                    )}
                  </button>
                </div>
              </div>
              <div className="Buy-btn">
                <button type="submit" className="submit-btn">
                  Login <i className="bi bi-arrow-right btn-icon"></i>
                </button>
              </div>

              {/* <div className="social-login">
                <p>Or continue with</p>
                <div className="social-buttons">
                  <button type="button" className="social-btn">
                    <Github className="social-icon" />
                  </button>
                  <button type="button" className="social-btn">
                    <Facebook className="social-icon" />
                  </button>
                  <button type="button" className="social-btn">
                    <Twitter className="social-icon" />
                  </button>
                </div>
              </div> */}
            </form>
          </div>

          {/* Sign Up Form */}
          <div
            className={`auth-form ${activeTab === "signup" ? "active" : ""}`}
          >
            <h2 className="login-form-title">Create Account</h2>
            <p className="login-form-subtitle">Join our community today</p>

            <form className="login-form-content">
              <div className="login-form-group">
                <div className="login-input-icon">
                  <i className="bi bi-person Loginicon"></i>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="login-form-input"
                  />
                </div>
              </div>

              <div className="login-form-group">
                <div className="login-input-icon">
                  <i className="bi bi-envelope Loginicon"></i>

                  <input
                    type="email"
                    placeholder="Email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="login-form-input"
                  />
                </div>
              </div>

              <div className="login-form-group">
                <div className="login-input-icon">
                  <i className="bi bi-telephone Loginicon"></i>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formState.phone}
                    onChange={(e) =>
                      setFormState({ ...formState, phone: e.target.value })
                    }
                    className="login-form-input"
                  />
                </div>
              </div>

              <div className="login-form-group">
                <div className="login-input-icon">
                  <i className="bi bi-lock Loginicon"></i>

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="login-form-input"
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <i className="bi bi-eye-slash Loginicon"></i>
                    ) : (
                      <i className="bi bi-eye Loginicon"></i>
                    )}
                  </button>
                </div>
                <div className="password-strength">
                  <div className="strength-bars">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className={`strength-bar ${
                          i < passwordStrength ? "active" : ""
                        }`}
                      ></div>
                    ))}
                  </div>
                  <span className="strength-text">
                    {passwordStrength === 0 && "Weak"}
                    {passwordStrength === 1 && "Fair"}
                    {passwordStrength === 2 && "Good"}
                    {passwordStrength === 3 && "Strong"}
                    {passwordStrength === 4 && "Very Strong"}
                  </span>
                </div>
              </div>

              <div className="Buy-btn">
                <button type="submit" className="submit-btn">
                  Create Account <i className="bi bi-arrow-right btn-icon"></i>
                </button>
              </div>
            </form>
          </div>

          {/* Reset Password Form */}
          <div className={`auth-form ${activeTab === "reset" ? "active" : ""}`}>
            {!resetEmailSent ? (
              <>
                <h2 className="login-form-title">Reset Password</h2>
                <p className="login-form-subtitle">
                  We'll send you instructions via email
                </p>

                <form className="login-form-content" onSubmit={handleResetPassword}>
                  <div className="login-form-group">
                    <div className="login-input-icon">
                      <i className="bi bi-envelope Loginicon"></i>

                      <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="login-form-input"
                      />
                    </div>
                  </div>

                  <div className="Buy-btn">
                    <button type="submit" className="submit-btn">
                      Send Instructions{" "}
                      <i className="bi bi-arrow-right btn-icon"></i>
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="reset-success">
                <div className="success-icon">
                  <i className="bi bi-check-lg check-icon"></i>
                </div>
                <h3>Check Your Email</h3>
                <p>
                  We've sent password reset instructions to your email address.
                </p>
                <button
                  className="back-btn"
                  onClick={() => handleTabChange("login")}
                >
                  Back to Login
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
