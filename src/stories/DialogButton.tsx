import { DialogButton } from "@components/DialogButton";
import { useDialog } from "~/components";

const MyDialog = () => {
  const dialog = useDialog();

  return (
    <div className="w-full flex flex-col gap-4">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. In veritatis
        reiciendis laborum similique reprehenderit, itaque totam porro libero
        veniam, suscipit perspiciatis illum aliquam modi voluptatum distinctio
        beatae doloremque. Odio, illo. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. In veritatis reiciendis laborum similique
        reprehenderit, itaque totam porro libero veniam, suscipit perspiciatis
        illum aliquam modi voluptatum distinctio beatae doloremque. Odio, illo.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. In veritatis
        reiciendis laborum similique reprehenderit, itaque totam porro libero
        veniam, suscipit perspiciatis illum aliquam modi voluptatum distinctio
        beatae doloremque. Odio, illo. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. In veritatis reiciendis laborum similique
        reprehenderit, itaque totam porro libero veniam, suscipit perspiciatis
        illum aliquam modi voluptatum distinctio beatae doloremque. Odio, illo.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. In veritatis
        reiciendis laborum similique reprehenderit, itaque totam porro libero
        veniam, suscipit perspiciatis illum aliquam modi voluptatum distinctio
        beatae doloremque. Odio, illo. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. In veritatis reiciendis laborum similique
        reprehenderit, itaque totam porro libero veniam, suscipit perspiciatis
        illum aliquam modi voluptatum distinctio beatae doloremque. Odio, illo.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. In veritatis
        reiciendis laborum similique reprehenderit, itaque totam porro libero
        veniam, suscipit perspiciatis illum aliquam modi voluptatum distinctio
        beatae doloremque. Odio, illo. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. In veritatis reiciendis laborum similique
        reprehenderit, itaque totam porro libero veniam, suscipit perspiciatis
        illum aliquam modi voluptatum distinctio beatae doloremque. Odio, illo.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. In veritatis
        reiciendis laborum similique reprehenderit, itaque totam porro libero
        veniam, suscipit perspiciatis illum aliquam modi voluptatum distinctio
        beatae doloremque. Odio, illo. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. In veritatis reiciendis laborum similique
        reprehenderit, itaque totam porro libero veniam, suscipit perspiciatis
        illum aliquam modi voluptatum distinctio beatae doloremque. Odio, illo.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. In veritatis
        reiciendis laborum similique reprehenderit, itaque totam porro libero
        veniam, suscipit perspiciatis illum aliquam modi voluptatum distinctio
        beatae doloremque. Odio, illo. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. In veritatis reiciendis laborum similique
        reprehenderit, itaque totam porro libero veniam, suscipit perspiciatis
        illum aliquam modi voluptatum distinctio beatae doloremque. Odio, illo.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. In veritatis
        reiciendis laborum similique reprehenderit, itaque totam porro libero
        veniam, suscipit perspiciatis illum aliquam modi voluptatum distinctio
        beatae doloremque. Odio, illo.
      </p>
      <button
        onClick={() => {
          dialog.close();
        }}
      >
        Close this dialog
      </button>
    </div>
  );
};

function DialogFooter() {
  const dialog = useDialog();

  return (
    <div className="w-full flex flex-row gap-2">
      <button
        onClick={dialog.close}
        className="bg-blue-500 w-full rounded-full hover:bg-blue-600 text-zinc-50 px-6 pt-2 pb-[10px] active:scale-95 transition-transform"
      >
        Feito
      </button>
    </div>
  );
}

export const DialogButtonElement = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-3 justify-center items-center">
      <DialogButton
        content={MyDialog}
        size="x-large"
        title="My Dialog"
        showButton={false}
        footer={DialogFooter}
        fit={true}
        className="bg-blue-500 hover:bg-blue-600 text-zinc-50 px-6 pt-2 pb-[10px] rounded-md active:scale-95 transition-transform"
      >
        Click to open dialog box
      </DialogButton>
    </div>
  );
};
