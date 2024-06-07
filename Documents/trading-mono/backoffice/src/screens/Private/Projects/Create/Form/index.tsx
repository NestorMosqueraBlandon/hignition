import { Button, Field, Input, SearchInput } from '@/components'
import { useAddResource, useCollaborators, useCreateProject, useForm } from '@/hooks'
import { Admin, CreateProjectDto, UpdateIssueDto } from '@rv/entities'
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

interface Props {
    issueToEdit?: UpdateIssueDto
    onCloseModal?: any
}

const Form = ({ issueToEdit={}, onCloseModal }: Props) => {

    const { uuid: issueId, ...editValues } = issueToEdit;
    const isEditSession = Boolean(issueId);

    const { addElement, elements, editElement } = useAddResource();

    console.log(elements)
    const { isCreating, createProject } = useCreateProject();
    const { collaborators } = useCollaborators();
    const [members, setMembers] = useState<Admin[]>([]);
    const { formState: project, handleChange } = useForm<Partial<CreateProjectDto>>(isEditSession ? editValues : {
        name: '',
        client: '',
        category: "",
        description: "",
        start_date: new Date,
        target_date: new Date,
        lead: '',
    });

  return (
    <div>
        <Field label='Name' tip=''>
            <Input name='name' onChange={handleChange} />
        </Field>
        <Field label='Client' tip=''>
        <Input name='client' onChange={handleChange} />
    </Field>
    <Field label='Category' tip=''>
        <Input name='category' onChange={handleChange} />
    </Field>
    <Field label='Description' tip="Describe the project in as much detail as you'd like.">
        <textarea name='description' onChange={handleChange} ></textarea>
    </Field>

    <Field label='Lead'>
        <select name="lead" onChange={handleChange}>
            <option value="" ></option>
            {collaborators?.items.map((item: Admin) => (
                <option key={item.uuid} value={item.uuid} >{item.name} {item.lastname}</option>
            ))}
        </select>
    </Field>
    <Field label='Members'>
        <SearchInput options={collaborators?.items} value={members} setValue={setMembers} />
    </Field>
    <Field label='Resources' className={styles.resource}>
        {elements.map((element) => (
            <>
            <Input key={element} onChange={({target}) => editElement(target.value)} />
            <span></span>
            </>
        ))}
        <Button onClick={addElement} size='sm' variant='third' >Add Resource</Button>
    </Field>
    <Field label='Start Date' tip=''>
        <Input name='start_date' type='date' onChange={handleChange} />
    </Field>
    <Field label='Target Date' tip=''>
        <Input name='target_date' type='date' onChange={handleChange} />
    </Field>
    <div className={styles.footer}>
        <Button size='sm' loading={isCreating} onClick={() => createProject({...project, members},  {
onSuccess: () => {
    onCloseModal?.();
}
})} disabled={isCreating}>Create Project</Button>
    </div>
</div>
  )
}

export default Form