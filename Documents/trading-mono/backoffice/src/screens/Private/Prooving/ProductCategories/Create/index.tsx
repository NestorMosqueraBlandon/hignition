import { Button } from "@/components";
import { Modal } from "@/containers";
import { UpdateProductCategoryDto } from "@rv/entities";
import ProductCategoryForm from "./BrandForm";

interface Props {
  productCategoryToEdit?: UpdateProductCategoryDto | undefined;
  onCloseModal?: any;
}

const CreateProductCategory = ({ productCategoryToEdit = {} }: Props) => {
  const { uuid: productCategoryId } = productCategoryToEdit;
  const isEditSession = Boolean(productCategoryId);
  return (
    <Modal>
      <Modal.Open opens="brand-form">
        <Button>Create Brand</Button>
      </Modal.Open>
      <Modal.Window
        title={
          isEditSession ? "Edit Product Category" : "Create Product Category"
        }
        name="brand-form"
      >
        <ProductCategoryForm productCategoryToEdit={productCategoryToEdit} />
      </Modal.Window>
    </Modal>
  );
};

export default CreateProductCategory;
