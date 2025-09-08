import BlueGlow from "@/components/blueGlow";
import MeshVector from "@/components/meshVector";
import NavBar from "@/components/navBar";



export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <BlueGlow/>
        <MeshVector />
        <NavBar />
      </div>
    </>
  );
}
