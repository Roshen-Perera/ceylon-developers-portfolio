import BlueFrame from "@/components/blueFrame";
import BlueGlow from "@/components/blueGlow";
import MeshVector from "@/components/meshVector";
import MeshVector2 from "@/components/meshVector2";
import NavBar from "@/components/navBar";
import ServiceCarousel from "@/components/serviceCarousel";
import VerticalTextSlider from "@/components/slider";
import { ArrowBigRight, MoveRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <BlueGlow />
        <MeshVector />
        <NavBar />

        <p className="text-lg mt-18 border-1 rounded-4xl p-2">
          Bring your business to the best scale
        </p>
        <div className="flex flex-col mt-8 z-20 items-center">
          <p className="font-semibold text-8xl ">
            Crafting <span className="text-[#17CDCA]">Digital </span>
          </p>
          <p className="font-semibold text-8xl items-center">Excellence</p>
        </div>
        <div className="text-lg mt-8 max-w-2xl flex items-center mx-auto px-4">
          <p className="text-center">
            Pushing the boundaries of what&apos;s possible in the digital realm.
            Join us on this journey into the future of technology.
          </p>
        </div>
        <div className="mt-8 flex max-w-2xl gap-10 justify-center items-center">
          <button className="p-3 text-lg bg-[#17CDCA] rounded-2xl">
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
            <p className="text-gray-800">
              Trusted by over+ 20K people in the World
            </p>
          </div>
        </div>
        <div className="mt-10">
          <BlueFrame />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-12">
        <p className="text-5xl font-medium">
          <span className="font-kaushan">Services</span> we offer{" "}
        </p>
        <div className="text-lg mt-8 max-w-2xl flex items-center mx-auto px-4">
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
            <p className="text-5xl font-medium">
              To upscale your <span className="font-kaushan">business</span> to
              the next level
            </p>
            <p className="text-lg text-gray-600">
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
                <p className="text-lg">
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
                <p className="text-lg">
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
                <p className="text-lg">
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
                <p className="text-lg">Time tracking for the whole team</p>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              src={"/assets/images/todaysActivity.png"}
              alt={"today's activity dashboard"}
              width={555}
              height={441}
              style={{ opacity: 1 }}
            />
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
                <p className="text-lg font-bold">UX Driven Engineering</p>
                <p className="text-lg text-[#585858]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit
                  Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>
            <div></div>
            <div className="p-3 shadow-[0px_0px_15px_rgba(23,205,202,0.47)] rounded-lg">
              <div className="flex flex-col p-5 gradient-border rounded-2xl gap-4 ">
                <p className="text-lg font-bold">
                  Proven Experience and Expertise
                </p>
                <p className="text-lg text-[#585858]">
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
                <p className="text-lg font-bold">
                  Developing Shared Understanding
                </p>
                <p className="text-lg text-[#585858]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit
                  Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>
            <div></div>
            <div className="p-3 shadow-[0px_0px_15px_rgba(23,205,202,0.47)] rounded-lg">
              <div className="flex flex-col p-5 gradient-border rounded-2xl gap-4 ">
                <p className="text-lg font-bold">Quality Assurance & Testing</p>
                <p className="text-lg text-[#585858]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit
                  Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 p-8">
            <div className="p-3 shadow-[0px_0px_15px_rgba(23,205,202,0.47)] rounded-lg">
              <div className="flex flex-col p-5 gradient-border rounded-2xl gap-4 ">
                <p className="text-lg font-bold">
                  Security & Intellectual Property
                </p>
                <p className="text-lg text-[#585858]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit
                  Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>
            <div></div>
            <div className="p-3 shadow-[0px_0px_15px_rgba(23,205,202,0.47)] rounded-lg">
              <div className="flex flex-col p-5 gradient-border rounded-2xl gap-4 ">
                <p className="text-lg font-bold">Code Reviews</p>
                <p className="text-lg text-[#585858]">
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
              <div className="flex flex-row gap-2 text-[#17CDCA]">
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
              <div className="flex flex-row gap-2 text-[#17CDCA]">
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
              <div className="flex flex-row gap-2 text-[#17CDCA]">
                <p>Get Started</p>
                <MoveRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
