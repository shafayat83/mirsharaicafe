/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Coffee, 
  MapPin, 
  Phone, 
  Facebook, 
  Clock, 
  Menu as MenuIcon, 
  X, 
  ChevronRight, 
  Star, 
  Utensils, 
  Truck, 
  Car, 
  Users, 
  Baby, 
  Accessibility, 
  Flame, 
  Trophy,
  Calendar,
  MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const COLORS = {
  brown: '#4a3728',
  beige: '#d7ccc8',
  cream: '#f5f5f5',
  gold: '#c5a059',
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <div className="min-h-screen font-sans text-cafe-brown bg-cafe-cream">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-cafe-gold focus:text-white focus:p-4">
        Skip to main content
      </a>
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`} aria-label="Main navigation">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-cafe-brown p-2 rounded-lg" aria-hidden="true">
              <Coffee className="text-cafe-gold w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl leading-none">Mirsarai Cafe</span>
              <span className="font-bengali text-xs font-semibold" lang="bn">মিরসরাই ক্যাফে</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="font-medium hover:text-cafe-gold transition-colors focus:outline-none focus:ring-2 focus:ring-cafe-gold focus:ring-offset-2 rounded-sm"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-cafe-brown text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-cafe-gold focus:ring-offset-2"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-cafe-brown p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={28} aria-hidden="true" /> : <MenuIcon size={28} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[-1] md:hidden"
                onClick={() => setIsMenuOpen(false)}
                aria-hidden="true"
              />
              <motion.div 
                id="mobile-menu"
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-screen w-[80%] max-w-sm bg-white shadow-2xl md:hidden z-50 flex flex-col"
                role="dialog"
                aria-modal="true"
                aria-label="Mobile menu"
              >
                <div className="p-6 flex justify-between items-center border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="bg-cafe-brown p-2 rounded-lg" aria-hidden="true">
                      <Coffee className="text-cafe-gold w-5 h-5" />
                    </div>
                    <span className="font-serif font-bold text-lg">Mirsarai Cafe</span>
                  </div>
                  <button 
                    onClick={() => setIsMenuOpen(false)} 
                    className="p-2 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-cafe-gold"
                    aria-label="Close menu"
                  >
                    <X size={24} aria-hidden="true" />
                  </button>
                </div>
                <div className="flex flex-col p-6 gap-6 overflow-y-auto">
                  {navLinks.map((link) => (
                    <a 
                      key={link.name} 
                      href={link.href} 
                      className="text-xl font-medium text-gray-800 hover:text-cafe-gold transition-colors flex items-center justify-between group focus:outline-none focus:text-cafe-gold"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                      <ChevronRight size={20} className="text-gray-300 group-hover:text-cafe-gold transition-colors" aria-hidden="true" />
                    </a>
                  ))}
                  <a 
                    href="#contact" 
                    className="bg-cafe-brown text-white text-center py-4 rounded-xl font-bold text-lg shadow-lg shadow-cafe-brown/20 mt-4 focus:outline-none focus:ring-2 focus:ring-cafe-gold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Us
                  </a>
                </div>
                <div className="mt-auto p-6 border-t border-gray-100 bg-cafe-cream/30">
                  <p className="text-sm text-gray-500 mb-4">Follow us on social media</p>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.facebook.com/mirsaraicafe" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-white p-3 rounded-full shadow-sm text-cafe-brown focus:outline-none focus:ring-2 focus:ring-cafe-gold"
                      aria-label="Visit our Facebook page"
                    >
                      <Facebook size={20} aria-hidden="true" />
                    </a>
                    <a 
                      href="https://wa.me/8801992652050" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-white p-3 rounded-full shadow-sm text-green-600 focus:outline-none focus:ring-2 focus:ring-green-600"
                      aria-label="Contact us on WhatsApp"
                    >
                      <MessageSquare size={20} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      <main id="main-content">

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=2000" 
            alt="Cafe Background" 
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-bengali text-3xl md:text-5xl mb-4 text-cafe-beige" lang="bn">মিরসরাই ক্যাফে</h2>
            <h1 className="font-serif text-5xl md:text-8xl font-bold mb-6">Mirsarai Cafe</h1>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-light italic">
              "Great Coffee, Cozy Moments, Unforgettable Flavors"
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#menu" 
                className="bg-cafe-gold text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-cafe-gold focus:ring-offset-2"
              >
                <Utensils size={20} aria-hidden="true" /> View Menu
              </a>
              <a 
                href="https://maps.app.goo.gl/rJkqvgVC6F2PTdX77" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-cafe-brown px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-cafe-brown focus:ring-offset-2"
              >
                <MapPin size={20} aria-hidden="true" /> Get Directions
              </a>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="rotate-90 text-white w-8 h-8" aria-hidden="true" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="w-full md:w-1/2">
              <div className="relative">
                <img 
                  src="https://user6879.na.imgto.link/public/20260407/gemini-generated-image-wr3ax3wr3ax3wr3a.avif" 
                  alt="Mirsarai Cafe Interior" 
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 -right-6 bg-cafe-gold text-white p-8 rounded-2xl hidden lg:block"
                >
                  <p className="text-4xl font-bold">3.7</p>
                  <p className="text-sm font-semibold">Google Rating</p>
                  <div className="flex gap-1 mt-2">
                    {[...Array(4)].map((_, i) => <Star key={i} size={16} fill="white" />)}
                    <Star size={16} fill="white" className="opacity-50" />
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-cafe-gold font-bold tracking-widest uppercase text-sm">Discover Our Story</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-6">A Cozy Haven in Mirsharai</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Mirsarai Cafe is more than just a restaurant; it's a destination for food lovers and those seeking a peaceful escape. Located in the heart of Mirsharai, our cafe offers a trendy and romantic atmosphere that's perfect for everyone.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you're a tourist exploring the beauty of Bangladesh, a student looking for a quiet study spot, or a group of friends celebrating life, we provide the perfect backdrop for your moments.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Users size={24} />, label: 'Group Friendly' },
                  { icon: <Flame size={24} />, label: 'Fireplace Ambiance' },
                  { icon: <Trophy size={24} />, label: 'Sports Friendly' },
                  { icon: <MessageSquare size={24} />, label: 'Quiet & Romantic' },
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 * idx, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="bg-cafe-beige p-3 rounded-full text-cafe-brown">
                      {item.icon}
                    </div>
                    <span className="font-semibold">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-cafe-cream overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl font-bold mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-cafe-gold mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Utensils />, title: 'Dine-in', desc: 'Enjoy our cozy atmosphere with table service.' },
              { icon: <Truck />, title: 'Delivery', desc: 'No-contact delivery available for your safety.' },
              { icon: <Car />, title: 'Drive-through', desc: 'Quick and convenient service on the go.' },
              { icon: <Users />, title: 'Catering', desc: 'Perfect for birthdays and special events.' },
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="bg-cafe-beige w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-cafe-brown">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-500">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cafe-gold font-bold tracking-widest uppercase text-sm">Delicious Selection</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-4">Our Menu</h2>
            <p className="text-gray-500 max-w-xl mx-auto">From artisanal coffee to hearty meals, we have something for every palate. Halal, vegan, and vegetarian options available.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Coffee & Tea */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-serif text-3xl font-bold mb-8 flex items-center gap-3">
                <Coffee className="text-cafe-gold" aria-hidden="true" /> Coffee & Tea
              </h3>
              <div className="space-y-6">
                {[
                  { name: 'Signature Espresso', price: '৳180', desc: 'Rich, dark roast with a smooth finish.' },
                  { name: 'Masala Chai', price: '৳120', desc: 'Traditional spiced tea with milk.' },
                  { name: 'Caramel Macchiato', price: '৳250', desc: 'Velvety milk with espresso and caramel.' },
                  { name: 'Green Tea Selection', price: '৳150', desc: 'Organic leaves from the finest gardens.' },
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-start group"
                  >
                    <div className="flex-1">
                      <h4 className="font-bold text-lg group-hover:text-cafe-gold transition-colors">{item.name}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                    <span className="font-bold text-cafe-brown ml-4">{item.price}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Main Meals */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-serif text-3xl font-bold mb-8 flex items-center gap-3">
                <Utensils className="text-cafe-gold" aria-hidden="true" /> Main Meals
              </h3>
              <div className="space-y-6">
                {[
                  { name: 'Grilled Chicken Platter', price: '৳380', desc: 'Served with seasonal vegetables and rice.' },
                  { name: 'Vegetarian Pasta', price: '৳320', desc: 'Fresh herbs, tomatoes, and parmesan.' },
                  { name: 'Cafe Special Burger', price: '৳350', desc: 'Juicy patty with our secret sauce.' },
                  { name: 'All-you-can-eat Brunch', price: '৳550', desc: 'Available every Friday and Saturday.' },
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-start group"
                  >
                    <div className="flex-1">
                      <h4 className="font-bold text-lg group-hover:text-cafe-gold transition-colors">{item.name}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                    <span className="font-bold text-cafe-brown ml-4">{item.price}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 bg-cafe-beige/30 p-8 rounded-3xl text-center"
          >
            <p className="text-lg font-semibold mb-4">Ask about our <span className="text-cafe-gold">Happy Hour Food</span> and <span className="text-cafe-gold">Dessert Specials!</span></p>
            <button 
              className="bg-cafe-brown text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-cafe-gold focus:ring-offset-2"
              aria-label="Download our full menu as a PDF"
            >
              Download Full Menu (PDF)
            </button>
          </motion.div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-cafe-brown text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Accessibility size={40} className="text-cafe-gold" />, title: 'Accessibility', items: ['Wheelchair accessible parking', 'Accessible entrance & seating', 'Accessible toilet facilities'] },
              { icon: <Baby size={40} className="text-cafe-gold" />, title: 'Kids Friendly', items: ['Special Kids Menu', 'High chairs available', 'Birthday party hosting'] },
              { icon: <Car size={40} className="text-cafe-gold" />, title: 'Parking', items: ['Free street parking', 'Dedicated parking lot', 'Safe and secure area'] },
            ].map((facility, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  {facility.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{facility.title}</h3>
                <ul className="text-gray-300 space-y-2">
                  {facility.items.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-cafe-cream rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            <div className="w-full md:w-1/2 p-12 bg-cafe-brown text-white flex flex-col justify-center">
              <h2 className="font-serif text-4xl font-bold mb-6">Contact Us</h2>
              <p className="text-gray-300 mb-8">Have a question, feedback, or just want to say hi? We'd love to hear from you. Send us a message and we'll get back to you soon.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="text-cafe-gold" />
                  <span>01992-652050</span>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="text-cafe-gold" />
                  <span>Open Daily: Closes at 12 AM</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-12">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-bold mb-2 uppercase tracking-wide">Full Name</label>
                  <input 
                    id="contact-name"
                    type="text" 
                    className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-cafe-gold" 
                    placeholder="John Doe" 
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-info" className="block text-sm font-bold mb-2 uppercase tracking-wide">Email or Phone</label>
                  <input 
                    id="contact-info"
                    type="text" 
                    className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-cafe-gold" 
                    placeholder="john@example.com or 01XXX-XXXXXX" 
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-bold mb-2 uppercase tracking-wide">Subject</label>
                  <input 
                    id="contact-subject"
                    type="text" 
                    className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-cafe-gold" 
                    placeholder="How can we help?" 
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-bold mb-2 uppercase tracking-wide">Message</label>
                  <textarea 
                    id="contact-message"
                    rows={4} 
                    className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-cafe-gold resize-none" 
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                <button className="w-full bg-cafe-brown text-white py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-cafe-gold focus:ring-offset-2">
                  <MessageSquare size={20} aria-hidden="true" /> Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-cafe-cream overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl font-bold mb-4">What Our Guests Say</h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-2xl font-bold">3.7</span>
              <div className="flex text-cafe-gold">
                {[...Array(4)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                <Star size={20} className="opacity-50" />
              </div>
              <span className="text-gray-500">(208 Reviews)</span>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Arif Ahmed', text: 'Great place for students. The coffee is excellent and the atmosphere is very quiet and peaceful.', rating: 5 },
              { name: 'Sarah Khan', text: 'Loved the romantic vibe. Perfect for a dinner date. The staff is very polite and helpful.', rating: 4 },
              { name: 'Tanvir Hasan', text: 'Best coffee in Mirsharai! The fireplace adds such a cozy touch during winter evenings.', rating: 5 },
            ].map((review, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-md"
              >
                <div className="flex text-cafe-gold mb-4">
                  {[...Array(review.rating)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 italic mb-6">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cafe-beige rounded-full flex items-center justify-center font-bold text-cafe-brown">
                    {review.name[0]}
                  </div>
                  <span className="font-bold">{review.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-12"
          >
            <div className="w-full lg:w-1/2">
              <h2 className="font-serif text-4xl font-bold mb-8">Find Us</h2>
              <div className="space-y-6 mb-8">
                {[
                  { icon: <MapPin className="text-cafe-gold mt-1" />, title: 'Address', content: 'QHJF+F5V, Mirsharai, Bangladesh' },
                  { icon: <Phone className="text-cafe-gold mt-1" />, title: 'Phone', content: '01992-652050' },
                  { icon: <Facebook className="text-cafe-gold mt-1" />, title: 'Facebook', content: <a href="https://www.facebook.com/mirsaraicafe" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-cafe-gold">facebook.com/mirsaraicafe</a> },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    {item.icon}
                    <div>
                      <p className="font-bold text-lg">{item.title}</p>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
                <div className="flex flex-wrap gap-4">
                  <motion.a 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    viewport={{ once: true }}
                    href="https://maps.app.goo.gl/rJkqvgVC6F2PTdX77" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cafe-brown text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-cafe-gold focus:ring-offset-2"
                    aria-label="Open Mirsarai Cafe location in Google Maps"
                  >
                    <MapPin size={18} aria-hidden="true" /> Open in Google Maps
                  </motion.a>
                  <motion.a 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    viewport={{ once: true }}
                    href="https://wa.me/8801992652050"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
                    aria-label="Contact us on WhatsApp"
                  >
                    <MessageSquare size={18} aria-hidden="true" /> WhatsApp Us
                  </motion.a>
                </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 h-[400px] rounded-3xl overflow-hidden shadow-xl"
            >
              <iframe 
                title="Mirsarai Cafe Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.3164478147!2d91.5721!3d22.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753386000000001%3A0x6d88888888888888!2sMirsarai%20Cafe!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </section>

      </main>

      {/* Footer */}
      <footer className="bg-cafe-brown text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-white/10 p-2 rounded-lg" aria-hidden="true">
                  <Coffee className="text-cafe-gold w-6 h-6" />
                </div>
                <span className="font-serif font-bold text-2xl">Mirsarai Cafe</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Experience the finest coffee and a cozy atmosphere in the heart of Mirsharai. Your perfect destination for relaxation and great food.
              </p>
              <div className="flex gap-4">
                <motion.a 
                  whileHover={{ y: -5 }}
                  href="https://www.facebook.com/mirsaraicafe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 p-3 rounded-full hover:bg-cafe-gold transition-colors focus:outline-none focus:ring-2 focus:ring-cafe-gold"
                  aria-label="Visit our Facebook page"
                >
                  <Facebook size={20} aria-hidden="true" />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -5 }}
                  href="https://wa.me/8801992652050"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 p-3 rounded-full hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600"
                  aria-label="Contact us on WhatsApp"
                >
                  <MessageSquare size={20} aria-hidden="true" />
                </motion.a>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 border-b border-white/10 pb-2">Quick Links</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-cafe-gold transition-colors flex items-center gap-2 focus:outline-none focus:text-cafe-gold">
                      <ChevronRight size={16} aria-hidden="true" /> {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 border-b border-white/10 pb-2">Opening Hours</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex justify-between">
                  <span>Monday - Sunday</span>
                  <span className="text-white">8:00 AM - 12:00 AM</span>
                </li>
                <li className="flex justify-between">
                  <span>Public Holidays</span>
                  <span className="text-white">10:00 AM - 12:00 AM</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 border-b border-white/10 pb-2">Newsletter</h4>
              <p className="text-gray-400 mb-4 text-sm">Subscribe to get special offers and event updates.</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="newsletter-email" className="sr-only">Email Address</label>
                <input 
                  id="newsletter-email"
                  type="email" 
                  placeholder="Your email" 
                  className="bg-white/10 border border-white/10 rounded-lg px-4 py-2 flex-1 focus:outline-none focus:border-cafe-gold text-white"
                  required
                />
                <button 
                  type="submit"
                  className="bg-cafe-gold text-white p-2 rounded-lg hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Subscribe to newsletter"
                >
                  <ChevronRight aria-hidden="true" />
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Mirsarai Cafe. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-cafe-gold text-white p-4 rounded-full shadow-2xl hover:bg-cafe-brown transition-colors group focus:outline-none focus:ring-2 focus:ring-cafe-brown"
            aria-label="Scroll to top"
          >
            <ChevronRight className="-rotate-90 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
