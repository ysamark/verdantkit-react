import { Aside, AsideLink, AsideSection } from "~/components/Aside";

export const AsideElement = () => {
  return (
    <div className="w-full flex justify-center flex-row gap-5">
      <div className="flex w-1/3">
        <Aside>
          <AsideSection title="Home">
            <AsideLink label="Settings">
              <AsideLink label="Account">
                <AsideLink label="Change password" icon="FaKey" href="#" />
                <AsideLink label="Change password" icon="FaKey" href="#" />
                <AsideLink label="Change password" icon="FaKey" href="#" />
                <AsideLink label="Change password" icon="FaKey" href="#" />
                <AsideLink label="Change password" icon="FaKey" href="#" />
                <AsideLink label="Change password" icon="FaKey" href="#" />
                <AsideLink label="Change password" icon="FaKey" href="#" />
                <AsideLink label="Change password" icon="FaKey" href="#" />
              </AsideLink>
            </AsideLink>
            <AsideLink label="Settings">
              <AsideLink label="Account">
                <AsideLink label="Change password" icon="FaKey" href="#" />
                <AsideLink label="Change password" icon="FaKey" href="#" />
                <AsideLink label="Change password" icon="FaKey" href="#" />
                <AsideLink label="Change password" icon="FaKey" href="#" />
                <AsideLink label="Change password" icon="FaKey" href="#" />
                <AsideLink label="Change password" icon="FaKey" href="#" />
                <AsideLink label="Change password" icon="FaKey" href="#" />
                <AsideLink label="Change password" icon="FaKey" href="#" />
              </AsideLink>
            </AsideLink>
          </AsideSection>
          <AsideSection title="Home">
            <AsideLink label="Settings">
              <AsideLink label="Account">
                <AsideLink label="Change password" icon="FaKey" href="#" />
                <AsideLink label="Change password" icon="FaKey" href="#" />
                <AsideLink label="Change password" icon="FaKey" href="#" />
                <AsideLink label="Change password" icon="FaKey" href="#" />
                <AsideLink label="Change password" icon="FaKey" href="#" />
                <AsideLink label="Change password" icon="FaKey" href="#" />
                <AsideLink label="Change password" icon="FaKey" href="#" />
                <AsideLink label="Change password" icon="FaKey" href="#" />
              </AsideLink>
            </AsideLink>
            <AsideLink label="Settings">
              <AsideLink label="Account">
                <AsideLink label="Change password" icon="FaKey" href="#" />
                <AsideLink label="Change password" icon="FaKey" href="#" />
                <AsideLink label="Change password" icon="FaKey" href="#" />
                <AsideLink label="Change password" icon="FaKey" href="#" />
                <AsideLink label="Change password" icon="FaKey" href="#" />
                <AsideLink label="Change password" icon="FaKey" href="#" />
                <AsideLink label="Change password" icon="FaKey" href="#" />
                <AsideLink label="Change password" icon="FaKey" href="#" />
              </AsideLink>
            </AsideLink>
          </AsideSection>
        </Aside>
      </div>
    </div>
  );
};
