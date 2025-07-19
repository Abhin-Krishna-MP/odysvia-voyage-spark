import { Play, Heart, MessageCircle, Share } from "lucide-react";

const reels = [
  {
    id: 1,
    title: "Hidden Beach in Bali",
    author: "@wanderlust_sarah",
    views: "2.4M",
    thumbnail: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Tokyo Street Food Tour",
    author: "@foodie_travels",
    views: "1.8M",
    thumbnail: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=400&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Northern Lights in Iceland",
    author: "@arctic_explorer",
    views: "3.1M",
    thumbnail: "https://images.unsplash.com/photo-1531171018284-c3aa0b6b9b07?w=400&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Sahara Desert Sunrise",
    author: "@desert_nomad",
    views: "1.5M",
    thumbnail: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=400&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Swiss Alps Adventure",
    author: "@mountain_life",
    views: "2.2M",
    thumbnail: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Maldives Paradise",
    author: "@tropical_vibes",
    views: "4.2M",
    thumbnail: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=400&h=600&fit=crop",
  }
];

const ReelsSection = () => {
  return (
    <section className="py-20 px-6 bg-card/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-white">
            Travel Reels
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get inspired by authentic travel stories from our global community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reels.map((reel, index) => (
            <div 
              key={reel.id}
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={reel.thumbnail}
                alt={reel.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-accent/90 rounded-full p-4 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-accent">
                  <Play className="h-8 w-8 text-accent-foreground fill-current ml-1" />
                </div>
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-bold text-lg mb-2">{reel.title}</h3>
                <p className="text-white/80 text-sm mb-3">{reel.author}</p>
                
                {/* Engagement stats */}
                <div className="flex items-center justify-between">
                  <span className="text-white/70 text-sm">{reel.views} views</span>
                  <div className="flex items-center gap-4">
                    <Heart className="h-5 w-5 text-white/70 hover:text-accent transition-colors cursor-pointer" />
                    <MessageCircle className="h-5 w-5 text-white/70 hover:text-accent transition-colors cursor-pointer" />
                    <Share className="h-5 w-5 text-white/70 hover:text-accent transition-colors cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReelsSection;