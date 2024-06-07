import { Breadcrumbs, Loader, Menus, Title } from "@/components";
import { Container, Modal, ScreenHeader, Table } from "@/containers";
import { useDeleteComputerCategory, useComputerCategories } from "@/hooks";
import CreateProductCategory from "./Create";

const ComputerCategories = () => {
  const { isLoading, computerCategories } = useComputerCategories();
  const { isDeleting, deleteComputerCategory } = useDeleteComputerCategory();

  if (isLoading) return <Loader />;
  return (
    <Modal>
      <Container>
        <ScreenHeader>
          <div>
            <Breadcrumbs items={["Home", "Computer Categories", "List"]} />
            <Title text="Computer Categories" />
          </div>
          <CreateProductCategory />
        </ScreenHeader>
        <Menus>
          <Table
            isDeleting={isDeleting}
            deleteHandler={deleteComputerCategory}
            items={computerCategories.items}
            keys={["name", "createdAt"]}
            headers={["Name", "Created At"]}
            count={computerCategories.count}
            pageInfo={computerCategories.pageInfo}
          />
        </Menus>
      </Container>
    </Modal>
  );
};

export default ComputerCategories;
