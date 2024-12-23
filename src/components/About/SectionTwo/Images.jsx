import Image from "next/image";

export default function Images() {
  return (
    <div className="image">
        <Image className="block dark:hidden w-full max-w-full" src="/images/about/about-image-2-dark.svg" alt="about image" width={0} height={0}/>
        <Image className="hidden dark:block w-full max-w-full" src="/images/about/about-image-2.svg" alt="about image" width={0} height={0}/>
    </div>
  )
}
