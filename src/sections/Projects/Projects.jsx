import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";
import Phone from "../../assets/phone.jpg";
import Pass from "../../assets/images.png";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/ibtiHere/ReactWheatherApp"
          h3="Wheather"
          p="Wheather App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/ibtiHere/ReactFoodRecipeApp"
          h3="Foodie"
          p="Food Recipe App"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/ibtiHere/ReactFoodRecipeApp"
          h3="User Centric"
          p="learning Management system"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/ibtiHere/React20Components"
          h3="React Component Showcase"
          p="20 React Components"
        />

        <ProjectCard
          src={Phone}
          link="https://github.com/ibtiHere/ReactContactApp"
          h3="Dial Up"
          p="ContactApp"
        />

        <ProjectCard
          src={Pass}
          link="https://github.com/ibtiHere/ReactComplexPasswordApp"
          h3="Password Complexer"
          p="Generate Complex password"
        />
      </div>
    </section>
  );
}

export default Projects;
