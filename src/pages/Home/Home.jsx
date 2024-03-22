import Card from "../../components/Card/Card";
import Hero from "../../components/Hero/Hero";
import Page from "../../components/Page/Page";
import List from "../../components/List/List";
import data from "../../assets/data/data.json";
import localStyles from "./Home.module.css";
import useClassName from "../../hooks/useClassName";
import { Link } from "react-router-dom";
import {
  BsBoxArrowUpRight,
  BsGithub,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";

const Home = () => {
  const cx = useClassName(localStyles);
  return (
    <Page>
      <Hero />
      <Card>
        <h3>About</h3>
        <p>{data.about}</p>
      </Card>
      <Card>
        <h3>Experience</h3>
        <List>
          {data.experiences.map((experience) => (
            <li key={experience.id} className={cx("row-layout")}>
              <img
                className={cx("row-image")}
                src={experience.companyLogo}
                alt={`${experience.companyName} Logo`}
              />
              <div className={cx("row-details")}>
                <h4>{experience.position}</h4>
                <p>
                  {experience.companyName} . {experience.employmentType}
                </p>
                <p>
                  {experience.from} - {experience.to} . {experience.noOfYears}
                </p>
              </div>
            </li>
          ))}
        </List>
      </Card>
      <Card>
        <h3>Education</h3>
        <List>
          {data.educations.map((education) => (
            <li key={education.id} className={cx("row-layout")}>
              <img
                className={cx("row-image")}
                src={education.instituteLogo}
                alt={`${education.instituteName} Logo`}
              />
              <div className={cx("row-details")}>
                <h4>{education.instituteName}</h4>
                <p>
                  {education.program} . {education.percentage}
                </p>
                <p>
                  {education.from} - {education.to}
                </p>
              </div>
            </li>
          ))}
        </List>
      </Card>
      <Card>
        <h3>Projects</h3>
        <List>
          {data.projects.map((project) => (
            <li key={project.projectId} className={cx("projects-row")}>
              <div className={cx("justify-between")}>
                <h4>{project.projectName}</h4>
                <div className={cx("row-layout")}>
                  <Link to={`project/${project.projectId}`}>
                    <BsBoxArrowUpRight size={20} />
                  </Link>
                  <a href={`${project.githubUrl}`} target="_blank">
                    <BsGithub size={20} />
                  </a>
                </div>
              </div>
              <div>
                <p>{project.oneLiner}</p>
              </div>
            </li>
          ))}
        </List>
      </Card>
      <Card>
        <h3>Skills</h3>
        <div className={cx("grid")}>
          {data.skills.map((skill) => (
            <span key={skill} className={cx("pill")}>
              {skill}
            </span>
          ))}
        </div>
      </Card>

      <Card>
        <div className={cx("footer")}>
          <h4>Let's Connect</h4>
          <p>
            Feel free to write a feedback to{" "}
            <a style={{textDecoration: 'underline'}} href="mailto:jitiendranjiji2000@gmail.com">Elon Musk</a>
          </p>

          <div className={cx("footer-flex")}>
            <a
              href="https://github.com/jitiendran"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub /> Github
            </a>
            |
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram /> Instagram
            </a>
            |
            <a
              href="https://linkedin.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin /> Linkedin
            </a>
          </div>
        </div>
      </Card>
      <footer style={{display: 'flex', justifyContent: 'center'}}>
      Copyright 2024 | Elon Musk
      </footer>
    </Page>
  );
};

export default Home;
