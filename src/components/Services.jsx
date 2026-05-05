import { motion } from 'framer-motion';
import { Scissors, Shirt, Sparkles, Star, Zap, PenTool, BookOpen } from 'lucide-react';

const services = [
  {
    title: 'Custom Stitching',
    description: 'Perfectly tailored garments that flatter your unique body shape and style preferences.',
    icon: Scissors,
  },
  {
    title: 'Designer Blouses',
    description: 'Intricate patterns, maggam work, and modern cuts for your traditional sarees.',
    icon: Shirt,
  },
  {
    title: 'Bridal Wear',
    description: 'Exquisite bridal collections designed to make your special day unforgettable.',
    icon: Sparkles,
  },
  {
    title: 'Party Wear',
    description: 'Stand out in any crowd with our exclusive custom-designed party dresses and gowns.',
    icon: Star,
  },
  {
    title: 'Alterations',
    description: 'Expert alterations to breathe new life into your favorite wardrobe pieces.',
    icon: Zap,
  },
  {
    title: 'Kurti & Salwar',
    description: 'Elegant and comfortable everyday or festive ethnic wear tailored to perfection.',
    icon: PenTool,
  },
  {
    title: 'Fabric Consultation',
    description: 'Professional guidance on selecting the right fabric, drape, and color for your design.',
    icon: BookOpen,
  },
];

const Services = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-3 block">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-6">
            Bespoke <span className="text-primary">Tailoring</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Experience the luxury of garments crafted specifically for you. Our comprehensive range of tailoring services ensures that every fashion need is met with precision and artistic flair.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white p-8 border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/5 text-primary rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-heading font-bold text-dark mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
          
          <motion.div 
            variants={itemVariants}
            className="bg-dark p-8 flex flex-col items-center justify-center text-center group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <h3 className="text-xl font-heading font-bold text-white mb-4 relative z-10">Need Something Else?</h3>
            <a href="#contact" className="text-accent text-sm font-semibold uppercase tracking-wider relative z-10 hover:text-white transition-colors flex items-center gap-2">
              Let's Talk <span className="text-lg">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
