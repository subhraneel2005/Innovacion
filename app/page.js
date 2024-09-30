import Events from "@/components/Events";
import MediaCoverage from "@/components/MediaCoverage/MediaCoverage";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage/Homepage";
import NewAppNavCodepen from "@/components/HomePage/NewAppNavCodepen";
import Gallery from "@/components/Gallery/Gallery";
import PartnersSlide from "@/components/PartnersSlide";
export default function Home() {


  return (
    <div>
      <NewAppNavCodepen />
      <HomePage />
      <Events />
      <Gallery/>
      <MediaCoverage />
      <PartnersSlide/>
      <Footer />
    </div>
  );
}
