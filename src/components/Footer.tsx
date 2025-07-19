import { Mail, Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-primary py-16 px-6 border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-white mb-4">Odysvia</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Connecting travelers with authentic experiences worldwide. 
              Discover hidden gems, immerse in local cultures, and create memories that last forever.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Stay Updated</h4>
              <div className="flex gap-2 max-w-md">
                <Input 
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Destinations</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Experiences</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Local Guides</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Travel Stories</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Safety</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Community</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <span className="text-muted-foreground">Connect with us:</span>
            <div className="flex gap-3">
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>© 2024 Odysvia. All rights reserved.</span>
            <a href="#" className="hover:text-secondary transition-colors">Privacy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;