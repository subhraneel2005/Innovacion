import Events from "@/components/Events";
import Gallery from "@/components/Gallery/Gallery";
import MediaCoverage from "@/components/MediaCoverage/MediaCoverage";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage/Homepage";
import NewAppNavCodepen from "@/components/HomePage/NewAppNavCodepen";


export default function Home() {


  return (
    <div>
      <NewAppNavCodepen />
      <HomePage />
      <Events />
      <MediaCoverage />
      <Footer />
    </div>
  );
}
