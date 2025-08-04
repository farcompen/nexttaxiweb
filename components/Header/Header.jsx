import Navbar from "./Navbar";
import TopBar from "./TopBar";

export const Header = () => {
  return (
    <header className="sticky z-50 bg-white -top-[0px]  sm:-top-[var(--top-bar-height)]">
      <TopBar />
      <Navbar />
    </header>
  );
};
