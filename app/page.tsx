import BlueFrame from "@/components/blueFrame";
import BlueGlow from "@/components/blueGlow";
import MeshVector from "@/components/meshVector";
import NavBar from "@/components/navBar";
import ServicesCarousel from "@/components/servicesCarousel";
import Image from "next/image";



export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <BlueGlow />
        <MeshVector />
        <NavBar />
        <p className="text-lg mt-18 border-1 rounded-4xl p-2 relative">
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
              Trusted by over <br />+ 20K people in the World
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
          <ServicesCarousel />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-12">
        <MeshVector />
      </div>
    </>
  );
}
