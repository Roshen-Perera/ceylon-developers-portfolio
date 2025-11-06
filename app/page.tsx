
import Approach from "@/components/approach";
import BlueGlow from "@/components/blueGlow";
import Contact from "@/components/contact";
import Facilities from "@/components/facilities";
import FAQAccordion from "@/components/faqAccordian";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import MeshVector from "@/components/meshVector";
import NavBar from "@/components/navBar";
import ProPost from "@/components/proPost";
import Reviews from "@/components/reviews";
import Services from "@/components/services";
import TechStack from "@/components/techStack";
import WeDoSection from "@/components/weDoSection";
import Why from "@/components/why";
export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <BlueGlow />
        <MeshVector />
        <NavBar />
        <HeroSection />
      </div>
      <Services />
      {/* <Why/>
      <Approach/>
      <WeDoSection/>
      <Facilities/>
      <div className="flex flex-col items-center justify-center mt-12">
        <TechStack />
      </div>
      <Contact/>
      <Reviews/>
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
      </footer> */}
    </>
  );
}
