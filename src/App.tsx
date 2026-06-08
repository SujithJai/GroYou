import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import FloatingSocialPanel from "./components/FloatingSocialPanel";
import Hero from "./components/Hero";
import TrustMarquee from "./components/TrustMarquee";
import WhyGroYou from "./components/WhyGroYou";
import FounderStory from "./components/FounderStory";
import MeetFounders from "./components/MeetFounders";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import GrowthEngine from "./components/GrowthEngine";
import Results from "./components/Results";
import CaseStudies from "./components/CaseStudies";
import AISystems from "./components/AISystems";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: "#050505", color: "#fff" }}>
      <Preloader />
      <CustomCursor />
      <Header />
      <FloatingSocialPanel />
      <main>
        <Hero />
        <TrustMarquee />
        <WhyGroYou />
        <FounderStory />
        <MeetFounders />
        <Pricing />
        <Services />
        <GrowthEngine />
        <Results />
        <CaseStudies />
        <AISystems />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
