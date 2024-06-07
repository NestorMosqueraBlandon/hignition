import { Breadcrumbs, Loader, Menus, Title } from "@/components";
import { Container, ScreenHeader, Table } from "@/containers";
import { useDeleteProgram, usePrograms } from "@/hooks";
import CreateProgram from "./Create";

const Programs = () => {
  const { isLoading, programs } = usePrograms();
  const { isDeleting, deleteProgram } = useDeleteProgram();
  if (isLoading) return <Loader />;

  return (
    <Container>
      <ScreenHeader>
        <div>
          <Breadcrumbs items={["Home", "Programs", "List"]} />
          <Title text="Programs" />
        </div>
        <CreateProgram />
      </ScreenHeader>
      <Menus>
        <Table
          isDeleting={isDeleting}
          deleteHandler={deleteProgram}
          items={programs.items}
          keys={["name", "fps", "createdAt"]}
          headers={["Name", "Fps", "Created At"]}
          count={programs.count}
          pageInfo={programs.pageInfo}
        />
      </Menus>
    </Container>
  );
};

export default Programs;
