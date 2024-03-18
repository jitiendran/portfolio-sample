import localStyles from "./Hero.module.css";
import data from "../../assets/data/data.json";

const Hero = () => {
    return (
        <header className={localStyles.card}>
            <div
                className={localStyles["banner-img"]}
                style={{
                    backgroundImage: `url(${data.bannerImg})`,
                }}
            />
            <section className={localStyles["user-section"]}>
                <div
                    className={localStyles.avatar}
                    style={{
                        backgroundImage: `url(${data.profileImg})`,
                    }}
                ></div>
                <div className={localStyles["user-info"]}>
                    <h3>
                        {data.firstname} {data.lastname}
                    </h3>
                    <h4>{data.headLine}</h4>
                </div>
            </section>
        </header>
    );
};

export default Hero;
