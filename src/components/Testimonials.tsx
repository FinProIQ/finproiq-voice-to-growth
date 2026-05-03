import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I used this after a prospect said 'I'll think about it' - they replied the same day and signed the next week.",
    author: "Financial Advisor",
    title: "",
  },
  {
    quote: "This is the first tool that actually improved my follow-ups, not just sped them up.",
    author: "Wealth Manager",
    title: "",
  },
  {
    quote: "It feels like having an assistant that understands both compliance and client psychology.",
    author: "Insurance Agent",
    title: "",
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="bg-card rounded-2xl p-8 shadow-soft border border-border relative transition-shadow hover:shadow-medium cursor-default"
            >
              <Quote className="w-12 h-12 text-accent/20 absolute top-6 right-6" />
              
              <p className="text-lg md:text-xl mb-6 leading-relaxed relative z-10 text-foreground">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-xl">
                  {testimonial.author.charAt(0)}
                </div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
