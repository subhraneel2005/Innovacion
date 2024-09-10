import Navbars from "@/components/Navbars";
import StarryBackground from "@/components/StarryBackground/StarryBackground";
import Events from "@/components/Events";
import Homepage from "@/components/Homepage";

export default function Home() {
  return (
    <div className="h-screen w-full">
      {/* main sections which will scroll through smooth scroll */}
      <StarryBackground />
      <div className="h-full lg:mx-40 lg:py-5">
        {/* navbar will stay fixed */}
        <Navbars />

        <Homepage />

      </div>

      <Events />
    </div>
  );
}
