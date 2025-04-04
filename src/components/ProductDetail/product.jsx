"use client";

import { useState } from "react";
import Image from "next/image";
import "./productdetail.css";
import product1 from "../../Assets/Almirah4.png";
import product2 from "../../Assets/Almirah5.png";
import product3 from "../../Assets/Almirah6.png";
import product4 from "../../Assets/Almirah7.png";
import Link from "next/link";

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [product1, product2, product3, product4];

  const relatedProducts = [
    {
      id: 1,
      name: "Elegant Single Door Almirah",
      price: 14999,
      originalPrice: 17999,
      image: product1,
      doorType: "single",
      color: "Brown",
      size: "4x6",
      link: "/singleProduct",
    },
    {
      id: 2,
      name: "Luxury Double Door Wardrobe",
      price: 26999,
      originalPrice: 29999,
      image: product2,
      doorType: "double",
      color: "White",
      size: "6x6",
      link: "/singleProduct",
    },
    {
      id: 3,
      name: "Spacious Triple Door Almirah",
      price: 37999,
      originalPrice: 41999,
      image: product3,
      doorType: "triple",
      color: "Green",
      size: "8x6",
      link: "/singleProduct",
    },
    {
      id: 4,
      name: "Modern Single Door Wardrobe",
      price: 13999,
      originalPrice: 16999,
      image: product4,
      doorType: "single",
      color: "Blue",
      size: "4x5",
      link: "/singleProduct",
    },
  ];

  return (
    <>
      <section>
        <div className="container mb-5">
          <div className="row">
            {/* Product Images */}
            <div className="col-lg-6">
              <div className="product-gallery">
                <div className="main-image-container mb-3">
                  <Image
                    src={images[selectedImage] || "/placeholder.svg"}
                    alt="Product"
                    width={600}
                    className="main-image"
                  />
                </div>
                <div className="thumbnail-container">
                  {images.map((img, index) => (
                    <div
                      key={index}
                      className={`thumbnail ₹{
                        selectedImage === index ? "active" : ""
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <Image
                        src={img || "/placeholder.svg"}
                        alt={`Thumbnail ₹{index + 1}`}
                        width={100}
                        height={100}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="col-lg-6">
              <div className="product-info">
                <div className="d-flex justify-content-between align-items-start">
                  <h1 className="product-title">Premium Luxury Almirah</h1>
                  <div className="product-actions">
                    <button className="btn btn-link">
                      <i className="bi bi-share icon"></i>
                    </button>
                  </div>
                </div>

                <div className="product-rating mb-3">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="bi bi-star star-icon filled"></i>
                    ))}
                    <span className="rating-count">(128 reviews)</span>
                  </div>
                </div>

                <div className="product-price mb-4">
                  <span className="current-price">
                    {" "}
                    <i className="bi bi-currency-rupee">4999</i>
                  </span>
                  <span className="original-price">
                    {" "}
                    <i className="bi bi-currency-rupee">6999</i>
                  </span>
                  <span className="discount-badge">20% OFF</span>
                </div>

                <div className="product-description mb-4">
                  <p>
                    Elevate your style with our Premium Luxury Almirah. Crafted
                    with precision and attention to detail, this timepiece
                    features premium materials, Swiss movement, and elegant
                    design that makes a bold statement.
                  </p>
                </div>

                <div className="quantity-selector mb-4">
                  <h6>Quantity</h6>
                  <div className="quantity-controls">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <i className="bi bi-dash-lg icon-sm"></i>
                    </button>
                    <span className="quantity">{quantity}</span>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <i className="bi bi-plus-lg icon-sm"></i>
                    </button>
                  </div>
                </div>

                <div className="Buy-btn mb-2">
                  <Link href="/checkout" className="w-100 text-white">
                    <button className="btn w-100">Buy Now</button>
                  </Link>
                </div>
                <div className="Buy-btn mb-2">
                  <button className="btn w-100">Add to Cart </button>
                </div>

                <div className="shipping-info">
                  <div className="shipping-item">
                    <i className="bi bi-truck icon"></i>
                    <div>
                      <h6>Free Shipping</h6>
                      <p>
                        On orders over{" "}
                        <i className="bi bi-currency-rupee">4999</i>
                      </p>
                    </div>
                  </div>
                  <p className="mt-1">
                    <span className="text-danger fw-bold">Note:</span>{" "}
                    Dealership members can connect with us through this link:
                    <Link href="/contact"> Get in touch</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="container mb-5">
          <h3 className="section-title">You May Also Like</h3>
          <div className="row">
            {relatedProducts.map((product, index) => (
              <div key={index} className="col-md-3 col-sm-4 col-6">
                <div className="related-product">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={250}
                    height={250}
                    className="related-product-image img-fluid"
                  />

                  <div className="product-info">
                    <h3 className="product-title">{product.name}</h3>
                    <div className="product-meta">
                      <span className="door-type">{product.doorType} Door</span>
                      <span className="size">{product.size} ft</span>
                    </div>
                    <div className="product-price">
                      <span className="current-price">
                        ₹{product.price.toLocaleString()}
                      </span>
                      <span className="original-price">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    </div>

                    <div className="Buy-btn w-100">
                      <Link href={`/products/${product.id}`} className="w-100">
                        <button className="w-100">Buy Now</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
