import { Download, Star, MapPin, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import appMockup from "@/assets/app-mockup.png";

const PrototypePreview = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* App Features */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold mb-6 text-white">
                Your Perfect Travel Companion
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover authentic experiences, connect with local guides, and capture memories that last a lifetime with Odysvia's intelligent travel platform.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 rounded-xl p-3">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Smart Discovery</h3>
                  <p className="text-muted-foreground">AI-powered recommendations based on your interests, budget, and travel style.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-accent/20 rounded-xl p-3">
                  <Star className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Authentic Experiences</h3>
                  <p className="text-muted-foreground">Connect with verified local guides and immerse yourself in genuine cultural experiences.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 rounded-xl p-3">
                  <Camera className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Story Creation</h3>
                  <p className="text-muted-foreground">Create and share travel reels with our intuitive storytelling tools.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button className="btn-hero flex items-center gap-2">
                <Download className="h-5 w-5" />
                Download for iOS
              </Button>
              <Button className="btn-accent flex items-center gap-2">
                <Download className="h-5 w-5" />
                Download for Android
              </Button>
            </div>
          </div>
          
          {/* App Mockup */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={appMockup}
                alt="Odysvia App Preview"
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/4 -left-8 w-32 h-32 bg-secondary/20 rounded-full blur-xl" />
            <div className="absolute bottom-1/4 -right-8 w-40 h-40 bg-accent/20 rounded-full blur-xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrototypePreview;