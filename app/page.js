import Events from "@/components/Events";
import Homepage from "@/components/Homepage";
import Gallery from "@/components/Gallery/Gallery";
import MediaCoverage from "@/components/MediaCoverage/MediaCoverage";
import Footer from "@/components/Footer";
import Gallery1 from "@/components/Gallery/Gallery1";
import IndividualEvent from "@/components/IndividualEvent";
import Lenis from 'lenis'
import Navbar from '@/components/Navbar';
import Nav from "@/components/Nav";

export default function Home() {


  return (
    <div>
      <Nav/>
      <Homepage />
      <Events />
      {/* <IndividualEvent/> */}
      {/* <Gallery /> */}
      {/* <Gallery1 /> */}
      <MediaCoverage />
      <Footer />
    </div>
  );
}
