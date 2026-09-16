// HeroSection.tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight, Users, Globe, HandHeart } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Import your hero images
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/20.jpg";
import img3 from "@/assets/3.jpg";
import img5 from "@/assets/5.jpg";
import img4 from "@/assets/21.jpg";
import img7 from "@/assets/7.jpg";
import img6 from "@/assets/19.jpg";

const HERO_IMAGES = [img1, img2, img3, img4, img5, img6, img7];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  const statVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
    hover: {
      y: -5,
      transition: { duration: 0.3 },
    },
  };

  const dotVariants = {
    inactive: { scale: 1, opacity: 0.5 },
    active: {
      scale: 1.2,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.section 
      className="relative min-h-[90vh] flex items-center overflow-hidden transition-all duration-1000 ease-in-out bg-fixed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ 
        backgroundImage: `url(${HERO_IMAGES[currentImageIndex]})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center'
      }}
    >
      {/* Dark overlay for better text readability - Made darker to match About page (bg-black/65) */}
      <motion.div
        className="absolute inset-0 bg-black/65"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content */}
          <div className="space-y-8 max-w-3xl">
            {/* <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 my-5 bg-primary/20 backdrop-blur-sm rounded-full text-white text-sm font-medium"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                <Heart className="w-4 h-4 fill-white/20" />
              </motion.div>
              <span>Africa Restoring Bridges Initiative</span>
            </motion.div> */}

            <motion.h1
              className="text-3xl md:text-3xl lg:text-3xl font-serif font-bold text-white leading-tight"
              variants={itemVariants}
            >
              Touching Lives, Transforming Communities 
            </motion.h1>

            <motion.p className="text-xl text-white/90 italic" variants={itemVariants}>
              "You will be called Repairer of Broken Walls, Restorer of Streets with Dwellings." 
          <b>  Isaiah 58:12</b>
            </motion.p>

            <motion.p
              className="text-lg text-white/90 leading-relaxed"
              variants={itemVariants}
            >
             <h1 className="text-center text-4xl font-family-[serif] font-bold">Impacting <span className="text-red-600 font-bold">Hearts</span> — <span className="text-primary font-bold">Heads</span> — <span className="text-orange-300 font-bold">Hands</span>.</h1> 
              <br />
              Fostering integral transformation across communities in the
               Democratic Republic of the Congo and other violence-affected regions of Africa. <br />
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 justify-center" variants={itemVariants}>
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link to="/donate">
                  <Button size="xl" className="shadow-lg">
                    Donate Us
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link to="/about#history">
                  <Button variant="hero-outline" size="xl" className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20">
                    Learn More About Us
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Quick stats - ARBI specific */}
            <motion.div className="flex flex-wrap gap-8 pt-4 justify-center" variants={containerVariants}>
              {[
                { icon: Users, label: "People Empowered", value: "3,950+" },
                { icon: Globe, label: "Regions in North Kivu", value: "4+" },
                { icon: HandHeart, label: "Partner Organizations", value: "6+" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-3 bg-black/30 backdrop-blur-sm rounded-xl p-3"
                  variants={statVariants}
                  whileHover="hover"
                  custom={idx}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-white/80">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Slideshow indicator dots */}
      <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
        {HERO_IMAGES.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className="rounded-full transition-all"
            variants={dotVariants}
            animate={index === currentImageIndex ? "active" : "inactive"}
            style={{
              backgroundColor: index === currentImageIndex ? "hsl(var(--primary))" : "rgba(255, 255, 255, 0.5)",
              width: index === currentImageIndex ? 32 : 8,
              height: 8,
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
