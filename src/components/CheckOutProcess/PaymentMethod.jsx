"use client"

import { motion } from "framer-motion"
import "./CheckoutForms.css"

export default function PaymentMethod({ formData, handleInputChange, nextStep, prevStep }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    nextStep()
  }

  return (
    <div className="checkout-form-container">
      <motion.h2
        className="form-title"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        Payment Method
      </motion.h2>

      <form onSubmit={handleSubmit}>
        <div className="payment-methods">
          <div className={`payment-method ${formData.paymentMethod === "card" ? "selected" : ""}`}>
            <input
              type="radio"
              id="card"
              name="paymentMethod"
              value="card"
              checked={formData.paymentMethod === "card"}
              onChange={handleInputChange}
            />

            <label htmlFor="card" className="payment-method-label">
              <i className="bi bi-credit-card payment-icon"></i>
              <div className="payment-info">
                <span className="payment-title">Credit / Debit Card</span>
                <span className="payment-subtitle">Pay securely with your card</span>
              </div>
            </label>
          </div>

          <div className={`payment-method ${formData.paymentMethod === "upi" ? "selected" : ""}`}>
            <input
              type="radio"
              id="upi"
              name="paymentMethod"
              value="upi"
              checked={formData.paymentMethod === "upi"}
              onChange={handleInputChange}
            />
            <label htmlFor="upi" className="payment-method-label">
              <i className="bi bi-phone payment-icon"></i>
              <div className="payment-info">
                <span className="payment-title">UPI</span>
                <span className="payment-subtitle">Pay using UPI apps like Google Pay, PhonePe</span>
              </div>
            </label>
          </div>

          <div className={`payment-method ${formData.paymentMethod === "cod" ? "selected" : ""}`}>
            <input
              type="radio"
              id="cod"
              name="paymentMethod"
              value="cod"
              checked={formData.paymentMethod === "cod"}
              onChange={handleInputChange}
            />
            <label htmlFor="cod" className="payment-method-label">
              <i className="bi bi-cash payment-icon"></i>
              <div className="payment-info">
                <span className="payment-title">Cash on Delivery</span>
                <span className="payment-subtitle">Pay when you receive your order</span>
              </div>
            </label>
          </div>
        </div>

        {formData.paymentMethod === "card" && (
          <motion.div
            className="card-details"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            <div className="form-group full-width">
              <label htmlFor="cardNumber">Card Number</label>
              <div className="card-input-container">
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="1234 5678 9012 3456"
                  maxLength="19"
                  required={formData.paymentMethod === "card"}
                />
                <div className="card-icons">
                  <i className="bi bi-credit-card"></i>
                </div>
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="cardName">Name on Card</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={formData.cardName}
                onChange={handleInputChange}
                placeholder="Enter name as on card"
                required={formData.paymentMethod === "card"}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                  maxLength="5"
                  required={formData.paymentMethod === "card"}
                />
              </div>

              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <div className="cvv-container">
                  <input
                    type="password"
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    placeholder="123"
                    maxLength="3"
                    required={formData.paymentMethod === "card"}
                  />
                  <i
                    className="bi bi-question-circle cvv-icon"
                    title="3-digit security code on the back of your card"
                  ></i>
                </div>
              </div>
            </div>

            <div className="form-checkbox">
              <input
                type="checkbox"
                id="savePaymentInfo"
                name="savePaymentInfo"
                checked={formData.savePaymentInfo}
                onChange={handleInputChange}
              />
              <label htmlFor="savePaymentInfo">Save card information for future purchases</label>
            </div>
          </motion.div>
        )}

        {formData.paymentMethod === "upi" && (
          <motion.div
            className="upi-details"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            <div className="form-group full-width">
              <label htmlFor="upiId">UPI ID</label>
              <input
                type="text"
                id="upiId"
                name="upiId"
                placeholder="yourname@upi"
                required={formData.paymentMethod === "upi"}
              />
            </div>
            <p className="payment-note">
              <i className="bi bi-info-circle"></i>
              You will receive a payment request on your UPI app
            </p>
          </motion.div>
        )}

        {formData.paymentMethod === "cod" && (
          <motion.div
            className="cod-details"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            <p className="payment-note">
              <i className="bi bi-info-circle"></i>
              Please keep exact change ready at the time of delivery
            </p>
          </motion.div>
        )}

        <div className="form-actions">
          <motion.button
            type="button"
            className="btn-secondary"
            onClick={prevStep}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <i className="bi bi-arrow-left"></i>
            Back to Shipping
          </motion.button>

          <motion.button type="submit" className="btn-primary" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            Continue to Review
            <i className="bi bi-arrow-right"></i>
          </motion.button>
        </div>
      </form>
    </div>
  )
}

