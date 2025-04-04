"use client";

import { useRef, useState } from "react";
import styles from "./ReelSection.module.css"; // CSS Module
import Heading from "../Heading/heading";

const videoData = [
  {
    src: "/videos/video1.mp4",
    price: "$49.99",
    details: "Elegant Red Dress",
    description: "Perfect for evening parties.",
  },
  {
    src: "/videos/video2.mp4",
    price: "$39.99",
    details: "Casual Summer",
    description: "Light and comfortable.",
  },
  {
    src: "/videos/video3.mp4",
    price: "$59.99",
    details: "Formal Black Gown",
    description: "Ideal for formal events.",
  },
  {
    src: "/videos/video4.mp4",
    price: "$29.99",
    details: "Floral Beach Dress",
    description: "Great for vacations.",
  },
  {
    src: "/videos/video5.mp4",
    price: "$45.99",
    details: "Chic Office Wear",
    description: "Stylish and professional.",
  },
  {
    src: "/videos/video6.mp4",
    price: "$34.99",
    details: "Boho Maxi Dress",
    description: "Relaxed and trendy.",
  },
];

export default function ReelSection() {
  const videoRefs = useRef([]);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleMouseEnter = (index) => {
    console.log(videoRefs.current);
    
    videoRefs.current.forEach((video, i) => {
      if (video) {
        if (i === index) {
          video.play();
        } else {
          video.pause();
        }
      }
    });
  };

  const handleMouseLeave = () => {
    videoRefs.current.forEach((video) => video && video.pause());
  };

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
    if (videoRefs.current[index]) {
      videoRefs.current[index].play();
    }
  };

  return (
    <div className="container py-4">
                <Heading heading="COLLECTIONS" />

      <div className="row g-3">
        {videoData.map((item, index) => (
          <div
            key={index}
            className={`col-md-2 col-sm-4 col-6 d-flex flex-column align-items-center position-relative ${styles.videoContainer} ${
              expandedIndex === index ? styles.expanded : ""
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={item.src}
              muted
              loop
              playsInline
              className={`${styles.videoElement} rounded shadow-sm`}
              poster="/Almirah8.png" // optional preview image
            />
            <div
              className={`position-absolute bottom-0 start-0 w-100 p-2 bg-dark d-flex bg-opacity-75 text-white text-center rounded-bottom ${styles.overlay}`}
            >
              <div className="ms-2 d-grid">
                <p className="small mb-1">{item.details}</p>
                <p className="fw-bold mb-1">{item.price}</p>
                <div className="d-flex align-items-center">
                  <button className="btn btn-success btn-sm">Add to Cart</button>
                  <i
                    className={`fa fa-eye ms-3 ${styles.cursorPointer}`}
                    onClick={() => toggleExpand(index)}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

