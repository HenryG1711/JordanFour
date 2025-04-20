import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiShoppingCart, FiMenu, FiX, FiChevronRight, FiHeart, FiInstagram, 
  FiTwitter, FiFacebook, FiStar, FiTruck, FiShield, FiArrowRight, FiCheck
} from "react-icons/fi";

// Hero Section
const Hero = () => {
  const [selectedColor, setSelectedColor] = useState("black");
  
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center bg-luxury-50">
      <div className="container-luxury grid md:grid-cols-2 gap-8 lg:gap-16 items-center py-20 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="order-2 md:order-1"
        >
          <div className="mb-3">
            <div className="inline-block bg-jordan-red bg-opacity-10 px-3 py-1 rounded-sm">
              <span className="text-jordan-red text-xs font-medium uppercase tracking-wider">Limited Edition</span>
            </div>
          </div>
          <h1 className="mb-4 font-light">Air Jordan 4 Retro</h1>
          <p className="text-luxury-600 mb-8 text-xl md:text-2xl max-w-lg">
            Iconic design meets unmatched craftsmanship in the legendary silhouette that redefined sneaker culture.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <button className="btn btn-primary px-10">
              Shop Now <FiShoppingCart className="ml-2" />
            </button>
            <button className="btn btn-outline">
              Explore Collection
            </button>
          </div>
          
          <div className="mt-6">
            <div className="mb-3">
              <span className="text-sm font-medium uppercase tracking-wider text-luxury-700">Select Color</span>
            </div>
            <div className="flex gap-3 mb-6">
              <button 
                onClick={() => setSelectedColor("black")}
                className={`color-selector bg-black ${selectedColor === "black" ? "active" : ""}`}
                aria-label="Black"
              ></button>
              <button
                onClick={() => setSelectedColor("red")} 
                className={`color-selector bg-jordan-red ${selectedColor === "red" ? "active" : ""}`}
                aria-label="Red"
              ></button>
              <button 
                onClick={() => setSelectedColor("gray")}
                className={`color-selector bg-luxury-400 ${selectedColor === "gray" ? "active" : ""}`}
                aria-label="Gray"
              ></button>
              <button 
                onClick={() => setSelectedColor("white")}
                className={`color-selector bg-white border border-luxury-200 ${selectedColor === "white" ? "active" : ""}`}
                aria-label="White"
              ></button>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="order-1 md:order-2 flex justify-center items-center relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-luxury-200/20 via-transparent to-transparent rounded-full blur-2xl"></div>
          <motion.img 
            animate={{ y: [0, -15, 0] }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            src="https://images.unsplash.com/photo-1656335362192-2bc9051b1824" 
            alt="Jordan 4 Retro in Black" 
            className="w-full max-w-lg drop-shadow-2xl transform -rotate-6 z-10"
          />
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-luxury-100 to-transparent"></div>
    </section>
  );
};

