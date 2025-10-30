import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  onOpenCalendly: () => void;
}

const Navigation = ({ onOpenCalendly }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const handleCTAClick = () => {
    if (window.gtag) {
      window.gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: 'Nav CTA'
      });
    }
    onOpenCalendly();
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="font-bold text-xl tracking-wide bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
              AI Client & Insight Engine Agent
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-foreground hover:text-accent transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-foreground hover:text-accent transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-foreground hover:text-accent transition-colors"
            >
              Testimonials
            </button>
            <Button 
              variant="default" 
              size="sm" 
              onClick={handleCTAClick}
              className="bg-gradient-to-r from-accent to-accent-hover hover:from-accent-hover hover:to-accent shadow-md hover:shadow-lg transition-all"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left text-foreground hover:text-accent transition-colors py-2"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left text-foreground hover:text-accent transition-colors py-2"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left text-foreground hover:text-accent transition-colors py-2"
            >
              Testimonials
            </button>
            <Button 
              variant="default" 
              size="sm" 
              onClick={handleCTAClick} 
              className="w-full bg-gradient-to-r from-accent to-accent-hover hover:from-accent-hover hover:to-accent shadow-md hover:shadow-lg transition-all"
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
