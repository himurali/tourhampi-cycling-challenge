
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight, Leaf, Users, Bike } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const CSR = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const initiatives = [
    {
      icon: Leaf,
      title: "Environmental Conservation",
      description: "Protecting the delicate ecosystem of Hampi through sustainable practices and awareness.",
      achievements: [
        "Planted over 1,000 native trees in the Hampi region",
        "Organized 15 trail clean-up events with local volunteers",
        "Implemented a zero-waste policy for all Tour of Hampi events",
        "Created dedicated waste zones to minimize environmental impact"
      ],
      link: "/docs"
    },
    {
      icon: Users,
      title: "Community Development",
      description: "Supporting local communities and economies through cycling tourism and local partnerships.",
      achievements: [
        "Created 35+ seasonal jobs for local residents during events",
        "Partnered with 20 local businesses for event supplies and services",
        "Established a scholarship fund for underprivileged children",
        "Conducted 8 cycling workshops for local schools"
      ],
      link: "/docs"
    },
    {
      icon: Bike,
      title: "Cycling for All",
      description: "Making cycling accessible to everyone regardless of age, ability, or background.",
      achievements: [
        "Donated 50+ refurbished bicycles to community centers",
        "Organized adaptive cycling events for people with disabilities",
        "Provided free cycling lessons for local women and children",
        "Created cycling clubs in 10 local schools"
      ],
      link: "/docs"
    }
  ];

  return (
    <>
      {/* Page Header */}
      <div className="relative pt-32 pb-20 bg-hampi-blue overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1492546662075-aabebf46dee2?q=80&w=1374&auto=format&fit=crop')" }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Corporate Social Responsibility</h1>
            <p className="text-xl text-white/90">Our commitment to the environment, local communities, and the future of cycling.</p>
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
      
      {/* CSR Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll animation="slide-in-right">
                <div>
                  <span className="inline-block py-1 px-3 bg-green-100 text-green-800 text-sm font-medium rounded-full mb-6">
                    Our Vision
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-hampi-dark mb-6">
                    More Than Just a Cycling Event
                  </h2>
                  <p className="text-gray-600 mb-6">
                    The Tour of Hampi is committed to making a positive impact on both the environment and the communities we interact with. We believe that sporting events have the responsibility to leave places better than they found them.
                  </p>
                  <p className="text-gray-600 mb-8">
                    Our CSR initiatives focus on three key areas: environmental conservation, community development, and making cycling accessible to all. Through these efforts, we aim to create lasting positive change.
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-hampi-dark mb-4">Our Commitments:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="text-green-600 shrink-0 mt-1" />
                        <span className="text-gray-700">Minimize our carbon footprint in all operations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="text-green-600 shrink-0 mt-1" />
                        <span className="text-gray-700">Support local businesses and create employment opportunities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="text-green-600 shrink-0 mt-1" />
                        <span className="text-gray-700">Promote cycling as a sustainable mode of transportation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="text-green-600 shrink-0 mt-1" />
                        <span className="text-gray-700">Preserve the cultural heritage and natural beauty of Hampi</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="fade-in" delay={200}>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1470&auto=format&fit=crop" 
                    alt="Community Cycling Initiative" 
                    className="rounded-xl shadow-xl w-full h-auto"
                  />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
      
      {/* CSR Initiatives */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-in">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block py-1 px-3 bg-green-100 text-green-800 text-sm font-medium rounded-full mb-6">
                Our Initiatives
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-hampi-dark mb-6">
                Making a Difference Through Cycling
              </h2>
              <p className="text-gray-600">
                Explore our key CSR initiatives and the impact they've made on communities and the environment.
              </p>
            </div>
          </AnimateOnScroll>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {initiatives.map((initiative, index) => (
                <AnimateOnScroll key={index} animation="fade-in" delay={100 * (index + 1)}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="p-8">
                      <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-6">
                        <initiative.icon className="w-7 h-7 text-green-700" />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-4 text-hampi-dark">{initiative.title}</h3>
                      <p className="text-gray-600 mb-6">{initiative.description}</p>
                      
                      <h4 className="font-semibold text-sm uppercase text-gray-500 mb-4">Key Achievements</h4>
                      <ul className="space-y-3 mb-8">
                        {initiative.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="h-2 w-2 bg-green-500 rounded-full mt-2"></span>
                            <span className="text-sm text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Link to={initiative.link} className="inline-flex items-center gap-1 text-green-700 hover:text-green-800 font-medium">
                        Learn more <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-in">
            <div className="max-w-7xl mx-auto">
              <div className="bg-hampi-blue rounded-xl overflow-hidden p-8 md:p-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-white mb-4">Our Impact in Numbers</h2>
                  <p className="text-white/80 max-w-3xl mx-auto">
                    Since our first event in 2018, we've been tracking our social and environmental impact. Here's what we've achieved so far.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { value: "₹15L+", label: "Funds Raised for Local Causes" },
                    { value: "1000+", label: "Trees Planted" },
                    { value: "500kg", label: "Waste Collected & Recycled" },
                    { value: "350+", label: "Local People Employed" }
                  ].map((stat, index) => (
                    <AnimateOnScroll key={index} animation="scale-in" delay={100 * (index + 1)}>
                      <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                        <div className="text-white/70 text-sm">{stat.label}</div>
                      </div>
                    </AnimateOnScroll>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
      
      {/* Sustainability */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll animation="fade-in">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1470&auto=format&fit=crop" 
                    alt="Environmental Conservation" 
                    className="rounded-xl shadow-xl w-full h-auto"
                  />
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="slide-in-left" delay={200}>
                <div>
                  <span className="inline-block py-1 px-3 bg-green-100 text-green-800 text-sm font-medium rounded-full mb-6">
                    Sustainability
                  </span>
                  <h2 className="text-3xl font-bold text-hampi-dark mb-6">
                    A Greener Approach to Sporting Events
                  </h2>
                  <p className="text-gray-600 mb-6">
                    We're committed to making Tour of Hampi one of India's most sustainable sporting events. Our environmental initiatives aim to minimize our ecological footprint while raising awareness about sustainable practices.
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-semibold text-hampi-dark mb-2">Zero Waste Goal</h3>
                      <p className="text-gray-600 text-sm">Our events aim for zero landfill waste through careful planning, recycling, and composting.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-semibold text-hampi-dark mb-2">Carbon Offset Program</h3>
                      <p className="text-gray-600 text-sm">We calculate and offset the carbon footprint of our event through local reforestation projects.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-semibold text-hampi-dark mb-2">Plastic-Free Initiative</h3>
                      <p className="text-gray-600 text-sm">We've eliminated single-use plastics from our events through reusable alternatives and biodegradable materials.</p>
                    </div>
                  </div>
                  
                  <Link to="/docs" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors">
                    Read Our Sustainability Report <ArrowRight size={18} />
                  </Link>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
      
      {/* Get Involved */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade-in">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block py-1 px-3 bg-green-100 text-green-800 text-sm font-medium rounded-full mb-6">
                Join Us
              </span>
              <h2 className="text-3xl font-bold text-hampi-dark mb-6">
                Get Involved in Our CSR Initiatives
              </h2>
              <p className="text-gray-600 mb-8">
                There are many ways you can contribute to our mission of creating positive change through cycling.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                {[
                  { title: "Volunteer", description: "Join our team of volunteers for events and initiatives." },
                  { title: "Donate", description: "Support our programs with financial contributions." },
                  { title: "Partner", description: "Collaborate with us on CSR initiatives aligned with your values." }
                ].map((option, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
                    <h3 className="font-semibold text-hampi-dark mb-2">{option.title}</h3>
                    <p className="text-gray-600 text-sm">{option.description}</p>
                  </div>
                ))}
              </div>
              
              <Link to="/contact" className="btn-primary inline-flex">
                Contact Our CSR Team <ArrowRight size={18} />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
};

export default CSR;
