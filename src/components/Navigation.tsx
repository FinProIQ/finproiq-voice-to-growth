import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface NavigationProps {
  onOpenCalendly: () => void;
}

const Navigation = ({ onOpenCalendly }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    if (window.gtag) {
      window.gtag('event', 'section_navigation', {
        event_category: 'navigation',
        event_label: id
      });
    }
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // nav height
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleCTAClick = () => {
    if (window.gtag) {
      window.gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: 'Nav Schedule Demo'
      });
    }
    window.open('https://calendly.com/finproiq', '_blank');
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => navigate('/')}
              className="font-bold text-xl tracking-wide text-accent hover:opacity-80 transition-opacity"
            >
              FinProIQ
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('product')}
              className="text-foreground hover:text-accent transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-foreground hover:text-accent transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-foreground hover:text-accent transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('founding-members')}
              className="text-foreground hover:text-accent transition-colors"
            >
              Limited Early Access
            </button>
            <Button 
              variant="default" 
              size="sm" 
              onClick={handleCTAClick}
              className="bg-accent hover:bg-accent-hover text-accent-foreground shadow-md hover:shadow-lg transition-all"
            >
              Schedule a Demo
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
              onClick={() => scrollToSection('product')}
              className="block w-full text-left text-foreground hover:text-accent transition-colors py-2"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left text-foreground hover:text-accent transition-colors py-2"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left text-foreground hover:text-accent transition-colors py-2"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('founding-members')}
              className="block w-full text-left text-foreground hover:text-accent transition-colors py-2"
            >
              Limited Early Access
            </button>
            <Button 
              variant="default" 
              size="sm" 
              onClick={handleCTAClick} 
              className="w-full bg-accent hover:bg-accent-hover text-accent-foreground shadow-md hover:shadow-lg transition-all"
            >
              Schedule a Demo
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
