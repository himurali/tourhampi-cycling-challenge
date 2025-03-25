
import { useState } from "react";
import { Link } from "react-router-dom";
import { Bike, Award, Mountains, Timer, Users, ArrowRight } from "lucide-react";

const Categories = () => {
  const [activeTab, setActiveTab] = useState("elite");
  
  const categories = {
    elite: {
      title: "Elite",
      distance: "120km",
      elevation: "1500m",
      prize: "₹1,00,000",
      description: "For professional and experienced cyclists. The full route challenges participants with steep climbs, technical descents, and racing through the heart of Hampi's monuments.",
      time: "4-6 hours",
      participants: "Limited to 200 riders"
    },
    amateur: {
      title: "Amateur",
      distance: "80km",
      elevation: "1000m",
      prize: "₹50,000",
      description: "For intermediate cyclists with good fitness levels. This mid-distance route offers a substantial challenge while being accessible to dedicated recreational riders.",
      time: "3-5 hours",
      participants: "Limited to 300 riders"
    },
    open: {
      title: "Open Category",
      distance: "40km",
      elevation: "500m",
      prize: "₹20,000",
      description: "For casual cyclists and beginners. This shorter route provides an introduction to cycling in Hampi with moderate challenges and plenty of scenic views.",
      time: "1.5-3 hours",
      participants: "Limited to 500 riders"
    }
  };

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block py-1 px-3 bg-hampi-orange/10 text-hampi-orange text-sm font-medium rounded-full mb-6">
            Race Categories
          </span>
          
          <h2 className="section-title mb-16">
            Find Your Perfect Challenge
          </h2>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {Object.entries(categories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === key
                    ? "bg-hampi-orange text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
          
          {/* Category Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image side */}
              <div className="h-64 md:h-auto">
                <img
                  src={
                    activeTab === "elite"
                      ? "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1470&auto=format&fit=crop"
                      : activeTab === "amateur"
                      ? "https://images.unsplash.com/photo-1541625810516-44f1ce894bcd?q=80&w=1470&auto=format&fit=crop"
                      : "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1470&auto=format&fit=crop"
                  }
                  alt={categories[activeTab as keyof typeof categories].title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content side */}
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-hampi-dark">
                    {categories[activeTab as keyof typeof categories].title} Category
                  </h3>
                  
                  <p className="text-gray-600 mb-8">
                    {categories[activeTab as keyof typeof categories].description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                      <Bike size={24} className="text-hampi-orange mb-2" />
                      <span className="text-sm text-gray-600">Distance</span>
                      <span className="text-lg font-bold text-hampi-dark">
                        {categories[activeTab as keyof typeof categories].distance}
                      </span>
                    </div>
                    
                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                      <Mountains size={24} className="text-hampi-orange mb-2" />
                      <span className="text-sm text-gray-600">Elevation</span>
                      <span className="text-lg font-bold text-hampi-dark">
                        {categories[activeTab as keyof typeof categories].elevation}
                      </span>
                    </div>
                    
                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                      <Award size={24} className="text-hampi-orange mb-2" />
                      <span className="text-sm text-gray-600">First Prize</span>
                      <span className="text-lg font-bold text-hampi-dark">
                        {categories[activeTab as keyof typeof categories].prize}
                      </span>
                    </div>
                    
                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                      <Timer size={24} className="text-hampi-orange mb-2" />
                      <span className="text-sm text-gray-600">Expected Time</span>
                      <span className="text-lg font-bold text-hampi-dark">
                        {categories[activeTab as keyof typeof categories].time}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-6">
                    <Users size={20} className="text-hampi-orange" />
                    <span className="text-gray-600">
                      {categories[activeTab as keyof typeof categories].participants}
                    </span>
                  </div>
                </div>
                
                <Link to="/register" className="btn-primary self-start">
                  Register Now <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
