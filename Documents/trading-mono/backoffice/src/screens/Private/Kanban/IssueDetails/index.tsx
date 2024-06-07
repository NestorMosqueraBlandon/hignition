import { useEffect, useState } from 'react';
import styles from './IssueDetails.module.css';
import { Button, Field, Input, Loader, TextEditor } from '@/components';
import { fromNow } from '@/utilities/date-formater';
import { useIssueById, useUpdateIssueData } from '@/hooks';
import { Flag } from 'react-feather';

export enum IssuePriority {
    Highest = 'Highest',
    High = 'High',
    Medium = 'Medium',
    Low = 'Low',
    Lowest = 'Lowest',
    Critical = 'Critical',
}

const IssueDetails = () => {
    const { isLoading, issue } = useIssueById();

    const [text, setText] = useState('');
    const [edit, setEdit] = useState(false);
    const [priority, setPriority] = useState(issue?.priority);
    const [, setAssignees] = useState(issue?.assignees);
    const [description, setDescription] = useState(issue?.description);
    const [summary, setSummary] = useState(issue?.summary);

    // let adminsOptions: any = [];
    // const { isLoading: isLoadingAdmins, collaborators: admins } = useCollaborators();

    // if (!isLoadingAdmins) {
    //     adminsOptions = admins?.items?.map((admin: any) => {
    //         return { name: admin.name + ' ' + admin.lastname, value: admin.uuid };
    //     });
    // }

    const { updateIssue } = useUpdateIssueData();
    const handleAddComment = () => {
            updateIssue({
                uuid: issue.uuid,
                comments: [
                    ...issue.comments,
                    { author: "", text: text, createdAt: new Date(), updatedAt: Date.now() },
                ],
            }) as any,
        setText('')
    };

    const handleUpdateIssue = () => {
        updateIssue({ uuid: issue.uuid, priority: priority, description: description, summary: summary });
        setEdit(false);
    };

    useEffect(() => {
         setPriority(issue?.priority);
         setAssignees(issue?.assignees);
         setDescription(issue?.description);
         setSummary(issue?.summary);
    }, [edit]);


    if (isLoading) return <Loader />;

    return (
        <>
            <div className={styles.content}>
                <div>
                    <Field>
                        {edit ? (
                            <Input
                                placeholder="Add a summary of the issue"
                                value={summary}
                                onChange={({ target }) => setSummary(target.value)}
                            />
                        ) : (
                            <h2 className={styles.title}>{issue?.summary}</h2>
                        )}
                    </Field>
                    <Field>
                        {edit ? (
                            <TextEditor className="select" value={description} onChange={setDescription} />
                        ) : (
                            <div
                                className={styles.issue_description_details}
                                dangerouslySetInnerHTML={{ __html: issue?.description }}
                            />
                        )}
                    </Field>
                    <Field label="Comments">
                        <div className={styles.comments_flex}>
                            <Input
                                placeholder="White your comment"
                                value={text}
                                onChange={({ target }) => setText(target.value)}
                            />
                            <Button onClick={handleAddComment}>Add</Button>
                        </div>
                        <div className={styles.comments}>
                            {issue?.comments?.map((comment: any) => (
                                <div key={comment.uuid} className={styles.comment}>
                                    <span className={styles.comment_icon}>
                                        {' '}
                                        <p>{comment?.author?.name?.charAt(0)}</p>{' '}
                                        <p>{comment?.author?.lastname?.charAt(0)}</p>
                                    </span>
                                    <div>
                                        <p className={styles.comment_text}>{comment.text}</p>
                                        <span className={styles.comment_date}>
                                            {fromNow(new Date(comment?.createdAt))}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Field>
                </div>
                <div>
                    <Field label="STATUS">
                        <p className={styles.status}>{issue?.status_issue}</p>
                    </Field>
                    <Field label="PROJECT">
                        <p className={styles.status}>{issue?.project? issue?.project?.name : 'General'}</p>
                    </Field>

                    <Field label="ASSIGNEES">
                        <div className={styles.assignees}>
                            {issue?.assignees?.map((assignee: any) => (
                                <div className={styles.assignee} key={assignee._id}>
                                    {assignee.name} {assignee.lastname}
                                </div>
                            ))}
                        </div>
                    </Field>

                    <Field label="REPORTER">
                        <p className={styles.reporter}>
                            {issue?.reporter?.name} {issue?.reporter?.lastname}
                        </p>
                    </Field>

                    <Field label="PRIORITY">
                        {edit ? (
                            <select name="" value={priority} id="" onChange={({ target }) => setPriority(target.value)}>
                                {Object.values(IssuePriority).map((value) => (
                                    <option key={value} value={value}>
                                        {value}
                                    </option>
                                ))}
                            </select>
                        ) : (
                            <p className={styles.priority}>
                                <span className={styles[`${issue?.priority}`]}>
                                    <Flag size={18} />
                                </span>{' '}
                                {issue?.priority}
                            </p>
                        )}
                    </Field>

                    <div className={styles.date}>
                        <p>Created At {fromNow(issue?.createdAt?.substring(0, 10))}</p>
                        <p>Updated At {fromNow(issue?.updatedAt?.substring(0, 10))}</p>
                    </div>

                    <Field>{edit && <Button onClick={handleUpdateIssue}>Update Issue</Button>}</Field>
                </div>
            </div>
        </>
    );
};

export default IssueDetails;