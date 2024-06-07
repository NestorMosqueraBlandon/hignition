import { Button, Field, ImageInput, Input } from '@/components'
import { useCreateBrand, useEditBrand, useForm, useUploadImage } from '@/hooks';
import { UpdateBrandDto } from '@rv/entities';
import styles from './Create.module.css'

interface Props {
    brandToEdit?: UpdateBrandDto | undefined,
    onCloseModal?: any
}

const BrandForm = ({ brandToEdit = {}, onCloseModal }: Props) => {
    const { isCreating, createBrand } = useCreateBrand();
    const { isEditing, editBrand } = useEditBrand();

    const isWorking = isCreating || isEditing;

    const { uuid: brandId, ...editValues } = brandToEdit;
    const isEditSession = Boolean(brandId);

    const { isLoading, urls, url,  uploadImage } = useUploadImage();

    const onSubmit = (data: any) => {
        if (isEditSession) {
            editBrand({ ...data, uuid: brandId }, {
                onSuccess: () => {
                    onCloseModal?.();
                }
            })
        } else {
            createBrand({...data, image: url}, {
                onSuccess: () => {
                    onCloseModal?.();
                }
            })
        }
    }
    const { formState: brand, handleChange } = useForm(isEditSession ? editValues : {
        name: '',
        image: ""
    });

    return (
        <>
            <Field label='Name'>
                <Input value={brand.name} name='name' onChange={handleChange} />
            </Field>
            <ImageInput isLoading={isLoading} urls={urls}  uploadImage={uploadImage} />
            <div className={styles.footer}>
                <Button size='sm' loading={isCreating} onClick={() => onSubmit(brand)} disabled={isWorking}>{isEditSession ? "Edit Brand" : "Create Brand"}</Button>
            </div>
        </>
    )
}

export default BrandForm