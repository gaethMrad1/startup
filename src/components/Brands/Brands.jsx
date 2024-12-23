import Brand from "./Brand";
import { data } from "./data";

export default function Brands() {
  return (
    <section className="brands rounded-md pt-16">
        <div className="container">
            <div className="flex flex-wrap items-center justify-center gap-5 bg-gray-dark dark:bg-gray-light duration-500 px-8 py-8 sm:px-10 md:px-[50px] md:py-[40px]">
                {data.map((data, index) => {
                    return (
                        <Brand key={index} srcOne={data.srcOne} srcTwo={data.srcTwo} alt={data.alt}/>
                    )
                })}
            </div>
        </div>
    </section>
  )
}
