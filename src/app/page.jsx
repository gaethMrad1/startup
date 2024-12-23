import About from "@/components/About/About";
import Blogs from "@/components/Blogs/Blogs";
import Brands from "@/components/Brands/Brands";
import Features from "@/components/Features/Features";
import Hero from "@/components/Hero/Hero";
import Support from "@/components/Support/Support";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <Features />
      <Brands />
      <About />
      <Blogs />
      <Support />
    </div>
  );
}
