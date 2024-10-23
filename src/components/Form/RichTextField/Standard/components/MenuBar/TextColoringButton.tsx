import { Button } from "./Button";
import { EditorMenuListItem } from "./EditorMenuListItem";

export const TextColoringButton = () => {
  return (
    <EditorMenuListItem>
      <Button
        icon="FaA"
        title="Cor do texto"
        dropdown={true}
        dropdownStyle="standard"
        dropdownWidth={150}
      >
        <div>Selecionar tipo de cor</div>
      </Button>
      <div
        className="w-[70%] h-1 rounded-md bg-zinc-100 absolute bottom-1 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ backgroundColor: "#bca4eb" }}
      />
    </EditorMenuListItem>
  );
};
