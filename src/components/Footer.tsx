import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold mb-2">FinProIQ</p>
            <p className="text-sm opacity-80">
              Where Financial Professionals Grow Smarter
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link 
              to="/faq" 
              className="hover:text-accent transition-colors"
              onClick={() => window.gtag?.('event', 'footer_navigation', { link: 'FAQ' })}
            >
              FAQ
            </Link>
            <Link 
              to="/privacy" 
              className="hover:text-accent transition-colors"
              onClick={() => window.gtag?.('event', 'footer_navigation', { link: 'Privacy' })}
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="hover:text-accent transition-colors"
              onClick={() => window.gtag?.('event', 'footer_navigation', { link: 'Terms' })}
            >
              Terms of Service
            </Link>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-70">
          <p>&copy; {new Date().getFullYear()} FinProIQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
