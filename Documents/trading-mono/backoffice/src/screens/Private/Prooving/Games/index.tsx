import { Breadcrumbs, Loader, Menus, Title } from "@/components";
import { Container, ScreenHeader, Table } from "@/containers";
import { useDeleteGame, useGames } from "@/hooks";
import CreateGame from "./Create";

const Games = () => {
  const { isLoading, games } = useGames();
  const { isDeleting, deleteGame } = useDeleteGame();
  if (isLoading) return <Loader />;

  return (
    <Container>
      <ScreenHeader>
        <div>
          <Breadcrumbs items={["Home", "Games", "List"]} />
          <Title text="Games" />
        </div>
        <CreateGame />
      </ScreenHeader>
      <Menus>
        <Table
          isDeleting={isDeleting}
          deleteHandler={deleteGame}
          items={games.items}
          keys={["name", "fps", "createdAt"]}
          headers={["Name", "Fps", "Created At"]}
          count={games.count}
          pageInfo={games.pageInfo}
        />
      </Menus>
    </Container>
  );
};

export default Games;
