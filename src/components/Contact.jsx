import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-3 block">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-6">
            Visit Our <span className="text-primary">Boutique</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-white shadow-xl overflow-hidden">
          {/* Contact Information */}
          <div className="lg:w-1/3 bg-dark text-white p-10 md:p-12">
            <h3 className="text-2xl font-heading font-bold mb-8 text-white">Contact Information</h3>
            
            <div className="space-y-8">
              <a href="https://www.google.com/maps/place/GRR+Botique+and+Tailoring/@16.5404185,80.6315646,18z/data=!4m14!1m7!3m6!1s0x3a35e50005b32cd3:0x6e549b0e617f91d1!2sGRR+Botique+and+Tailoring!8m2!3d16.5403491!4d80.6328199!16s%2Fg%2F11x39jy0ld!3m5!1s0x3a35e50005b32cd3:0x6e549b0e617f91d1!8m2!3d16.5403491!4d80.6328199!16s%2Fg%2F11x39jy0ld" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 hover:text-primary transition-colors group">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Location</h4>
                  <p className="text-gray-400 group-hover:text-gray-300 text-sm leading-relaxed transition-colors">
                    GRR Boutique and Tailoring,<br />
                    Ajit Singh Nagar, PNT Colony,<br />
                    Vijayawada, Andhra Pradesh 520015
                  </p>
                </div>
              </a>

              <a href="tel:9494988153" className="flex items-start gap-4 hover:text-primary transition-colors group">
                <Phone className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Phone</h4>
                  <p className="text-gray-400 group-hover:text-gray-300 text-sm transition-colors">+91 9494988153</p>
                </div>
              </a>

              <a href="mailto:rajeswarigoli.rg33@gmail.com" className="flex items-start gap-4 hover:text-primary transition-colors group">
                <Mail className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email</h4>
                  <p className="text-gray-400 group-hover:text-gray-300 text-sm transition-colors">rajeswarigoli.rg33@gmail.com</p>
                </div>
              </a>

              <a href="https://www.instagram.com/grr_boutique_/" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 hover:text-primary transition-colors group">
                <FaInstagram className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Instagram</h4>
                  <p className="text-gray-400 group-hover:text-gray-300 text-sm transition-colors">@grr_boutique_</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <Clock className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Business Hours</h4>
                  <p className="text-gray-400 text-sm">Mon - Sat: 10:00 AM - 9:00 PM</p>
                  <p className="text-gray-400 text-sm">Sun: 11:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-4">
              <a 
                href="https://wa.me/919494988153" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] text-white font-semibold rounded hover:bg-[#128C7E] transition-colors"
              >
                <FaWhatsapp size={24} />
                Chat on WhatsApp
              </a>
              <a 
                href="tel:9494988153"
                className="inline-flex items-center justify-center gap-2 w-full py-4 bg-primary text-white font-semibold rounded hover:bg-secondary transition-colors"
              >
                <Phone size={20} />
                Call Now
              </a>
              <a 
                href="https://www.google.com/maps/place/GRR+Botique+and+Tailoring/@16.5404185,80.6315646,18z/data=!4m14!1m7!3m6!1s0x3a35e50005b32cd3:0x6e549b0e617f91d1!2sGRR+Botique+and+Tailoring!8m2!3d16.5403491!4d80.6328199!16s%2Fg%2F11x39jy0ld!3m5!1s0x3a35e50005b32cd3:0x6e549b0e617f91d1!8m2!3d16.5403491!4d80.6328199!16s%2Fg%2F11x39jy0ld" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-4 bg-transparent border border-gray-600 text-white font-semibold rounded hover:bg-gray-800 transition-colors"
              >
                <MapPin size={20} />
                Open in Maps
              </a>
            </div>
          </div>

          {/* Form and Map */}
          <div className="lg:w-2/3 flex flex-col p-8 md:p-12">
            <form className="mb-12">
              <h3 className="text-2xl font-heading font-bold mb-6 text-dark">Book an Appointment</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="Your Phone" />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                <select id="service" className="w-full px-4 py-3 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors bg-white">
                  <option>Custom Stitching</option>
                  <option>Designer Blouse</option>
                  <option>Bridal Wear</option>
                  <option>Alterations</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
                <textarea id="message" rows="4" className="w-full px-4 py-3 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none" placeholder="Tell us about your requirements..."></textarea>
              </div>
              <button type="submit" className="px-8 py-4 bg-primary text-white font-medium hover:bg-secondary transition-colors w-full md:w-auto">
                Send Inquiry
              </button>
            </form>

            {/* Google Map */}
            <div className="h-64 w-full bg-gray-200 rounded overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15296.882431604085!2d80.6328199!3d16.5403491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35e50005b32cd3%3A0x6e549b0e617f91d1!2sGRR%20Botique%20and%20Tailoring!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="GRR Boutique Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
