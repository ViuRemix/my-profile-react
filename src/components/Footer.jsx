import React from 'react';
import styles from './InputDesign.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      className={styles.footer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className={styles.footerContent}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div 
          className={styles.footerLeft}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div 
            className={styles.footerOffice}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className={styles.footerTitle}>My Address</h2>
            <p className={styles.footerAddress}>
              84 Phan Trọng Tuệ<br />
              Hoà Cường Nam, Hải Châu<br />
              Đà Nẵng, Việt Nam
            </p>
          </motion.div>

          <motion.div 
            className={styles.footerTime}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className={styles.footerSubtitle}>Time</h3>
            <p className={styles.footerText}>
              Monday - Saturday<br />
              9am - 6pm
            </p>
          </motion.div>

          <motion.div 
            className={styles.footerContact}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className={styles.footerSubtitle}>Contact</h3>
            <p className={styles.footerText}>
              viu106018@donga.edu.vn
            </p>
          </motion.div>

          <motion.div 
            className={styles.footerSocial}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <a href="#" className={styles.socialIcon}>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className={styles.socialIcon}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className={styles.socialIcon}>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="#" className={styles.socialIcon}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className={styles.footerMap}
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.5177675796397!2d108.21993527495595!3d16.033014784641636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219edd55be7fd%3A0x38617e31668a6616!2zODQgUGhhbiBUcuG7jW5nIFR14buHLCBIb8OgIEPGsOG7nW5nIE5hbSwgSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5nLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1710401988837!5m2!1svi!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer; 