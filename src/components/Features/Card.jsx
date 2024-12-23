import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card({icon, title, text}) {
  return (
    <div className="card flex flex-col items-center text-center md:items-start md:text-start bg-gray-dark shadow-md backdrop-blur-[4px] dark:bg-white-color p-[20px] rounded-lg duration-500 hover:scale-[1.1]">
        <div className="mb-10 h-[70px] w-[70px] flex items-center justify-center rounded-md bg-primary-color bg-opacity-10 text-blue-color">
            <FontAwesomeIcon className="text-[40px]" icon={icon} width={40} height={40}/>
        </div>
        <h3 className="mb-5 text-xl font-bold text-white dark:text-black md:text-2xl duration-500">{title}</h3>
        <p className="md:pr-[10px] text-base font-medium leading-relaxed text-paragraph-color">{text}</p>
    </div>
  )
}
