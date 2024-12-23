import SectionTitle from "../SectionTitle";
import Blog from "./Blog";
import { data } from "./data";

export default function Blogs() {
  return (
    <section className="blogs py-16 md:py-20 lg:py-28">
        <div className="container">
            <SectionTitle title="Our Latest Blogs" paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {data.map((data, index) => {
                    return (
                        <Blog key={index} imageOneUrl={data.imageOneUrl} title={data.title} text={data.text} imageTwoUrl={data.imageTwoUrl} name={data.name} job={data.job}/>
                    )
                })}
            </div>
        </div>
    </section>
  )
}
