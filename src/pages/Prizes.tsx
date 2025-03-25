
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Award, ArrowRight, Trophy, Medal, Gift } from "lucide-react";

const Prizes = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const prizes = {
    elite: {
      men: [
        { position: "1st Place", prize: "₹1,00,000" },
        { position: "2nd Place", prize: "₹50,000" },
        { position: "3rd Place", prize: "₹25,000" },
        { position: "4th Place", prize: "₹15,000" },
        { position: "5th Place", prize: "₹10,000" }
      ],
      women: [
        { position: "1st Place", prize: "₹1,00,000" },
        { position: "2nd Place", prize: "₹50,000" },
        { position: "3rd Place", prize: "₹25,000" },
        { position: "4th Place", prize: "₹15,000" },
        { position: "5th Place", prize: "₹10,000" }
      ]
    },
    amateur: {
      men: [
        { position: "1st Place", prize: "₹50,000" },
        { position: "2nd Place", prize: "₹25,000" },
        { position: "3rd Place", prize: "₹10,000" },
      ],
      women: [
        { position: "1st Place", prize: "₹50,000" },
        { position: "2nd Place", prize: "₹25,000" },
        { position: "3rd Place", prize: "₹10,000" },
      ]
    },
    open: {
      men: [
        { position: "1st Place", prize: "₹20,000" },
        { position: "2nd Place", prize: "₹10,000" },
        { position: "3rd Place", prize: "₹5,000" },
      ],
      women: [
        { position: "1st Place", prize: "₹20,000" },
        { position: "2nd Place", prize: "₹10,000" },
        { position: "3rd Place", prize: "₹5,000" },
      ]
    }
  };

  const specialPrizes = [
    {
      title: "King/Queen of the Mountain",
      description: "Fastest climber on designated mountain segments",
      prize: "₹15,000",
      icon: <Mountains size={24} />
    },
    {
      title: "Sprint Champion",
      description: "Fastest rider on designated sprint segments",
      prize: "₹15,000",
      icon: <Zap size={24} />
    },
    {
      title: "Most Improved Rider",
      description: "Compared to previous year's timing",
      prize: "₹10,000",
      icon: <TrendingUp size={24} />
    },
    {
      title: "Team Challenge",
      description: "Best combined time of 4 riders",
      prize: "₹20,000",
      icon: <Users size={24} />
    }
  ];

  return (
    <>
      {/* Page Header */}
      <div className="relative pt-32 pb-20 bg-hampi-orange overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571993142257-eae0b44ce9f9?q=80&w=1471&auto=format&fit=crop')" }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Prizes & Awards</h1>
            <p className="text-xl text-white/90">Compete for glory and substantial prizes across multiple categories.</p>
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
            {/* Total Prize Pool */}
            <div className="text-center mb-16">
              <Award className="mx-auto text-hampi-orange mb-4" size={56} />
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-hampi-dark">₹5,00,000 Prize Pool</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The Tour of Hampi offers one of India's largest prize pools for a cycling event, with awards distributed across all categories.
              </p>
            </div>
            
            {/* Prize Tables */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Elite Category */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-hampi-orange transition-all duration-300 hover:shadow-xl">
                <div className="p-6">
                  <Trophy className="text-hampi-orange mb-4" size={32} />
                  <h3 className="text-2xl font-bold mb-2 text-hampi-dark">Elite Category</h3>
                  <p className="text-gray-600 mb-6">Prize distribution for professional and experienced cyclists</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-hampi-dark">Men's Division</h4>
                    <table className="w-full">
                      <tbody>
                        {prizes.elite.men.map((prize, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                            <td className="py-2 px-4">{prize.position}</td>
                            <td className="py-2 px-4 text-right font-semibold">{prize.prize}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-hampi-dark">Women's Division</h4>
                    <table className="w-full">
                      <tbody>
                        {prizes.elite.women.map((prize, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                            <td className="py-2 px-4">{prize.position}</td>
                            <td className="py-2 px-4 text-right font-semibold">{prize.prize}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              
              {/* Amateur Category */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-hampi-blue transition-all duration-300 hover:shadow-xl">
                <div className="p-6">
                  <Trophy className="text-hampi-blue mb-4" size={32} />
                  <h3 className="text-2xl font-bold mb-2 text-hampi-dark">Amateur Category</h3>
                  <p className="text-gray-600 mb-6">Prize distribution for intermediate-level cyclists</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-hampi-dark">Men's Division</h4>
                    <table className="w-full">
                      <tbody>
                        {prizes.amateur.men.map((prize, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                            <td className="py-2 px-4">{prize.position}</td>
                            <td className="py-2 px-4 text-right font-semibold">{prize.prize}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-hampi-dark">Women's Division</h4>
                    <table className="w-full">
                      <tbody>
                        {prizes.amateur.women.map((prize, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                            <td className="py-2 px-4">{prize.position}</td>
                            <td className="py-2 px-4 text-right font-semibold">{prize.prize}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              
              {/* Open Category */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-green-600 transition-all duration-300 hover:shadow-xl">
                <div className="p-6">
                  <Trophy className="text-green-600 mb-4" size={32} />
                  <h3 className="text-2xl font-bold mb-2 text-hampi-dark">Open Category</h3>
                  <p className="text-gray-600 mb-6">Prize distribution for casual cyclists and beginners</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-hampi-dark">Men's Division</h4>
                    <table className="w-full">
                      <tbody>
                        {prizes.open.men.map((prize, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                            <td className="py-2 px-4">{prize.position}</td>
                            <td className="py-2 px-4 text-right font-semibold">{prize.prize}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-hampi-dark">Women's Division</h4>
                    <table className="w-full">
                      <tbody>
                        {prizes.open.women.map((prize, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                            <td className="py-2 px-4">{prize.position}</td>
                            <td className="py-2 px-4 text-right font-semibold">{prize.prize}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Special Prizes */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-hampi-dark text-center">Special Awards</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {specialPrizes.map((prize, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-hampi-orange shadow-md">
                      {prize.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-hampi-dark">{prize.title}</h3>
                    <p className="text-gray-600 mb-3">{prize.description}</p>
                    <p className="text-xl font-bold text-hampi-orange">{prize.prize}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Additional Prizes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 text-center">
                <Medal className="mx-auto text-hampi-orange mb-4" size={32} />
                <h3 className="text-xl font-bold mb-3 text-hampi-dark">Finisher Medals</h3>
                <p className="text-gray-600">
                  Every participant who completes their respective course within the time limit will receive a custom-designed finisher medal.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 text-center">
                <Gift className="mx-auto text-hampi-orange mb-4" size={32} />
                <h3 className="text-xl font-bold mb-3 text-hampi-dark">Participant Kits</h3>
                <p className="text-gray-600">
                  All registered participants will receive an official Tour of Hampi jersey, water bottle, and goodie bag with sponsor items.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 text-center">
                <Camera className="mx-auto text-hampi-orange mb-4" size={32} />
                <h3 className="text-xl font-bold mb-3 text-hampi-dark">Race Photography</h3>
                <p className="text-gray-600">
                  Professional photographers will capture your race moments, with free digital downloads available for all participants.
                </p>
              </div>
            </div>
            
            {/* Prize Rules */}
            <div className="bg-gray-50 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bold mb-6 text-hampi-dark">Prize Eligibility & Disbursement</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-hampi-dark">Eligibility Requirements</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>All participants must complete the entire course within the time limit</li>
                    <li>Participants must follow all race rules and regulations</li>
                    <li>Prize winners may be subject to anti-doping testing</li>
                    <li>You must be present at the award ceremony to receive your prize</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-hampi-dark">Prize Disbursement</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Prizes will be awarded at the official ceremony on race day</li>
                    <li>Cash prizes are subject to applicable taxes</li>
                    <li>For prizes above ₹10,000, winners must provide PAN card details</li>
                    <li>Prize money will be transferred electronically within 15 working days</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-hampi-dark">Additional Notes</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>In case of a tie, prizes will be equally divided among winners</li>
                    <li>The organizer's decision regarding prize distribution is final</li>
                    <li>If a category has fewer than 5 participants, prize money may be adjusted</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-hampi-dark">Ready to Compete for These Prizes?</h3>
              <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
                Register now to secure your spot in the Tour of Hampi and compete for glory and substantial prizes!
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

const Mountains = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
  </svg>
);

const Users = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const Camera = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);

const Zap = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const TrendingUp = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const Bike = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="18.5" cy="17.5" r="3.5" />
    <circle cx="5.5" cy="17.5" r="3.5" />
    <circle cx="15" cy="5" r="1" />
    <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
  </svg>
);

export default Prizes;
