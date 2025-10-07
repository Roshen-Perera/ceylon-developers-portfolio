import AnalyticsVector from "@/components/analyticsVector";
import Approach from "@/components/approach";
import BlueGlow from "@/components/blueGlow";
import ContactUsForm from "@/components/contactUseForm";
import DotVector from "@/components/dotVector";
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
      <div className="flex flex-col items-center justify-center mt-12">
        <div className="mt-20 mb-10 ">
          <svg
            width="1343"
            height="58"
            viewBox="0 0 1343 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 4.82469L503.89 1.09953C512.708 1.03434 521.386 3.30247 529.045 7.67386L603.771 50.3261C611.43 54.6975 620.108 56.9657 628.927 56.9005L1343 51.6215"
              stroke="url(#paint0_linear_1085_1810)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1085_1810"
                x1="0"
                y1="29"
                x2="1343"
                y2="29"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#17CDCA" stopOpacity="0" />
                <stop offset="0.457843" stopColor="#17CDCA" />
                <stop offset="1" stopColor="#17CDCA" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-row gap-10">
            <div className="w-[369px] h-[375px] bg-[#6F6F6F1A] border-1 rounded-4xl overflow-hidden">
              <div className="mt-4 ml-5">
                <div className="flex flex-col gap-3">
                  <h1 className="text-[30px]">Projects</h1>
                  <p className="text-[22px] text-[#585858] relative z-1">
                    Easily organize tasks, set deadlines, and track progress in
                    real-time with Ease.
                  </p>
                </div>
                <DotVector />
              </div>
              <Image
                src={"/assets/vectors/maskGroup.png"}
                alt={""}
                width={500}
                height={200}
                className="relative bottom-45 z-1"
              />
            </div>
            <div className="w-[786px] h-[375px] bg-[#6F6F6F1A] border-1 rounded-4xl overflow-hidden">
              <div className="flex ">
                <div className="mt-12 ml-3">
                  <AnalyticsVector />
                </div>
                <div className=" flex flex-col gap-2 relative right-37 mt-4 z-20">
                  <h1 className="text-[30px]">Analytics & Reporting</h1>
                  <p className="text-[22px] w-[515px] text-[#585858]">
                    Generate real-time reports, identify key performance
                    indicators, and make data-driven decisions for continuous
                    improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-10">
            <div className="w-[786px] h-[375px] bg-[#6F6F6F1A] border-1 rounded-4xl overflow-hidden">
              <div className="flex ">
                <div className="mt-4 ml-5">
                  <div className="flex flex-col gap-3">
                    <h1 className="text-[30px]">Your Workflow</h1>
                    <p className="text-[22px] w-[605px] text-[#585858] relative z-1">
                      Automate repetitive tasks and streamline your workflows
                      with our powerful automation features. Reduce manual
                      effort, eliminate errors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[369px] h-[375px] bg-[#6F6F6F1A] border-1 rounded-4xl overflow-hidden">
              <div className="p-4">
                <div className="flex flex-col gap-3">
                  <h1 className="text-[30px]">Projects</h1>
                  <p className="text-[22px] text-[#585858] relative z-1">
                    Easily organize tasks, set deadlines, and track progress in
                    real-time with Ease.
                  </p>
                </div>
                <DotVector />
              </div>
              <Image
                src={"/assets/vectors/maskGroup.png"}
                alt={""}
                width={500}
                height={200}
                className="relative bottom-45 z-1"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-12">
        <TechStack />
      </div>
      <div className="flex flex-col items-center justify-center mt-12">
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-5">
            <h1 className="text-7xl font-medium">
              Get in
              <span className="font-kaushan">touch</span>
            </h1>
            <p className="text-[22px]">
              We’re here to support you! Feel free to reach out for
              <br />
              assistance, feedback, or any questions.
            </p>
            <h2 className="text-[30px]">Let’s Talk About:</h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-3 items-center">
                <div className="rounded-4xl">
                  <Image
                    src={"/assets/icons/right.png"}
                    alt={"check mark"}
                    width={24}
                    height={24}
                    className="flex-shrink-0 rounded-2xl"
                  />
                </div>

                <p className="text-[22px]">Customer Experience</p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <Image
                  src={"/assets/icons/right.png"}
                  alt={"check mark"}
                  width={24}
                  height={24}
                  className="flex-shrink-0 rounded-2xl"
                />
                <p className="text-[22px]">Quality and Trust</p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <Image
                  src={"/assets/icons/right.png"}
                  alt={"check mark"}
                  width={24}
                  height={24}
                  className="flex-shrink-0 rounded-2xl"
                />
                <p className="text-[22px]">Dependable Service</p>
              </div>
            </div>
          </div>
          <ContactUsForm />
        </div>
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
