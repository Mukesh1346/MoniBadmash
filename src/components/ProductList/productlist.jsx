"use client";
import "./productlist.css";
import { useState } from "react";
import Image from "next/image";
import product1 from "../../Assets/Almirah4.png";
import product2 from "../../Assets/Almirah5.png";
import product3 from "../../Assets/Almirah6.png";
import product4 from "../../Assets/Almirah7.png";
import product5 from "../../Assets/Almirah8.png";
import product6 from "../../Assets/Almirah9.png";
import product7 from "../../Assets/Almirah10.png";
import product8 from "../../Assets/Almirah11.png";
import product9 from "../../Assets/Almirah12.png";
import Link from "next/link";

const ProductsList = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [selectedFilters, setSelectedFilters] = useState({
    doorType: [],
    colors: [],
    sizes: [],
    materials: [],
  });
  const [sortBy, setSortBy] = useState("featured");

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Elegant Single Door Almirah",
      price: 14999,
      originalPrice: 17999,
      image: product1,
      doorType: "single",
      color: "Brown",
      size: "4x6",
      rating: 4.5,
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
      rating: 4.8,
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
      rating: 4.7,
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
      rating: 4.4,
    },
    {
      id: 5,
      name: "Classic Double Door Almirah",
      price: 24999,
      originalPrice: 28999,
      image: product5,
      doorType: "double",
      color: "Gray",
      size: "6x6",
      rating: 4.6,
    },
    {
      id: 6,
      name: "Royal Triple Door Wardrobe",
      price: 38999,
      originalPrice: 42999,
      image: product6,
      doorType: "triple",
      color: "Red",
      size: "8x7",
      rating: 4.9,
    },
    {
      id: 7,
      name: "Minimalist Door Almirah",
      price: 15999,
      originalPrice: 18999,
      image: product7,
      doorType: "single",
      color: "Pink",
      size: "4x5.5",
      rating: 4.3,
    },
    {
      id: 8,
      name: "Spacious Double Door Almirah",
      price: 27999,
      originalPrice: 31999,
      image: product8,
      doorType: "double",
      color: "Black",
      size: "6x7",
      rating: 4.8,
    },
    {
      id: 9,
      name: "Premium Triple Door Almirah",
      price: 39999,
      originalPrice: 44999,
      image: product9,
      doorType: "triple",
      color: "Maroon",
      size: "8x8",
      rating: 5.0,
    },
  ];

  const toggleFilter = (type, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter((item) => item !== value)
        : [...prev[type], value],
    }));
  };

  const filteredProducts = products.filter((product) => {
    return (
      product.price >= priceRange[0] &&
      product.price <= priceRange[1] &&
      (selectedFilters.doorType.length === 0 ||
        selectedFilters.doorType.includes(product.doorType)) &&
      (selectedFilters.colors.length === 0 ||
        selectedFilters.colors.includes(product.color)) &&
      (selectedFilters.sizes.length === 0 ||
        selectedFilters.sizes.includes(product.size))
    );
  });

  return (
    <>
      <div className="products-page">
        {/* Mobile Filter Toggle */}
        <div className="d-lg-none filter-toggle">
          <button
            className="btn btn-dark w-100 mb-3"
            onClick={() => setShowFilters(!showFilters)}
          >
            <i className="bi bi-funnel me-2"></i>
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>
        </div>

        <div className="container-fluid">
          <div className="row">
            {/* Filters Sidebar */}
            <div
              className={`col-lg-3 filters-sidebar ${
                showFilters ? "show" : ""
              }`}
            >
              <div className="filters-content">
                <div className="filters-header d-flex justify-content-between align-items-center">
                  <h4>Filters</h4>
                </div>

                {/* Price Range Filter */}
                <div className="filter-section">
                  <h5>Price Range</h5>
                  <div className="price-range">
                    <input
                      type="range"
                      className="form-range"
                      min="0"
                      max="50000"
                      step="1000"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([
                          priceRange[0],
                          Number.parseInt(e.target.value),
                        ])
                      }
                    />
                    <div className="price-inputs">
                      <div className="input-group">
                        <span className="input-group-text">₹</span>
                        <input
                          type="number"
                          className="form-control"
                          value={priceRange[0]}
                          onChange={(e) =>
                            setPriceRange([
                              Number.parseInt(e.target.value),
                              priceRange[1],
                            ])
                          }
                        />
                      </div>
                      <div className="input-group">
                        <span className="input-group-text">₹</span>
                        <input
                          type="number"
                          className="form-control"
                          value={priceRange[1]}
                          onChange={(e) =>
                            setPriceRange([
                              priceRange[0],
                              Number.parseInt(e.target.value),
                            ])
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Door Type Filter */}
                <div className="filter-section">
                  <h5>Door Type</h5>
                  {["single", "double", "triple"].map((type) => (
                    <div className="form-check" key={type}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`door-${type}`}
                        checked={selectedFilters.doorType.includes(type)}
                        onChange={() => toggleFilter("doorType", type)}
                      />
                      <label
                        className="form-check-label text-capitalize"
                        htmlFor={`door-${type}`}
                      >
                        {type} Door
                      </label>
                    </div>
                  ))}
                </div>

                {/* Color Filter */}
                <div className="filter-section">
                  <h5>Color</h5>
                  <div className="color-options">
                    {[
                      "Brown",
                      "White",
                      "Green",
                      "Blue",
                      "Gray",
                      "Red",
                      "Pink",
                      "Olive",
                      "Black",
                      "Yellow",
                      "Maroon",
                      "",
                    ].map((color) => (
                      <div
                        key={color}
                        className={`color-option ${
                          selectedFilters.colors.includes(color)
                            ? "selected"
                            : ""
                        }`}
                        onClick={() => toggleFilter("colors", color)}
                        style={{ backgroundColor: color }}
                        title={color}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Size Filter */}
                <div className="filter-section">
                  <h5>Size</h5>
                  {["4x6", "6x6", "8x6"].map((size) => (
                    <div className="form-check" key={size}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`size-${size}`}
                        checked={selectedFilters.sizes.includes(size)}
                        onChange={() => toggleFilter("sizes", size)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`size-${size}`}
                      >
                        {size} ft
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="col-lg-9">
              {/* Sort and Results Info */}
              <div className="products-header">
                <div className="results-info">
                  Showing {filteredProducts.length} results
                </div>
                <div className="sort-options">
                  <select
                    className="form-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                </div>
              </div>

              {/* Products Grid */}
              <div className="row g-4">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="col-md-4 col-sm-6 col-6">
                    <div className="product-card">
                      <Link href={`/products/${product.id}`}>
                        <div className="product-image">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            width={300}
                            height={300}
                            className="img-fluid"
                          />
                        </div>
                      </Link>
                      <div className="product-info">
                        <h3 className="product-title">{product.name}</h3>
                        <div className="product-meta">
                          <span className="door-type">
                            {product.doorType} Door
                          </span>
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
                        <div className="product-rating">
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className={`bi bi-star${
                                i < Math.floor(product.rating)
                                  ? "-fill"
                                  : i < product.rating
                                  ? "-half"
                                  : ""
                              }`}
                            ></i>
                          ))}
                          <span className="rating-value">{product.rating}</span>
                        </div>
                        <div className="Buy-btn w-100">
                          <Link
                            href={`/products/${product.id}`}
                            className="w-100"
                          >
                            <button className="w-100">Buy Now</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsList;
