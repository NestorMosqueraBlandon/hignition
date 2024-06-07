import { Breadcrumbs, Loader, Menus, Title } from "@/components";
import { Container, Modal, ScreenHeader, Table } from "@/containers";
import { useBrands, useDeleteBrand } from "@/hooks";
import CreateBrand from "./Create";

const Brands = () => {
  const { isLoading, brands } = useBrands();
  const { isDeleting, deleteBrand } = useDeleteBrand();

  if (isLoading) return <Loader />;
  return (
    <Modal>
      <Container>
        <ScreenHeader>
          <div>
            <Breadcrumbs items={["Home", "Brands", "List"]} />
            <Title text="Brands" />
          </div>
          <CreateBrand />
        </ScreenHeader>
        <Menus>
          <Table
            isDeleting={isDeleting}
            deleteHandler={deleteBrand}
            items={brands.items}
            keys={["name", "createdAt"]}
            headers={["Name", "Created At"]}
            count={brands.count}
            pageInfo={brands.pageInfo}
          />
        </Menus>
      </Container>
    </Modal>
  );
};

export default Brands;
