import React from "react";
import styles from "./InputDesign.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTiktok } from "@fortawesome/free-brands-svg-icons";

const SocialLinks = () => {
  return (
    <div className={styles.socialContainer}>
      <a
        className={`${styles.socialLink} ${styles.socialIconHover}`}
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebookF} style={{ width: '20px', height: '20px' }} />
      </a>

      <a
        className={`${styles.socialLink} ${styles.emailIconHover}`}
        href="mailto:viu106018@donga.edu.vn"
      >
        <FontAwesomeIcon icon={faEnvelope} style={{ width: '20px', height: '20px' }} />
      </a>

      <a
        className={`${styles.socialLink} ${styles.tiktokIconHover}`}
        href="https://www.tiktok.com/@viu852005dt"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTiktok} style={{ width: '20px', height: '20px' }} />
      </a>
    </div>
  );
};

export default SocialLinks;
