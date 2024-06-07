import { ChevronRight } from 'react-feather'
import { Copy } from '@/components'
import styles from './TaskCard.module.css'
import colors from '@/styles/colors'
import { Modal } from '@/containers'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { getRandomColor } from '@/utilities'

const TaskCard = ({uuid, code, summary, assignees, priority}: any) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const project = !searchParams.get("project") ? "" : searchParams.get("project");

  return (
    <div
    onClick={() => navigate(`/projects/issues/${uuid}?project=${project}`)}
    
    >

<Modal.Open opens={uuid}>
      
    <div 
    className={styles.card}>

        <div>
            <Copy text={`ISSUE-${code}`} />
            <h4>{summary}</h4>
        </div>
        <div className={styles.next} >
        <div className={styles.assigness_card}>
                                        {assignees?.map((assignee: any) => (
                                            <span key={assignee._id}>
                                                {assignee.photo ? (
                                                    <div className={styles.assigne_picture}>
                                                        <img src={assignee.photo} alt="" />
                                                    </div>
                                                ) : (
                                                    <span className={styles.character} style={{
                                                        backgroundColor: getRandomColor()
                                                    }}> <p>{assignee.name.charAt(0)}</p> <p>{assignee.lastname.charAt(0)}</p></span>
                                                )}
                                            </span>
                                        ))}
                                    </div>
            <span className=''>{priority}</span>
            <ChevronRight color={colors.icon_color} /> 
        </div>
    </div>
    </Modal.Open>
    </div>

  )
}

export default TaskCard