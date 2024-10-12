import { useState } from "react";

import { ApplicationContext, useApp } from "@components/ApplicationContext";
import { Dialog, useDialog } from "@components/Dialog";

const Content = () => {
  const { alert } = useApp();

  const buttonClickHandler = async () => {
    const response = await alert("Sucesso", "Cona criada com sucesso");

    console.log(response);
  };

  return (
    <div>
      <button onClick={buttonClickHandler}>Click to alert</button>
    </div>
  );
};

export default function App() {
  const [show, setShow] = useState(false);

  function DialogFooter() {
    const dialog = useDialog();

    return (
      <div className="w-full flex">
        <button
          type="button"
          onClick={() => {
            // console.log("ASS");
            dialog.setTitle("Uma janela para ...");
            dialog.setSize(dialog.size === "large" ? "small" : "large");
          }}
          className="w-full border-0 outline-0 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 hover:scale-105 active:scale-95 transition-transform text-zinc-50 rounded-full px-5 py-2"
        >
          Ok
        </button>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col p-16">
      <button type="button" onClick={() => setShow(true)}>
        Show Dialog
      </button>
      <Dialog
        show={show}
        onClose={() => setShow(false)}
        fit
        footer={DialogFooter}
      >
        <button onClick={() => alert("Alo Mundo")}>Say Hello</button>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          earum vel nostrum at quae id cupiditate pariatur maiores ipsam a
          delectus modi repellendus vero animi error enim, aliquam tempore
          voluptatem! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Inventore earum vel nostrum at quae id cupiditate pariatur maiores
          ipsam a delectus modi repellendus vero animi error enim, aliquam
          tempore voluptatem! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Inventore earum vel nostrum at quae id cupiditate pariatur
          maiores ipsam a delectus modi repellendus vero animi error enim,
          aliquam tempore voluptatem! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Inventore earum vel nostrum at quae id cupiditate
          pariatur maiores ipsam a delectus modi repellendus vero animi error
          enim, aliquam tempore voluptatem! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Inventore earum vel nostrum at quae id
          cupiditate pariatur maiores ipsam a delectus modi repellendus vero
          animi error enim, aliquam tempore voluptatem! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Inventore earum vel nostrum at quae
          id cupiditate pariatur maiores ipsam a delectus modi repellendus vero
          animi error enim, aliquam tempore voluptatem! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Inventore earum vel nostrum at quae
          id cupiditate pariatur maiores ipsam a delectus modi repellendus vero
          animi error enim, aliquam tempore voluptatem! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Inventore earum vel nostrum at quae
          id cupiditate pariatur maiores ipsam a delectus modi repellendus vero
          animi error enim, aliquam tempore voluptatem! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Inventore earum vel nostrum at quae
          id cupiditate pariatur maiores ipsam a delectus modi repellendus vero
          animi error enim, aliquam tempore voluptatem! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Inventore earum vel nostrum at quae
          id cupiditate pariatur maiores ipsam a delectus modi repellendus vero
          animi error enim, aliquam tempore voluptatem! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Inventore earum vel nostrum at quae
          id cupiditate pariatur maiores ipsam a delectus modi repellendus vero
          animi error enim, aliquam tempore voluptatem! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Inventore earum vel nostrum at quae
          id cupiditate pariatur maiores ipsam a delectus modi repellendus vero
          animi error enim, aliquam tempore voluptatem! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Inventore earum vel nostrum at quae
          id cupiditate pariatur maiores ipsam a delectus modi repellendus vero
          animi error enim, aliquam tempore voluptatem! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Inventore earum vel nostrum at quae
          id cupiditate pariatur maiores ipsam a delectus modi repellendus vero
          animi error enim, aliquam tempore voluptatem! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Inventore earum vel nostrum at quae
          id cupiditate pariatur maiores ipsam a delectus modi repellendus vero
          animi error enim, aliquam tempore voluptatem! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Inventore earum vel nostrum at quae
          id cupiditate pariatur maiores ipsam a delectus modi repellendus vero
          animi error enim, aliquam tempore voluptatem! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Inventore earum vel nostrum at quae
          id cupiditate pariatur maiores ipsam a delectus modi repellendus vero
          animi error enim, aliquam tempore voluptatem! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Inventore earum vel nostrum at quae
          id cupiditate pariatur maiores ipsam a delectus modi repellendus vero
          animi error enim, aliquam tempore voluptatem! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Inventore earum vel nostrum at quae
          id cupiditate pariatur maiores ipsam a delectus modi repellendus vero
          animi error enim, aliquam tempore voluptatem! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Inventore earum vel nostrum at quae
          id cupiditate pariatur maiores ipsam a delectus modi repellendus vero
          animi error enim, aliquam tempore voluptatem! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Inventore earum vel nostrum at quae
          id cupiditate pariatur maiores ipsam a delectus modi repellendus vero
          animi error enim, aliquam tempore voluptatem! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Inventore earum vel nostrum at quae
          id cupiditate pariatur maiores ipsam a delectus modi repellendus vero
          animi error enim, aliquam tempore voluptatem! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Inventore earum vel nostrum at quae
          id cupiditate pariatur maiores ipsam a delectus modi repellendus vero
          animi error enim, aliquam tempore voluptatem! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Inventore earum vel nostrum at quae
          id cupiditate pariatur maiores ipsam a delectus modi repellendus vero
          animi error enim, aliquam tempore voluptatem! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Inventore earum vel nostrum at quae
          id cupiditate pariatur maiores ipsam a delectus modi repellendus vero
          animi error enim, aliquam tempore voluptatem! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Inventore earum vel nostrum at quae
          id cupiditate pariatur maiores ipsam a delectus modi repellendus vero
          animi error enim, aliquam tempore voluptatem! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Inventore earum vel nostrum at quae
          id cupiditate pariatur maiores ipsam a delectus modi repellendus vero
          animi error enim, aliquam tempore voluptatem! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Inventore earum vel nostrum at quae
          id cupiditate pariatur maiores ipsam a delectus modi repellendus vero
          animi error enim, aliquam tempore voluptatem! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Inventore earum vel nostrum at quae
          id cupiditate pariatur maiores ipsam a delectus modi repellendus vero
          animi error enim, aliquam tempore voluptatem! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Inventore earum vel nostrum at quae
          id cupiditate pariatur maiores ipsam a delectus modi repellendus vero
          animi error enim, aliquam tempore voluptatem! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Inventore earum vel nostrum at quae
          id cupiditate pariatur maiores ipsam a delectus modi repellendus vero
          animi error enim, aliquam tempore voluptatem! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Inventore earum vel nostrum at quae
          id cupiditate pariatur maiores ipsam a delectus modi repellendus vero
          animi error enim, aliquam tempore voluptatem! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Inventore earum vel nostrum at quae
          id cupiditate pariatur maiores ipsam a delectus modi repellendus vero
          animi error enim, aliquam tempore voluptatem! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Inventore earum vel nostrum at quae
          id cupiditate pariatur maiores ipsam a delectus modi repellendus vero
          animi error enim, aliquam tempore voluptatem! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Inventore earum vel nostrum at quae
          id cupiditate pariatur maiores ipsam a delectus modi repellendus vero
          animi error enim, aliquam tempore voluptatem! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Inventore earum vel nostrum at quae
          id cupiditate pariatur maiores ipsam a delectus modi repellendus vero
          animi error enim, aliquam tempore voluptatem! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Inventore earum vel nostrum at quae
          id cupiditate pariatur maiores ipsam a delectus modi repellendus vero
          animi error enim, aliquam tempore voluptatem! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Inventore earum vel nostrum at quae
          id cupiditate pariatur maiores ipsam a delectus modi repellendus vero
          animi error enim, aliquam tempore voluptatem!
        </h5>
      </Dialog>

      <ApplicationContext headers={{}}>
        <Content />
      </ApplicationContext>
    </div>
  );
}
