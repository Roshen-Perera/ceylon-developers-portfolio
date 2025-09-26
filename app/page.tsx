import AnalyticsVector from "@/components/analyticsVector";
import BlueFrame from "@/components/blueFrame";
import BlueGlow from "@/components/blueGlow";
import DotVector from "@/components/dotVector";
import MeshVector from "@/components/meshVector";
import MeshVector2 from "@/components/meshVector2";
import NavBar from "@/components/navBar";
import ServiceCarousel from "@/components/serviceCarousel";
import VerticalTextSlider from "@/components/slider";
import TechStack from "@/components/techStack";
import { ArrowBigRight, MoveRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <BlueGlow />
        <MeshVector />
        <NavBar />

        <p className="text-[22px] mt-18 border-1 rounded-4xl p-2">
          Bring your business to the best scale
        </p>
        <div className="flex flex-col mt-8 z-20 items-center">
          <p className="font-semibold text-8xl ">
            Crafting <span className="text-[#17CDCA]">Digital </span>
          </p>
          <p className="font-semibold text-8xl items-center">Excellence</p>
        </div>
        <div className="text-lg mt-8 max-w-2xl flex items-center mx-auto px-4">
          <p className="text-[22px] text-center">
            Pushing the boundaries of what&apos;s possible in the digital realm.
            Join us on this journey into the future of technology.
          </p>
        </div>
        <div className="mt-8 flex max-w-4xl gap-10 justify-center items-center">
          <button className="text-[22px] p-3 text-lg bg-[#17CDCA] rounded-2xl">
            Learn More
          </button>
          <div className="flex flex-row items-center gap-3">
            <Image
              src="/assets/icons/review.jpg" // place inside /public/assets/icons
              alt="Future technology"
              width={64} // w-16
              height={64} // h-16
              className="rounded-full"
            />
            <p className="text-[22px] text-gray-800">
              Trusted by over+ 20K people in the World
            </p>
          </div>
        </div>
        <div className="mt-10">
          <BlueFrame />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-12">
        <p className="text-7xl font-medium">
          <span className="font-kaushan">Services</span> we offer{" "}
        </p>
        <div className="text-[22px] mt-8 max-w-2xl flex items-center mx-auto px-4">
          <p className="text-center">
            Pushing the boundaries of what&apos;s possible in the digital realm.
            Join us on this journey into the future of technology.
          </p>
        </div>
        <div className="mt-8">
          <ServiceCarousel />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-12">
        {/* <MeshVector /> */}
        <MeshVector2 />
        <div className="flex flex-row items-center gap-12">
          <div className="flex flex-col gap-6 flex-1 max-w-lg">
            <p className="text-7xl font-medium">
              To upscale your <span className="font-kaushan">business</span> to
              the next level
            </p>
            <p className="text-[22px] text-gray-600">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua invidunt ut labore.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-3 items-center">
                <Image
                  src={"/assets/icons/tick.png"}
                  alt={"check mark"}
                  width={24}
                  height={24}
                  className="flex-shrink-0"
                />
                <p className="text-[22px]">
                  Project templates to kick-start a new project
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <Image
                  src={"/assets/icons/tick.png"}
                  alt={"check mark"}
                  width={24}
                  height={24}
                  className="flex-shrink-0"
                />
                <p className="text-[22px]">
                  Clone task to speed your time to action
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <Image
                  src={"/assets/icons/tick.png"}
                  alt={"check mark"}
                  width={24}
                  height={24}
                  className="flex-shrink-0"
                />
                <p className="text-[22px]">
                  Communicate and collaborate with your team and clients
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <Image
                  src={"/assets/icons/tick.png"}
                  alt={"check mark"}
                  width={24}
                  height={24}
                  className="flex-shrink-0"
                />
                <p className="text-[22px]">Time tracking for the whole team</p>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              src={"/assets/images/todaysActivity.png"}
              alt={"today's activity dashboard"}
              width={686}
              height={487}
              style={{ opacity: 1 }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-12">
        <div className="text-center mb-8">
          <p className="text-5xl font-medium">
            Our <span className="font-kaushan">design</span> and
            <br />
            <span className="font-kaushan">development</span> approach
          </p>
        </div>
        <div className="grid grid-cols-4 p-8">
          <div className="p-3 shadow-[0px_0px_15px_rgba(23,205,202,0.47)] rounded-lg">
            <div className="flex flex-col p-5 gradient-border rounded-2xl gap-4 ">
              <p className="text-[26px] font-bold">UX Driven Engineering</p>
              <p className="text-[22px] text-[#585858]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit
                Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.{" "}
              </p>
            </div>
          </div>
          <div></div>
          <div className="p-3 shadow-[0px_0px_15px_rgba(23,205,202,0.47)] rounded-lg">
            <div className="flex flex-col p-5 gradient-border rounded-2xl gap-4 ">
              <p className="text-[26px] font-bold">
                Proven Experience and Expertise
              </p>
              <p className="text-[22px] text-[#585858]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit
                Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.{" "}
              </p>
            </div>
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-4 p-8">
          <div></div>
          <div className="p-3 shadow-[0px_0px_15px_rgba(23,205,202,0.47)] rounded-lg">
            <div className="flex flex-col p-5 gradient-border rounded-2xl gap-4 ">
              <p className="text-[26px] font-bold">
                Developing Shared Understanding
              </p>
              <p className="text-[22px] text-[#585858]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit
                Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.{" "}
              </p>
            </div>
          </div>
          <div></div>
          <div className="p-3 shadow-[0px_0px_15px_rgba(23,205,202,0.47)] rounded-lg">
            <div className="flex flex-col p-5 gradient-border rounded-2xl gap-4 ">
              <p className="text-[26px] font-bold">
                Quality Assurance & Testing
              </p>
              <p className="text-[22px] text-[#585858]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit
                Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 p-8">
          <div className="p-3 shadow-[0px_0px_15px_rgba(23,205,202,0.47)] rounded-lg">
            <div className="flex flex-col p-5 gradient-border rounded-2xl gap-4 ">
              <p className="text-[26px] font-bold">
                Security & Intellectual Property
              </p>
              <p className="text-[22px] text-[#585858]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit
                Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.{" "}
              </p>
            </div>
          </div>
          <div></div>
          <div className="p-3 shadow-[0px_0px_15px_rgba(23,205,202,0.47)] rounded-lg">
            <div className="flex flex-col p-5 gradient-border rounded-2xl gap-4 ">
              <p className="text-[26px] font-bold">Code Reviews</p>
              <p className="text-[22px] text-[#585858]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit
                Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.{" "}
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-12">
        <div className="flex flex-row ml-15 mr-15 gap-5 mt-8">
          <div className="flex flex-col justify-around">
            <VerticalTextSlider />
            <div className="text-[22px] flex items-center">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore
              </p>
            </div>
          </div>
          <div className="flex flex-col vision-border p-6 text-center gap-4">
            <h1 className="text-[26px] font-bold">Consulting</h1>
            <p className="text-[22px] text-[#585858]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard
            </p>
            <div className="flex flex-row gap-2 text-[#17CDCA] text-[22px]">
              <p>Get Started</p>
              <MoveRight />
            </div>
          </div>
          <div className="flex flex-col vision-border-middle p-6 text-center gap-4">
            <h1 className="text-[26px] font-bold">Implementation</h1>
            <p className="text-[22px] text-[#585858]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard
            </p>
            <div className="flex flex-row gap-2 text-[#17CDCA] text-[22px]">
              <p>Get Started</p>
              <MoveRight />
            </div>
          </div>
          <div className="flex flex-col vision-border p-6 text-center gap-4">
            <h1 className="text-[26px] font-bold">Distribution</h1>
            <p className="text-[22px] text-[#585858]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard
            </p>
            <div className="flex flex-row gap-2 text-[#17CDCA] text-[22px]">
              <p>Get Started</p>
              <MoveRight />
            </div>
          </div>
        </div>
      </div>
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
              We’re here to support you! Feel free to reach out for assistance,
              feedback, or any questions.
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
          <div></div>
        </div>
      </div>
    </>
  );
}
