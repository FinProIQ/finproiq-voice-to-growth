import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "FinProIQ helped me turn conversations into clients — without worrying about compliance.",
    author: "Michael R.",
    title: "Financial Advisor",
  },
  {
    quote: "The AI Brand Studio writes posts I'm proud to publish — and my compliance team loves them.",
    author: "Sandra T.",
    title: "CFP®",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-feature">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            💬 What Our Users Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
