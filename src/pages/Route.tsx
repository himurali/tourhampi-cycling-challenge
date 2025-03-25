
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, ChevronRight, MapPin, Calendar, 
  Clock, Download, Info
} from "lucide-react";

const Route = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Page Header */}
      <div className="relative pt-32 pb-20 bg-hampi-blue overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1604913571196-6edaeff8fba0?q=80&w=1374&auto=format&fit=crop')" }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Race Route</h1>
            <p className="text-xl text-white/90">Discover the challenging and scenic route that takes you through the ancient ruins of Hampi.</p>
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
      
      {/* Route Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block py-1 px-3 bg-hampi-orange/10 text-hampi-orange text-sm font-medium rounded-full mb-6">
                  Route Overview
                </span>
                <h2 className="section-title mb-6">
                  Experience the Magic of Cycling Through Historic Hampi
                </h2>
                <p className="text-gray-600 mb-6">
                  The Tour of Hampi route has been carefully designed to showcase the beauty and history of this UNESCO World Heritage site. Cyclists will navigate through boulder-strewn landscapes, ancient temples, and along the scenic Tungabhadra river.
                </p>
                <p className="text-gray-600 mb-8">
                  Each category offers a unique challenge, with the Elite course testing even the most seasoned riders with its technical sections and elevation changes.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <h3 className="font-semibold text-hampi-dark mb-4">Route Highlights:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-hampi-orange shrink-0 mt-1" />
                      <span className="text-gray-700">Start at historic Hampi Bazaar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-hampi-orange shrink-0 mt-1" />
                      <span className="text-gray-700">Pass by Virupaksha Temple and ancient ruins</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-hampi-orange shrink-0 mt-1" />
                      <span className="text-gray-700">Navigate the challenging Hemakuta Hill section</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-hampi-orange shrink-0 mt-1" />
                      <span className="text-gray-700">Finish at the magnificent Vittala Temple Complex</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1600272777003-a1fbd8a903f7?q=80&w=1374&auto=format&fit=crop" 
                  alt="Hampi Landscape with Cyclists" 
                  className="rounded-xl shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Detailed Route Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <span className="inline-block py-1 px-3 bg-hampi-orange/10 text-hampi-orange text-sm font-medium rounded-full mb-6">
              Route Map
            </span>
            <h2 className="section-title mb-6">
              Detailed Course Map
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore the route details for each category. Elevation profiles, water points, and technical sections are marked for your preparation.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
            <div className="relative aspect-[16/9] bg-gray-200">
              {/* This would be replaced with an actual map component in the full implementation */}
              <img 
                src="https://images.unsplash.com/photo-1604913571196-6edaeff8fba0?q=80&w=1374&auto=format&fit=crop" 
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
          
          {/* Route Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Elite Route",
                distance: "120km",
                elevation: "1500m",
                stations: "5 Refreshment Stations",
                difficulty: "Hard",
                description: "The Elite route is designed for experienced cyclists looking for a challenging ride through the full Hampi landscape."
              },
              {
                title: "Amateur Route",
                distance: "80km",
                elevation: "1000m",
                stations: "4 Refreshment Stations",
                difficulty: "Medium",
                description: "A balanced route offering a significant challenge while remaining accessible to dedicated amateur cyclists."
              },
              {
                title: "Open Route",
                distance: "40km",
                elevation: "500m",
                stations: "2 Refreshment Stations",
                difficulty: "Easy to Medium",
                description: "Perfect for recreational cyclists and beginners who want to experience the beauty of Hampi at a more relaxed pace."
              }
            ].map((route, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-48 bg-gray-200">
                  <img 
                    src={`https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=1470&auto=format&fit=crop&h=300&w=500`} 
                    alt={`${route.title}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-hampi-dark">{route.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{route.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="bg-hampi-orange/10 rounded-full p-1.5">
                        <Info size={16} className="text-hampi-orange" />
                      </div>
                      <span className="text-gray-700">{route.distance} Distance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-hampi-orange/10 rounded-full p-1.5">
                        <Info size={16} className="text-hampi-orange" />
                      </div>
                      <span className="text-gray-700">{route.elevation} Elevation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-hampi-orange/10 rounded-full p-1.5">
                        <Info size={16} className="text-hampi-orange" />
                      </div>
                      <span className="text-gray-700">{route.stations}</span>
                    </div>
                  </div>
                  
                  <button className="flex items-center gap-2 text-hampi-orange hover:text-hampi-orange/80 font-medium transition-colors">
                    <Download size={18} />
                    Download GPX File
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Refreshment Stations */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden p-8 mb-12">
              <h3 className="text-2xl font-bold mb-6 text-hampi-dark">Refreshment Stations</h3>
              <p className="text-gray-600 mb-8">
                The Tour of Hampi provides fully stocked refreshment stations along the route. 
                Each station offers water, electrolyte drinks, energy bars, fruits, and medical support if needed.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Station</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Location</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Distance from Start</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Elevation</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Available For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">Station #1</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Virupaksha Temple</td>
                      <td className="px-4 py-3 text-sm text-gray-700">20 km</td>
                      <td className="px-4 py-3 text-sm text-gray-700">350m</td>
                      <td className="px-4 py-3 text-sm text-gray-700">All Categories</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">Station #2</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Hemakuta Hill</td>
                      <td className="px-4 py-3 text-sm text-gray-700">40 km</td>
                      <td className="px-4 py-3 text-sm text-gray-700">550m</td>
                      <td className="px-4 py-3 text-sm text-gray-700">All Categories</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">Station #3</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Tungabhadra Dam</td>
                      <td className="px-4 py-3 text-sm text-gray-700">60 km</td>
                      <td className="px-4 py-3 text-sm text-gray-700">300m</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Elite & Amateur</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">Station #4</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Matanga Hill</td>
                      <td className="px-4 py-3 text-sm text-gray-700">80 km</td>
                      <td className="px-4 py-3 text-sm text-gray-700">650m</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Elite & Amateur</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">Station #5</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Achyutaraya Temple</td>
                      <td className="px-4 py-3 text-sm text-gray-700">100 km</td>
                      <td className="px-4 py-3 text-sm text-gray-700">450m</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Elite Only</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <Link to="/register" className="btn-primary inline-flex">
              Register Now <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Event Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="inline-block py-1 px-3 bg-hampi-orange/10 text-hampi-orange text-sm font-medium rounded-full mb-6">
              Event Schedule
            </span>
            <h2 className="section-title mb-6">
              Race Day Timeline
            </h2>
            <p className="text-gray-600">
              Here's what to expect on race day. Be sure to arrive early to complete all check-in procedures.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-16 top-0 bottom-0 w-1 bg-hampi-orange/20"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {[
                  {
                    time: "5:00 AM",
                    title: "Venue Opens",
                    description: "Registration desk opens for last-minute check-in and bib collection."
                  },
                  {
                    time: "5:45 AM",
                    title: "Bike Check & Staging",
                    description: "Technical checks for all bicycles. Elite riders stage at the start line."
                  },
                  {
                    time: "6:00 AM",
                    title: "Elite Category Start",
                    description: "The 120km Elite category race begins."
                  },
                  {
                    time: "6:30 AM",
                    title: "Amateur Category Start",
                    description: "The 80km Amateur category race begins."
                  },
                  {
                    time: "7:00 AM",
                    title: "Open Category Start",
                    description: "The 40km Open category race begins."
                  },
                  {
                    time: "10:30 AM",
                    title: "First Finishers Expected",
                    description: "First riders from the Open category expected to finish."
                  },
                  {
                    time: "12:00 PM",
                    title: "Prize Ceremony Begins",
                    description: "Award ceremony for all categories at the finish line."
                  }
                ].map((item, index) => (
                  <div key={index} className="relative flex gap-6">
                    <div className="flex-none w-32 text-right">
                      <div className="text-hampi-orange font-semibold">{item.time}</div>
                    </div>
                    
                    <div className="flex-none w-10 h-10 rounded-full bg-white border-2 border-hampi-orange flex items-center justify-center z-10">
                      <Clock size={18} className="text-hampi-orange" />
                    </div>
                    
                    <div className="flex-grow bg-white rounded-xl shadow p-6">
                      <h3 className="text-lg font-semibold mb-2 text-hampi-dark">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Route;
