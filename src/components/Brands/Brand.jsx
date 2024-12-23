import Image from "next/image";

export default function Brand({srcOne, srcTwo, alt}) {
  return (
    <div className="brand w-1/4 md:w-1/6 opacity-[0.5] cursor-pointer hover:opacity-100 duration-500">
        <Image src={srcOne} alt={alt} width={0} height={0} className="w-full hidden dark:block"/>
        <Image src={srcTwo} alt={alt} width={0} height={0} className="w-full block dark:hidden"/>
    </div>
  )
}
