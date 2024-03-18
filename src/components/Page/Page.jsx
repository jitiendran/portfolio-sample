import localStyles from "./Page.module.css";

const Page = ({ children }) => {
    return <div className={localStyles.page}>{children}</div>;
};

export default Page;
