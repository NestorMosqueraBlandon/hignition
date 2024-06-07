import { Copy } from "@/components"
import styles from './Card.module.css'
import { useSearchParams } from "react-router-dom";
import { Issue } from "@rv/entities";

interface Props {
  uuid: string;
  name: string;
  client: string;
  progress: number;
  issues: Issue[];
  description: string;
  start_date: Date,
  target_date: Date,
  setProject:Function;
  members: any;
  lead: any;
  project_selected: string;
}

const ProjectCard = ({setProject, project_selected, uuid, members, lead, name, client, progress, description,start_date, target_date}: Props) => {

  const [, setSearchParams] = useSearchParams();

  const handleClick = () => {
    setSearchParams({project: uuid});
    setProject({uuid, name, client, progress, members, description, start_date, target_date})
  }

  return (
    <div className={`${styles.card} ${uuid == project_selected && styles.selected}`} onClick={handleClick}>
        <div>
            <h3>{name}</h3>
            <Copy text={`${lead?.name} ${lead?.lastname}`} />
            {/* <Copy text={`${issues?.length} tasks - 4 overdue`} /> */}
        </div>
        <div>
            {/* <Copy text={` ${start_date}  - Aug 18'`} /> */}
        </div>
  </div>
  )
}

export default ProjectCard