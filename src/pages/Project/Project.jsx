import { useParams } from "react-router-dom";

const Project = () => {
    const { projectId } = useParams();
    return <h1>Welcome to project {projectId} page</h1>;
};

export default Project;
