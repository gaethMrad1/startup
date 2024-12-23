import SectionTitle from "../SectionTitle";
import Cards from "./Cards";

export default function Features() {
  return (
    <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
            <SectionTitle title="Main Features" paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."/>
            <Cards />
        </div>
    </section>
  )
}
