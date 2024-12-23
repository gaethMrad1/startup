import ImageOne from "./HeroImages/ImageOne";
import ImageTwo from "./HeroImages/ImageTwo";
import Text from "./Text";
import Title from "./Title";

export default function Hero() {
  return (
    <section className="hero h-screen bg-gray-dark dark:bg-white duration-500 relative">
        <div className="container h-full flex flex-col justify-center relative z-[1]">
            <Title />
            <Text />
        </div>
        <ImageOne />
        <ImageTwo />
    </section>
  )
}
