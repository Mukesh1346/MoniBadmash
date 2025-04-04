"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import "./CheckoutForms.css"

export default function OrderReview({ formData, orderItems, nextStep, prevStep }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    nextStep()
  }

  // Calculate order totals
  const subtotal = orderItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 0 // Free shipping
  const tax = subtotal * 0.18 // 18% GST
  const total = subtotal + shipping + tax

  return (
    <div className="checkout-form-container">
      <motion.h2
        className="form-title"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        Review Your Order
      </motion.h2>

      <form onSubmit={handleSubmit}>
        <div className="review-sections">
          <div className="review-section">
            <div className="review-header">
              <h3>Shipping Information</h3>
              <button type="button" className="edit-btn" onClick={prevStep}>
                <i className="bi bi-pencil"></i> Edit
              </button>
            </div>
            <div className="review-content">
              <p>
                <strong>
                  {formData.firstName} {formData.lastName}
                </strong>
              </p>
              <p>{formData.address}</p>
              <p>
                {formData.city}, {formData.state} {formData.zipCode}
              </p>
              <p>{formData.country}</p>
              <p>Email: {formData.email}</p>
              <p>Phone: {formData.phone}</p>
            </div>
          </div>

          <div className="review-section">
            <div className="review-header">
              <h3>Payment Method</h3>
              <button type="button" className="edit-btn" onClick={prevStep}>
                <i className="bi bi-pencil"></i> Edit
              </button>
            </div>
            <div className="review-content">
              {formData.paymentMethod === "card" && (
                <div className="payment-review">
                  <i className="bi bi-credit-card payment-icon"></i>
                  <div>
                    <p>
                      <strong>Credit/Debit Card</strong>
                    </p>
                    <p>Card ending in {formData.cardNumber.slice(-4)}</p>
                  </div>
                </div>
              )}

              {formData.paymentMethod === "upi" && (
                <div className="payment-review">
                  <i className="bi bi-phone payment-icon"></i>
                  <div>
                    <p>
                      <strong>UPI Payment</strong>
                    </p>
                  </div>
                </div>
              )}

              {formData.paymentMethod === "cod" && (
                <div className="payment-review">
                  <i className="bi bi-cash payment-icon"></i>
                  <div>
                    <p>
                      <strong>Cash on Delivery</strong>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="review-section">
            <div className="review-header">
              <h3>Order Items</h3>
            </div>
            <div className="review-content">
              <div className="order-items-review">
                {orderItems.map((item) => (
                  <div key={item.id} className="order-item-review">
                    <div className="item-image">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} width={60} height={60} />
                    </div>
                    <div className="item-details">
                      <h4>{item.name}</h4>
                      <p className="item-variant">{item.variant}</p>
                      <div className="item-price-qty">
                        <span className="item-price">₹{item.price.toLocaleString()}</span>
                        <span className="item-qty">Qty: {item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="order-totals-review">
                <div className="total-row">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="total-row">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `₹${shipping.toLocaleString()}`}</span>
                </div>
                <div className="total-row">
                  <span>Tax (18% GST)</span>
                  <span>₹{tax.toLocaleString()}</span>
                </div>
                <div className="total-row grand-total">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="form-actions">
          <motion.button
            type="button"
            className="btn-secondary"
            onClick={prevStep}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <i className="bi bi-arrow-left"></i>
            Back to Payment
          </motion.button>

          <motion.button type="submit" className="btn-primary" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            Place Order
            <i className="bi bi-check2-circle"></i>
          </motion.button>
        </div>
      </form>
    </div>
  )
}

