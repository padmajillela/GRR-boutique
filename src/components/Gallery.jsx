import { motion } from 'framer-motion';
import ethnicImage1 from '../assets/images/ethnic.jpg';
import blouseImage1 from '../assets/images/blouse.jpg';
import bridalImage1 from '../assets/images/bridal.jpg';
import partyImage1 from '../assets/images/party.jpg';
import festiveImage1 from '../assets/images/festive.jpg';
import tailoringImage1 from '../assets/images/tailoring.jpg';
import fallbackLogo from '../assets/images/logo.png';

const galleryImages = [
  ethnicImage1,
  blouseImage1,
  bridalImage1,
  partyImage1,
  festiveImage1,
  tailoringImage1
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-3 block">Our Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-4">
            Design <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Explore Our Premium Boutique Creations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img 
                src={img} 
                alt={`GRR Boutique Design Gallery Image ${index + 1}`} 
                loading="lazy"
                className="w-full h-[350px] object-cover rounded-xl shadow-md bg-white"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = fallbackLogo;
                  e.target.className = "w-full h-[350px] object-contain p-8 bg-white rounded-xl shadow-md";
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
