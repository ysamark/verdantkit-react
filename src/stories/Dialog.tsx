import { Dialog, DialogComponent } from "@components/Dialog";

export const DialogElement: DialogComponent = (props) => {
  return (
    <Dialog {...props}>
      <div className="w-full">
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid esse
          consequuntur porro rerum animi soluta iure, aperiam tempora,
          asperiores vel eius excepturi atque? Quaerat earum quisquam
          reprehenderit qui facilis vitae!
        </h1>
        {props.children}
      </div>
    </Dialog>
  );
};
