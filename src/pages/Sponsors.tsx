import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const Sponsors = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const titleSponsors = [
    {
      name: "CycleLife India",
      logo: "https://placehold.co/200x80/F5F7F8/1A1A1A?text=CycleLife+India",
      description: "India's premier bicycle manufacturing company, committed to quality and innovation.",
      website: "#"
    }
  ];

  const goldSponsors = [
    {
      name: "Adventure Tours",
      logo: "https://placehold.co/180x70/F5F7F8/1A1A1A?text=Adventure+Tours",
      description: "Specializing in cycling trips and adventure tourism across India.",
      website: "#"
    },
    {
      name: "Endurance Sports",
      logo: "https://placehold.co/180x70/F5F7F8/1A1A1A?text=Endurance+Sports",
      description: "Leading sports nutrition and recovery products for endurance athletes.",
      website: "#"
    }
  ];

  const silverSponsors = [
    {
      name: "BikeGear Pro",
      logo: "https://placehold.co/150x60/F5F7F8/1A1A1A?text=BikeGear+Pro",
      website: "#"
    },
    {
      name: "CycleHub",
      logo: "https://placehold.co/150x60/F5F7F8/1A1A1A?text=CycleHub",
      website: "#"
    },
    {
      name: "Velocity Wheels",
      logo: "https://placehold.co/150x60/F5F7F8/1A1A1A?text=Velocity+Wheels",
      website: "#"
    },
    {
      name: "Trail Blazers",
      logo: "https://placehold.co/150x60/F5F7F8/1A1A1A?text=Trail+Blazers",
      website: "#"
    }
  ];

  const officialPartners = [
    {
      name: "Karnataka Tourism",
      logo: "https://placehold.co/130x50/F5F7F8/1A1A1A?text=Karnataka+Tourism",
      type: "Official Tourism Partner",
      website: "#"
    },
    {
      name: "SportsMed Hospital",
      logo: "https://placehold.co/130x50/F5F7F8/1A1A1A?text=SportsMed",
      type: "Medical Partner",
      website: "#"
    },
    {
      name: "HydroCharge",
      logo: "https://placehold.co/130x50/F5F7F8/1A1A1A?text=HydroCharge",
      type: "Hydration Partner",
      website: "#"
    },
    {
      name: "Cycle Federation of India",
      logo: "https://placehold.co/130x50/F5F7F8/1A1A1A?text=CFI",
      type: "Technical Partner",
      website: "#"
    },
    {
      name: "EcoTrail Foundation",
      logo: "https://placehold.co/130x50/F5F7F8/1A1A1A?text=EcoTrail",
      type: "Sustainability Partner",
      website: "#"
    },
    {
      name: "Local Eats Hampi",
      logo: "https://placehold.co/130x50/F5F7F8/1A1A1A?text=Local+Eats",
      type: "Food & Beverage Partner",
      website: "#"
    }
  ];

  const sponsorshipPackages = [
    {
      name: "Title Sponsor",
      price: "₹10,00,000",
      benefits: [
        "Exclusive naming rights: 'Your Brand presents Tour of Hampi'",
        "Premium logo placement on all race materials",
        "Dedicated banner space at start/finish area",
        "Logo on all participant jerseys",
        "10 VIP passes for race day",
        "Booth at race expo",
        "Dedicated social media posts",
        "Logo on podium backdrop",
        "Brand mention in all press releases"
      ]
    },
    {
      name: "Gold Sponsor",
      price: "₹5,00,000",
      benefits: [
        "Logo on all race materials and website",
        "Banner space at key race locations",
        "5 VIP passes for race day",
        "Booth at race expo",
        "Social media recognition",
        "Logo on participant race numbers",
        "Brand mention in press releases"
      ]
    },
    {
      name: "Silver Sponsor",
      price: "₹2,00,000",
      benefits: [
        "Logo on race website and select materials",
        "Banner space at one race location",
        "3 VIP passes for race day",
        "Booth at race expo",
        "Social media mention",
        "Logo on finisher certificates"
      ]
    }
  ];

  return (
    <>
      {/* Page Header */}
      <div className="relative pt-32 pb-20 bg-hampi-blue overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526976668912-1a811878dd37?q=80&w=1470&auto=format&fit=crop')" }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Sponsors & Partners</h1>
            <p className="text-xl text-white/90">Meet the brands and organizations that make the Tour of Hampi possible through their generous support.</p>
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
            {/* Title Sponsors */}
            <AnimateOnScroll animation="fade-in">
              <div className="mb-20">
                <h2 className="text-center text-3xl font-bold text-hampi-dark mb-12">Title Sponsor</h2>
                
                <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                  {titleSponsors.map((sponsor, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 p-8">
                      <div className="flex justify-center md:justify-start">
                        <img 
                          src={sponsor.logo} 
                          alt={sponsor.name} 
                          className="max-w-full h-auto"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold text-hampi-dark mb-4">{sponsor.name}</h3>
                        <p className="text-gray-600 mb-4">{sponsor.description}</p>
                        <a href={sponsor.website} className="flex items-center gap-2 text-hampi-orange hover:text-hampi-orange/80 font-medium transition-colors">
                          Visit Website <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
            
            {/* Gold Sponsors */}
            <AnimateOnScroll animation="fade-in" delay={100}>
              <div className="mb-20">
                <h2 className="text-center text-3xl font-bold text-hampi-dark mb-12">Gold Sponsors</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {goldSponsors.map((sponsor, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden p-6">
                      <div className="flex justify-center mb-6">
                        <img 
                          src={sponsor.logo} 
                          alt={sponsor.name} 
                          className="max-w-full h-auto"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-hampi-dark mb-3 text-center">{sponsor.name}</h3>
                      <p className="text-gray-600 mb-4 text-center">{sponsor.description}</p>
                      <div className="text-center">
                        <a href={sponsor.website} className="inline-flex items-center gap-2 text-hampi-orange hover:text-hampi-orange/80 font-medium transition-colors">
                          Visit Website <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
            
            {/* Silver Sponsors */}
            <AnimateOnScroll animation="fade-in" delay={200}>
              <div className="mb-20">
                <h2 className="text-center text-3xl font-bold text-hampi-dark mb-12">Silver Sponsors</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {silverSponsors.map((sponsor, index) => (
                    <div key={index} className="bg-white shadow-md rounded-xl overflow-hidden p-6 text-center">
                      <div className="flex justify-center mb-6 h-16 items-center">
                        <img 
                          src={sponsor.logo} 
                          alt={sponsor.name} 
                          className="max-w-full h-auto"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-hampi-dark mb-3">{sponsor.name}</h3>
                      <a href={sponsor.website} className="inline-flex items-center gap-1 text-sm text-hampi-orange hover:text-hampi-orange/80 font-medium transition-colors">
                        Website <ExternalLink size={14} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
            
            {/* Official Partners */}
            <AnimateOnScroll animation="fade-in" delay={300}>
              <div className="mb-20">
                <h2 className="text-center text-3xl font-bold text-hampi-dark mb-12">Official Partners</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {officialPartners.map((partner, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl overflow-hidden p-6 text-center">
                      <div className="flex justify-center mb-4 h-14 items-center">
                        <img 
                          src={partner.logo} 
                          alt={partner.name} 
                          className="max-w-full h-auto"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-hampi-dark mb-1">{partner.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">{partner.type}</p>
                      <a href={partner.website} className="inline-flex items-center gap-1 text-sm text-hampi-blue hover:text-hampi-blue/80 font-medium transition-colors">
                        Learn More <ExternalLink size={14} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
            
            {/* Become a Sponsor */}
            <AnimateOnScroll animation="fade-in" delay={400}>
              <div className="mb-16">
                <div className="bg-gray-50 rounded-xl overflow-hidden p-8 md:p-12">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-hampi-dark mb-4">Become a Sponsor</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      Join our esteemed group of sponsors and gain exclusive access to a passionate community of cyclists and outdoor enthusiasts. We offer various sponsorship packages to suit different marketing goals and budgets.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {sponsorshipPackages.map((pkg, index) => (
                      <div key={index} className={`bg-white rounded-xl overflow-hidden shadow-lg border-t-4 transition-all duration-300 hover:shadow-xl ${
                        index === 0 ? "border-hampi-orange" : index === 1 ? "border-hampi-blue" : "border-gray-400"
                      }`}>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-hampi-dark mb-2 text-center">{pkg.name}</h3>
                          <p className="text-2xl font-bold text-center mb-6 text-hampi-orange">{pkg.price}</p>
                          
                          <h4 className="font-semibold mb-3 text-hampi-dark">Benefits:</h4>
                          <ul className="space-y-2 mb-6">
                            {pkg.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="h-2 w-2 bg-hampi-orange rounded-full mt-2"></span>
                                <span className="text-sm text-gray-600">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <div className="text-center mt-auto">
                            <a href="#" className={`inline-block font-semibold py-2 px-4 rounded-md transition-all ${
                              index === 0 
                                ? "bg-hampi-orange text-white hover:bg-hampi-orange/90" 
                                : index === 1 
                                ? "bg-hampi-blue text-white hover:bg-hampi-blue/90"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}>
                              Request Details
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center mt-12">
                    <p className="text-gray-600 mb-6">
                      Looking for a custom sponsorship package? Contact our sponsorship team to discuss your specific requirements and goals.
                    </p>
                    <Link to="/contact" className="btn-primary inline-flex">
                      Contact Sponsorship Team <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
            
            {/* Past Sponsors */}
            <AnimateOnScroll animation="fade-in" delay={500}>
              <div className="text-center">
                <h2 className="text-2xl font-bold text-hampi-dark mb-6">Past Sponsors</h2>
                <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                  We're grateful to all the brands and organizations that have supported the Tour of Hampi over the years. Their commitment has helped us grow into one of India's premier cycling events.
                </p>
                
                <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
                  <img src="https://placehold.co/120x50/F5F7F8/1A1A1A?text=Past+Sponsor+1" alt="Past Sponsor" className="h-10" />
                  <img src="https://placehold.co/120x50/F5F7F8/1A1A1A?text=Past+Sponsor+2" alt="Past Sponsor" className="h-10" />
                  <img src="https://placehold.co/120x50/F5F7F8/1A1A1A?text=Past+Sponsor+3" alt="Past Sponsor" className="h-10" />
                  <img src="https://placehold.co/120x50/F5F7F8/1A1A1A?text=Past+Sponsor+4" alt="Past Sponsor" className="h-10" />
                  <img src="https://placehold.co/120x50/F5F7F8/1A1A1A?text=Past+Sponsor+5" alt="Past Sponsor" className="h-10" />
                  <img src="https://placehold.co/120x50/F5F7F8/1A1A1A?text=Past+Sponsor+6" alt="Past Sponsor" className="h-10" />
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sponsors;
