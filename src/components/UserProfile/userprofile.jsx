"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import "./userprofile.css";
import userImage from "../../Assets/UserImage.png";
import Link from "next/link";
// import Link from "next/link";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("orders");
  const [editMode, setEditMode] = useState(false);

  const orders = [
    {
      id: "#ORD-789321",
      date: "2024-02-20",
      status: "delivered",
      items: 2,
      total: 599.98,
    },
    {
      id: "#ORD-789322",
      date: "2024-02-15",
      status: "processing",
      items: 1,
      total: 299.99,
    },
    {
      id: "#ORD-789323",
      date: "2024-02-10",
      status: "shipped",
      items: 3,
      total: 899.97,
    },
  ];

  const addresses = [
    {
      id: 1,
      type: "Home",
      name: "Baniya",
      street: "Rohini Delhi",
      city: "Delhi",
      state: "NY",
      zip: "110056",
      default: true,
    },
    {
      id: 2,
      type: "Office",
      name: "Baniya",
      street: "Rithala Metro",
      city: "New delhi",
      state: "NY",
      zip: "110056",
      default: false,
    },
  ];

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "delivered":
        return "bg-success";
      case "processing":
        return "bg-warning";
      case "shipped":
        return "bg-info";
      case "cancelled":
        return "bg-danger";
      default:
        return "bg-secondary";
    }
  };

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <div className="container py-3">
        <div className="row">
          {/* Profile Sidebar */}
          <div className="col-lg-3">
            <div className="profile-sidebar">
              <div className="user-info text-center">
                <div className="profile-image-wrapper">
                  <Image
                    src={userImage}
                    alt="Profile"
                    width={100}
                    height={100}
                    className="profile-image"
                  />

                  <div>
                    <button className="edit-photo-btn" onClick={handleClick}>
                      <i className="bi bi-camera-fill"></i>
                    </button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      accept="image/*"
                    />
                  </div>
                </div>
                <h4 className="user-name mt-3">Vishnu Sahu</h4>
                <p className="user-email">Sahu@baniya.com</p>
                <p className="member-since">Member since Feb 2024</p>
              </div>

              <div className="profile-nav">
                <button
                  className={`userprofile-nav-item ${
                    activeTab === "orders" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("orders")}
                >
                  <i className="bi bi-box-seam-fill"></i>
                  My Orders
                </button>
                {/* <button
                  className={`userprofile-nav-item ${
                    activeTab === "wishlist" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("wishlist")}
                >
                  <i className="bi bi-cart4"></i>
                  Cart
                </button> */}
                <button
                  className={`userprofile-nav-item ${
                    activeTab === "addresses" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("addresses")}
                >
                  <i className="bi bi-geo-alt-fill"></i>
                  Addresses
                </button>
                <button
                  className={`userprofile-nav-item ${
                    activeTab === "settings" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("settings")}
                >
                  <i className="bi bi-gear-fill"></i>
                  Settings
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-lg-9">
            <div className="content-wrapper">
              {/* Orders Tab */}
              {activeTab === "orders" && (
                <div className="orders-section">
                  <div className="section-header">
                    <h2>My Orders</h2>
                    <div className="search-box">
                      <i className="bi bi-search"></i>
                      <input type="text" placeholder="Search orders..." />
                    </div>
                  </div>

                  <div className="orders-grid">
                    {orders.map((order) => (
                      <div key={order.id} className="order-card">
                        <div className="order-header">
                          <div>
                            <h6 className="order-id">{order.id}</h6>
                            <span className="order-date">
                              <i className="bi bi-calendar3"></i>
                              {new Date(order.date).toLocaleDateString(
                                "en-US",
                                {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                }
                              )}
                            </span>
                          </div>
                          <span
                            className={`status-badge ${getStatusBadgeClass(
                              order.status
                            )}`}
                          >
                            {order.status}
                          </span>
                        </div>
                        <div className="order-info">
                          <div className="info-item">
                            <span className="label">Items</span>
                            <span className="value">{order.items}</span>
                          </div>
                          <div className="info-item">
                            <span className="label">Total</span>
                            <span className="value">
                              ₹{order.total.toFixed(2)}
                            </span>
                          </div>
                        </div>
                        <div className="order-actions">
                          <button className="btn btn-outline-primary btn-sm">
                            <i className="bi bi-eye-fill"></i>
                            Invoice
                          </button>
                          <Link href="#">
                            <button className="btn btn-outline-secondary btn-sm">
                              <i className="bi bi-arrow-repeat"></i>
                              Buy Again
                            </button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Addresses Tab */}
              {activeTab === "addresses" && (
                <div className="addresses-section">
                  <div className="section-header">
                    <h2>My Addresses</h2>
                    {/* <button className="btn btn-primary">
                      <i className="bi bi-plus-lg"></i>
                      Add New Address
                    </button> */}
                  </div>

                  <div className="addresses-grid">
                    {addresses.map((address) => (
                      <div key={address.id} className="address-card">
                        <div className="address-type">
                          <span className="type-badge">
                            <i className="bi bi-house-door-fill"></i>
                            {address.type}
                          </span>
                          {address.default && (
                            <span className="default-badge">
                              <i className="bi bi-check-circle-fill"></i>
                              Default
                            </span>
                          )}
                        </div>
                        <div className="address-details">
                          <h6>{address.name}</h6>
                          <p>{address.street}</p>
                          <p>{`${address.city}, ${address.state} ${address.zip}`}</p>
                        </div>
                        <div className="address-actions">
                          <button className="btn text-primary ">
                            <i className="bi bi-pencil-fill"></i>
                            Edit
                          </button>
                          <button className="btn text-danger">
                            <i className="bi bi-trash-fill"></i>
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === "settings" && (
                <div className="settings-section">
                  <div className="section-header">
                    <h2>Account Settings</h2>
                    <button
                      className="btn btn-primary"
                      onClick={() => setEditMode(!editMode)}
                    >
                      <i
                        className={`bi bi-${
                          editMode ? "check-lg" : "pencil-fill"
                        }`}
                      ></i>
                      {editMode ? "Save Changes" : "Edit Profile"}
                    </button>
                  </div>

                  <div className="settings-form">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="Baniya"
                            disabled={!editMode}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="Boy"
                            disabled={!editMode}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            className="form-control"
                            defaultValue="baniya.boy@example.com"
                            disabled={!editMode}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Phone</label>
                          <input
                            type="tel"
                            className="form-control"
                            defaultValue="+91 9315478965"
                            disabled={!editMode}
                          />
                        </div>
                      </div>
                    </div>

                    {/* <div className="security-section">
                      <h5>Security</h5>
                      <button className="btn btn-outline-secondary">
                        <i className="bi bi-shield-lock-fill"></i>
                        Change Password
                      </button>
                      <button className="btn btn-outline-secondary">
                        <i className="bi bi-shield-check"></i>
                        Two-Factor Authentication
                      </button>
                    </div> */}

                    <div className="preferences-section">
                      <h5>Preferences</h5>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="emailNotifications"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="emailNotifications"
                        >
                          Email Notifications
                        </label>
                      </div>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="smsNotifications"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="smsNotifications"
                        >
                          SMS Notifications
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
