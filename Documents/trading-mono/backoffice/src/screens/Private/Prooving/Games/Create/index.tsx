import { Button } from "@/components";
import { Modal } from "@/containers";
import { UpdateGameDto } from "@rv/entities";
import GameForm from "./GameForm";

interface Props {
  gameToEdit?: UpdateGameDto | undefined;
  onCloseModal?: any;
}

const CreateGame = ({ gameToEdit = {} }: Props) => {
  const { uuid: gameId } = gameToEdit;
  const isEditSession = Boolean(gameId);
  return (
    <Modal>
      <Modal.Open opens="brand-form">
        <Button>Create Game</Button>
      </Modal.Open>
      <Modal.Window
        title={isEditSession ? "Edit Game" : "Create Game"}
        name="brand-form"
      >
        <GameForm gameToEdit={gameToEdit} />
      </Modal.Window>
    </Modal>
  );
};

export default CreateGame;