// Featured Products Section
const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Air Jordan 4 Retro 'Military Black'",
      image: "https://images.unsplash.com/photo-1656335219028-dcd6c0759162",
      price: 225,
      rating: 5,
      isNew: true
    },
    {
      id: 2,
      name: "Air Jordan 4 Retro 'Fire Red'",
      image: "https://images.unsplash.com/photo-1666031645063-a9c386c0562c",
      price: 200,
      rating: 4.5,
      isNew: false
    },
    {
      id: 3,
      name: "Air Jordan 4 Retro 'Off-White'",
      image: "https://images.unsplash.com/photo-1597843994436-120c8d91cae2",
      price: 315,
      rating: 5,
      isNew: false
    }
  ];
  
  return (
    <section className="section-padding bg-white">
      <div className="container-luxury">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-3"
            >
              Featured Collection
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-luxury-600 max-w-xl"
            >
              Explore our latest collection of premium Jordan 4 colorways, each celebrating the iconic silhouette with premium materials and unmatched design.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="#" className="text-luxury-900 text-sm font-medium inline-flex items-center uppercase tracking-wider hover:text-jordan-red transition-colors">
              View All Collection <FiChevronRight className="ml-1" />
            </a>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="product-card p-6 group hover-grow"
            >
              <div className="relative overflow-hidden mb-6">
                {product.isNew && (
                  <div className="absolute top-2 left-2 z-10 bg-jordan-red px-3 py-1 rounded-sm">
                    <span className="text-white text-xs font-medium uppercase tracking-wider">New</span>
                  </div>
                )}
                <button className="absolute top-2 right-2 z-10 bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:text-jordan-red">
                  <FiHeart className="w-4 h-4" />
                </button>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-80 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-xl">{product.name}</h3>
                <span className="font-medium text-lg">${product.price}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(Math.floor(product.rating))].map((_, i) => (
                      <FiStar key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                    {product.rating % 1 !== 0 && (
                      <div className="relative">
                        <FiStar className="w-4 h-4 text-luxury-300" />
                        <div className="absolute top-0 left-0 overflow-hidden" style={{ width: "50%" }}>
                          <FiStar className="w-4 h-4 text-yellow-500 fill-current" />
                        </div>
                      </div>
                    )}
                  </div>
                  <span className="text-sm text-luxury-500">{product.rating}</span>
                </div>
                <button className="btn btn-secondary px-4 py-2 text-xs">Add to Cart</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Features/Details Section
const ProductFeatures = () => {
  return (
    <section className="section-padding bg-luxury-100">
      <div className="container-luxury">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h2 className="mb-6">Crafted to Perfection</h2>
            <p className="text-luxury-700 mb-8">
              The iconic Air Jordan 4 returns with premium materials and the same design details that made it famous — the mesh panels, supportive wings, and visible Air cushioning in the heel.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-soft">
                  <FiCheck className="w-5 h-5 text-jordan-red" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Premium Leather Construction</h4>
                  <p className="text-luxury-600 text-sm">
                    Full-grain leather upper with supportive mesh panels create a premium look and enhanced durability.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-soft">
                  <FiCheck className="w-5 h-5 text-jordan-red" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Iconic Support System</h4>
                  <p className="text-luxury-600 text-sm">
                    The signature plastic wings offer enhanced lockdown and stability for on-court performance.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-soft">
                  <FiCheck className="w-5 h-5 text-jordan-red" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Air Cushioning</h4>
                  <p className="text-luxury-600 text-sm">
                    Visible Air unit in the heel provides lightweight cushioning that's built to last.
                  </p>
                </div>
              </div>
            </div>
            
            <button className="btn btn-primary px-8">
              Explore Features
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-luxury-200/40 via-transparent to-transparent rounded-xl blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1666031645045-3194d3d77dcc" 
                alt="Jordan 4 detailed craftsmanship" 
                className="w-full h-auto rounded-lg shadow-xl relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Limited Edition Section
const LimitedEdition = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 22,
    seconds: 45
  });
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              
              if (days > 0) {
                days -= 1;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <section className="relative py-20 md:py-32 lg:py-44 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518527399940-f3f768f47dd2" 
          alt="Jordan shoes lifestyle" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-luxury-900/70"></div>
      </div>
      
      <div className="container-luxury relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white mb-4"
          >
            Limited Edition Release
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-luxury-200 text-xl mb-10"
          >
            The exclusive Jordan 4 "Midnight Black" drops soon. Sign up to be notified when this limited release becomes available.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-4 gap-4 mb-10"
          >
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-sm">
              <div className="text-white text-3xl font-light">{timeLeft.days}</div>
              <div className="text-luxury-300 text-xs uppercase tracking-wider">Days</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-sm">
              <div className="text-white text-3xl font-light">{timeLeft.hours}</div>
              <div className="text-luxury-300 text-xs uppercase tracking-wider">Hours</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-sm">
              <div className="text-white text-3xl font-light">{timeLeft.minutes}</div>
              <div className="text-luxury-300 text-xs uppercase tracking-wider">Minutes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-sm">
              <div className="text-white text-3xl font-light">{timeLeft.seconds}</div>
              <div className="text-luxury-300 text-xs uppercase tracking-wider">Seconds</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="input-field text-sm md:w-80 px-5 py-4 rounded-sm"
            />
            <button className="btn btn-primary px-8 py-4 rounded-sm whitespace-nowrap">
              Notify Me
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Marcus Johnson",
      location: "Verified Buyer, New York",
      quote: "The Air Jordan 4 is a perfect balance of style and comfort. The quality exceeded my expectations and the classic design works with everything in my wardrobe.",
      rating: 5
    },
    {
      id: 2,
      name: "Sophia Miller",
      location: "Verified Buyer, Los Angeles",
      quote: "I've been collecting Jordans for years, and this 4 has one of the best quality constructions I've seen. Worth every penny for the craftsmanship and style.",
      rating: 5
    },
    {
      id: 3,
      name: "David Chen",
      location: "Verified Buyer, Chicago",
      quote: "From the premium materials to the iconic silhouette, these Jordan 4s deliver on every level. The comfort is surprising for such a classic design.",
      rating: 4
    }
  ];
  
  return (
    <section className="section-padding bg-white">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-luxury-600 max-w-2xl mx-auto"
          >
            Don't just take our word for it – hear what collectors and sneaker enthusiasts have to say about the iconic Jordan 4.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-luxury-50 p-8 rounded-sm border border-luxury-100 hover:border-luxury-200 transition-colors"
            >
              <div className="mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
              
              <p className="text-luxury-700 italic mb-6">"{testimonial.quote}"</p>
              
              <div>
                <h4 className="font-medium">{testimonial.name}</h4>
                <p className="text-luxury-500 text-sm">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Value Propositions Section
const ValueProps = () => {
  const benefits = [
    {
      id: 1,
      title: "Free Express Shipping",
      description: "Free shipping on all orders over $150. Delivers within 2-3 business days.",
      icon: <FiTruck className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Authenticity Guaranteed",
      description: "Every pair is thoroughly verified to ensure 100% authenticity.",
      icon: <FiShield className="w-6 h-6" />
    },
    {
      id: 3,
      title: "30-Day Returns",
      description: "Not satisfied? Return your unworn purchase within 30 days for a full refund.",
      icon: <FiArrowRight className="w-6 h-6 transform rotate-180" />
    }
  ];
  
  return (
    <section className="py-12 bg-luxury-900 text-white">
      <div className="container-luxury">
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="flex items-start gap-4">
              <div className="p-3 bg-luxury-800 rounded-sm text-jordan-red">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">{benefit.title}</h3>
                <p className="text-luxury-400 text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Newsletter Section
const Newsletter = () => {
  return (
    <section className="py-24 bg-luxury-50">
      <div className="container-luxury">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            Join the Collectors
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-luxury-600 mb-8"
          >
            Subscribe to our newsletter for exclusive drops, restock alerts, and special offers on premium Jordan 4 releases.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-3 max-w-xl mx-auto"
          >
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="input-field flex-grow rounded-sm"
            />
            <button className="btn btn-primary whitespace-nowrap rounded-sm">
              Subscribe
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-luxury-900 text-white pt-16 pb-8">
      <div className="container-luxury">
        <div className="grid md:grid-cols-4 gap-8 pb-12">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-light mb-6">Jordan<span className="font-medium">Four</span></h3>
            <p className="text-luxury-400 mb-6">
              Elevating the iconic Air Jordan 4 with premium offerings for collectors and enthusiasts.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-luxury-400 hover:text-jordan-red transition-colors">
                <FiInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-luxury-400 hover:text-jordan-red transition-colors">
                <FiFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-luxury-400 hover:text-jordan-red transition-colors">
                <FiTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-light mb-6">Shop</h4>
            <ul className="space-y-3 text-luxury-400">
              <li><a href="#" className="hover:text-jordan-red transition-colors">All Jordan 4s</a></li>
              <li><a href="#" className="hover:text-jordan-red transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-jordan-red transition-colors">Limited Editions</a></li>
              <li><a href="#" className="hover:text-jordan-red transition-colors">Restocks</a></li>
              <li><a href="#" className="hover:text-jordan-red transition-colors">Sale</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-light mb-6">Support</h4>
            <ul className="space-y-3 text-luxury-400">
              <li><a href="#" className="hover:text-jordan-red transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-jordan-red transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-jordan-red transition-colors">Authenticity</a></li>
              <li><a href="#" className="hover:text-jordan-red transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-jordan-red transition-colors">Size Guide</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-light mb-6">Information</h4>
            <ul className="space-y-3 text-luxury-400">
              <li><a href="#" className="hover:text-jordan-red transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-jordan-red transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-jordan-red transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-jordan-red transition-colors">Affiliate Program</a></li>
              <li><a href="#" className="hover:text-jordan-red transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-luxury-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-luxury-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} JordanFour. All rights reserved. Not affiliated with Nike or Jordan Brand.
          </p>
          <div className="flex items-center gap-4">
            <img src="https://i.imgur.com/5vwYmW1.png" alt="Payment methods" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

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
            ? 'bg-white shadow-sm py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-luxury flex justify-between items-center">
          <a href="#" className="text-2xl text-luxury-900">
            Jordan<span className="font-medium">Four</span>
          </a>
          
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              <li><a href="#" className="text-luxury-800 hover:text-jordan-red transition-colors">Home</a></li>
              <li><a href="#" className="text-luxury-800 hover:text-jordan-red transition-colors">Collection</a></li>
              <li><a href="#" className="text-luxury-800 hover:text-jordan-red transition-colors">Features</a></li>
              <li><a href="#" className="text-luxury-800 hover:text-jordan-red transition-colors">Limited</a></li>
              <li><a href="#" className="text-luxury-800 hover:text-jordan-red transition-colors">Reviews</a></li>
            </ul>
          </nav>
          
          <div className="flex items-center gap-4">
            <button className="text-luxury-800 hover:text-jordan-red transition-colors">
              <FiShoppingCart className="w-6 h-6" />
            </button>
            
            <button 
              className="md:hidden text-luxury-800 hover:text-jordan-red transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
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
            className="fixed top-0 left-0 right-0 bottom-0 bg-white z-40 pt-24"
          >
            <nav className="container-luxury py-8">
              <ul className="flex flex-col gap-6">
                <li>
                  <a 
                    href="#" 
                    className="text-luxury-900 text-2xl font-light hover:text-jordan-red transition-colors flex justify-between items-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                    <FiChevronRight />
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-luxury-900 text-2xl font-light hover:text-jordan-red transition-colors flex justify-between items-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Collection
                    <FiChevronRight />
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-luxury-900 text-2xl font-light hover:text-jordan-red transition-colors flex justify-between items-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Features
                    <FiChevronRight />
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-luxury-900 text-2xl font-light hover:text-jordan-red transition-colors flex justify-between items-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Limited
                    <FiChevronRight />
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-luxury-900 text-2xl font-light hover:text-jordan-red transition-colors flex justify-between items-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Reviews
                    <FiChevronRight />
                  </a>
                </li>
              </ul>
              
              <div className="mt-8 pt-8 border-t border-luxury-200">
                <a 
                  href="#" 
                  className="btn btn-primary w-full justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Shop Now
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Main App Component
function App() {
  // Smooth scroll behavior
  useEffect(() => {
    // Handle anchor links scroll with offset for fixed header
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      
      const id = target.getAttribute('href');
      if (!id || id === '#') return;
      
      const element = document.querySelector(id);
      if (element) {
        e.preventDefault();
        const yOffset = -80; // Header height offset
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Parallax effect for certain elements
  useEffect(() => {
    const handleParallax = () => {
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach(element => {
        const scrollPosition = window.pageYOffset;
        const elementPosition = element.offsetTop;
        const distance = (scrollPosition - elementPosition) * 0.1;
        
        if (scrollPosition > elementPosition - window.innerHeight && 
            scrollPosition < elementPosition + element.offsetHeight) {
          element.style.transform = `translateY(${distance}px)`;
        }
      });
    };
    
    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <div className="overflow-x-hidden bg-luxury-50">
      <Navigation />
      <Hero />
      <FeaturedProducts />
      <ProductFeatures />
      <LimitedEdition />
      <Testimonials />
      <ValueProps />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;