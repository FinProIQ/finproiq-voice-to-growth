import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const waitlistSchema = z.object({
  name: z.string().trim().nonempty({ message: "Name is required" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  });

  const onSubmit = async (data: WaitlistFormData) => {
    try {
      // Track form submission
      if (window.gtag) {
        window.gtag('event', 'form_submit', {
          event_category: 'engagement',
          event_label: 'Waitlist Form'
        });
      }
      
      // All processing happens server-side via edge function
      const { error } = await supabase.functions.invoke('send-waitlist-welcome', {
        body: { name: data.name, email: data.email }
      });

      if (error) {
        throw error;
      }
      
      // Generic success message (server always returns success to prevent enumeration)
      toast({
        title: "Welcome to the waitlist!",
        description: "Check your inbox for a welcome email. We'll be in touch soon!",
      });
      
      reset();
      onClose();
    } catch (error) {
      console.error("Waitlist error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-accent">
            Join the Waitlist
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Be the first to experience FinProIQ's AI-powered growth ecosystem.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Your name"
              {...register("name")}
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              {...register("email")}
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-accent hover:bg-accent-hover text-accent-foreground"
            >
              {isSubmitting ? "Joining..." : "Join Waitlist"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;
