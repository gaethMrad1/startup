import Image from "next/image";

export default function Blog({imageOneUrl, title, text, imageTwoUrl, name, job}) {
  return (
    <div className="blog relative bg-gray-dark dark:bg-white-color dark:shadow-lg duration-500 hover:shadow-lg before:content-['Computer'] before:px-5 before:py-3 before:bg-blue-color before:absolute before:top-[15px] before:right-[15px] before:rounded-full before:text-white before:text-sm before:font-semibold">
        <Image className="w-full max-w-full max-h-full" src={imageOneUrl} alt="" width={370} height={220}/>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
            <div className="content">
                <h3 className="mb-4 text-xl font-bold text-white duration-500 hover:text-blue-color dark:text-black sm:text-2xl">{title}</h3>
                <p className="mb-6 border-b border-paragraph-color border-opacity-10 pb-6 text-base font-medium text-paragraph-color">{text}</p>
            </div>
            <div className="info flex items-center">
                <div className="mr-5 flex gap-3 items-center border-r border-paragraph-color border-opacity-10 pr-5 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
                    <Image src={imageTwoUrl} alt={name} width={40} height={40}/>
                    <div>
                        <h6 className="mb-1 text-sm font-medium text-white dark:text-black">{name}</h6>
                        <p className="text-xs text-paragraph-color">{job}</p>
                    </div>
                </div>
                <div>
                    <h6 className="mb-1 text-sm font-medium text-white dark:text-black">Date</h6>
                    <p className="text-xs text-paragraph-color">2025</p>
                </div>
            </div>
        </div>
    </div>
  )
}
