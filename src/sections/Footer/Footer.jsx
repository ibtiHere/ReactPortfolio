// Footer.jsx

import React from "react";
import styles from "./FooterStyles.module.css";
import { useTheme } from "../../common/ThemeContext";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";

function Footer() {
  const { theme } = useTheme();

  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <a
          href="https://twitter.com/ibtasam/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitterIcon} alt="Twitter icon" />
        </a>
        <a
          href="https://github.com/ibtiHere"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="Github icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/ibtasam-hussain-54446928b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin icon" />
        </a>
      </div>
      <p>
        &copy; {new Date().getFullYear()} Your Company Name. All rights
        reserved.
      </p>
    </footer>
  );
}

export default Footer;
