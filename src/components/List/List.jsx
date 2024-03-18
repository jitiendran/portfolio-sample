import "./List.module.css";

const List = ({ children, type = "unordered" }) => {
    return type === "ordered" ? <ol>{children}</ol> : <ul>{children}</ul>;
};

export default List;
