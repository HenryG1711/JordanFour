import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Masonry from "react-masonry-css";
import { 
  FiCamera, FiMail, FiPhone, FiMapPin, FiInstagram, 
  FiFacebook, FiTwitter, FiMenu, FiX, FiStar 
} from "react-icons/fi";

// Hero Section
const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1494791368093-85217fbbf8de"
          alt="Dramatic seascape with mountains" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-photo-black/70 to-photo-black/40"></div>
      </div>
      
      <div className="relative z-10 h-full flex flex-col justify-center items-start container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1 className="text-white mb-4 leading-tight">Capturing moments that last a lifetime</h1>
          <p className="text-photo-gray-200 text-xl md:text-2xl mb-8 max-w-2xl">
            Professional photography that tells your unique story through a lens of artistry and emotion
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#portfolio" className="btn btn-primary">
              View Portfolio
            </a>
            <a href="#contact" className="btn btn-outline bg-transparent text-white border-white/30 hover:bg-white/10">
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="animate-bounce"
        >
          <a href="#portfolio" className="text-white text-sm flex flex-col items-center gap-2">
            <span>Explore</span>
            <span className="h-8 w-0.5 bg-white/50"></span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Portfolio Section
const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isAnimating, setIsAnimating] = useState(false);
  
  const categories = [
    { id: "all", name: "All Work" },
    { id: "portrait", name: "Portrait" },
    { id: "landscape", name: "Landscape" },
    { id: "architecture", name: "Architecture" },
    { id: "street", name: "Street" }
  ];
  
  const portfolioItems = [
    {
      id: 1,
      category: "portrait",
      image: "https://images.unsplash.com/photo-1603775020644-eb8decd79994",
      title: "Elegance in Black & White",
      description: "Portrait photography, 2023"
    },
    {
      id: 2,
      category: "architecture",
      image: "https://images.unsplash.com/photo-1588214154135-9f1aaebf3009",
      title: "Timeless Structures",
      description: "Architectural photography, 2023"
    },
    {
      id: 3,
      category: "architecture",
      image: "https://images.unsplash.com/photo-1558614409-43d177158eea",
      title: "Geometric Patterns",
      description: "Architectural photography, 2022"
    },
    {
      id: 4,
      category: "street",
      image: "https://images.unsplash.com/photo-1599557041284-7e2a15610388",
      title: "London Calling",
      description: "Street photography, 2022"
    },
    {
      id: 5,
      category: "street",
      image: "https://images.unsplash.com/photo-1488034976201-ffbaa99cbf5c",
      title: "Rainy Day in NYC",
      description: "Street photography, 2021"
    },
    {
      id: 6,
      category: "landscape",
      image: "https://images.unsplash.com/photo-1494791368093-85217fbbf8de",
      title: "Coastal Majesty",
      description: "Landscape photography, 2023"
    }
  ];
  
  const filteredItems = selectedCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);
  
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };
  
  return (
    <section id="portfolio" className="section-padding bg-photo-gray-100">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            Portfolio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-photo-gray-600 max-w-2xl mx-auto"
          >
            A collection of my finest work across various photography disciplines, each image carefully composed to evoke emotion and tell a story.
          </motion.p>
        </div>
        
        <div className="mb-10 flex justify-center">
          <ul className="flex flex-wrap gap-2 md:gap-4 justify-center">
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  onClick={() => {
                    setIsAnimating(true);
                    setSelectedCategory(category.id);
                    setTimeout(() => setIsAnimating(false), 500);
                  }}
                  className={`px-4 py-2 rounded-full text-sm md:text-base transition-all
                    ${selectedCategory === category.id 
                      ? 'bg-photo-accent text-white' 
                      : 'bg-white text-photo-gray-700 hover:bg-photo-gray-200'}`}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex -ml-4 w-auto"
                columnClassName="pl-4 bg-clip-padding"
              >
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4 relative overflow-hidden group"
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-md">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-auto gallery-image object-cover aspect-[3/4]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-photo-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <h3 className="text-white text-xl font-medium mb-1">{item.title}</h3>
                        <p className="text-photo-gray-200 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </Masonry>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// About Section
const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-photo-accent"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-photo-accent"></div>
            <img 
              src="https://images.unsplash.com/photo-1625504615927-c14f4f309b63" 
              alt="Professional photographer portrait" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6">About Me</h2>
            <p className="text-photo-gray-700 mb-4">
              With over 10 years of experience capturing life's most precious moments, I've developed a distinctive style that 
              blends creative artistry with technical precision. My journey in photography began with a simple passion for 
              preserving memories, which has evolved into a lifelong dedication to visual storytelling.
            </p>
            <p className="text-photo-gray-700 mb-6">
              I believe that every frame tells a story, and I'm committed to creating images that not only document moments but 
              evoke emotion. Whether I'm photographing intimate portraits, grand landscapes, or urban architecture, my goal 
              remains the same: to create visual narratives that resonate and endure.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="text-xl font-serif mb-2">Specialties</h4>
                <ul className="space-y-2 text-photo-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-photo-accent rounded-full"></span>
                    Portrait Photography
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-photo-accent rounded-full"></span>
                    Landscape Photography
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-photo-accent rounded-full"></span>
                    Architectural Photography
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-serif mb-2">Equipment</h4>
                <ul className="space-y-2 text-photo-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-photo-accent rounded-full"></span>
                    Sony Alpha A7R IV
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-photo-accent rounded-full"></span>
                    Canon EOS R5
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-photo-accent rounded-full"></span>
                    Professional Lighting
                  </li>
                </ul>
              </div>
            </div>
            
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Services Section
const Services = () => {
  const services = [
    {
      id: 1,
      title: "Portrait Sessions",
      description: "Professional portrait photography for individuals, couples, and families that captures authentic emotion and personality.",
      icon: <FiCamera className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Wedding Photography",
      description: "Comprehensive wedding coverage that documents your special day with artistic vision and attention to detail.",
      icon: <FiCamera className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Commercial Projects",
      description: "High-quality imagery for businesses, products, and brands that elevates your visual marketing strategy.",
      icon: <FiCamera className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Event Coverage",
      description: "Dynamic event photography that preserves the energy and highlights of your special occasions and corporate gatherings.",
      icon: <FiCamera className="w-6 h-6" />
    }
  ];
  
  return (
    <section id="services" className="section-padding bg-photo-black text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-white"
          >
            Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-photo-gray-300 max-w-2xl mx-auto"
          >
            Tailored photography services that meet your needs, whether you're looking for personal portraits, event coverage, or commercial work.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-photo-gray-900 p-6 rounded-lg hover:bg-photo-gray-800 transition-colors duration-300"
            >
              <div className="text-photo-accent mb-4">{service.icon}</div>
              <h3 className="text-xl mb-3">{service.title}</h3>
              <p className="text-photo-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-photo-gray-300 mb-8">Interested in working together? Let's discuss your project and create something beautiful.</p>
          <a href="#contact" className="btn btn-primary">Get a Quote</a>
        </motion.div>
      </div>
    </section>
  );
}

// Testimonials Section
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Bride",
      image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3",
      quote: "The photos from our wedding day exceeded all expectations. Every emotion, every moment was captured beautifully. We couldn't be happier with the results!",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Torres",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5",
      quote: "The commercial photography for our brand has transformed our marketing materials. Professional, creative, and delivered on time. Highly recommend!",
      rating: 5
    }
  ];
  
  return (
    <section id="testimonials" className="section-padding bg-photo-gray-100">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            Client Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-photo-gray-600 max-w-2xl mx-auto"
          >
            Don't just take my word for it. Here's what clients have to say about their photography experience.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg relative"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-serif font-medium">{testimonial.name}</h4>
                  <p className="text-photo-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              
              <p className="text-photo-gray-700 italic">"{testimonial.quote}"</p>
              
              <div className="absolute -top-4 -left-4 text-5xl text-photo-accent opacity-30 font-serif">"</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-photo-gray-600 max-w-2xl mx-auto"
          >
            Ready to discuss your photography needs? Fill out the form below, and I'll get back to you as soon as possible.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-photo-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="w-full p-3 border border-photo-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-photo-accent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-photo-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="w-full p-3 border border-photo-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-photo-accent"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-photo-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-photo-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-photo-accent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block mb-2 text-sm font-medium text-photo-gray-700">
                  What service are you interested in?
                </label>
                <select
                  id="service"
                  className="w-full p-3 border border-photo-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-photo-accent bg-white"
                >
                  <option value="portrait">Portrait Session</option>
                  <option value="wedding">Wedding Photography</option>
                  <option value="commercial">Commercial Project</option>
                  <option value="event">Event Coverage</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-photo-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full p-3 border border-photo-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-photo-accent"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-photo-gray-100 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-serif mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-photo-accent rounded-full p-2 text-white">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-photo-gray-700">contact@photographyportfolio.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-photo-accent rounded-full p-2 text-white">
                  <FiPhone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-photo-gray-700">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-photo-accent rounded-full p-2 text-white">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Studio Location</h4>
                  <p className="text-photo-gray-700">
                    123 Creative Studio<br />
                    San Francisco, CA 94103
                  </p>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-serif mt-10 mb-4">Follow Me</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="bg-white p-3 rounded-full text-photo-gray-700 hover:text-photo-accent transition-colors duration-300"
                aria-label="Instagram"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-white p-3 rounded-full text-photo-gray-700 hover:text-photo-accent transition-colors duration-300"
                aria-label="Facebook"
              >
                <FiFacebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-white p-3 rounded-full text-photo-gray-700 hover:text-photo-accent transition-colors duration-300"
                aria-label="Twitter"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Footer Section
const Footer = () => {
  return (
    <footer className="bg-photo-black text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-serif mb-4">Photography Portfolio</h3>
            <p className="text-photo-gray-400">
              Capturing moments and creating memories that last a lifetime through the art of photography.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-4">Quick Links</h4>
            <ul className="space-y-2 text-photo-gray-400">
              <li><a href="#" className="hover:text-photo-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-photo-accent transition-colors">About</a></li>
              <li><a href="#portfolio" className="hover:text-photo-accent transition-colors">Portfolio</a></li>
              <li><a href="#services" className="hover:text-photo-accent transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-photo-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-4">Services</h4>
            <ul className="space-y-2 text-photo-gray-400">
              <li><a href="#" className="hover:text-photo-accent transition-colors">Portrait Photography</a></li>
              <li><a href="#" className="hover:text-photo-accent transition-colors">Wedding Photography</a></li>
              <li><a href="#" className="hover:text-photo-accent transition-colors">Commercial Photography</a></li>
              <li><a href="#" className="hover:text-photo-accent transition-colors">Event Photography</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-4">Contact</h4>
            <ul className="space-y-2 text-photo-gray-400">
              <li className="flex items-center gap-2">
                <FiMail className="text-photo-accent" />
                <span>contact@photographyportfolio.com</span>
              </li>
              <li className="flex items-center gap-2">
                <FiPhone className="text-photo-accent" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <FiMapPin className="text-photo-accent" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-photo-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-photo-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Photography Portfolio. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-photo-gray-500 hover:text-photo-accent transition-colors">
              <FiInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-photo-gray-500 hover:text-photo-accent transition-colors">
              <FiFacebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-photo-gray-500 hover:text-photo-accent transition-colors">
              <FiTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Navigation
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-md py-4 text-photo-gray-800' 
            : 'bg-transparent py-6 text-white'
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          <a href="#" className="text-2xl font-serif">
            <span className="font-medium">Photography</span> Portfolio
          </a>
          
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              <li><a href="#" className="hover:text-photo-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-photo-accent transition-colors">About</a></li>
              <li><a href="#portfolio" className="hover:text-photo-accent transition-colors">Portfolio</a></li>
              <li><a href="#services" className="hover:text-photo-accent transition-colors">Services</a></li>
              <li><a href="#testimonials" className="hover:text-photo-accent transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-photo-accent transition-colors">Contact</a></li>
            </ul>
          </nav>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FiX className={`w-6 h-6 ${isScrolled ? 'text-photo-gray-800' : 'text-white'}`} />
            ) : (
              <FiMenu className={`w-6 h-6 ${isScrolled ? 'text-photo-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>
      </header>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 bottom-0 bg-photo-black z-40 flex items-center justify-center"
          >
            <nav>
              <ul className="flex flex-col gap-6 text-center">
                <li>
                  <a 
                    href="#" 
                    className="text-white text-2xl hover:text-photo-accent transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    className="text-white text-2xl hover:text-photo-accent transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#portfolio" 
                    className="text-white text-2xl hover:text-photo-accent transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a 
                    href="#services" 
                    className="text-white text-2xl hover:text-photo-accent transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a 
                    href="#testimonials" 
                    className="text-white text-2xl hover:text-photo-accent transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-white text-2xl hover:text-photo-accent transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Main App Component
function App() {
  // Intersection Observer for image animations
  const observerRef = useRef(null);
  
  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });
    
    const images = document.querySelectorAll('.image-reveal');
    images.forEach(img => observerRef.current.observe(img));
    
    return () => {
      if (observerRef.current) {
        images.forEach(img => observerRef.current.unobserve(img));
      }
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <Portfolio />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;