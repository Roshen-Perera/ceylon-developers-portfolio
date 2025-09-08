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
        <p className="text-lg border-1 rounded-4xl p-2 z-11">Bring your business to the best scale</p>
      </div>
    </>
  );
}
