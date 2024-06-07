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

const CreateIssue = () => {
    return (
        <Modal>
            <Modal.Open opens="issue-form">
                <Button size='sm'>Create Issue</Button>
            </Modal.Open>
            <Modal.Window title='Create Issue' name='issue-form'>
                <Form />
            </Modal.Window>
        </Modal>
    )
}
export default CreateIssue
