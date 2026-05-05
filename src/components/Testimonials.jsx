import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Bride',
    content: 'The bridal lehenga stitched by GRR Boutique was beyond my expectations. The maggam work was so intricate and the fitting was absolutely flawless. They truly made my special day even more beautiful.',
    rating: 5,
  },
  {
    name: 'Anjali Reddy',
    role: 'Regular Client',
    content: 'I have been getting all my designer blouses stitched here for the past 3 years. The attention to detail and understanding of modern cuts while maintaining traditional elegance is unmatched in Vijayawada.',
    rating: 5,
  },
  {
    name: 'Kavya Rao',
    role: 'Fashion Enthusiast',
    content: 'Premium quality and exceptional service. They took my reference image and created something even better. The fabric consultation helped me choose the right material for my evening gown.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-3 block">Client Stories</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-6">
            Words of <span className="text-primary">Appreciation</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 p-8 md:p-10 rounded-sm relative"
            >
              <div className="flex text-accent mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed italic">"{testimonial.content}"</p>
              <div>
                <h4 className="font-heading font-bold text-dark text-lg">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
              
              {/* Quote Mark Decoration */}
              <div className="absolute top-6 right-8 text-gray-200 font-heading text-6xl opacity-50 select-none">"</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
