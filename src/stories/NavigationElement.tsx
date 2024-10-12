import {
  Navigation,
  NavigationBack,
  NavigationButton,
  NavigationFooter,
  NavigationHeader,
  NavigationScreen,
  useNavigation,
} from "@components/Navigation";
import { FaAngleRight, FaArrowLeft } from "react-icons/fa6";
import { cn } from "~/lib/utils";

const Links = () => {
  const navigation = useNavigation();

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex flex-row gap-5 py-6 rounded-md">
        <NavigationBack className="bg-zinc-400 dark:bg-zinc-900 disabled:opacity-35 disabled:cursor-not-allowed px-5 py-2 rounded-md">
          <FaArrowLeft />
        </NavigationBack>
        <NavigationButton
          to="home"
          className={cn(
            navigation.isCurrentScreen("home")
              ? "bg-blue-400 px-5 py-2 rounded-md"
              : ""
          )}
        >
          Home page
        </NavigationButton>
        <NavigationButton
          to="about"
          className={cn(
            navigation.isCurrentScreen("about")
              ? "bg-blue-400 px-5 py-2 rounded-md"
              : ""
          )}
        >
          About page
        </NavigationButton>
        <NavigationButton
          to="contact"
          className={cn(
            navigation.isCurrentScreen("contact")
              ? "bg-blue-400 px-5 py-2 rounded-md"
              : ""
          )}
        >
          Contact page
        </NavigationButton>
      </div>
      <div className="w-full flex flex-row flex-wrap gap-2">
        {navigation.stack.map((screen, index) => (
          <div key={index} className="inline-flex flex-row gap-1 items-center">
            <FaAngleRight />
            <span>{screen}</span>
          </div>
        ))}
      </div>
      <span>
        CanGoForward: {navigation.canGoForward() ? "yes" : "no"}
        <br />
        CanGoBack: {navigation.canGoBack() ? "yes" : "no"}
        <br />
      </span>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <h1 className="text-4xl">Home Page</h1>
      <p className="w-full block mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
        consequuntur, magni, iusto dolor, aliquam nihil quo odio quas tempora
        quis ad hic aut nulla dolore maiores amet ullam corporis atque?
      </p>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1 className="text-4xl">About Page</h1>
      <p className="w-full block mt-3">
        An About Us page isn’t just where you share the story of your brand.
        It’s also where you tell your customer what you do for them and how you
        work to meet their needs in that area. It isn’t so much “Here’s what
        we’re about,” but more like “Here’s who we are, why we started, and what
        we can do for you.”
      </p>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <h1 className="text-4xl">Contact Page</h1>
      <p className="w-full block mt-3">Logue para nós:</p>
      <p className="w-full block mt-3">
        Ligue para saber mais ipsum dolor sit amet consectetur adipisicing elit.
        Neque consequuntur, magni, iusto dolor, aliquam nihil quo odio quas
        tempora quis ad hic aut nulla dolore maiores amet ullam corporis atque?
      </p>
    </div>
  );
};

export const NavigationElement = () => {
  return (
    <Navigation
      home="home"
      className="w-full border-[1px] border-solid border-zinc-300 dark:border-zinc-600 dark:bg-zinc-800 rounded-md p-5 flex flex-col gap-3"
    >
      <NavigationHeader>
        <Links />
      </NavigationHeader>
      <NavigationScreen name="home">
        <Home />
      </NavigationScreen>
      <NavigationScreen name="about">
        <About />
      </NavigationScreen>
      <NavigationScreen name="contact">
        <Contact />
      </NavigationScreen>
      <NavigationFooter className="w-full mt-5 bg-zinc-900 p-6 rounded-md">
        <span>Footer content</span>
      </NavigationFooter>
    </Navigation>
  );
};
