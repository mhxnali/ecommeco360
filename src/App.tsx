import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingBag, BarChart3, Search, Globe2, Mail, Phone, Facebook, MessageCircle, ChevronRight, ChevronDown, Building2, Menu, X, BookText as TikTok } from 'lucide-react';

// Platform Card Component
const PlatformCard = ({ logo, name, description }: {
  logo: string;
  name: string;
  description: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
    >
      <div className="flex flex-col items-center text-center flex-grow">
        <div className="w-20 h-20 mb-4 flex items-center justify-center">
          <img
            src={logo}
            alt={`${name} logo`}
            className="w-full h-full object-contain p-2"
          />
        </div>
        <h3 className="text-lg font-bold text-blue-900 mb-3">{name}</h3>
        <p className="text-gray-600 text-sm flex-grow">{description}</p>
      </div>
    </motion.div>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const platforms = [
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
      name: "Amazon",
      description: "Dominate the world's largest e-commerce platform with optimized listings and strategic pricing"
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/2560px-EBay_logo.svg.png",
      name: "eBay",
      description: "Maximize your reach on eBay with competitive analysis and market-driven strategies"
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Walmart_logo_%282025%3B_Alt%29.svg/1599px-Walmart_logo_%282025%3B_Alt%29.svg.png",
      name: "Walmart",
      description: "Stand out in the handmade and vintage marketplace with unique positioning"
    },
    {
      logo: "https://freepnglogo.com/images/all_img/1714299153tiktok-shop-logo-transparent.png",
      name: "TikTok Shop",
      description: "Leverage the power of social commerce with engaging content and strategic timing"
    }
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const faqs = [
    {
      q: "How can I get started with your agency?",
      a: "Getting started is simple! Contact with us, and our team will reach out to schedule a free consultation to discuss your business goals and how we can help."
    },
    {
      q: "How long does it take to see results?",
      a: "Most clients see significant improvements within 2-3 months of implementing our strategies."
    },
    {
      q: "What platforms do you work with?",
      a: "We specialize in Amazon, eBay, TikTok Shop, and Etsy marketplaces."
    },
    {
      q: "Do you offer customized solutions?",
      a: "Yes, we create tailored strategies based on your specific business needs and goals."
    }
  ];

  if (loading) {
    return (
      <div 
        className="fixed inset-0 flex items-center justify-center"
        style={{ 
          background: 'linear-gradient(to bottom, #010ba7, #010646)' 
        }}
      >
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <ShoppingBag className="w-16 h-16 text-white animate-bounce" />
              <div className="absolute inset-0 bg-blue-20 rounded-full animate-ping opacity-100"></div>
            </div>
          </div>
          <img 
            src="https://res.cloudinary.com/dqqgfwwdb/image/upload/v1737036141/ecomeco_logo1_ktgw3s.png" 
            alt="ECOMECO Logo" 
            className="w-48 h-auto mb-4"
          />
          <div className="flex space-x-2 justify-center">
            <motion.div 
              className="w-3 h-3 bg-white rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1, delay: 0 }}
            />
            <motion.div 
              className="w-3 h-3 bg-white rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
            />
            <motion.div 
              className="w-3 h-3 bg-white rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
            />
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed w-full px-4 sm:px-6 py-4 z-40"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/30 backdrop-blur-sm shadow-sm rounded-full px-4 sm:px-6 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img 
                  src="https://res.cloudinary.com/dqqgfwwdb/image/upload/v1737036141/ecomeco_logo1_ktgw3s.png" 
                  alt="ECOMECO Logo" 
                  className="h-8 sm:h-10 w-auto"
                />
              </div>

              <div className="hidden md:flex items-center justify-center space-x-6">
                <a href="#" className="text-white hover:text-gray-300 transition-colors">Home</a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">About</a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">Services</a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">Contact</a>
              </div>

              <div className="hidden md:block">
                <a 
                  href="https://wa.me/+19295892615"
                  className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  Contact Us
                </a>
              </div>

              <div className="md:hidden">
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden absolute left-4 right-4 mt-4">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="divide-y divide-gray-100">
                  <a href="#" className="block px-6 py-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors">Home</a>
                  <a href="#" className="block px-6 py-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors">About</a>
                  <a href="#" className="block px-6 py-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors">Services</a>
                  <a href="#" className="block px-6 py-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors">Contact</a>
                  <div className="p-4">
                    <a 
                      href="https://wa.me/+19295892615"
                      className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-screen flex items-center bg-gradient-to-r from-blue-900 to-blue-800 text-white pt-16 sm:pt-20"
      >
        <div className="absolute inset-0">
          <img 
            src="https://res.cloudinary.com/dqqgfwwdb/image/upload/v1738184790/pznercrxnfz3zcospaok.jpg"
            alt="Desktop Background" 
            className="hidden md:block w-full h-full object-cover opacity-120"
          />
          <img 
            src="https://res.cloudinary.com/dqqgfwwdb/image/upload/v1738705797/ecommerce-bannermobile_uhmluv.jpg"
            alt="Mobile Background" 
            className="block md:hidden w-full h-full object-cover opacity-120"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/20"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative container mx-auto px-4 sm:px-6 py-4 sm:py-20 -mt-40 md:mt-0"
        >
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block mb-2">E-Commerce</span>
              <span className="block">Elevated</span>
            </h1>
            <p className="text-lg sm:text-xl mb-8 max-w-xl opacity-90 leading-relaxed">
              ECOMECO turns e-commerce stores into revenue machines. With data-driven strategies, high-converting creatives, and proven growth systems, we help you scale consistently, increase profit margins, and win in the online market every day.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://wa.me/+19295892615"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all"
              >
                Start Your Journey
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainerVariants}
        className="py-16 sm:py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              variants={fadeInUpVariants}
              className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12"
            >
              About Us
            </motion.h2>
            <div className="prose prose-lg max-w-none">
              <motion.p 
                variants={fadeInUpVariants}
                className="text-gray-600 mb-6 text-base sm:text-lg"
              >
                Hi there, we are ECOMECO, founded by Fahad Khan and Hammad Khan. We specialize in building and scaling e-commerce businesses on top platforms like Amazon, eBay, TikTok Shop, and Walmart. With expertise in market analysis, product sourcing, branding, and customer engagement, our mission is to simplify and optimize your journey to online success.
              </motion.p>
              <motion.p 
                variants={fadeInUpVariants}
                className="text-gray-600 mb-6 text-base sm:text-lg"
              >
                Whether you're just starting or looking to expand, ECOMECO delivers tailored strategies to drive sales, enhance visibility, and maximize profitability across multiple marketplaces.
              </motion.p>
              <motion.p 
                variants={fadeInUpVariants}
                className="text-gray-600 mb-6 text-base sm:text-lg"
              >
                Our mission at ECOMECO is to foster collaborative partnerships that drive consistent revenue growth and long-term success. We focus on building strong, scalable e-commerce operations tailored to each client's unique goals, allowing them to reach new levels of achievement.
              </motion.p>
              <motion.p 
                variants={fadeInUpVariants}
                className="text-gray-600 text-base sm:text-lg"
              >
                Join us as we continue to impact the e-commerce world, and let's work together to turn your business potential into a profitable reality.
              </motion.p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Platforms Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
              We Are Working On
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Maximize your presence across multiple e-commerce platforms with our expertise
            </p>
           
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="h-full"
                >
                  <PlatformCard {...platform} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>      
      
      {/* Services */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainerVariants}
        className="py-16 sm:py-20"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2 
            variants={fadeInUpVariants}
            className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16"
          >
            Our Services
          </motion.h2>
          <motion.div 
            variants={staggerContainerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <motion.div 
              variants={fadeInUpVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 sm:h-64 mb-6 rounded-lg overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dqqgfwwdb/image/upload/v1738620050/1_new_inytvr.jpg"
                  alt="Ecommerce Store Setup"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ecommerce Store Setup & Management</h3>
              <p className="text-gray-600 text-sm sm:text-base">Complete setup and ongoing management of your online store across multiple platforms.</p>
            </motion.div>

            <motion.div 
              variants={fadeInUpVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 sm:h-64 mb-6 rounded-lg overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dqqgfwwdb/image/upload/v1738619954/2_new_v3on7g.jpg"
                  alt="Product Sourcing"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Product Sourcing & Listing Optimization</h3>
              <p className="text-gray-600 text-sm sm:text-base">Strategic product selection and optimized listings for maximum visibility.</p>
            </motion.div>

            <motion.div 
              variants={fadeInUpVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 sm:h-64 mb-6 rounded-lg overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dqqgfwwdb/image/upload/v1738620153/new_3_zy2idt.jpg"
                  alt="Data-Driven Sales"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Data-Driven Sales & Growth Strategies</h3>
              <p className="text-gray-600 text-sm sm:text-base">Analytics-based strategies to boost your sales and market presence.</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Track Record */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainerVariants}
        className="py-16 sm:py-20 bg-gradient-to-r from-[#010ba7] to-[#010646] text-white"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2 
            variants={fadeInUpVariants}
            className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16"
          >
            Our Track Record
          </motion.h2>
          <motion.div 
            variants={staggerContainerVariants}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <motion.div 
              variants={fadeInUpVariants}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-blue-800/50 p-6 rounded-xl"
            >
              <Globe2 className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6 text-blue-300" />
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Global Presence</h3>
              <p className="text-sm sm:text-base">Successfully managing e-commerce accounts in Australia, USA, UK and Germany</p>
            </motion.div>

            <motion.div 
              variants={fadeInUpVariants}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-blue-800/50 p-6 rounded-xl"
            >
              <BarChart3 className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6 text-blue-300" />
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Proven Results</h3>
              <p className="text-sm sm:text-base">Achieved Millions of Dollars Turnover for the Clients
</p>
            </motion.div>

            <motion.div 
              variants={fadeInUpVariants}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-blue-800/50 p-6 rounded-xl"
            >
              <Building2 className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6 text-blue-300" />
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Extensive Client Base</h3>
              <p className="text-sm sm:text-base">Partnered with multiple individuals and brands across various regions.</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainerVariants}
        className="py-16 sm:py-20 bg-gray-50 overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2 
            variants={fadeInUpVariants}
            className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16"
          >
            Success Stories
          </motion.h2>
          <div className="testimonial-wrapper">
            <div className="testimonial-container">
              <div className="flex testimonial-scroll">
                {/* First set */}
                <div className="flex-none w-full sm:w-1/2 lg:w-1/4 px-4">
                  <div className="bg-white p-6 rounded-xl shadow-lg h-full">
                    <h4 className="font-semibold mb-4">Mujahid Gondal</h4>
                    <p className="text-gray-600 italic text-sm sm:text-base">"Working with ECOMECO has been game-changing for our business. Their expertise in multiple marketplaces helped us expand globally."</p>
                  </div>
                </div>
                <div className="flex-none w-full sm:w-1/2 lg:w-1/4 px-4">
                  <div className="bg-white p-6 rounded-xl shadow-lg h-full">
                    <h4 className="font-semibold mb-4">Harry</h4>
                    <p className="text-gray-600 italic text-sm sm:text-base">"Partnering with ECOMECO transformed our business. Their strategic, data-backed approach and dedicated team helped us achieve 2x growth in online sales within just six months."</p>
                  </div>
                </div>
                <div className="flex-none w-full sm:w-1/2 lg:w-1/4 px-4">
                  <div className="bg-white p-6 rounded-xl shadow-lg h-full">
                    <h4 className="font-semibold mb-4">Muhammad Umer</h4>
                    <p className="text-gray-600 italic text-sm sm:text-base">"The personalized attention we received from ECOMECO was incredible. They understood our unique challenges and provided solutions tailored to our needs."</p>
                  </div>
                </div>
                <div className="flex-none w-full sm:w-1/2 lg:w-1/4 px-4">
                  <div className="bg-white p-6 rounded-xl shadow-lg h-full">
                    <h4 className="font-semibold mb-4">Maaz Ahmad</h4>
                    <p className="text-gray-600 italic text-sm sm:text-base">"ECOMECO transformed our online presence. Their strategic approach and dedication to our success led to a 200% increase in sales."</p>
                  </div>
                </div>

                {/* Duplicate set for seamless loop */}
                <div className="flex-none w-full sm:w-1/2 lg:w-1/4 px-4">
                  <div className="bg-white p-6 rounded-xl shadow-lg h-full">
                    <h4 className="font-semibold mb-4">Mary Williams</h4>
                    <p className="text-gray-600 italic text-sm sm:text-base">"In just a few months, ECOMECO helped us streamline our store, optimize listings, and boost conversions. Their team is sharp, professional, and truly understands e-commerce."</p>
                  </div>
                </div>
                <div className="flex-none w-full sm:w-1/2 lg:w-1/4 px-4">
                  <div className="bg-white p-6 rounded-xl shadow-lg h-full">
                    <h4 className="font-semibold mb-4">David Willey</h4>
                    <p className="text-gray-600 italic text-sm sm:text-base">"The ECOMECO team felt like an extension of our own. From product research to marketing, they handled everything with excellence—and it paid off big time."</p>
                  </div>
                </div>
                <div className="flex-none w-full sm:w-1/2 lg:w-1/4 px-4">
                  <div className="bg-white p-6 rounded-xl shadow-lg h-full">
                    <h4 className="font-semibold mb-4">Mujahid Gondal</h4>
                    <p className="text-gray-600 italic text-sm sm:text-base">"Working with ECOMECO has been game-changing for our business. Their expertise in multiple marketplaces helped us expand globally."</p>
                  </div>
                </div>
                <div className="flex-none w-full sm:w-1/2 lg:w-1/4 px-4">
                  <div className="bg-white p-6 rounded-xl shadow-lg h-full">
                    <h4 className="font-semibold mb-4">Harry</h4>
                    <p className="text-gray-600 italic text-sm sm:text-base">"Partnering with ECOMECO transformed our business. Their strategic, data-backed approach and dedicated team helped us achieve 2x growth in online sales within just six months."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FAQs */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainerVariants}
        className="py-16 sm:py-20"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2 
            variants={fadeInUpVariants}
            className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div 
            variants={staggerContainerVariants}
            className="max-w-3xl mx-auto space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUpVariants}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{faq.q}</h3>
                  {openFaqIndex === index ? (
                    <ChevronDown className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  )}
                </div>
                {openFaqIndex === index && (
                  <p className="mt-4 text-gray-600 text-sm sm:text-base">{faq.a}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-[#010ba7] to-[#010646] text-white py-12"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                <img 
                  src="https://res.cloudinary.com/dqqgfwwdb/image/upload/v1737036141/ecomeco_logo1_ktgw3s.png" 
                  alt="ECOMECO Logo" 
                  className="h-8 sm:h-10" 
                />
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">Office: New Gulgasht Colony, Multan</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <a href="mailto:ecomecoinfo@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                    ecomecoinfo@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  <a href="https://wa.me/19295892615" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                    +1 (929) 589-2615
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/ecomec0" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.tiktok.com/@ecom.eco" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <TikTok className="w-6 h-6" />
                </a>
                <a 
                  href="https://wa.me/+19295892615" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">&copy; 2024 ECOMECO. All rights reserved.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;