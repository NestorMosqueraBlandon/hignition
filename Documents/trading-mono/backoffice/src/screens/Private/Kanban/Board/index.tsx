import Lists from '../Lists';
import { Breadcrumbs, Copy, CopyLinkButton, Loader, Title } from '@/components';
import styles from './Board.module.css'
import { Container, Modal, ScreenHeader } from '@/containers';
import CreateIssue from '../../Issues/Create';
import { useNavigate, useParams } from 'react-router-dom';
import IssueDetails from '../IssueDetails';
import { useDeleteIssue, useIssueById, useIssues, useUser } from '@/hooks';
import { Trash2 } from 'react-feather';
import { useState } from 'react';

const Board = () => {
    const { issueId } = useParams();
    const {issue} = useIssueById();
    const {isLoading, issues} = useIssues();
    const {projectId} = useParams();
    const navigate = useNavigate();
    const [filter, setFilter] = useState('');
    const { user } = useUser();

    const { isDeleting, deleteIssue } = useDeleteIssue();
    const handleDeleteIssue = () => {
        deleteIssue(issue.uuid, {
            onSuccess: () => {
                if(projectId){
                    navigate(`/projects/${projectId}?project=${projectId}`)
                }else{
                    navigate(`/kanban}`)
                }
            }
        });
    };

    // const { adminInfo } = useSelector((state: AppStore) => state.auth);
    return (
        <Modal>

        <Container>
            <ScreenHeader>
                <div>
                    <Breadcrumbs items={['Main', 'Management', 'Kanban board']} />
                    <Title text='Kanban Board' />
                    <Copy text="The purpose of the company's Kanban board is to centralize and efficiently organize all tasks. This system will facilitate task management and tracking, enhance coordination between teams, and optimize our operational processes for more effective functioning." />
                </div>
                <div className={styles.right}>
                    <select className={styles.issues_select} name="" id="" value={filter}
                        onChange={({ target }) => setFilter(target.value)}>
                        <option value="">All</option>
                        <option value={user?.uuid}>Only My Issues</option>
                    </select>
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
             
                </div>
            </div>
            
            <div className={styles.container}>

            <Lists isLoading={isLoading} issues={issues} filter={filter} />
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

                <IssueDetails  />
                </Modal.Window>

        </Container>
        </Modal>

    );
};

export default Board;