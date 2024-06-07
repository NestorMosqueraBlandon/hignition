import { Draggable } from 'react-beautiful-dnd';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './Issue.module.css';
import { Issue as IssueType } from '@rv/entities';
import { FileText, Flag, MessageCircle } from 'react-feather';
import { Modal } from '@/containers';
import { getRandomColor } from '@/utilities';

interface Props extends IssueType {
    index?: number;
}

const Issue = ({ uuid, priority, summary, code, index, assignees, comments }: Props) => {
    const navigate = useNavigate();
    const {projectId} = useParams();
    const useNavigation = () => {
        if(projectId){
            navigate(`/projects/${projectId}/issues/${uuid}?project=${projectId}`)
        }else{
            navigate(`/kanban/issues/${uuid}`)
        }
    }
    return (
        <Draggable draggableId={JSON.stringify({ uuid, priority, summary, code, assignees, comments })} index={index!}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    onClick={useNavigation}
                >

                    <Modal.Open opens={uuid} >
                        <div
                            className={styles.issue_link}
                        >

                            <div
                                className={`${styles.issue} ${snapshot.isDragging && !snapshot.isDropAnimating && styles.isDrag
                                    }`}
                            >
                                <p className={styles.issue_header}>
                                    <span>ISSUE-{code}</span>
                                    <span className={styles[`${priority}`]}>
                                        <Flag size={14} />
                                    </span>
                                </p>
                                <p className={styles.title}>{summary}</p>

                                <div className={styles.bottom}>
                                    {/* <span className={styles.issue_time}>{fromNow(createdAt)}</span> */}
                                    <div className={styles.issue_info}>
                                        <span>
                                            <MessageCircle size={16} />{comments?.length}
                                        </span>
                                        <span>
                                            <FileText size={16} /> 0
                                        </span>
                                    </div>
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
                                </div>
                            </div>

                        </div>
                    </Modal.Open>
                </div>

            )}
        </Draggable>
    );
};

export default Issue;