export default function Info() {
  return (
    <div className="info">
        <div className="text mb-[44px] w-full max-w-[570px]">
            <h1 className="mb-4 text-3xl font-bold !leading-tight text-white dark:text-black duration-500 sm:text-4xl md:text-[45px]">Crafted for Startup, SaaS and Business Sites.</h1>
            <p className="text-base !leading-relaxed text-paragraph-color md:text-lg">The main ‘thrust’ is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables.</p>
        </div>
        <div className="grid grid-cols-2 gap-5">
            <div className="flex items-center">
                <input className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md" defaultChecked disabled type="checkbox"/>
                <label className="text-[8px] sm:text-[12px] md:text-[16px] text-paragraph-color">Premium quality</label>
            </div>
            <div className="flex items-center">
                <input className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md" defaultChecked disabled type="checkbox"/>
                <label className="text-[8px] sm:text-[12px] md:text-[16px] text-paragraph-color">Tailwind CSS</label>
            </div>
            <div className="flex items-center">
                <input className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md" defaultChecked disabled type="checkbox"/>
                <label className="text-[8px] sm:text-[12px] md:text-[16px] text-paragraph-color">Use for lifetime</label>
            </div>
            <div className="flex items-center">
                <input className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md" defaultChecked disabled type="checkbox"/>
                <label className="text-[8px] sm:text-[12px] md:text-[16px] text-paragraph-color">Next.js</label>
            </div>
            <div className="flex items-center">
                <input className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md" defaultChecked disabled type="checkbox"/>
                <label className="text-[8px] sm:text-[12px] md:text-[16px] text-paragraph-color">Rich documentation</label>
            </div>
            <div className="flex items-center">
                <input className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md" defaultChecked disabled type="checkbox"/>
                <label className="text-[8px] sm:text-[12px] md:text-[16px] text-paragraph-color">Developer friendly</label>
            </div>
        </div>
    </div>
  )
}
