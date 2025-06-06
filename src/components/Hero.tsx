
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Calendar, Award } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/90">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('/lovable-uploads/1de783c8-8821-485d-8b76-f730225b5a29.png')",
            filter: "brightness(0.9)"
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[80vh]">
          {/* Left Column: Logo and Animation */}
          <div className="relative flex items-center justify-center h-[400px] md:h-[600px]">
            {/* Chain ring animation behind the logo */}
            <div className="absolute z-10 w-[300px] h-[300px] md:w-[400px] md:h-[400px] opacity-20 pointer-events-none">
              <div className="relative w-full h-full">
                <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow">
                  <circle cx="100" cy="100" r="90" fill="none" stroke="black" strokeWidth="4" strokeDasharray="5,5" />
                  {/* Create chain links around the circle */}
                  {Array.from({ length: 20 }).map((_, i) => {
                    const angle = (i * 18) * Math.PI / 180;
                    const x = 100 + 90 * Math.cos(angle);
                    const y = 100 + 90 * Math.sin(angle);
                    return <circle key={i} cx={x} cy={y} r="5" fill="black" />;
                  })}
                </svg>
              </div>
            </div>

            {/* Logo displayed prominently */}
            <div className="relative z-20 w-[220px] h-[220px] md:w-[300px] md:h-[300px] animate-bounce-in">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center p-3">
                  <img 
                    src="/lovable-uploads/58f1b9e8-bad7-4091-beca-dce1e05d6c80.png" 
                    alt="Tour of Hampi Logo" 
                    className="w-full h-auto opacity-100" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <AnimateOnScroll animation="slide-in-right">
              <span className="inline-block py-1 px-3 bg-hampi-orange text-white text-sm font-medium rounded-full mb-6">
                August 14-16, 2025
              </span>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="slide-in-right" delay={200}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-hampi-orange leading-tight">
                Tour of Hampi
              </h1>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="slide-in-right" delay={400}>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-hampi-dark/80 mt-4 mb-6">
                Experience the ultimate cycling challenge amidst the ancient ruins of Hampi
              </h2>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="fade-in" delay={600}>
              <div className="flex flex-wrap gap-6 mt-2 mb-10 justify-center md:justify-start">
                <div className="flex items-center gap-2 text-hampi-dark">
                  <Award className="text-hampi-orange" size={24} />
                  <span>₹5,00,000 Prize Pool</span>
                </div>
                <div className="flex items-center gap-2 text-hampi-dark">
                  <Calendar className="text-hampi-orange" size={24} />
                  <span>August 14-16, 2025</span>
                </div>
                <div className="flex items-center gap-2 text-hampi-dark">
                  <MapPin className="text-hampi-orange" size={24} />
                  <span>Hampi, Karnataka</span>
                </div>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="slide-in-up" delay={800}>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link to="/register" className="btn-primary">
                  Register Now <ArrowRight size={18} />
                </Link>
                <Link to="/route" className="btn-outline">
                  View Race Route <MapPin size={18} />
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,56C1248,48,1344,32,1392,24L1440,16L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
