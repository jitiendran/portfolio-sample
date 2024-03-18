import Hero from "../../components/Hero/Hero";
import localStyles from "./Home.module.css";

const Home = () => {
    return (
        <div className={localStyles.page}>
            <Hero />
        </div>
    );
};

export default Home;
