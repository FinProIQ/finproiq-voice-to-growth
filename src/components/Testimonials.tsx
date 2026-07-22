import { motion } from "framer-motion";
import { Quote, Linkedin } from "lucide-react";
import michaelAnderson from "@/assets/michael-anderson.png";

const testimonials = [
  {
    quote:
      "FinProIQ is a fantastic alternative for advisors wanting to improve efficiency in their practice. It helped to streamline my workflow with automation without having to rebuild my tech stack or create reliance on one software.",
    author: "Michael Anderson, CFP®",
    image: michaelAnderson,
    linkedin: "https://www.linkedin.com/in/michael-anderson-cfp/",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 md:py-20 bg-accent/5">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What Advisors Are Saying
          </h2>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
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
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  loading="lazy"
                  className="w-14 h-14 rounded-full object-cover border border-border"
                />
                <div className="flex flex-col">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <a
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-accent hover:underline mt-0.5"
                  >
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
