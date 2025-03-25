import React from "react";
import styles from "./InputDesign.module.css";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      title: "Web Development",
      description: "Creating responsive and modern websites using the latest technologies like React, Next.js, and more."
    },
    {
      title: "UI/UX Design",
      description: "Designing beautiful and intuitive user interfaces that provide excellent user experiences."
    },
    {
      title: "Frontend Development",
      description: "Building interactive and dynamic user interfaces with modern JavaScript frameworks."
    }
  ];

  return (
    <motion.section
      id="services"
      className={styles.servicesSection}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className={styles.servicesContent}
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
          My Services
        </motion.h2>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={styles.serviceCard}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ServicesSection;
