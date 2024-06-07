import { Button, Field, ImageInput, Input } from "@/components";
import {
  useCreateProductCategory,
  useEditProductCategory,
  useForm,
  useUploadImage,
} from "@/hooks";
import styles from "./Create.module.css";
import { UpdateProductCategoryDto } from "@rv/entities";

interface Props {
  productCategoryToEdit?: UpdateProductCategoryDto | undefined;
  onCloseModal?: any;
}

const ProductCategoryForm = ({
  productCategoryToEdit = {},
  onCloseModal,
}: Props) => {
  const { isCreating, createProductCategory } = useCreateProductCategory();
  const { isEditing, editProductCategory } = useEditProductCategory();

  const isWorking = isCreating || isEditing;

  const { uuid: productCategoryId, ...editValues } = productCategoryToEdit;
  const isEditSession = Boolean(productCategoryId);

  const { isLoading, urls, url, uploadImage } = useUploadImage();

  const onSubmit = (data: any) => {
    if (isEditSession) {
      editProductCategory(
        { productCategory: data, uuid: productCategoryId },
        {
          onSuccess: () => {
            onCloseModal?.();
          },
        }
      );
    } else {
      createProductCategory(
        { ...data, image: url },
        {
          onSuccess: () => {
            onCloseModal?.();
          },
        }
      );
    }
  };
  const { formState: productCategory, handleChange } = useForm(
    isEditSession
      ? editValues
      : {
          name: "",
          image: "",
        }
  );

  return (
    <>
      <Field label="Name">
        <Input
          value={productCategory.name}
          name="name"
          onChange={handleChange}
        />
      </Field>
      <ImageInput isLoading={isLoading} urls={urls} uploadImage={uploadImage} />
      <div className={styles.footer}>
        <Button
          size="sm"
          loading={isCreating}
          onClick={() => onSubmit(productCategory)}
          disabled={isWorking}
        >
          {isEditSession ? "Edit Product Category" : "Create Product Category"}
        </Button>
      </div>
    </>
  );
};

export default ProductCategoryForm;
