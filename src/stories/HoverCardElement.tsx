import { HoverCard } from "@components/HoverCard";

const UserData = () => (
  <div className="w-full">
    <h1>Agostinho Samil</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio,
      eaque! Optio sequi aspernatur ut alias quod? Deleniti quibusdam voluptatum
      eligendi culpa laudantium accusantium tenetur? Quos deserunt reiciendis
      officia accusamus eius.
    </p>
  </div>
);

export const HoverCardElement = () => {
  return (
    <HoverCard
      content={UserData}
      className="w-[260px] bg-zinc-50 dark:bg-zinc-800 rounded-md border-solid border border-zinc-300 dark:border-zinc-700 shadow-lg p-4"
    >
      <button type="button">My Profile</button>
    </HoverCard>
  );
};
