import Images from "./Images";
import Info from "./Info";

export default function SectionOne() {
  return (
    <div className="section-one flex flex-col items-center md:items-start md:justify-between md:flex-row gap-5 pb-16 md:pb-20 lg:pb-28 border-b border-paragraph-color">
        <Info />
        <Images />
    </div>
  )
}
