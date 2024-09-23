import Events from "@/components/Events";
import Gallery from "@/components/Gallery/Gallery";
import MediaCoverage from "@/components/MediaCoverage/MediaCoverage";
import Footer from "@/components/Footer";
import Gallery1 from "@/components/Gallery/Gallery1";
import IndividualEvent from "@/components/IndividualEvent";
import Lenis from 'lenis'
import Nav from "@/components/Navbar/Nav";
import Homepage from "@/components/HomePage/Home";
import NewAppNavCodepen from "@/components/HomePage/NewAppNavCodepen";

export default function Home() {


  return (
    <div>
      
      <NewAppNavCodepen/>
      <Homepage/>
      <Events />
      {/* <IndividualEvent/> */}
      {/* <Gallery />
      <Gallery1 /> */}
       <MediaCoverage />
      <Footer />
    </div>
  );
}
