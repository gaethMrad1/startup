import SectionTitle from "../SectionTitle";
import SectionOne from "./SectionOne/SectionOne";
import SectionTwo from "./SectionTwo/SectionTwo";

export default function About() {
  return (
    <section className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
            <SectionTitle title="About Us" paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."/>
            <SectionOne />
            <SectionTwo />
        </div>
    </section>
  )
}
