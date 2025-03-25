
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Calendar, Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-hampi-dark/50 to-hampi-dark/80">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=2070&auto=format&fit=crop')",
            filter: "blur(3px) brightness(0.8)"
          }}
        ></div>
      </div>

      {/* Chain ring animation */}
      <div className="absolute right-[-10%] md:right-[-5%] top-[20%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow">
          <circle cx="100" cy="100" r="90" fill="none" stroke="white" strokeWidth="4" strokeDasharray="5,5" />
          {/* Create chain links around the circle */}
          {Array.from({ length: 20 }).map((_, i) => {
            const angle = (i * 18) * Math.PI / 180;
            const x = 100 + 90 * Math.cos(angle);
            const y = 100 + 90 * Math.sin(angle);
            return <circle key={i} cx={x} cy={y} r="5" fill="white" />;
          })}
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-10 relative z-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-4xl mx-auto md:mx-0">
          <span className="inline-block py-1 px-3 bg-hampi-orange text-white text-sm font-medium rounded-full mb-6 animate-fade-in">
            November 15, 2023
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Tour of Hampi
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-white/80 mt-4 mb-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Experience the ultimate cycling challenge amidst the ancient ruins of Hampi
          </h2>
          
          <div className="flex flex-wrap gap-6 mt-2 mb-10 justify-center md:justify-start animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center gap-2 text-white">
              <Award className="text-hampi-orange" size={24} />
              <span>₹5,00,000 Prize Pool</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Calendar className="text-hampi-orange" size={24} />
              <span>November 15, 2023</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <MapPin className="text-hampi-orange" size={24} />
              <span>Hampi, Karnataka</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-6 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Link to="/register" className="btn-primary">
              Register Now <ArrowRight size={18} />
            </Link>
            <Link to="/route" className="btn-outline">
              View Race Route <MapPin size={18} />
            </Link>
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
