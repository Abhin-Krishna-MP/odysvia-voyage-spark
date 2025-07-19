import { ArrowRight, Star } from "lucide-react";
import santoriniImg from "@/assets/destination-santorini.jpg";
import kyotoImg from "@/assets/destination-kyoto.jpg";
import peruImg from "@/assets/destination-peru.jpg";

const destinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    description: "Iconic blue domes and breathtaking sunsets over the Aegean Sea",
    image: santoriniImg,
    rating: 4.9,
    experiences: 247
  },
  {
    id: 2,
    name: "Kyoto, Japan",
    description: "Ancient temples and tranquil gardens in Japan's cultural heart",
    image: kyotoImg,
    rating: 4.8,
    experiences: 189
  },
  {
    id: 3,
    name: "Machu Picchu, Peru",
    description: "Mystical ancient ruins nestled high in the Andes Mountains",
    image: peruImg,
    rating: 4.9,
    experiences: 156
  },
  {
    id: 4,
    name: "Santorini, Greece",
    description: "Iconic blue domes and breathtaking sunsets",
    image: santoriniImg,
    rating: 4.9,
    experiences: 247
  }
];

const FeaturedPlaces = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-white">
            Featured Destinations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover hidden gems and iconic landmarks curated by our community of travelers
          </p>
        </div>
        
        <div className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide">
          {destinations.map((destination, index) => (
            <div 
              key={destination.id}
              className="destination-card flex-shrink-0 w-80 cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="card-overlay absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-colors duration-300" />
                
                {/* Rating badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span className="text-sm font-semibold text-primary">{destination.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-secondary transition-colors">
                  {destination.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {destination.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {destination.experiences} experiences
                  </span>
                  <ArrowRight className="h-5 w-5 text-accent group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlaces;