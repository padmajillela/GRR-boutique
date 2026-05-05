import { FaFacebook as Facebook, FaInstagram as Instagram, FaTwitter as Twitter } from 'react-icons/fa';
import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#" className="inline-block mb-6 h-16 bg-white/10 rounded-sm p-1">
              <img src={logo} alt="GRR Boutique and Tailoring Logo" className="h-full w-auto object-contain" />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Premium boutique and tailoring services in Vijayawada. We bring your dream outfits to life with exceptional craftsmanship and attention to detail.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/grr_boutique_/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#collections" className="text-gray-400 hover:text-white transition-colors text-sm">Collections</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">Tailoring Services</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors text-sm">Design Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li className="text-gray-400 text-sm">Custom Stitching</li>
              <li className="text-gray-400 text-sm">Designer Blouses</li>
              <li className="text-gray-400 text-sm">Bridal Wear</li>
              <li className="text-gray-400 text-sm">Party Wear</li>
              <li className="text-gray-400 text-sm">Fabric Consultation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="text-gray-400 text-sm">GRR Boutique and Tailoring,<br/>Ajit Singh Nagar, PNT Colony,<br/>Vijayawada, Andhra Pradesh 520015</li>
              <li><a href="tel:9494988153" className="text-gray-400 hover:text-white transition-colors text-sm">+91 9494988153</a></li>
              <li><a href="mailto:rajeswarigoli.rg33@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm">rajeswarigoli.rg33@gmail.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} GRR Boutique and Tailoring. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
