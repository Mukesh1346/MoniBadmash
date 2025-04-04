"use client";
import Link from "next/link";
import "./navbar.css";
import weblogo from "../../Assets/WebLogo.png";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const messages = [
    "🎉 Limited Time Offer: Free Shipping on Orders Above ₹6,999! 🚚",
    "🔥 Flat 20% Off on Combo Almirah – Upgrade Your Space Today! 🛋️",
    "✨ Exclusive Deal: Get an Extra 10% Off on Prepaid Orders! 💳",
    "💥 Special Festive Sale: Up to 30% Off on Premium Almirahs! 🏠",
    "🕒 Hurry! Flash Sale Ending Soon – Grab Your Favorite Almirah Now! ⏳",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2000); // Change message every 3 seconds
    return () => clearInterval(interval);
  }, [messages.length]);

  // ------------Navbar-------------

  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="to-make-fix">
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="nav-info">
                <div className="left-nav">
                  <i className="bi bi-telephone"></i>
                  <Link href="tel: 9312217117">
                    <p className="m-0">9312217117</p>
                  </Link>
                </div>
                <div className="center-nav">
                  <div className="info-text">
                    <p className="m-0">{messages[currentIndex]}</p>
                  </div>
                </div>
                <div className="right-nav">
                  <i className="bi bi-question-circle"></i>
                  <Link href="/contact">
                    <p className="m-0">Help</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="nav-info1">
                <div className="left-nav1">
                  <Link href="/contact">
                    <div className="inner-left-nav1">
                      <i className="bi bi-lightning-charge"></i>
                      <p>Dealership</p>
                    </div>
                  </Link>
                </div>

                <div className="center-nav1 py-2">
                  <Link href="/">
                    <Image src={weblogo} alt="KANIKA ALMIRAH" />
                  </Link>
                </div>
                <div className="mob-humber">
                  <button
                    className="menu-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <i className="bi bi-list"></i>
                  </button>
                </div>
                <div className="right-nav1">
                  <Link href="/cart">
                    <div className="inner-left-nav1">
                      <i className="bi bi-cart4"></i>

                      <p>
                        Cart <sup>(4)</sup>
                      </p>
                    </div>
                  </Link>
                  {/* <Link href="/">
                    <div className="inner-left-nav1">
                      <i className="bi bi-bag-heart"></i> <p>Wishlist</p>
                    </div>
                  </Link> */}
                  <Link href="/login">
                    <div className="inner-left-nav1">
                      <i className="bi bi-person"></i> <p>Log In</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />

        <section className="Category-nav bg-light">
          <nav className="navbar2">
            <div className="container p-0">
              <ul className="nav-links">
                <li
                  className={`nav-item ${
                    pathname === "/products" ? "active" : ""
                  }`}
                >
                  <Link href="/products" className="nav-link2">
                    Library Almirah
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    pathname === "/products" ? "active" : ""
                  }`}
                >
                  <Link href="/products" className="nav-link2">
                    Five Door Almirah
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    pathname === "/products" ? "active" : ""
                  }`}
                >
                  <Link href="/products" className="nav-link2">
                    Excel Dressing
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    pathname === "/products" ? "active" : ""
                  }`}
                >
                  <Link href="/products" className="nav-link2">
                    Multi Door Almirah{" "}
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    pathname === "/products" ? "active" : ""
                  }`}
                >
                  <Link href="/products" className="nav-link2">
                    Book Case
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    pathname === "/products" ? "active" : ""
                  }`}
                >
                  <Link href="/products" className="nav-link2">
                    Trunk
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </section>
        <hr className="m-0" />
      </div>

      <section className="mob-web-links">
        <div className={`web-mobile-nav ${isOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            <i className="bi bi-x-lg"></i>
          </button>
          <ul className="web-nav-links-mobile">
            <li>
              <Link
                href="/products"
                className="web-nav-link2"
                onClick={() => setIsOpen(false)}
              >
                Library Almirah
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="web-nav-link2"
                onClick={() => setIsOpen(false)}
              >
                Five Door Almirah
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="web-nav-link2"
                onClick={() => setIsOpen(false)}
              >
                Excel Dressing
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="web-nav-link2"
                onClick={() => setIsOpen(false)}
              >
                Multi Door Almirah
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="web-nav-link2"
                onClick={() => setIsOpen(false)}
              >
                Book Case
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="web-nav-link2"
                onClick={() => setIsOpen(false)}
              >
                Trunk
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section className="mobile-nav">
        <div className="bottom-bar">
          <Link href="/" className="mobnav-item active">
            <i className="bi bi-house-door-fill"></i>
            <span>Home</span>
          </Link>
          <Link
            href="https://wa.me/93122171176"
            target="_blank"
            className="mobnav-item"
          >
            <i className="bi bi-whatsapp"></i>
            <span>Chat</span>
          </Link>
          <Link href="/cart" className="mobnav-item">
            <i className="bi bi-cart-fill"></i>
            <span>Cart</span>
          </Link>
          <Link href="/login" className="mobnav-item">
            <i className="bi bi-person-fill"></i>
            <span>Login</span>
          </Link>
          <Link href="/contact" className="mobnav-item">
            <i className="bi bi-hand-index-thumb-fill"></i>
            <span>Dealership</span>
          </Link>
        </div>
      </section>

      <section></section>
    </>
  );
};

export default Navbar;
