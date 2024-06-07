import { Button } from "@/components";
import { Modal } from "@/containers";
import { UpdateProgramDto } from "@rv/entities";
import ProgramForm from "./ProgramForm";

interface Props {
  programToEdit?: UpdateProgramDto | undefined;
  onCloseModal?: any;
}

const CreateProgram = ({ programToEdit = {} }: Props) => {
  const { uuid: programId } = programToEdit;
  const isEditSession = Boolean(programId);
  return (
    <Modal>
      <Modal.Open opens="brand-form">
        <Button>Create Program</Button>
      </Modal.Open>
      <Modal.Window
        title={isEditSession ? "Edit Program" : "Create Program"}
        name="brand-form"
      >
        <ProgramForm programToEdit={programToEdit} />
      </Modal.Window>
    </Modal>
  );
};

export default CreateProgram;
