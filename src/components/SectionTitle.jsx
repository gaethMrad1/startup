export default function SectionTitle({title, paragraph}) {
  return (
    <div className="section-title max-w-[570px] mx-auto mb-[100px] text-center">
        <h2 className="mb-4 text-3xl md:text-4xl font-bold text-white dark:text-black duration-500">{title}</h2>
        <p className="text-base !leading-relaxed md:text-lg text-paragraph-color">{paragraph}</p>
    </div>
  )
}
