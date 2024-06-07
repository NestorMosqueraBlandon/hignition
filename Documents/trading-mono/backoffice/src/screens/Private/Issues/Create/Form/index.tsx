import { Button, Field, Input, SearchInput, TextEditor } from '@/components'
import { useCollaborators, useCreateIssue, useForm, useProjects } from '@/hooks'
import { Admin, CreateIssueDto, UpdateIssueDto } from '@rv/entities'
import { useState } from 'react'

import styles from './Form.module.css'

export enum IssuePriority {
    Highest = 'Highest',
    High = 'High',
    Medium = 'Medium',
    Low = 'Low',
    Lowest = 'Lowest',
    Critical = 'Critical',
}

const StatusTypes = [
    {
        name: "Ideas",
        value: 'Ideas'
    },
    {
        name: "Backlog",
        value: 'Backlog'
    },
    {
        name: 'To do',
        value: 'To do'
    },
    {
        name: 'In Process',
        value: 'In Process'
    },
    {
        name: 'Sprint',
        value: 'Sprint'
    },
    {
        name: 'Review',
        value: 'Review'
    }, {
        name: 'Finished',
        value: 'Finished'
    },
]


const IssueTypeObject = [
    { value: "Bug" },
    { value: "Task" },
    { value: "Story" },
    { value: "Epic" },
    { value: "Subtask" },
    { value: "Change" },
    { value: "Incident" },
    { value: "New Feature" },
    { value: "Problem" },
    { value: "Service Request" }
]

interface Props {
    issueToEdit?: UpdateIssueDto
    onCloseModal?: any
}

const Form = ({ issueToEdit = {}, onCloseModal }: Props) => {

    const { uuid: issueId, ...editValues } = issueToEdit;
    const isEditSession = Boolean(issueId);

    const { isCreating, createIssue } = useCreateIssue();
    const { collaborators } = useCollaborators();
    const { projects } = useProjects();


    const [assignees, setAssignees] = useState<Admin[]>([]);
    const [description, setDescription] = useState<string>('');

    const { formState: issue, handleChange } = useForm<Partial<CreateIssueDto>>(isEditSession ? editValues : {
        summary: '',
        description: description,
        type: IssueTypeObject[0].value,
        code: 1000,
        reporter: '',
        project: '',
        progress: 0,
        status_issue: StatusTypes[0].value,
        estimate: 0,
        priority: IssuePriority.Critical
    });

    console.log(description)
    return (
        <div>
            <Field label='Issue Type' tip='Start typing to get a list of possible matches.'>
                <select name="type" id="" onChange={handleChange}>
                    {IssueTypeObject.map((issueType) => (
                        <option key={issueType.value} value={issueType.value}>{issueType.value}</option>
                    ))}
                </select>
            </Field>
            <Field label='Short Summary' tip='Concisely summarize the issue in one or two sentences'>
                <Input name='summary' onChange={handleChange} />
            </Field>
            <Field label='Description' tip="Describe the issue in as much detail as you'd like.">
                <TextEditor onChange={(value) => setDescription(value)} />
            </Field>
            <Field label='Project'>
                <select name="project" id="" onChange={handleChange}>
                    <option value=""></option>
                    {projects?.items.map((project) => (
                        <option value={project.uuid}>{project.name}</option>
                    ))}
                </select>
            </Field>
            <Field label='Reporter'>
                <select name="reporter" onChange={handleChange}>
                    <option value="" ></option>
                    {collaborators?.items.map((item: Admin) => (
                        <option key={item.uuid} value={item.uuid} >{item.name} {item.lastname}</option>
                    ))}
                </select>
            </Field>
            <Field label='Assignees'>
                <SearchInput options={collaborators?.items} value={assignees} setValue={setAssignees} />
            </Field>
            <Field label='Status'>
                <select name="status_issue" id="" onChange={handleChange} >
                    {StatusTypes.map((value) => (
                        <option key={value.value} value={value.value}>{value.name}</option>
                    ))}
                </select>
            </Field>
            <Field label='Priority' tip='Priority in relation to other issues.'>
                <select name="priority" onChange={handleChange} >
                    {Object.values(IssuePriority).map((value) => (
                        <option key={value} value={value}>{value}</option>
                    ))}
                </select>
            </Field>
            <div className={styles.footer}>
                <Button size='sm' loading={isCreating} onClick={() => createIssue({ ...issue, assignees, description }, {
                    onSuccess: () => {
                        onCloseModal?.();
                    }
                })} disabled={isCreating}>Create Issue</Button>
            </div>
        </div>
    )
}

export default Form