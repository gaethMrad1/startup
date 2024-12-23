import Logo from "./Logo";
import NavBar from "./NavBar";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="h-[97.25px] flex justify-center items-center sticky top-0 left-0 z-[999] w-full bg-gray-dark dark:bg-white-color shadow-md backdrop-blur-[4px] duration-500">
        <div className="container flex items-center justify-between">
            <div className="flex items-center gap-20 w-full justify-between md:justify-start">
                <Logo />
                <NavBar />
            </div>
            <ThemeToggle />
        </div>
    </header>
  )
}
