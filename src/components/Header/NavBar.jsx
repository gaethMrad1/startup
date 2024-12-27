"use client"
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

export default function NavBar() {
  const pathName = usePathname();
  const menue = useRef();

  const toggleMenu = () => {
    menue.current.classList.toggle("show")
  }

  return (
    <nav>
        <div className="menu flex items-center relative">
            <FontAwesomeIcon onClick={toggleMenu} className="md:hidden text-white dark:text-black text-[35px]" icon={faBars} width={35} height={35}/>
            <ul ref={menue} className="nav-menu hidden md:flex md:items-center md:flex-row md:w-full md:relative md:top-0 md:right-0 md:!bg-transparent md:backdrop-blur-0 md:p-0 md:shadow-none flex-col absolute top-[35px] right-0 bg-gray-dark dark:bg-white-color backdrop-blur-[4px] shadow-md p-[20px] w-[250px] gap-10 capitalize">
                <li>
                    <Link className={`${pathName === "/" && "!text-blue-color"} dark:text-title-color text-[#ffffffb3] hover:text-blue-color dark:hover:text-blue-color`} href="/">home</Link>
                </li>
                <li>
                    <Link className={`${pathName === "/about" && "!text-blue-color"} dark:text-title-color text-[#ffffffb3] hover:text-blue-color dark:hover:text-blue-color`} href="/about">about</Link>
                </li>
                <li>
                    <Link className={`${pathName === "/blog" && "!text-blue-color"} dark:text-title-color text-[#ffffffb3] hover:text-blue-color dark:hover:text-blue-color`} href="/blog">blog</Link>
                </li>
                <li>
                    <Link className={`${pathName === "/support" && "!text-blue-color"} dark:text-title-color text-[#ffffffb3] hover:text-blue-color dark:hover:text-blue-color`} href="/support">support</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}
