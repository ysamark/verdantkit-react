import { SideMenu } from "~/components/SideMenu";
import { SideMenuButton } from "~/components/SideMenu/components/SideMenuButton";
import { SideMenuContent } from "~/components/SideMenu/components/SideMenuContent";
import { SideMenuFooter } from "~/components/SideMenu/components/SideMenuFooter";
import { SideMenuHeader } from "~/components/SideMenu/components/SideMenuHeader";

export const SideMenuElement = () => {
  return (
    <div className="w-full h-max flex flex-col items-center p-16 relative bg-purple-600">
      <SideMenu position="right">
        <SideMenuButton className="bg-emerald-600 p-4 rounded-lg">
          Click to show menu
        </SideMenuButton>
        <SideMenuContent className="w-full max-w-sm p-6 bg-zinc-50 shadow-lg dark:bg-zinc-800">
          <SideMenuHeader className="w-full flex flex-row p-4 bg-blue-700 text-zinc-50">
            Header Here
          </SideMenuHeader>
          <SideMenuFooter>Footer here - Ysare 2024</SideMenuFooter>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero quidem
          magni excepturi? Laudantium incidunt esse ut atque magnam. Molestias
          reiciendis autem minima possimus cupiditate hic eligendi itaque vitae
          rem reprehenderit!
          <div className="flex flex-col gap-3">
            {Array.from({ length: 30 }).map((_, i) => (
              <p key={i} className="w-full block p-4 bg-teal-300 rounded-md">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Suscipit libero illum fugit impedit mollitia animi culpa
                necessitatibus? Repudiandae, cupiditate? Porro, aspernatur
                cumque. Voluptatibus consectetur saepe pariatur ea, modi laborum
                minima.
              </p>
            ))}
          </div>
        </SideMenuContent>
      </SideMenu>
      {Array.from({ length: 300 }).map((_, i) => (
        <p key={i}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
          libero illum fugit impedit mollitia animi culpa necessitatibus?
          Repudiandae, cupiditate? Porro, aspernatur cumque. Voluptatibus
          consectetur saepe pariatur ea, modi laborum minima.
        </p>
      ))}
    </div>
  );
};
