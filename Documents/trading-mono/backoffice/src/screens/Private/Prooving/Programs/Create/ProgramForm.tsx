import { Button, Field, ImageInput, Input } from "@/components";
import {  useCreateProgram, useEditProgram, useForm, useUploadImage } from "@/hooks";
import styles from "./Create.module.css";
import { UpdateProgramDto } from "@rv/entities";

interface Props {
  programToEdit?: UpdateProgramDto | undefined;
  onCloseModal?: any;
}

const ProgramForm = ({ programToEdit = {}, onCloseModal }: Props) => {
  const { isCreating, createProgram } = useCreateProgram();
  const { isEditing, editProgram } = useEditProgram();
  const isWorking = isCreating || isEditing;
  const { uuid: programId, ...editValues } = programToEdit;
  const isEditSession = Boolean(programId);
  const { isLoading, urls, url, uploadImage } = useUploadImage();

  const onSubmit = (data: any) => {
    if (isEditSession) {
      editProgram(
        { game: data, uuid: programId },
        {
          onSuccess: () => {
            onCloseModal?.();
          },
        }
      );
    } else {
      createProgram(
        { ...data, image: url },
        {
          onSuccess: () => {
            onCloseModal?.();
          },
        }
      );
    }
  };
  const { formState: program, handleChange } = useForm(
    isEditSession
      ? editValues
      : {
          name: "",
          fps: "",
          image: "",
        }
  );

  return (
    <>
      <div className={styles.inputs_sec}>
        <Field label="Name">
          <Input value={program.name} name="name" onChange={handleChange} />
        </Field>
        <Field label="Fps">
          <Input value={program.fps} name="fps" onChange={handleChange} />
        </Field>
      </div>

      <ImageInput isLoading={isLoading} urls={urls} uploadImage={uploadImage} />
      <div className={styles.footer}>
        <Button
          size="sm"
          loading={isCreating}
          onClick={() => onSubmit(program)}
          disabled={isWorking}
        >
          {isEditSession ? "Edit Program" : "Create Program"}
        </Button>
      </div>
    </>
  );
};

export default ProgramForm;
