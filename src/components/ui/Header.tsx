import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="fixed flex h-16 w-full items-center justify-between border-b border-zinc-600 bg-gray-900 px-4">
      <a href="/" className="font-bold">
        ZenStack Demo
      </a>
      <Navigation />
    </div>
  );
};

export default Header;
