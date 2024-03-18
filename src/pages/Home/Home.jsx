import Card from "../../components/Card/Card";
import Hero from "../../components/Hero/Hero";
import Page from "../../components/Page/Page";
import List from "../../components/List/List";
import data from "../../assets/data/data.json";
import localStyles from "./Home.module.css";
import useClassName from "../../hooks/useClassName";

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
                                    {experience.companyName} .{" "}
                                    {experience.employmentType}
                                </p>
                                <p>
                                    {experience.from} - {experience.to} .{" "}
                                    {experience.noOfYears}
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
        </Page>
    );
};

export default Home;
