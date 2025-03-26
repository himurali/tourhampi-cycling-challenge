
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Users, MapPin, Calendar, Award } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const About = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const highlights = [
    "Race through stunning historic landscapes",
    "Compete for ₹5 Lakhs in prizes",
    "Categories for all skill levels",
    "Professional race management with medical support",
    "Refreshment stations throughout the course",
    "Finisher medals for all participants",
    "Post-race celebration with local cuisine",
    "Event photography and video coverage"
  ];

  return (
    <>
      {/* Page Header */}
      <div className="relative pt-32 pb-20 bg-hampi-orange overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533105045747-b9d71a0ab278?q=80&w=1470&auto=format&fit=crop')" }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimateOnScroll animation="fade-in">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About the Event</h1>
              <p className="text-xl text-white/90">Experience the magic of cycling through the UNESCO World Heritage site of Hampi, where ancient history meets competitive cycling.</p>
            </div>
          </AnimateOnScroll>
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
      </div>
      
      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimateOnScroll animation="slide-in">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-hampi-dark">
                    The Premier Cycling Event in India
                  </h2>
                  
                  <p className="text-gray-700 mb-6">
                    The Tour of Hampi is India's premier cycling competition set against the breathtaking UNESCO World Heritage ruins of Vijayanagara. Since its inception, the event has grown to attract elite cyclists from across the globe while remaining accessible to amateurs and enthusiasts who wish to challenge themselves in one of the world's most unique cycling environments.
                  </p>
                  
                  <p className="text-gray-700 mb-6">
                    Organized with meticulous attention to detail, the Tour of Hampi offers participants a once-in-a-lifetime opportunity to navigate boulder-strewn landscapes, ancient temples, and scenic trails in a test of endurance and skill. Our professional race management ensures a safe, fair, and unforgettable experience for all participants.
                  </p>
                  
                  <p className="text-gray-700 mb-8">
                    The event is more than just a race – it's a celebration of cycling culture, historic preservation, and community engagement. Local businesses, cultural organizations, and cycling enthusiasts come together to create an atmosphere of camaraderie and shared passion.
                  </p>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="fade-in" delay={200}>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1564751870768-4cb3f98cc451?q=80&w=1374&auto=format&fit=crop"
                    alt="Hampi ruins and landscape"
                    className="rounded-lg shadow-xl w-full h-auto"
                  />
                </div>
              </AnimateOnScroll>
            </div>
            
            {/* Event Details */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimateOnScroll animation="scale-in" delay={100}>
                <div className="bg-gray-50 rounded-xl p-8 text-center">
                  <Award className="mx-auto text-hampi-orange mb-4" size={40} />
                  <h3 className="text-xl font-bold mb-2 text-hampi-dark">₹5,00,000 Prize Pool</h3>
                  <p className="text-gray-600">Compete for substantial prizes across all categories, with special awards for different age groups and achievements.</p>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="scale-in" delay={200}>
                <div className="bg-gray-50 rounded-xl p-8 text-center">
                  <Calendar className="mx-auto text-hampi-orange mb-4" size={40} />
                  <h3 className="text-xl font-bold mb-2 text-hampi-dark">November 15, 2023</h3>
                  <p className="text-gray-600">Mark your calendar for the perfect season to cycle in Hampi, with ideal weather conditions and clear skies.</p>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="scale-in" delay={300}>
                <div className="bg-gray-50 rounded-xl p-8 text-center">
                  <MapPin className="mx-auto text-hampi-orange mb-4" size={40} />
                  <h3 className="text-xl font-bold mb-2 text-hampi-dark">Hampi, Karnataka</h3>
                  <p className="text-gray-600">Experience the unique landscape of Hampi, with its ancient ruins, boulder-strewn terrain, and beautiful river views.</p>
                </div>
              </AnimateOnScroll>
            </div>
            
            {/* Why Participate */}
            <AnimateOnScroll animation="fade-in" delay={100}>
              <div className="mt-20">
                <h2 className="text-3xl font-bold mb-8 text-hampi-dark">
                  Why Participate?
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
                  {highlights.map((item, index) => (
                    <AnimateOnScroll key={index} animation="fade-in" delay={100 + index * 50}>
                      <div className="flex items-start gap-3">
                        <CheckCircle size={24} className="text-hampi-orange shrink-0 mt-1" />
                        <div>
                          <span className="text-gray-700 text-lg">{item}</span>
                        </div>
                      </div>
                    </AnimateOnScroll>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-12">
                  <Link to="/categories" className="btn-primary">
                    View Race Categories <ArrowRight size={18} />
                  </Link>
                  <Link to="/register" className="btn-outline">
                    Register Now <Users size={18} />
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
