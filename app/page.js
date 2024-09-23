import Events from "@/components/Events";
import Gallery from "@/components/Gallery/Gallery";
import MediaCoverage from "@/components/MediaCoverage/MediaCoverage";
import Footer from "@/components/Footer";
import Gallery1 from "@/components/Gallery/Gallery1";
import IndividualEvent from "@/components/IndividualEvent";
import Lenis from 'lenis'
import HomePage from "@/components/HomePage/Homepage";
import Navbar from "@/components/Navbar/Navbar";
import NavbarMobile from "@/components/Navbar/NavbarMobile";

export default function Home() {


  return (
    <div>
      {/* <Navbar /> */}
      {/* <NavbarMobile /> */}
      <HomePage />
      <Events />
      {/* <IndividualEvent/> */}
      {/* <Gallery /> */}
      {/* <Gallery1 /> */}
      {/* <MediaCoverage /> */}
      {/* <Footer /> */}
    </div>
  );
}
