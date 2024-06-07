import { Button } from "@/components";
import { Modal } from "@/containers";
import { UpdateComputerCategoryDto } from "@rv/entities";
import ComputerCategoryForm from "./ComputerCategoryForm";

interface Props {
  computerCategoryToEdit?: UpdateComputerCategoryDto | undefined;
  onCloseModal?: any;
}

const CreateComputerCategory = ({ computerCategoryToEdit = {} }: Props) => {
  const { uuid: computerCategoryId } = computerCategoryToEdit;
  const isEditSession = Boolean(computerCategoryId);
  return (
    <Modal>
      <Modal.Open opens="brand-form">
        <Button>Create Computer Category</Button>
      </Modal.Open>
      <Modal.Window
        title={
          isEditSession ? "Edit Computer Category" : "Create Computer Category"
        }
        name="brand-form"
      >
        <ComputerCategoryForm computerCategoryToEdit={computerCategoryToEdit} />
      </Modal.Window>
    </Modal>
  );
};

export default CreateComputerCategory;
