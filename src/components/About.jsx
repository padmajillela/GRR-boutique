import { motion } from 'framer-motion';
import aboutImage from '../assets/images/about.jpg';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm relative z-10">
              <img 
                src={aboutImage} 
                alt="Premium boutique dress tailoring" 
                title="GRR Boutique Custom Tailoring"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-primary/10 z-0"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2"
          >
            <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-3 block">Our Heritage</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-6">
              The Art of <span className="text-primary">Elegance</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At GRR Boutique and Tailoring, we believe that true luxury lies in the details. Located in the heart of Vijayawada, we specialize in creating masterpieces that reflect your unique personality and style.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              From premium custom tailoring, exquisite boutique wear, and women's ethnic and designer wear to perfect personalized fittings and fashion styling, our master artisans bring decades of experience to every garment. We source only the finest fabrics to ensure that every creation is not just worn, but experienced.
            </p>
            
            <div className="flex items-center gap-8 border-t border-gray-100 pt-8">
              <div>
                <h4 className="font-heading text-3xl text-primary font-bold mb-1">15+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div>
                <h4 className="font-heading text-3xl text-primary font-bold mb-1">5k+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Happy Clients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
