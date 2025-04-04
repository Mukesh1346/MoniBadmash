"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import "./certificate.css";
import CertificateImage1 from "../../Assets/CertificateImage1 (1).png";
import CertificateImage2 from "../../Assets/CertificateImage1 (2).png";
import CertificateImage3 from "../../Assets/CertificateImage1 (3).png";
import CertificateImage4 from "../../Assets/CertificateImage1 (4).png";
import Heading from "../Heading/heading";

const Certificate = () => {
  const certificates = [
    {
      id: 1,
      image: CertificateImage1,
    },
    {
      id: 2,

      image: CertificateImage2,
    },
    {
      id: 3,

      image: CertificateImage3,
    },
    {
      id: 4,

      image: CertificateImage4,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="container py-4">
        <div className="row">
          <Heading heading="OUR CERTIFICATES" />
        </div>
      </div>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="certificates-grid"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="certificate-card"
              whileHover={{ y: -10 }}
            >
              <div className="certificate-image-wrapper">
                <Image
                  src={cert.image || "/placeholder.svg"}
                  alt="Certificate"
                  width={300}
                  height={400}
                  className="certificate-image"
                />
              </div>
             
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Certificate;
