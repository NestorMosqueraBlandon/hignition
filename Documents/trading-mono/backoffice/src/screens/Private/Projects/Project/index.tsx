import { Breadcrumbs, Copy, CopyLinkButton, Loader, Title } from '@/components'
// import styles from './Project.module.css'
import { Container, Modal, ScreenHeader } from '@/containers'
import { useDeleteIssue, useIssueById, useIssuesByProjectId, useProjectById } from '@/hooks'
import CreateIssue from '../../Issues/Create';
import styles from './Project.module.css'
import Lists from '../../Kanban/Lists';
import { Trash2 } from 'react-feather';
import IssueDetails from '../../Kanban/IssueDetails';
import { useNavigate, useParams } from 'react-router-dom';
import { getRandomColor } from '@/utilities';
const Project = () => {
    const { isLoading, project } = useProjectById();
    const { issueId } = useParams();
    const { issue } = useIssueById();
    const { isLoading: loadingIssues, issues } = useIssuesByProjectId();
    const { projectId } = useParams();

    const navigate = useNavigate();

    const { isDeleting, deleteIssue } = useDeleteIssue();
    const handleDeleteIssue = () => {
        deleteIssue(issue.uuid, {
            onSuccess: () => {
                if (projectId) {
                    navigate(`/projects/${projectId}?project=${projectId}`)
                } else {
                    navigate(`/kanban}`)
                }
            }
        });
    };

    if (isLoading) return <Loader />

    return (
        <Modal>
            <Container>
                <ScreenHeader>
                    <div>
                        <Breadcrumbs items={['Projects', `${project?.name}`, 'Kanban board']} />
                        <Title text={project?.name} />
                        <Copy text={project?.description} />
                    </div>
                    <div className={styles.info}>
                        <div className={styles.assigness_card}>
                            {project?.members?.map((assignee: any) => (
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

                        <CreateIssue />

                    </div>
                </ScreenHeader>




                <div className={styles.kanban_header}>
                    <div className={styles.left}>

                        {/* <Field label="Search" tip="Search element by name">
            <Input
                type="search"
                style={{
                    width: 400,
                }}
                value={search}
                onChange={({ target }) => setSearch(target.value)}
            />
        </Field> */}
                        {/* <Field>
            <select name="" id=""                         value={filter}
                onChange={({ target }) => setFilter(target.value)}>
                <option value="">All</option>
                <option value={adminInfo.uuid}>Only My Issues</option>
            </select>
        </Field> */}
                    </div>
                </div>

                <div className={styles.container}>
                    <Lists isLoading={loadingIssues} issues={issues} filter='' />
                </div>

                <Modal.Window
                    name={issueId}
                    title='Issue Details'
                    element={`${issue?.type}-${issue?.code}`}
                    options={
                        <div style={{
                            display: 'flex',
                            gap: 10,
                            alignItems: 'center'
                        }}>
                            <CopyLinkButton />
                            {isDeleting ? <Loader /> : (

                                <button className={styles.delete_button} onClick={handleDeleteIssue}>
                                    <Trash2 size={20} />
                                </button>
                            )}

                        </div>
                    } >

                    <IssueDetails />
                </Modal.Window>

            </Container >
        </Modal >
    )
}

export default Project