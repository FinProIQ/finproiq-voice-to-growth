import { Link } from "react-router-dom";

const FooterNew = () => {
  return (
    <footer className="bg-foreground text-background py-14">
      <div className="container px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <p className="text-2xl font-bold font-display mb-2">FinProIQ</p>
            <p className="text-sm opacity-70 max-w-xs">
              AI infrastructure for advice-only financial advisors.
            </p>
          </div>

          <nav className="flex flex-col gap-2 text-sm">
            <p className="text-xs uppercase tracking-wider opacity-60 mb-1">Company</p>
            <Link to="/privacy" className="hover:opacity-70 transition-opacity">Privacy</Link>
            <Link to="/terms" className="hover:opacity-70 transition-opacity">Terms</Link>
            <a href="mailto:FinProIQ@gmail.com" className="hover:opacity-70 transition-opacity">Data Handling</a>
          </nav>

          <nav className="flex flex-col gap-2 text-sm">
            <p className="text-xs uppercase tracking-wider opacity-60 mb-1">Contact</p>
            <a href="mailto:FinProIQ@gmail.com" className="hover:opacity-70 transition-opacity">FinProIQ@gmail.com</a>
            <a href="https://twitter.com/FinProIQ" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">Twitter / X</a>
            <a href="https://www.linkedin.com/company/115744076/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">LinkedIn</a>
          </nav>
        </div>

        <div className="border-t border-background/15 pt-6 text-xs opacity-60 leading-relaxed">
          <p className="mb-2">
            FinProIQ is a software vendor. Not registered as an investment adviser.
            Marketing Rule compliance is the responsibility of the publishing advisor.
          </p>
          <p>&copy; {new Date().getFullYear()} FinProIQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;