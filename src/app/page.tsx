import Header from "@/components/landingpage/navigations /header";
import PrinceProfile from "@/components/landingpage/contents/herosection";
import HeroSection from "@/components/landingpage/contents/herosection";
import AboutSection from "@/components/landingpage/contents/aboutsection";
import Ventures from "@/components/landingpage/contents/ventures";
import Heritage from "@/components/landingpage/contents/heritage";
import CarouselSection from "@/components/landingpage/contents/carousel";
import Footer from "@/components/landingpage/contents/footer";

export default function Home() {
  return (
    <div className="font-sans  ">
      <Header />
      {/* <PrinceProfile /> */}
      <HeroSection />
      <AboutSection />
      <Ventures />
      <Heritage />
      <CarouselSection />
      <Footer />
    </div>
  );
}
