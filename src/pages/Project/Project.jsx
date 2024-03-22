import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Page from "../../components/Page/Page";
import Card from "../../components/Card/Card";
import ProjectContainer from "../../components/Project/Project";
import localStyles from "./Project.module.css"
import data from "../../assets/data/data.json"

const Project = () => {
    const { projectId } = useParams();
    let selectedProject = data.projects.find(project => project?.projectId == projectId);
    if(!selectedProject)
    {
        window.location.href = '/';
        return;
    }
    return (
        <Page>
            <nav>
                <ul className={localStyles.breadCrumbs}>
                    <li>
                        <Link to='/' className="homebtn">
                            <FaHome style={{color:'black'}}/>
                        </Link>
                        <h4>
                            {`/ ${selectedProject.projectName}`}
                        </h4>
                    </li>
                </ul>
            </nav>
            <Card>
                <header className={ localStyles['project-title']}>
                    <h1>{selectedProject.projectName}</h1>
                    <p>{selectedProject.timeline}</p>
                </header>
                <p>{selectedProject.oneLiner}</p>
                <ProjectContainer project={selectedProject}/>
            </Card>
        </Page>
    )
};

export default Project;
