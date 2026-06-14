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
import { useEffect, useState } from "react";
import OurWorks from "./pages/OurWorks";

function useHashRoute() {
  const [route, setRoute] = useState(
    window.location.hash.replace("#", "")
  );

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash.replace("#", ""));
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () =>
      window.removeEventListener(
        "hashchange",
        handleHashChange
      );
  }, []);

  return route;
}
export default function App() {
const route = useHashRoute();
  
  if (route === "works") {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#050505", color: "#fff" }}
    >
      <CustomCursor />
      <Header />
      <FloatingSocialPanel />
      <OurWorks />
      <Footer />
    </div>
  );
}
  
  return (
    <div className="min-h-screen" style={{ background: "#050505", color: "#fff" }}>
      <Preloader />
      <CustomCursor />
      <Header />
      <FloatingSocialPanel />
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "GroYou",
      url: "https://groyou.in",
      logo: "https://groyou.in/logo2.png",
      description:
        "AI-Powered Digital Marketing, SEO & Automation Agency in India",
      sameAs: [
        "https://www.instagram.com/groyou.in/",
        "https://www.facebook.com/profile.php?id=61590713036860"
      ]
    }),
  }}
/>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "GroYou",
      "url": "https://groyou.in",
      "image": "https://groyou.in/logo2.png",
      "description": "Digital Marketing Agency in Chennai offering SEO, Performance Marketing and AI Automation Services.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      },
      "areaServed": "Chennai",
      "serviceType": [
        "SEO Services",
        "Performance Marketing",
        "Digital Marketing",
        "AI Automation",
        "Website Development"
      ]
    }),
  }}
/>
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
