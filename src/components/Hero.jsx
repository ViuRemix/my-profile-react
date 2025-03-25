import React from "react";
import styles from "./InputDesign.module.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className={styles.heroSection}>
      <motion.div
        className={styles.heroContent}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className={styles.heroTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hi, I'm Viu
        </motion.h2>
        <motion.p
          className={styles.heroSubtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Frontend Developer & UI/UX Designer
        </motion.p>
        <motion.p
          className={styles.heroDescription}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Hello everyone, I'm Viu, 20 years old. I was born and raised in Gia
          Lai (Phú Thiện) and currently live in Đà Nẵng. I'm passionate about creating
          beautiful and functional web experiences.
        </motion.p>
        <motion.div
          className={styles.ctaContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a 
            href="https://www.facebook.com/messages/t/61574200062342"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Let's Talk
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.imageContainer}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F0922319585a540009a8776a061ecb3c4%2Ff0cd65b45d244a008b1d0e91f0be1010"
          alt="Profile"
          className={styles.profileImage}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
