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
        <div className="mt-8 flex z-20">=
          <p className="font-semibold text-8xl">
            Crafting <span className="text-[#17CDCA]">Digital</span>
          </p>
        </div>
      </div>
    </>
  );
}
