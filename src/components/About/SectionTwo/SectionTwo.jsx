import Images from "./Images";
import Info from "./Info";

export default function SectionTwo() {
  return (
    <div className="section-two py-16 md:py-20 lg:py-28 flex flex-col-reverse items-center md:flex-row md:items-start md:justify-between gap-5">
        <Images />
        <Info />
    </div>
  )
}
