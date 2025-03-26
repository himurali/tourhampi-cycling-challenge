import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FileText, ArrowRight, CheckCircle, AlertTriangle, Clock, Leaf, XCircle } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const Rules = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const generalRules = [
    "Participants must follow the marked route at all times",
    "Wearing a helmet is mandatory for all participants throughout the event",
    "All participants must carry a form of identification",
    "Obey all traffic rules and marshal instructions",
    "Respect other riders and maintain sporting behavior",
    "Race numbers must be clearly visible at all times",
    "No earphones/headphones allowed during the race",
    "No drafting behind motorized vehicles",
    "No littering - use designated waste zones only",
    "Mechanical assistance is only allowed at designated service points"
  ];

  const safetyGuidelines = [
    "In case of emergency, call the emergency number provided",
    "Carry a basic first aid kit and know how to use it",
    "Carry sufficient water and nutrition for your category",
    "Be aware of weather conditions and dress appropriately",
    "Check your bicycle thoroughly before the race",
    "Inform organizers about any medical conditions",
    "Use hand signals to indicate your intentions to other riders",
    "Be cautious on descents and technical sections",
    "Give way to faster riders when safe to do so",
    "Report accidents or hazards on the route to the nearest marshal"
  ];

  const environmentalGuidelines = [
    "Stick to designated trails and routes only",
    "Do not disturb wildlife or damage vegetation",
    "Carry all trash with you until a designated disposal point",
    "Use eco-friendly sunscreen and insect repellent",
    "Minimize noise in environmentally sensitive areas",
    "Report environmental damage to race officials",
    "Do not take 'shortcuts' through undisturbed areas",
    "Conserve water at refreshment stations - take only what you need",
    "Respect local communities and cultural sites along the route",
    "Consider carbon offsetting for your travel to the event"
  ];

  return (
    <>
      {/* Page Header */}
      <div className="relative pt-32 pb-20 bg-hampi-blue overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1470&auto=format&fit=crop')" }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Rules & Regulations</h1>
            <p className="text-xl text-white/90">Everything you need to know about participating safely and fairly in the Tour of Hampi.</p>
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
            {/* Download PDF Button */}
            <AnimateOnScroll animation="fade-in">
              <div className="flex justify-center mb-16">
                <button className="flex items-center gap-2 bg-hampi-dark text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg">
                  <FileText size={20} />
                  Download Full Rules PDF
                </button>
              </div>
            </AnimateOnScroll>
            
            {/* General Rules */}
            <AnimateOnScroll animation="fade-in" delay={100}>
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-hampi-orange rounded-full p-2 text-white">
                    <CheckCircle size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-hampi-dark">General Rules</h2>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg overflow-hidden p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                    {generalRules.map((rule, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="bg-hampi-orange/10 text-hampi-orange rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 font-semibold text-sm">{index + 1}</span>
                        <p className="text-gray-700">{rule}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
            
            {/* Safety Guidelines */}
            <AnimateOnScroll animation="fade-in" delay={200}>
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-hampi-blue rounded-full p-2 text-white">
                    <AlertTriangle size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-hampi-dark">Safety Guidelines</h2>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg overflow-hidden p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                    {safetyGuidelines.map((guideline, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="bg-hampi-blue/10 text-hampi-blue rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 font-semibold text-sm">{index + 1}</span>
                        <p className="text-gray-700">{guideline}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
            
            {/* Time Limits */}
            <AnimateOnScroll animation="fade-in" delay={300}>
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-hampi-orange rounded-full p-2 text-white">
                    <Clock size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-hampi-dark">Time Limits & Cut-Offs</h2>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="py-3 px-6 text-left text-hampi-dark font-semibold">Category</th>
                          <th className="py-3 px-6 text-left text-hampi-dark font-semibold">Total Time Limit</th>
                          <th className="py-3 px-6 text-left text-hampi-dark font-semibold">Checkpoint 1 (25%)</th>
                          <th className="py-3 px-6 text-left text-hampi-dark font-semibold">Checkpoint 2 (50%)</th>
                          <th className="py-3 px-6 text-left text-hampi-dark font-semibold">Checkpoint 3 (75%)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr>
                          <td className="py-3 px-6 text-gray-700">Elite</td>
                          <td className="py-3 px-6 text-gray-700">8 hours</td>
                          <td className="py-3 px-6 text-gray-700">2 hours</td>
                          <td className="py-3 px-6 text-gray-700">4 hours</td>
                          <td className="py-3 px-6 text-gray-700">6 hours</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="py-3 px-6 text-gray-700">Amateur</td>
                          <td className="py-3 px-6 text-gray-700">7 hours</td>
                          <td className="py-3 px-6 text-gray-700">1.75 hours</td>
                          <td className="py-3 px-6 text-gray-700">3.5 hours</td>
                          <td className="py-3 px-6 text-gray-700">5.25 hours</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-6 text-gray-700">Open</td>
                          <td className="py-3 px-6 text-gray-700">5 hours</td>
                          <td className="py-3 px-6 text-gray-700">1.25 hours</td>
                          <td className="py-3 px-6 text-gray-700">2.5 hours</td>
                          <td className="py-3 px-6 text-gray-700">3.75 hours</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="p-6 bg-gray-50">
                    <h3 className="font-semibold mb-2 text-hampi-dark">Cut-Off Policy:</h3>
                    <p className="text-gray-700 mb-4">
                      Participants who fail to reach checkpoints within the specified time limits will be asked to abandon the race for safety reasons. They will be provided transport back to the start/finish area.
                    </p>
                    <p className="text-gray-700">
                      Note: Time limits may be adjusted in case of exceptional weather conditions. Any changes will be announced before the race.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
            
            {/* Environmental Responsibility */}
            <AnimateOnScroll animation="fade-in" delay={400}>
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-green-600 rounded-full p-2 text-white">
                    <Leaf size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-hampi-dark">Environmental Responsibility</h2>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg overflow-hidden p-8">
                  <p className="text-gray-700 mb-6">
                    The Tour of Hampi takes place in a UNESCO World Heritage site with delicate ecosystems and cultural significance. All participants are required to follow these environmental guidelines:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                    {environmentalGuidelines.map((guideline, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 font-semibold text-sm">{index + 1}</span>
                        <p className="text-gray-700">{guideline}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-4 bg-green-50 border-l-4 border-green-500 rounded-md">
                    <p className="text-gray-700">
                      <strong>Important:</strong> Any participant found deliberately violating environmental guidelines may face disqualification and be banned from future events.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
            
            {/* Disqualification Policies */}
            <AnimateOnScroll animation="fade-in" delay={500}>
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-hampi-orange rounded-full p-2 text-white">
                    <XCircle size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-hampi-dark">Disqualification Policies</h2>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg overflow-hidden p-8">
                  <p className="text-gray-700 mb-6">
                    The following actions may result in immediate disqualification from the event:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                    <div className="flex items-start gap-3">
                      <span className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 font-semibold text-sm">1</span>
                      <p className="text-gray-700">Deviating from the marked course or taking shortcuts</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 font-semibold text-sm">2</span>
                      <p className="text-gray-700">Riding without a helmet at any time during the race</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 font-semibold text-sm">3</span>
                      <p className="text-gray-700">Using any form of motorized assistance</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 font-semibold text-sm">4</span>
                      <p className="text-gray-700">Receiving outside assistance outside designated zones</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 font-semibold text-sm">5</span>
                      <p className="text-gray-700">Littering or environmental damage</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 font-semibold text-sm">6</span>
                      <p className="text-gray-700">Unsporting behavior towards other participants</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 font-semibold text-sm">7</span>
                      <p className="text-gray-700">Missing mandatory equipment checks</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 font-semibold text-sm">8</span>
                      <p className="text-gray-700">Failure to provide assistance in emergency situations</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-red-50 border-l-4 border-red-500 rounded-md">
                    <p className="text-gray-700">
                      <strong>Note:</strong> The Race Director's decision regarding disqualification is final and cannot be appealed. Safety and fair play are our highest priorities.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
            
            {/* Dispute Resolution */}
            <AnimateOnScroll animation="fade-in" delay={600}>
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-hampi-dark">Dispute Resolution</h2>
                
                <div className="bg-white rounded-xl shadow-lg overflow-hidden p-8">
                  <p className="text-gray-700 mb-6">
                    In case of any disputes or protests regarding race results or rule violations:
                  </p>
                  
                  <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                    <li>All protests must be submitted in writing to the Race Director within 30 minutes after crossing the finish line or withdrawing from the race.</li>
                    <li>A jury consisting of the Race Director, Technical Director, and a rider representative will review all protests.</li>
                    <li>Video or photographic evidence may be submitted to support protests.</li>
                    <li>The jury's decision will be announced within 2 hours of protest submission.</li>
                    <li>In exceptional cases, final results may be withheld pending a full investigation.</li>
                  </ol>
                </div>
              </div>
            </AnimateOnScroll>
            
            {/* CTA */}
            <AnimateOnScroll animation="fade-in" delay={700}>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-hampi-dark">Ready to Join the Challenge?</h3>
                <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
                  Now that you're familiar with our rules and guidelines, register for the Tour of Hampi and test your skills against the stunning backdrop of ancient ruins!
                </p>
                <Link to="/register" className="btn-primary inline-flex">
                  Register Now <ArrowRight size={18} />
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rules;
