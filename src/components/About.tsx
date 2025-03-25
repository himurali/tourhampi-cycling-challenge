
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Users } from "lucide-react";

const About = () => {
  const highlights = [
    "Race through stunning historic landscapes",
    "Compete for ₹5 Lakhs in prizes",
    "Categories for all skill levels",
    "Professional race management with medical support",
    "Refreshment stations throughout the course"
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block py-1 px-3 bg-hampi-orange/10 text-hampi-orange text-sm font-medium rounded-full mb-6">
                About the Event
              </span>
              
              <h2 className="section-title">
                Experience the Magic of Cycling Through Historic Hampi
              </h2>
              
              <p className="text-gray-700 mb-6">
                Welcome to India's premier cycling competition set against the breathtaking UNESCO World Heritage ruins of Vijayanagara. The Tour of Hampi offers an unparalleled challenge, navigating boulder-strewn landscapes, ancient temples, and scenic trails in a test of endurance and skill.
              </p>
              
              <p className="text-gray-700 mb-8">
                Since its inception, the Tour of Hampi has grown to attract elite cyclists from across the globe while remaining accessible to amateurs and enthusiasts who wish to challenge themselves in one of the world's most unique cycling environments.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-hampi-dark">
                Why Participate?
              </h3>
              
              <ul className="space-y-3 mb-8">
                {highlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-hampi-orange shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link to="/categories" className="btn-primary">
                  View Race Categories <ArrowRight size={18} />
                </Link>
                <Link to="/register" className="btn-outline">
                  Register Now <Users size={18} />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              {/* Decorative chain border */}
              <div className="absolute inset-0 border-[12px] border-dashed border-hampi-orange/20 rounded-lg transform -rotate-3"></div>
              
              {/* Main image */}
              <div className="relative transform rotate-3 transition-transform hover:rotate-0 duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=1470&auto=format&fit=crop" 
                  alt="Cyclists racing through historic location" 
                  className="rounded-lg shadow-xl w-full h-[500px] object-cover"
                />
                
                {/* Stats overlay */}
                <div className="absolute -bottom-6 -right-6 bg-white shadow-xl rounded-lg p-5 w-40">
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-600">Race Distance</p>
                    <p className="text-3xl font-bold text-hampi-orange">120km</p>
                  </div>
                </div>
                
                {/* Stats overlay */}
                <div className="absolute -top-6 -left-6 bg-white shadow-xl rounded-lg p-5 w-40">
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-600">Elevation Gain</p>
                    <p className="text-3xl font-bold text-hampi-blue">1500m</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
