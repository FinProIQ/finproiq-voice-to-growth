import { useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendlyModal = ({ isOpen, onClose }: CalendlyModalProps) => {
  useEffect(() => {
    if (isOpen) {
      // Track Calendly popup opens
      if (window.gtag) {
        window.gtag('event', 'calendly_open', {
          event_category: 'engagement',
          event_label: 'Demo Booking'
        });
      }
      
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold">Book Your Demo</DialogTitle>
        </DialogHeader>
        <div 
          className="calendly-inline-widget w-full h-[600px]" 
          data-url="https://calendly.com/finproiq?hide_gdpr_banner=1&background_color=ffffff&text_color=1a2332&primary_color=40b5ad"
        />
      </DialogContent>
    </Dialog>
  );
};

export default CalendlyModal;

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
