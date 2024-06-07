import { Button, Field, ImageInput, Input } from "@/components";
import {
  useCreateComputerCategory,
  useEditComputerCategory,
  useForm,
  useUploadImage,
} from "@/hooks";
import styles from "./Create.module.css";
import { UpdateComputerCategoryDto } from "@rv/entities";

interface Props {
  computerCategoryToEdit?: UpdateComputerCategoryDto | undefined;
  onCloseModal?: any;
}

const ComputerCategoryForm = ({
  computerCategoryToEdit = {},
  onCloseModal,
}: Props) => {
  const { isCreating, createComputerCategory } = useCreateComputerCategory();
  const { isEditing, editComputerCategory } = useEditComputerCategory();

  const isWorking = isCreating || isEditing;

  const { uuid: computerCategoryId, ...editValues } = computerCategoryToEdit;
  const isEditSession = Boolean(computerCategoryId);

  const { isLoading, urls, url, uploadImage } = useUploadImage();

  const onSubmit = (data: any) => {
    if (isEditSession) {
      editComputerCategory(
        { computerCategory: data, uuid: computerCategoryId },
        {
          onSuccess: () => {
            onCloseModal?.();
          },
        }
      );
    } else {
      createComputerCategory(
        { ...data, image: url },
        {
          onSuccess: () => {
            onCloseModal?.();
          },
        }
      );
    }
  };
  const { formState: computerCategory, handleChange } = useForm(
    isEditSession
      ? editValues
      : {
          name: "",
          image: "",
          principal: false
        }
  );

  return (
    <>
      <Field label="Name">
        <Input
          value={computerCategory.name}
          name="name"
          onChange={handleChange}
        />
      </Field>
      <ImageInput isLoading={isLoading} urls={urls} uploadImage={uploadImage} />
      <div className={styles.footer}>
        <Button
          size="sm"
          loading={isCreating}
          onClick={() => onSubmit(computerCategory)}
          disabled={isWorking}
        >
          {isEditSession ? "Edit Computer Category" : "Create Computer Category"}
        </Button>
      </div>
    </>
  );
};

export default ComputerCategoryForm;
