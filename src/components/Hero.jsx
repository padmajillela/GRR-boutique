import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury fashion boutique" 
          title="GRR Boutique Premium Fashion"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="block text-secondary font-medium tracking-widest uppercase mb-4 text-sm md:text-base"
        >
          Welcome to GRR Boutique & Tailoring
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl md:text-7xl font-heading text-white font-bold leading-tight mb-6"
        >
          Elegance in <span className="text-secondary italic">Every Stitch</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-xl text-white/90 mb-10 font-light max-w-2xl mx-auto font-body"
        >
          Discover handcrafted ethnic & designer collections
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#collections" 
            className="w-full sm:w-auto px-10 py-4 bg-primary text-white text-sm tracking-widest uppercase font-medium hover:bg-secondary transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Collection
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white/70 text-xs tracking-widest uppercase mb-2">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[1px] h-12 bg-gradient-to-b from-white/70 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
