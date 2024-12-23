import Image from "next/image";

export default function ImageOne() {
  return (
    <div className="absolute top-0 right-0">
        <Image src="/images/hero/shape-01.svg" alt="Hero Image" width={450} height={556}/>
    </div>
  )
}
