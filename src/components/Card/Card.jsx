import useClassName from "../../hooks/useClassName";
import localStyles from "./Card.module.css";

const Card = ({ children, className = "" }) => {
    const cx = useClassName(localStyles);
    return <section className={cx("card", className)}>{children}</section>;
};

export default Card;
