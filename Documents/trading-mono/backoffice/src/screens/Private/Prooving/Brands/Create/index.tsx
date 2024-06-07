import { Button } from '@/components';
import { Modal } from '@/containers';
import BrandForm from './BrandForm';
import { UpdateBrandDto } from '@rv/entities';

interface Props {
    brandToEdit?: UpdateBrandDto | undefined,
    onCloseModal?: any
}

const CreateBrand = ({brandToEdit = {}}: Props) => {
     const { uuid: brandId } = brandToEdit;
    const isEditSession = Boolean(brandId);
    return (
        <Modal>
            <Modal.Open opens="brand-form">
                <Button>Create Brand</Button>
            </Modal.Open>
            <Modal.Window title={isEditSession ? "Edit Brand" : "Create Brand"} name='brand-form'>
               <BrandForm  brandToEdit={brandToEdit} />
            </Modal.Window>
        </Modal>
    )
}

export default CreateBrand;