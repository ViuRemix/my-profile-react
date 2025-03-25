import React from "react";
import styles from "./InputDesign.module.css";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <motion.section
      id="about"
      className={styles.aboutSection}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className={styles.aboutContent}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          About Me
        </motion.h2>
        <motion.div 
          className={styles.aboutText}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>
            I'm a passionate individual from the beautiful highlands of Gia Lai,
            currently pursuing my dreams in Da Nang. My journey has been shaped
            by the rich cultural heritage of my hometown and the dynamic energy
            of city life. I love exploring new technologies, creating digital
            experiences, and connecting with people from different backgrounds.
          </p>
          <p className={styles.paragraphSpacing}>
            When I'm not working, you can find me exploring the local coffee
            shops, capturing moments through photography, or learning new skills
            to expand my creative horizons.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
