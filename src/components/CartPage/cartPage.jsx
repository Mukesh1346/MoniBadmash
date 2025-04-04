"use client";

import { useState } from "react";
import Image from "next/image";
import "./cart.css";
import product1 from "../../Assets/Almirah7.png";
import product2 from "../../Assets/Almirah2.png";
import product3 from "../../Assets/Almirah3.png";
import product4 from "../../Assets/Almirah4.png";
import product5 from "../../Assets/Almirah5.png";
import product6 from "../../Assets/Almirah6.png";
import Link from "next/link";

// =====================

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Almirah",
      price: 2999,
      quantity: 1,
      image: product2,
      color: "Brown",
      size: "42mm",
    },
    {
      id: 2,
      name: "Almirah",
      price: 4999,
      quantity: 1,
      image: product1,
      color: "Black",
      size: "Medium",
    },
    {
      id: 3,
      name: "Almirah",
      price: 4999,
      quantity: 1,
      image: product3,
      color: "Black",
      size: "Medium",
    },
    {
      id: 4,
      name: "Almirah",
      price: 4999,
      quantity: 1,
      image: product4,
      color: "Black",
      size: "Medium",
    },
    {
      id: 5,
      name: "Almirah",
      price: 4999,
      quantity: 1,
      image: product5,
      color: "Black",
      size: "Medium",
    },
    {
      id: 6,
      name: "Almirah",
      price: 4999,
      quantity: 1,
      image: product6,
      color: "Black",
      size: "Medium",
    },
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [shippingMethod, setShippingMethod] = useState("standard");

  const updateQuantity = (id, newQuantity) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = shippingMethod === "express" ? 19.99 : 0;
  const discount = 0; // Calculate based on promo code
  const total = subtotal + shipping - discount;

  return (
    <>
      <div className="container pb-5">
        <div className="row">
          {/* Main Cart Content */}
          <div className="col-lg-8">
            {/* <div className="cart-header mb-4">
                <h1 className="cart-title">Shopping Cart</h1>
                <div className="cart-breadcrumb">
                  Cart <ChevronRight className="breadcrumb-icon" /> Shipping{" "}
                  <ChevronRight className="breadcrumb-icon" /> Payment
                </div>
              </div> */}

            {/* Cart Items */}
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={120}
                      height={120}
                      className="product-image"
                    />
                  </div>
                  <div className="item-details">
                    <h3 className="item-name">{item.name}</h3>
                    <div className="item-meta">
                      <span>Color: {item.color}</span>
                      <span>Size: {item.size}</span>
                    </div>
                    <div className="item-actions">
                      <div className="quantity-controls">
                        <button
                          className="quantity-btn"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <i className="bi bi-dash-lg icon-sm1"></i>
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button
                          className="quantity-btn"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <i className="bi bi-plus-lg icon-sm1"></i>
                        </button>
                      </div>
                      <div className="item-price">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                  <div className="item-actions-secondary">
                    <button
                      className="action-btn"
                      onClick={() => removeItem(item.id)}
                    >
                      <i className="bi bi-trash icon-sm1"></i>
                    </button>
                    {/* <button className="action-btn">
                        <i className="bi bi-heart icon-sm1"></i>
                      </button> */}
                  </div>
                </div>
              ))}
            </div>

            {/* Shopping Security */}
            <div className="shopping-security">
              <div className="security-item">
                <i className="bi bi-shield-check security-icon"></i>
                <div>
                  <h4>Secure Shopping</h4>
                  <p>Your data is protected</p>
                </div>
              </div>
              <div className="security-item">
                <i className="bi bi-alarm security-icon"></i>
                <div>
                  <h4>24/7 Support</h4>
                  <p>Round the clock assistance</p>
                </div>
              </div>
              <div className="security-item">
                <i className="bi bi-truck security-icon"></i>
                <div>
                  <h4>Fast Delivery</h4>
                  <p>2-3 business days</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="col-lg-4">
            <div className="order-summary">
              <h2 className="summary-title">Order Summary</h2>

              {/* Promo Code */}
              <div className="promo-code">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="promo-input"
                />
                <button className="promo-btn">Apply</button>
              </div>

              {/* Shipping Method */}
              <div className="shipping-method">
                <h3>Shipping Method</h3>
                <div className="shipping-options">
                  <label className="shipping-option">
                    <input
                      type="radio"
                      name="shipping"
                      value="standard"
                      checked={shippingMethod === "standard"}
                      onChange={(e) => setShippingMethod(e.target.value)}
                    />
                    <div className="option-content">
                      <div>
                        <h4>Standard Delivery</h4>
                        <p>2-3 business days</p>
                      </div>
                      <span className="shipping-price">Free</span>
                    </div>
                  </label>
                  <label className="shipping-option">
                    <input
                      type="radio"
                      name="shipping"
                      value="express"
                      checked={shippingMethod === "express"}
                      onChange={(e) => setShippingMethod(e.target.value)}
                    />
                    <div className="option-content">
                      <div>
                        <h4>Express Delivery</h4>
                        <p>1-2 business days</p>
                      </div>
                      <span className="shipping-price">₹19.99</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Summary Calculations */}
              <div className="summary-calculations">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? "Free" : `₹₹{shipping.toFixed(2)}`}
                  </span>
                </div>
                {discount > 0 && (
                  <div className="summary-row discount">
                    <span>Discount</span>
                    <span>-₹{discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="summary-total">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Link href="/checkout" className="text-decoration-none">
                <div className="Buy-btn">
                  <button className="w-100 py-3">
                    <p>
                      {" "}
                      Proceed to Checkout{" "}
                      <i className="bi bi-arrow-right icon-sm1 animated-class"></i>
                    </p>
                  </button>
                </div>
              </Link>
              <Link href="/products" className="text-decoration-none">
                <div>
                  <button className="checkout-btn">
                    <p>
                      {" "}
                      Continue Shopping{" "}
                      <i className="bi bi-cart4 icon-sm1 animated-class"></i>
                    </p>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
