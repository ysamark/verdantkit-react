import { CardButton, CardButtons } from "@components/CardButtons";

export const CardButtonsElement = () => {
  return (
    <div className="w-full max-w-96 dark:bg-zinc-800 p-6 border-1 border-zinc-600 rounded-md">
      <CardButtons>
        <CardButton>Say hello</CardButton>
        <CardButton href="/home-page">Say some thing</CardButton>
        <CardButton>Say some another thing</CardButton>
        <CardButton>Say some another thing to night just for you!</CardButton>
        <CardButton>Say some another thing</CardButton>
      </CardButtons>
    </div>
  );
};
