import { useApp } from "@components/ApplicationContext";
import { z } from "zod";
import { toast } from "~/index";

export const ApplicationContextElement = () => {
  const app = useApp();

  const alertButtonClickHandler = async () => {
    const response = await app.alert("Sucesso", "Conta criada com sucesso", {
      buttons: ["Buttons.Yes", "Buttons.No", "Buttons.Retry"],
    });

    console.log(response);

    // const data = await app.resolvePromise(async () => {
    //   await new Promise((resolve) => setTimeout(resolve, 5000));

    //   console.log(">>> promise resolved");

    //   return 5;
    // });

    // console.log(">>> promise data:", data);
  };

  const loadingButtonClickHandler = async () => {
    // const response = await app.alert("Sucesso", "Conta criada com sucesso", {
    //   buttons: ["Buttons.Yes", "Buttons.No", "Buttons.Retry"],
    // });

    // console.log(response);

    const data = await app.resolvePromise(async () => {
      await new Promise((resolve) => setTimeout(resolve, 5000));

      console.log(">>> promise resolved");

      return 5;
    });

    console.log(">>> promise data:", data);
  };

  const createAccountButtonClickHandler = async () => {
    const UserSchema = z.object({
      user: z.object({
        name: z.string(),
        email: z.string(),
        password: z.string(),
      }),
    });

    const response = await app.openXLargeFormDialog(UserSchema, () => {
      return (
        <form
          method="post"
          action="/"
          className="w-full flex flex-col gap-3 [&_input]:w-full"
        >
          <h1 className="font-black text-zinc-900 text-4xl mb-4 dark:text-zinc-50">
            Criar conta nova
          </h1>
          <input
            name="user[name]"
            placeholder="name"
            className="w-full text-zinc-800 font-light p-3 rounded-md border-[1px] border-zinc-300 border-solid outline-none dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-200"
          />
          <input
            name="user[email]"
            placeholder="email"
            className="w-full text-zinc-800 font-light p-3 rounded-md border-[1px] border-zinc-300 border-solid outline-none dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-200"
          />
          <input
            name="user[password]"
            placeholder="password"
            className="w-full text-zinc-800 font-light p-3 rounded-md border-[1px] border-zinc-300 border-solid outline-none dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-200"
          />
          <input
            name="user[password]"
            placeholder="password"
            className="w-full text-zinc-800 font-light p-3 rounded-md border-[1px] border-zinc-300 border-solid outline-none dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-200"
          />
          <input
            name="user[password]"
            placeholder="password"
            className="w-full text-zinc-800 font-light p-3 rounded-md border-[1px] border-zinc-300 border-solid outline-none dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-200"
          />
          <button
            type="submit"
            className="w-full p-3 rounded-md font-semibold text-zinc-50 bg-purple-600 hover:bg-purple-700 active:scale-95 transition-transform"
          >
            Enviar
          </button>
        </form>
      );
    });

    console.log(response);
  };

  return (
    <div className="w-full h-screen flex flex-row gap-5 flex-wrap justify-center items-center">
      <button
        onClick={createAccountButtonClickHandler}
        className="bg-blue-500 hover:bg-blue-600 text-zinc-50 px-6 pt-2 pb-[10px] rounded-md active:scale-95 transition-transform"
      >
        Create account
      </button>
      <button
        onClick={alertButtonClickHandler}
        className="bg-blue-500 hover:bg-blue-600 text-zinc-50 px-6 pt-2 pb-[10px] rounded-md active:scale-95 transition-transform"
      >
        Click to show alert dialog
      </button>
      <button
        onClick={loadingButtonClickHandler}
        className="bg-blue-500 hover:bg-blue-600 text-zinc-50 px-6 pt-2 pb-[10px] rounded-md active:scale-95 transition-transform"
      >
        Click to show loading dialog
      </button>
      <button
        onClick={() => toast("hello, world to you")}
        className="bg-blue-500 hover:bg-blue-600 text-zinc-50 px-6 pt-2 pb-[10px] rounded-md active:scale-95 transition-transform"
      >
        Click to show normal toast
      </button>
      <button
        onClick={() => toast.error("hello, world to you")}
        className="bg-blue-500 hover:bg-blue-600 text-zinc-50 px-6 pt-2 pb-[10px] rounded-md active:scale-95 transition-transform"
      >
        Click to show error toast
      </button>
      <button
        onClick={() => toast.warning("hello, world to you")}
        className="bg-blue-500 hover:bg-blue-600 text-zinc-50 px-6 pt-2 pb-[10px] rounded-md active:scale-95 transition-transform"
      >
        Click to show warning toast
      </button>
      <button
        onClick={() => toast.success("hello, world to you")}
        className="bg-blue-500 hover:bg-blue-600 text-zinc-50 px-6 pt-2 pb-[10px] rounded-md active:scale-95 transition-transform"
      >
        Click to show success toast
      </button>
      <button
        onClick={() => toast.info("hello, world to you")}
        className="bg-blue-500 hover:bg-blue-600 text-zinc-50 px-6 pt-2 pb-[10px] rounded-md active:scale-95 transition-transform"
      >
        Click to show info toast
      </button>
    </div>
  );
};
