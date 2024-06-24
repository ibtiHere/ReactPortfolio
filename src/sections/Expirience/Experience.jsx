import React from "react";
import styles from "./Experience.module.css"; // Import CSS module

function Experience() {
  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      {/* Add your experience content here */}
      <div className={styles.experienceContent}>
        <div className={styles.job}>
          <h3>Front-end Developer (Internship)</h3>
          <p>Alphinex Solutions</p>
          <p>Duration: January 2024 - March 2024</p>
          <ul>
            <ul>
              Employed modern frontend technologies to deliver a comprehensive
              solution that met and exceeded client requirements, resulting in
              enhanced operational efficiency and user satisfaction.
            </ul>
            <ul style={{ fontWeight: "bold" }}>
              Stacks: ReactJS, TypeScript, MUI, TailwindCSS
            </ul>
          </ul>
        </div>
      </div>
      <div className={styles.experienceContent}>
        <div className={styles.job}>
          <h3>Front-end Developer</h3>
          <p>ExpinSoft</p>
          <p>Duration: April 2024 - June 2024</p>
          <ul>
            <ulx>
              Developed and maintained AKFinTaxAdvisor, a comprehensive web
              application for financial and tax advisory services. Implemented
              user-friendly interfaces and efficient backend systems to enhance
              client experience and streamline advisory processes.
            </ulx>
            <ul style={{ fontWeight: "bold" }}>
              Stacks: ReactJS, TypeScript, MUI, Node, Express
            </ul>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
