import BlueGlow from "@/components/blueGlow";
import MeshVector from "@/components/meshVector";
import NavBar from "@/components/navBar";



export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <BlueGlow />
        <MeshVector />
        <NavBar />
        <p className="text-lg border-1 rounded-4xl p-2 relative">
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
        <div className=" flex max-w-2xl">
          <button className="p-3 bg-blue-400">
            Learn More
          </button>
          <div className="flex ">
            
          </div>
        </div>
      </div>
    </>
  );
}
