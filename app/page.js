import Navbar from "@/components/Navbar";
import Events from "@/components/Events";
import Homepage from "@/components/Homepage";
import Gallery from "@/components/Gallery/Gallery";
import MediaCoverage from "@/components/MediaCoverage/MediaCoverage";
import Footer from "@/components/Footer";
import Gallery1 from "@/components/Gallery/Gallery1";

export default function Home() {
  return (
    <div className="w-full ">
      <Navbar />
      <Homepage />
      <Events />
      {/* <Gallery /> */}
      <Gallery1 />
      <MediaCoverage />
      <Footer />
    </div>
  );
}
