import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import FeaturedPlaces from "@/components/FeaturedPlaces";
import ReelsSection from "@/components/ReelsSection";
import PrototypePreview from "@/components/PrototypePreview";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all fade-in-up elements
    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <div className="fade-in-up">
        <FeaturedPlaces />
      </div>
      <div className="fade-in-up">
        <ReelsSection />
      </div>
      <div className="fade-in-up">
        <PrototypePreview />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
