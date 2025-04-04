"use client";
import React from "react";
import "./feproduct.css";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../Heading/heading";
import product1 from "../../Assets/Almirah1.png";
import product2 from "../../Assets/Almirah2.png";
import product3 from "../../Assets/Almirah4bgr.png";
import product4 from "../../Assets/Almirah5bgr.png";
import product5 from "../../Assets/Almirah6bgr.png";
import product6 from "../../Assets/Almirah7bgr.png";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Steel Five Door Almirah",
    description:
      "A five-door almirah is a spacious storage unit with multiple compartments, shelves, and a secure locker, designed for organizing clothes and essentials efficiently.",
    price: 45000,
    oldPrice: 60000,

    image: product1,
  },
  {
    id: 2,
    name: "Steel Five Door Almirah",
    description:
      "A five-door almirah is a spacious storage unit with multiple compartments, shelves, and a secure locker, designed for organizing clothes and essentials efficiently.",
    price: 45000,
    oldPrice: 60000,

    image: product2,
  },
  {
    id: 3,
    name: "Steel Five Door Almirah",
    description:
      "A five-door almirah is a spacious storage unit with multiple compartments, shelves, and a secure locker, designed for organizing clothes and essentials efficiently.",
    price: 45000,
    oldPrice: 60000,

    image: product3,
  },
  {
    id: 4,
    name: "Steel Five Door Almirah",
    description:
      "A five-door almirah is a spacious storage unit with multiple compartments, shelves, and a secure locker, designed for organizing clothes and essentials efficiently.",
    price: 45000,
    oldPrice: 60000,

    image: product4,
  },
  {
    id: 5,
    name: "Steel Five Door Almirah",
    description:
      "A five-door almirah is a spacious storage unit with multiple compartments, shelves, and a secure locker, designed for organizing clothes and essentials efficiently.",
    price: 45000,
    oldPrice: 60000,

    image: product5,
  },
  {
    id: 6,
    name: "Steel Five Door Almirah",
    description:
      "A five-door almirah is a spacious storage unit with multiple compartments, shelves, and a secure locker, designed for organizing clothes and essentials efficiently.",
    price: 45000,
    oldPrice: 60000,

    image: product6,
  },
];

const Feproduct = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,

    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className=" fe-product-bg py-3">
        <div className="container">
          <Heading heading="FEATURE PRODUCTS" />

          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.id} className="card m-auto">
                <div className="feproductImage">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="feInnerImage"
                  />
                </div>
                <h3 className="feproductName">
                  {product.name.length > 25
                    ? product.name.slice(0, 25) + "..."
                    : product.name}
                </h3>
                <p className="description">
                  {product.description.length > 160
                    ? product.description.slice(0, 160) + "..."
                    : product.description}
                </p>
                <div className="price">
                  <p className="oldPrice">Rs {product.oldPrice}</p>{" "}
                  <p className="newPrice">Rs {product.price}</p>
                </div>
                <div className="Buy-btn">
                  <Link href={`/products/${product.id}`}>
                    <button>Grab Now</button>
                  </Link>
                </div>
                <Link href="/">
                  <i className="bi bi-star-fill"></i>{" "}
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Feproduct;
