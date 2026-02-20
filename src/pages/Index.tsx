import { useEffect } from "react";
import Header from "@/components/lotb/Header";
import Hero from "@/components/lotb/Hero";
import SectionMenu from "@/components/lotb/SectionMenu";
import Gallery from "@/components/lotb/Gallery";
import JoinCrew from "@/components/lotb/JoinCrew";
import Footer from "@/components/lotb/Footer";
import Snowfall from "@/components/lotb/Snowfall";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".scroll-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative">
      <Snowfall />
      <Header />
      <main className="max-w-[1120px] mx-auto px-4 pt-2 pb-4 relative">
        <Hero />
        <SectionMenu />
        <Gallery />
        <JoinCrew />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
