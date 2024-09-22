import Events from "@/components/Events";
import Gallery from "@/components/Gallery/Gallery";
import MediaCoverage from "@/components/MediaCoverage/MediaCoverage";
import Footer from "@/components/Footer";
import Gallery1 from "@/components/Gallery/Gallery1";
import IndividualEvent from "@/components/IndividualEvent";
import Lenis from 'lenis'
import Nav from "@/components/Navbar/Nav";
import HomePage from "@/components/HomePage/Home";

export default function Home() {


  return (
    <div>
      <Nav/>
      <HomePage/>
      <Events />
      {/* <IndividualEvent/> */}
      {/* <Gallery /> */}
      {/* <Gallery1 /> */}
      {/* <MediaCoverage /> */}
      <Footer />
    </div>
  );
}
