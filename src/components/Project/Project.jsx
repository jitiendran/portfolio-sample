import localStyles from './Project.module.css';
import { FaGithub, FaRegHeart} from 'react-icons/fa'
const ProjectContainer = ({project})=>{
    return (
        <div>
            <p className={localStyles.description}>
                {project.description}
            </p>
            <div className={localStyles['img-container']}>
                {
                    project.images.map(img =>{
                        return <img className ={localStyles.img}src={img}/>
                    })
                }
            </div>
            <div className={localStyles['btn-box']}>
                <button onClick ={()=>{window.open(project.githubUrl,'_blank')}}className={localStyles.btn}>
                    <span>
                        <FaGithub/>
                    </span>
                    Github
                </button>
                <button className={localStyles.btn}>
                    <span>
                        <FaRegHeart/>
                    </span>
                    Like
                </button>
            </div>
        </div>
    )
}

export default ProjectContainer;