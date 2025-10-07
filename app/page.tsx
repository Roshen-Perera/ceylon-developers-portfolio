import AnalyticsVector from "@/components/analyticsVector";
import Approach from "@/components/approach";
import BlueGlow from "@/components/blueGlow";
import ContactUsForm from "@/components/contactUseForm";
import DotVector from "@/components/dotVector";
import Facilities from "@/components/facilities";
import FAQAccordion from "@/components/faqAccordian";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import MeshVector from "@/components/meshVector";
import MeshVector2 from "@/components/meshVector2";
import NavBar from "@/components/navBar";
import ProPost from "@/components/proPost";
import Reviews from "@/components/reviews";
import ServiceCarousel from "@/components/serviceCarousel";
import Services from "@/components/Services";
import VerticalTextSlider from "@/components/slider";
import TechStack from "@/components/techStack";
import WeDoSection from "@/components/weDoSection";
import Why from "@/components/Why";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <BlueGlow />
        <MeshVector />
        <NavBar />
        <HeroSection/>
      </div>
      <Services/>
      <Why/>
      <Approach/>
      <WeDoSection/>
      <Facilities/>
      <div className="flex flex-col items-center justify-center mt-12">
        <TechStack />
      </div>
      
      <div className="flex flex-col items-center justify-center mt-12">
        <h1 className="text-7xl font-medium text-center">
          Why Customers
          <span className="font-kaushan"> love </span>
          <br />
          working with us
        </h1>
        <div className="text-[22px] mt-8 max-w-2xl flex items-center mx-auto px-4">
          <p className="text-center">
            Hear directly from customers about their experiences and how webdone
            has made a difference.
          </p>
        </div>
      </div>
      <div className="flex flex-col ml-12 mt-12">
        <Reviews />
      </div>
      <div className="flex flex-col items-center justify-center mt-12">
        <h1 className="text-7xl font-medium text-center">
          How
          <span className="font-kaushan"> Ceylon Developers </span>
          help you?
        </h1>
        <div>
          <FAQAccordion/>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-12">
        <ProPost/>
      </div>
      <footer className="py-12 mt-12">
        <Footer />
      </footer>
    </>
  );
}
