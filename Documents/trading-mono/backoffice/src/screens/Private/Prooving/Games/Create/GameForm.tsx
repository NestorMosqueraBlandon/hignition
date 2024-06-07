import { Button, Field, ImageInput, Input } from "@/components";
import { useCreategames, useEditGame, useForm, useUploadImage } from "@/hooks";
import { UpdateGameDto } from "@rv/entities";
import styles from "./Create.module.css";

interface Props {
  gameToEdit?: UpdateGameDto | undefined;
  onCloseModal?: any;
}

const GameForm = ({ gameToEdit = {}, onCloseModal }: Props) => {
  const { isCreating, createGame } = useCreategames();
  const { isEditing, editGame } = useEditGame();
  const isWorking = isCreating || isEditing;
  const { uuid: gameId, ...editValues } = gameToEdit;
  const isEditSession = Boolean(gameId);
  const { isLoading, urls, url, uploadImage } = useUploadImage();

  const onSubmit = (data: any) => {
    if (isEditSession) {
      editGame(
        { game: data, uuid: gameId },
        {
          onSuccess: () => {
            onCloseModal?.();
          },
        }
      );
    } else {
      createGame(
        { ...data, image: url },
        {
          onSuccess: () => {
            onCloseModal?.();
          },
        }
      );
    }
  };
  const { formState: game, handleChange } = useForm(
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
          <Input value={game.name} name="name" onChange={handleChange} />
        </Field>
        <Field label="Fps">
          <Input value={game.fps} name="fps" onChange={handleChange} />
        </Field>
      </div>

      <ImageInput isLoading={isLoading} urls={urls} uploadImage={uploadImage} />
      <div className={styles.footer}>
        <Button
          size="sm"
          loading={isCreating}
          onClick={() => onSubmit(game)}
          disabled={isWorking}
        >
          {isEditSession ? "Edit Game" : "Create Game"}
        </Button>
      </div>
    </>
  );
};

export default GameForm;
