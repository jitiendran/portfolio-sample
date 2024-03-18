import Card from "../Card/Card";
import localStyles from "./About.module.css";
import data from "../../assets/data/data.json";

const About = () => {
    return (
        <Card className={localStyles.about}>
            <h3>About</h3>
            <p>{data.about}</p>
        </Card>
    );
};

export default About;
