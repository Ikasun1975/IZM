import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {

  faInstagram,

  faYoutube,

  faLinkedin,

  faFacebook,

} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

const socialIcons = [

        { icon: faInstagram, url: "https://instagram.com/astastudio.weddings/", label: "Instagram" },

        { icon: faFacebook, url: "https://facebook.com", label: "Facebook" },

        { icon: faYoutube, url: "https://youtube.com/@StudioAsta", label: "YouTube" },

        { icon: faLinkedin, url: "https://linkedin.com/in/asta-studio-407486a2/", label: "LinkedIn" },

    ];


    return(
        <footer>

    	<div className="social">
  {socialIcons.map((item, index) => (
    <a
      key={index}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={item.label}
      style={{ margin: "0 10px", fontSize: "24px", color: "#000" }} // stil možeš prilagoditi
    >
      <FontAwesomeIcon icon={item.icon} />
    </a>
  ))}
</div>

    	<p>Copyright ©2025 All rights reserved</p>

    </footer>
    );
};

export default Footer;