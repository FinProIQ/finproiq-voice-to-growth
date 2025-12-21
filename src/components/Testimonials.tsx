import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "FinProIQ saved me from missing follow-ups and helped me close two clients in my first week.",
    author: "Alex P.",
    title: "Independent Financial Advisor",
  },
  {
    quote: "It's like having an assistant who understands compliance and emotion — I've never seen anything like it.",
    author: "Karen L.",
    title: "Insurance Specialist",
  },
  {
    quote: "Finally, something that doesn't just automate — it thinks with me.",
    author: "Marcus D.",
    title: "Wealth Planner",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 bg-accent/5">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What Advisors Are Saying
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft border border-border relative"
            >
              <Quote className="w-12 h-12 text-accent/20 absolute top-6 right-6" />
              
              <p className="text-lg md:text-xl mb-6 leading-relaxed relative z-10">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-xl">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
