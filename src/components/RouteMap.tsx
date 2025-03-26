
import { Link } from "react-router-dom";
import { MapPin, Download, ArrowRight } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const RouteMap = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto text-center">
          <AnimateOnScroll animation="slide-in-up">
            <span className="inline-block py-1 px-3 bg-hampi-orange/10 text-hampi-orange text-sm font-medium rounded-full mb-6">
              Route Information
            </span>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="slide-in-up" delay={200}>
            <h2 className="section-title mb-6">
              Journey Through Historic Hampi
            </h2>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-in" delay={300}>
            <p className="text-gray-600 max-w-3xl mx-auto mb-16">
              The race route takes you through the most scenic parts of Hampi, including ancient temples, 
              boulder-strewn landscapes, and the beautiful Tungabhadra riverbank.
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="scale-in" delay={400}>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16 hover:shadow-2xl transition-shadow duration-300">
              <div className="relative aspect-[16/9] bg-gray-200">
                {/* This would be replaced with an actual map component in the full implementation */}
                <img 
                  src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?q=80&w=1631&auto=format&fit=crop" 
                  alt="Race Route Map" 
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-hampi-dark/30 flex items-center justify-center">
                  <div className="text-white text-center px-4">
                    <p className="text-xl font-semibold mb-4">Interactive Map Coming Soon</p>
                    <p>Our detailed interactive map is being finalized. Check back soon for elevation profiles and key landmarks!</p>
                  </div>
                </div>
                
                {/* Start point marker */}
                <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 animate-bounce-in" style={{ animationDelay: "0.6s" }}>
                  <div className="bg-hampi-orange text-white rounded-full p-2 shadow-lg">
                    <MapPin size={24} />
                  </div>
                  <div className="bg-white text-hampi-dark font-medium px-3 py-1 rounded-lg shadow-lg mt-2">
                    Start: Hampi Bazaar
                  </div>
                </div>
                
                {/* Finish point marker */}
                <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 animate-bounce-in" style={{ animationDelay: "0.8s" }}>
                  <div className="bg-hampi-blue text-white rounded-full p-2 shadow-lg">
                    <MapPin size={24} />
                  </div>
                  <div className="bg-white text-hampi-dark font-medium px-3 py-1 rounded-lg shadow-lg mt-2">
                    Finish: Vittala Temple
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Route Cards */}
            {["Elite", "Amateur", "Open"].map((category, index) => (
              <AnimateOnScroll animation="slide-in-up" delay={600 + index * 200} key={index}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="h-40 bg-gray-200 overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=1470&auto=format&fit=crop&h=300&w=500`} 
                      alt={`${category} Route`} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-hampi-dark">{category} Route</h3>
                    
                    <ul className="space-y-2 mb-6 text-left">
                      <li className="flex items-center gap-2">
                        <span className="h-2 w-2 bg-hampi-orange rounded-full"></span>
                        <span className="text-gray-600">
                          {index === 0 ? "120km Distance" : index === 1 ? "80km Distance" : "40km Distance"}
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-2 w-2 bg-hampi-orange rounded-full"></span>
                        <span className="text-gray-600">
                          {index === 0 ? "1500m Elevation" : index === 1 ? "1000m Elevation" : "500m Elevation"}
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-2 w-2 bg-hampi-orange rounded-full"></span>
                        <span className="text-gray-600">
                          {index === 0 ? "5 Refreshment Stations" : index === 1 ? "4 Refreshment Stations" : "2 Refreshment Stations"}
                        </span>
                      </li>
                    </ul>
                    
                    <button className="flex items-center gap-2 text-hampi-orange hover:text-hampi-orange/80 font-medium transition-colors">
                      <Download size={18} />
                      Download GPX File
                    </button>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          
          <AnimateOnScroll animation="bounce-in" delay={1200}>
            <Link to="/register" className="btn-primary inline-flex">
              Register Now <ArrowRight size={18} />
            </Link>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default RouteMap;
