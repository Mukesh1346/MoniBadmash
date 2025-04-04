import Image from "next/image";
import React from "react";
import "./popcate.css";
import Heading from "../Heading/heading";
import Link from "next/link";
import product1 from "../../Assets/Almirah1.png";
import product2 from "../../Assets/Almirah2.png";
import product3 from "../../Assets/Almirah4bgr.png";
import product4 from "../../Assets/Almirah5bgr.png";
import product5 from "../../Assets/Almirah6bgr.png";
import product6 from "../../Assets/Almirah7bgr.png";
const PopCate = () => {
  const products = [
    {
      id: 1,
      name: "THREE DOOR FANCY",
      image: product1,
      link: "/products",
    },
    {
      id: 2,
      name: "LIBRARY ALMIRAH",
      image: product2,
      link: "/products",
    },
    {
      id: 3,
      name: "FIVE DOOR",
      image: product3,
      link: "/products",
    },
    {
      id: 4,
      name: "ZERO BORDER",
      image: product4,
      link: "/products",
    },
    {
      id: 5,
      name: "ZERO BORDER DRAJ",
      image: product5,
      link: "/products",
    },
    {
      id: 6,
      name: "EXCEL DRESSING",
      image: product6,
      link: "/products",
    },
    {
      id: 7,
      name: "BOOK CASE",
      image: product1,
      link: "/products",
    },
    {
      id: 8,
      name: "THREE DOOR ALMIRAH",
      image: product2,
      link: "/products",
    },
    // {
    //   id: 9,
    //   name: "FULL HANGER",
    //   image: product3,
    //   link: "/products",
    // },
    // {
    //   id: 10,
    //   name: "OFFICE ALMIRAH",
    //   image: product4,
    //   link: "/products",
    // },
    // {
    //   id: 11,
    //   name: "SANDUK",
    //   image: product5,
    //   link: "/products",
    // },
    // {
    //   id: 12,
    //   name: "ECCO ALMIRAH",
    //   image: product6,
    //   link: "/products",
    // },
  ];

  return (
    <>
      <section className="bg-img py-3">
        <div className="container">
          <div className="row justify-content-center">
            <Heading heading="EXPLORE OUR ALMIRAH RANGE" />
            {products.map((product) => (
              <div
                key={product.id}
                className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay={product.id * 100}
              >
                <div className="productCard">
                  <Link href={product.link} className="text-decoration-none">
                    <div className="productImage">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="innerImage"
                        priority={product.id <= 4} // Load first 4 images immediately
                      />
                    </div>
                  </Link>
                  <h3 className="productName">{product.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PopCate;
