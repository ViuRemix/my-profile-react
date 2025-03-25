import React, { useState } from "react";
import styles from "./InputDesign.module.css";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    
    // Encode các giá trị để tránh lỗi ký tự đặc biệt
    const encodedName = encodeURIComponent(name);
    const encodedEmail = encodeURIComponent(email);
    const encodedMessage = encodeURIComponent(message);
    
    // Tạo mailto link với thông tin từ form đã được encode
    const mailtoLink = `mailto:viu106018@donga.edu.vn?subject=Message from ${encodedName}&body=Name: ${encodedName}%0D%0AEmail: ${encodedEmail}%0D%0A%0D%0AMessage:%0D%0A${encodedMessage}`;
    
    // Mở email client
    window.location.href = mailtoLink;
    
    // Reset form sau khi gửi
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <motion.section 
      id="contact" 
      className={styles.contactSection}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className={styles.contactContent}
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
          Contact Me
        </motion.h2>
        <motion.form 
          onSubmit={handleSubmit}
          className={styles.contactForm}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className={`${styles.input} ${styles.nameInput}`}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            required
          />
          <motion.input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className={`${styles.input} ${styles.emailInput}`}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            required
          />
          <motion.textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className={`${styles.textarea} ${styles.messageTextarea}`}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            required
          />
          <motion.button
            type="submit"
            className={`${styles.button} ${styles.submitButton}`}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default ContactSection;
