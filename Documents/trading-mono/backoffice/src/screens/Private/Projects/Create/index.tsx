import { Button } from '@/components';
import { Modal } from '@/containers';
import Form from './Form';

export enum IssuePriority {
    Highest = 'Highest',
    High = 'High',
    Medium = 'Medium',
    Low = 'Low',
    Lowest = 'Lowest',
    Critical = 'Critical',
}

const CreateProject = () => {
    return (
        <Modal>
            <Modal.Open opens="project-form">
                <Button size='sm'>Create Project</Button>
            </Modal.Open>
            <Modal.Window title='Create Project' name='project-form'>
                <Form />
            </Modal.Window>
        </Modal>
    )
}
export default CreateProject
