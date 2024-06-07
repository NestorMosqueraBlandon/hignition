import { Breadcrumbs, Loader, Menus, Title } from "@/components";
import { Container, Modal, ScreenHeader, Table } from "@/containers";
import { useDeleteProductCategory, useProductCategories } from "@/hooks";
import CreateProductCategory from "./Create";

const ProductCategories = () => {
  const { isLoading, productCategories } = useProductCategories();
  const { isDeleting, deleteProductCategory } = useDeleteProductCategory();

  if (isLoading) return <Loader />;
  return (
    <Modal>
      <Container>
        <ScreenHeader>
          <div>
            <Breadcrumbs items={["Home", "Product Categories", "List"]} />
            <Title text="Product Categories" />
          </div>
          <CreateProductCategory />
        </ScreenHeader>
        <Menus>
          <Table
            isDeleting={isDeleting}
            deleteHandler={deleteProductCategory}
            items={productCategories.items}
            keys={["name", "createdAt"]}
            headers={["Name", "Created At"]}
            count={productCategories.count}
            pageInfo={productCategories.pageInfo}
          />
        </Menus>
      </Container>
    </Modal>
  );
};

export default ProductCategories;
