import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="hero-glow min-h-screen flex items-center justify-center relative">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">
          Odysvia
        </h1>
        
        <p className="text-2xl md:text-3xl mb-12 text-white/90 font-light">
          Travel Deeper. Explore Smarter.
        </p>
        
        {/* Chrome-style search bar */}
        <div className="search-bar max-w-4xl mx-auto mb-12 flex items-center gap-4">
          <div className="flex-1 flex items-center gap-3">
            <Search className="h-6 w-6 text-white/60" />
            <Input 
              placeholder="Where do you want to explore next?"
              className="bg-transparent border-none text-white placeholder:text-white/60 text-lg focus:outline-none"
            />
          </div>
          <div className="hidden md:flex items-center gap-2 text-white/60">
            <MapPin className="h-5 w-5" />
            <Calendar className="h-5 w-5" />
            <Users className="h-5 w-5" />
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button className="btn-hero text-lg px-12 py-6">
            Explore Now
          </Button>
          <Button className="btn-accent text-lg px-12 py-6">
            Download App
          </Button>
        </div>
        
        {/* Subtle scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;