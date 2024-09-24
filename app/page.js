import Events from "@/components/Events";
import Gallery from "@/components/Gallery/Gallery";
import MediaCoverage from "@/components/MediaCoverage/MediaCoverage";
import Footer from "@/components/Footer";
import IndividualEvent from "@/components/IndividualEvent";
import HomePage from "@/components/HomePage/Homepage";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {


  return (
    <div>
      <Navbar />
      <HomePage />
      <Events />
      {/* <IndividualEvent /> */}
      <MediaCoverage />
      <Footer />
    </div>
  );
}
