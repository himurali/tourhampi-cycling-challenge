
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Bike, Award, Mountains, Timer, Users, ArrowRight, CheckCircle } from "lucide-react";

const Categories = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState("all");
  const [activeGender, setActiveGender] = useState("all");
  
  const categories = [
    {
      id: "elite-men",
      title: "Elite Men",
      type: "elite",
      gender: "men",
      distance: "120km",
      elevation: "1500m",
      firstPrize: "₹1,00,000",
      secondPrize: "₹50,000",
      thirdPrize: "₹25,000",
      description: "For professional and experienced male cyclists. The full route challenges participants with steep climbs, technical descents, and racing through the heart of Hampi's monuments.",
      time: "4-6 hours",
      participants: "Limited to 150 riders",
      requirements: [
        "Previous race experience required",
        "Minimum age: 18 years",
        "Road or gravel bike required",
        "Helmet and safety gear mandatory"
      ]
    },
    {
      id: "elite-women",
      title: "Elite Women",
      type: "elite",
      gender: "women",
      distance: "120km",
      elevation: "1500m",
      firstPrize: "₹1,00,000",
      secondPrize: "₹50,000",
      thirdPrize: "₹25,000",
      description: "For professional and experienced female cyclists. The full route challenges participants with steep climbs, technical descents, and racing through the heart of Hampi's monuments.",
      time: "4-6 hours",
      participants: "Limited to 150 riders",
      requirements: [
        "Previous race experience required",
        "Minimum age: 18 years",
        "Road or gravel bike required",
        "Helmet and safety gear mandatory"
      ]
    },
    {
      id: "amateur-men",
      title: "Amateur Men",
      type: "amateur",
      gender: "men",
      distance: "80km",
      elevation: "1000m",
      firstPrize: "₹50,000",
      secondPrize: "₹25,000",
      thirdPrize: "₹10,000",
      description: "For intermediate male cyclists with good fitness levels. This mid-distance route offers a substantial challenge while being accessible to dedicated recreational riders.",
      time: "3-5 hours",
      participants: "Limited to 200 riders",
      requirements: [
        "Some cycling experience recommended",
        "Minimum age: 16 years",
        "Any bicycle in good working condition",
        "Helmet and safety gear mandatory"
      ]
    },
    {
      id: "amateur-women",
      title: "Amateur Women",
      type: "amateur",
      gender: "women",
      distance: "80km",
      elevation: "1000m",
      firstPrize: "₹50,000",
      secondPrize: "₹25,000",
      thirdPrize: "₹10,000",
      description: "For intermediate female cyclists with good fitness levels. This mid-distance route offers a substantial challenge while being accessible to dedicated recreational riders.",
      time: "3-5 hours",
      participants: "Limited to 200 riders",
      requirements: [
        "Some cycling experience recommended",
        "Minimum age: 16 years",
        "Any bicycle in good working condition",
        "Helmet and safety gear mandatory"
      ]
    },
    {
      id: "open-men",
      title: "Open Category Men",
      type: "open",
      gender: "men",
      distance: "40km",
      elevation: "500m",
      firstPrize: "₹20,000",
      secondPrize: "₹10,000",
      thirdPrize: "₹5,000",
      description: "For casual male cyclists and beginners. This shorter route provides an introduction to cycling in Hampi with moderate challenges and plenty of scenic views.",
      time: "1.5-3 hours",
      participants: "Limited to 250 riders",
      requirements: [
        "No prior experience necessary",
        "Minimum age: 14 years",
        "Any bicycle in good working condition",
        "Helmet and safety gear mandatory"
      ]
    },
    {
      id: "open-women",
      title: "Open Category Women",
      type: "open",
      gender: "women",
      distance: "40km",
      elevation: "500m",
      firstPrize: "₹20,000",
      secondPrize: "₹10,000",
      thirdPrize: "₹5,000",
      description: "For casual female cyclists and beginners. This shorter route provides an introduction to cycling in Hampi with moderate challenges and plenty of scenic views.",
      time: "1.5-3 hours",
      participants: "Limited to 250 riders",
      requirements: [
        "No prior experience necessary",
        "Minimum age: 14 years",
        "Any bicycle in good working condition",
        "Helmet and safety gear mandatory"
      ]
    }
  ];

  const filteredCategories = categories.filter(category => {
    if (activeTab !== "all" && category.type !== activeTab) return false;
    if (activeGender !== "all" && category.gender !== activeGender) return false;
    return true;
  });

  return (
    <>
      {/* Page Header */}
      <div className="relative pt-32 pb-20 bg-hampi-blue overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1470&auto=format&fit=crop')" }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Race Categories</h1>
            <p className="text-xl text-white/90">Find the perfect challenge that matches your skill level and ambition.</p>
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
            {/* Filters */}
            <div className="mb-12 bg-gray-50 p-6 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-4 text-gray-700">Filter by Category</h3>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setActiveTab("all")}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        activeTab === "all"
                          ? "bg-hampi-orange text-white"
                          : "bg-white text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      All Categories
                    </button>
                    <button
                      onClick={() => setActiveTab("elite")}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        activeTab === "elite"
                          ? "bg-hampi-orange text-white"
                          : "bg-white text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      Elite
                    </button>
                    <button
                      onClick={() => setActiveTab("amateur")}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        activeTab === "amateur"
                          ? "bg-hampi-orange text-white"
                          : "bg-white text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      Amateur
                    </button>
                    <button
                      onClick={() => setActiveTab("open")}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        activeTab === "open"
                          ? "bg-hampi-orange text-white"
                          : "bg-white text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      Open
                    </button>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4 text-gray-700">Filter by Gender</h3>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setActiveGender("all")}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        activeGender === "all"
                          ? "bg-hampi-blue text-white"
                          : "bg-white text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      All Genders
                    </button>
                    <button
                      onClick={() => setActiveGender("men")}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        activeGender === "men"
                          ? "bg-hampi-blue text-white"
                          : "bg-white text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      Men
                    </button>
                    <button
                      onClick={() => setActiveGender("women")}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        activeGender === "women"
                          ? "bg-hampi-blue text-white"
                          : "bg-white text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      Women
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Category Cards */}
            <div className="grid grid-cols-1 gap-8 mb-12">
              {filteredCategories.map((category) => (
                <div 
                  key={category.id} 
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="md:col-span-1 bg-gray-100">
                      <img 
                        src={
                          category.gender === "men"
                            ? "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=1470&auto=format&fit=crop"
                            : "https://images.unsplash.com/photo-1557330359-ffb0deed6163?q=80&w=1470&auto=format&fit=crop"
                        }
                        alt={`${category.title} cyclists`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="md:col-span-2 p-6 md:p-8">
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-hampi-dark">{category.title}</h3>
                        <span className={`py-1 px-3 rounded-full text-sm font-medium ${
                          category.type === "elite" 
                            ? "bg-hampi-orange/10 text-hampi-orange" 
                            : category.type === "amateur"
                            ? "bg-hampi-blue/10 text-hampi-blue"
                            : "bg-green-100 text-green-800"
                        }`}>
                          {category.type === "elite" 
                            ? "Elite Category" 
                            : category.type === "amateur"
                            ? "Amateur Category"
                            : "Open Category"
                          }
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-6">
                        {category.description}
                      </p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                          <Bike size={20} className="text-hampi-orange mb-1" />
                          <span className="text-xs text-gray-500">Distance</span>
                          <span className="text-sm font-bold text-hampi-dark">
                            {category.distance}
                          </span>
                        </div>
                        
                        <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                          <Mountains size={20} className="text-hampi-orange mb-1" />
                          <span className="text-xs text-gray-500">Elevation</span>
                          <span className="text-sm font-bold text-hampi-dark">
                            {category.elevation}
                          </span>
                        </div>
                        
                        <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                          <Award size={20} className="text-hampi-orange mb-1" />
                          <span className="text-xs text-gray-500">First Prize</span>
                          <span className="text-sm font-bold text-hampi-dark">
                            {category.firstPrize}
                          </span>
                        </div>
                        
                        <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                          <Timer size={20} className="text-hampi-orange mb-1" />
                          <span className="text-xs text-gray-500">Avg. Time</span>
                          <span className="text-sm font-bold text-hampi-dark">
                            {category.time}
                          </span>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-hampi-dark">Requirements:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                          {category.requirements.map((req, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle size={16} className="text-hampi-orange shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-600">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center gap-2">
                          <Users size={18} className="text-hampi-orange" />
                          <span className="text-sm text-gray-600">
                            {category.participants}
                          </span>
                        </div>
                        
                        <Link 
                          to="/register" 
                          className={`btn-primary py-2 px-4 text-sm ${
                            category.type === "elite" 
                              ? "bg-hampi-orange" 
                              : category.type === "amateur"
                              ? "bg-hampi-blue"
                              : "bg-green-600"
                          }`}
                        >
                          Register Now <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredCategories.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">No categories match your current filters.</p>
                <button
                  onClick={() => {setActiveTab("all"); setActiveGender("all");}}
                  className="btn-outline"
                >
                  Reset Filters
                </button>
              </div>
            )}
            
            {/* Additional Info */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-hampi-dark">Important Information for Participants</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-hampi-dark">Equipment Requirements</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-hampi-orange shrink-0 mt-1" />
                      <span className="text-gray-600">Certified helmet (mandatory for all categories)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-hampi-orange shrink-0 mt-1" />
                      <span className="text-gray-600">Bicycle in good working condition</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-hampi-orange shrink-0 mt-1" />
                      <span className="text-gray-600">Spare inner tube and basic repair kit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-hampi-orange shrink-0 mt-1" />
                      <span className="text-gray-600">Water bottles or hydration system</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-hampi-dark">Race Timing & Support</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-hampi-orange shrink-0 mt-1" />
                      <span className="text-gray-600">Professional electronic timing for all categories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-hampi-orange shrink-0 mt-1" />
                      <span className="text-gray-600">Medical support stationed throughout the route</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-hampi-orange shrink-0 mt-1" />
                      <span className="text-gray-600">Mechanical support at designated points</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-hampi-orange shrink-0 mt-1" />
                      <span className="text-gray-600">Refreshment stations with water, energy drinks, and snacks</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
