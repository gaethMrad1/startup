import Image from "next/image";

export default function Images() {
  return (
    <div className="image">
      <Image className="w-full max-w-full block dark:hidden" src="/images/about/about-image-dark.svg" alt="about-image" width={0} height={0}/>
      <Image className="w-full max-w-full hidden dark:block" src="/images/about/about-image.svg" alt="about-image" width={0} height={0}/>
    </div>
  )
}
