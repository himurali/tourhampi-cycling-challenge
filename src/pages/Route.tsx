
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Download, Mountains, ArrowRight, Clock, Drop } from "lucide-react";

const Route = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const routeHighlights = [
    {
      title: "Hampi Bazaar",
      description: "Starting point with ancient market structures",
      type: "landmark",
      km: "0"
    },
    {
      title: "Virupaksha Temple",
      description: "Ancient temple with stunning architecture",
      type: "landmark",
      km: "2"
    },
    {
      title: "Hemakuta Hill",
      description: "First challenging climb with ancient ruins",
      type: "climb",
      elevation: "+120m",
      km: "5"
    },
    {
      title: "Refreshment Station #1",
      description: "Water, energy drinks, and light snacks",
      type: "station",
      km: "15"
    },
    {
      title: "Tungabhadra Riverside",
      description: "Scenic flat section along the river",
      type: "section",
      km: "25-40"
    },
    {
      title: "Anjanadri Hill",
      description: "Challenging climb with beautiful vistas",
      type: "climb",
      elevation: "+200m",
      km: "45"
    },
    {
      title: "Refreshment Station #2",
      description: "Full refreshment with medical support",
      type: "station",
      km: "50"
    },
    {
      title: "Boulder Gardens",
      description: "Technical section through famous boulder fields",
      type: "section",
      km: "60-75"
    },
    {
      title: "Queen's Bath",
      description: "Historic monument and recovery point",
      type: "landmark",
      km: "80"
    },
    {
      title: "Refreshment Station #3",
      description: "Final energy boost before the finish",
      type: "station",
      km: "100"
    },
    {
      title: "Temple Ridge",
      description: "Final challenging climb",
      type: "climb",
      elevation: "+150m",
      km: "110"
    },
    {
      title: "Vittala Temple",
      description: "Finish line at the iconic stone chariot",
      type: "landmark",
      km: "120"
    }
  ];

  return (
    <>
      {/* Page Header */}
      <div className="relative pt-32 pb-20 bg-hampi-blue overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?q=80&w=1631&auto=format&fit=crop')" }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Race Route</h1>
            <p className="text-xl text-white/90">Journey through the historic landscape of Hampi with challenging terrain and breathtaking views.</p>
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
      </div>
      
      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Map Section */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
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
                <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-hampi-orange text-white rounded-full p-2 shadow-lg">
                    <MapPin size={24} />
                  </div>
                  <div className="bg-white text-hampi-dark font-medium px-3 py-1 rounded-lg shadow-lg mt-2">
                    Start: Hampi Bazaar
                  </div>
                </div>
                
                {/* Finish point marker */}
                <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2">
                  <div className="bg-hampi-blue text-white rounded-full p-2 shadow-lg">
                    <MapPin size={24} />
                  </div>
                  <div className="bg-white text-hampi-dark font-medium px-3 py-1 rounded-lg shadow-lg mt-2">
                    Finish: Vittala Temple
                  </div>
                </div>
              </div>
            </div>
            
            {/* Route Overview */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-hampi-dark">Route Overview</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Bike size={24} className="text-hampi-orange" />
                    <h3 className="text-xl font-semibold text-hampi-dark">Elite Route</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-hampi-orange rounded-full"></span>
                      <span className="text-gray-600">120km Distance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-hampi-orange rounded-full"></span>
                      <span className="text-gray-600">1500m Elevation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-hampi-orange rounded-full"></span>
                      <span className="text-gray-600">5 Refreshment Stations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-hampi-orange rounded-full"></span>
                      <span className="text-gray-600">3 Major Climbs</span>
                    </li>
                  </ul>
                  <button className="mt-6 flex items-center gap-2 text-hampi-orange hover:text-hampi-orange/80 font-medium transition-colors">
                    <Download size={18} />
                    Download GPX File
                  </button>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Bike size={24} className="text-hampi-blue" />
                    <h3 className="text-xl font-semibold text-hampi-dark">Amateur Route</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-hampi-blue rounded-full"></span>
                      <span className="text-gray-600">80km Distance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-hampi-blue rounded-full"></span>
                      <span className="text-gray-600">1000m Elevation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-hampi-blue rounded-full"></span>
                      <span className="text-gray-600">4 Refreshment Stations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-hampi-blue rounded-full"></span>
                      <span className="text-gray-600">2 Major Climbs</span>
                    </li>
                  </ul>
                  <button className="mt-6 flex items-center gap-2 text-hampi-blue hover:text-hampi-blue/80 font-medium transition-colors">
                    <Download size={18} />
                    Download GPX File
                  </button>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Bike size={24} className="text-green-600" />
                    <h3 className="text-xl font-semibold text-hampi-dark">Open Route</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-green-600 rounded-full"></span>
                      <span className="text-gray-600">40km Distance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-green-600 rounded-full"></span>
                      <span className="text-gray-600">500m Elevation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-green-600 rounded-full"></span>
                      <span className="text-gray-600">2 Refreshment Stations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-green-600 rounded-full"></span>
                      <span className="text-gray-600">1 Major Climb</span>
                    </li>
                  </ul>
                  <button className="mt-6 flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors">
                    <Download size={18} />
                    Download GPX File
                  </button>
                </div>
              </div>
            </div>
            
            {/* Elevation Profile */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-hampi-dark">Elevation Profile</h2>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center px-4">
                    <p className="text-lg font-semibold mb-2 text-hampi-dark">Elevation Chart Coming Soon</p>
                    <p className="text-gray-600">Our detailed elevation profile is being finalized.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                    <Mountains size={24} className="text-hampi-orange mb-2" />
                    <span className="text-sm text-gray-600">Total Elevation Gain</span>
                    <span className="text-2xl font-bold text-hampi-dark">1500m</span>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                    <Clock size={24} className="text-hampi-orange mb-2" />
                    <span className="text-sm text-gray-600">Steepest Grade</span>
                    <span className="text-2xl font-bold text-hampi-dark">12%</span>
                  </div>
                  
                  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                    <Drop size={24} className="text-hampi-orange mb-2" />
                    <span className="text-sm text-gray-600">Technical Difficulty</span>
                    <span className="text-2xl font-bold text-hampi-dark">Moderate</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Route Highlights */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-hampi-dark">Route Highlights</h2>
              
              <div className="relative">
                {/* Route line */}
                <div className="absolute left-4 top-8 bottom-8 w-1 bg-gray-200 md:left-1/2 md:-ml-0.5"></div>
                
                <div className="space-y-12">
                  {routeHighlights.map((highlight, index) => (
                    <div key={index} className="relative">
                      <div className={`flex items-center justify-center w-8 h-8 rounded-full absolute left-0 mt-1 md:left-1/2 md:-ml-4 z-10 ${
                        highlight.type === "landmark" ? "bg-hampi-orange" : 
                        highlight.type === "climb" ? "bg-hampi-blue" :
                        highlight.type === "station" ? "bg-green-500" : "bg-gray-400"
                      }`}>
                        {highlight.type === "landmark" && <MapPin size={16} className="text-white" />}
                        {highlight.type === "climb" && <Mountains size={16} className="text-white" />}
                        {highlight.type === "station" && <Drop size={16} className="text-white" />}
                        {highlight.type === "section" && <div className="w-2 h-2 bg-white rounded-full"></div>}
                      </div>
                      
                      <div className={`md:grid md:grid-cols-2 md:gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                        <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                          <h3 className="text-lg font-semibold text-hampi-dark">{highlight.title}</h3>
                          <p className="text-gray-600">{highlight.description}</p>
                          {highlight.type === "climb" && (
                            <span className="inline-block mt-1 text-sm font-medium text-hampi-blue">
                              Elevation: {highlight.elevation}
                            </span>
                          )}
                        </div>
                        
                        <div className={`hidden md:block ${index % 2 === 0 ? "md:pl-12" : "md:text-right md:pr-12"}`}>
                          <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-gray-600 text-sm">
                            {highlight.km} km
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4 text-hampi-dark">Ready to Experience This Amazing Route?</h3>
              <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
                Join hundreds of cyclists from around the world in this unique cycling challenge through the historic landscape of Hampi.
              </p>
              <Link to="/register" className="btn-primary inline-flex">
                Register Now <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Route;
