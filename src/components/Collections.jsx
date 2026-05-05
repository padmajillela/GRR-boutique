import { motion } from 'framer-motion';
import ethnic from '../assets/images/ethnic.jpg';
import blouse from '../assets/images/blouse.jpg';
import bridal from '../assets/images/bridal.jpg';
import party from '../assets/images/party.jpg';

const categories = [
  {
    title: "Bridal Collection",
    image: ethnic,
    desc: "Traditional saree model"
  },
  {
    title: "Party Wear",
    image: blouse,
    desc: "Close-up embroidery design"
  },
  {
    title: "Kids Wear",
    image: bridal,
    desc: "Grand bridal shoot"
  },
  {
    title: "Designer Outfit",
    image: party,
    desc: "Modern outfit"
  }
];

const Collections = () => {
  return (
    <section id="collections" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-secondary uppercase tracking-widest text-sm font-semibold mb-3 block">Featured Pieces</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-4">
              Latest <span className="text-primary">Collections</span>
            </h2>
            <p className="text-gray-600 leading-relaxed font-body">
              Explore our meticulously crafted collections, where traditional elegance meets contemporary design. Each piece tells a story of artistry and dedication.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-[20px] overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-300 h-[420px]"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover rounded-[20px] transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent rounded-[20px]"></div>

              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="text-2xl font-heading font-bold text-white mb-2">{item.title}</h3>
                <div className="w-10 h-[2px] bg-secondary transition-all duration-300 group-hover:w-20"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
