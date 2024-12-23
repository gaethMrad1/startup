import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="logo">
        <Image src="/images/logo/logo.svg" width={140} height={30} alt="Startup Logo" className="w-full dark:hidden "/>
        <Image src="/images/logo/logo-2.svg" width={140} height={30} alt="Startup Logo" className="hidden w-full dark:block"/>
    </Link>
  )
}
