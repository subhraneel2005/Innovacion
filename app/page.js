import Navbar from "@/components/Navbar";
import Events from "@/components/Events";
import Homepage from "@/components/Homepage";
import Gallery from "@/components/Gallery/Gallery";
import MediaCoverage from "@/components/MediaCoverage/MediaCoverage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full ">
      <Navbar />
      <Homepage />
      <Events />
      <Gallery />
      <MediaCoverage />
      <Footer />
    </div>
  );
}
