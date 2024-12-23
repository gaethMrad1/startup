import FormMainTitle from "./FormMainTitle";

export default function Form() {
  return (
    <div className="form bg-gray-dark dark:bg-white-color shadow-lg duration-500 mb-12 rounded-sm px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
        <FormMainTitle />
        <form action="" className="flex flex-col gap-10">
            <div className="inputs flex flex-col sm:flex-row items-center gap-5">
                <div className="w-full sm:w-1/2">
                    <label className="text-white duration-500 block mb-5 dark:text-black">Your Name</label>
                    <input className="w-full p-[15px] border-none outline-none duration-500 bg-input-dark-color dark:bg-input-light-color text-white dark:text-black" type="text" name="" id="" placeholder="Enter Your Name"/>
                </div>
                <div className="w-full sm:w-1/2">
                    <label className="text-white duration-500 block mb-5 dark:text-black">Your Email</label>
                    <input className="w-full p-[15px] border-none outline-none duration-500 bg-input-dark-color dark:bg-input-light-color text-white dark:text-black" type="text" name="" id="" placeholder="Enter Your Email"/>
                </div>
            </div>
            <textarea className="p-[15px] bg-input-dark-color dark:bg-input-light-color text-white dark:text-black outline-none min-h-[300px] duration-500" name="" id="" placeholder="Enter Your Message"></textarea>
            <button type="submit" className="border-none self-center sm:self-start text-white outline-none py-[15px] px-[85px] bg-blue-color hover:bg-blue-800 duration-500">Submit</button>
        </form>
    </div>
  )
}
