
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Award, 
  ArrowRight, 
  Trophy, 
  Medal, 
  Gift, 
  Users, 
  Camera, 
  Mountain,
  Zap,
  TrendingUp
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Prizes = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const prizeStructure = {
    elite: {
      title: "Elite",
      description: "Professional and experienced cyclists",
      participants: "450+ Participants expected",
      color: "hampi-orange",
      borderColor: "border-hampi-orange",
      textColor: "text-hampi-orange",
      bgColor: "bg-hampi-orange/10",
      ageGroups: {
        "18-34": {
          men: [
            { position: "1st", prize: "₹50,000" },
            { position: "2nd", prize: "₹32,000" },
            { position: "3rd", prize: "₹16,000" }
          ],
          women: [
            { position: "1st", prize: "₹50,000" },
            { position: "2nd", prize: "₹32,000" },
            { position: "3rd", prize: "₹16,000" }
          ]
        },
        "35-50": {
          men: [
            { position: "1st", prize: "₹20,000" },
            { position: "2nd", prize: "₹15,000" },
            { position: "3rd", prize: "₹7,000" }
          ],
          women: [
            { position: "1st", prize: "₹20,000" },
            { position: "2nd", prize: "₹15,000" },
            { position: "3rd", prize: "₹7,000" }
          ]
        },
        "50+": {
          men: [
            { position: "1st", prize: "₹20,000" },
            { position: "2nd", prize: "₹10,000" },
            { position: "3rd", prize: "₹6,000" }
          ],
          women: [
            { position: "1st", prize: "₹20,000" },
            { position: "2nd", prize: "₹10,000" },
            { position: "3rd", prize: "₹6,000" }
          ]
        }
      }
    },
    amateur: {
      title: "Amateur",
      description: "Intermediate-level cyclists",
      participants: "350-400 Participants expected",
      color: "hampi-blue",
      borderColor: "border-hampi-blue",
      textColor: "text-hampi-blue",
      bgColor: "bg-hampi-blue/10",
      ageGroups: {
        "18-34": {
          men: [
            { position: "1st", prize: "₹24,000" },
            { position: "2nd", prize: "₹12,000" },
            { position: "3rd", prize: "₹7,000" }
          ],
          women: [
            { position: "1st", prize: "₹24,000" },
            { position: "2nd", prize: "₹12,000" },
            { position: "3rd", prize: "₹7,000" }
          ]
        },
        "35-50": {
          men: [
            { position: "1st", prize: "₹12,000" },
            { position: "2nd", prize: "₹7,000" },
            { position: "3rd", prize: "₹5,000" }
          ],
          women: [
            { position: "1st", prize: "₹12,000" },
            { position: "2nd", prize: "₹7,000" },
            { position: "3rd", prize: "₹5,000" }
          ]
        },
        "50+": {
          men: [
            { position: "1st", prize: "₹10,000" },
            { position: "2nd", prize: "₹6,000" },
            { position: "3rd", prize: "₹4,000" }
          ],
          women: [
            { position: "1st", prize: "₹10,000" },
            { position: "2nd", prize: "₹6,000" },
            { position: "3rd", prize: "₹4,000" }
          ]
        }
      }
    },
    common: {
      title: "Common",
      description: "Casual cyclists and beginners",
      participants: "300-400 Participants expected",
      color: "green-600",
      borderColor: "border-green-600",
      textColor: "text-green-600",
      bgColor: "bg-green-600/10",
      ageGroups: {
        "18-34": {
          men: [
            { position: "1st", prize: "₹9,000" },
            { position: "2nd", prize: "₹4,000" },
            { position: "3rd", prize: "₹3,000" }
          ],
          women: [
            { position: "1st", prize: "₹9,000" },
            { position: "2nd", prize: "₹4,000" },
            { position: "3rd", prize: "₹3,000" }
          ]
        },
        "35-50": {
          men: [
            { position: "1st", prize: "₹5,000" },
            { position: "2nd", prize: "₹3,000" },
            { position: "3rd", prize: "₹3,000" }
          ],
          women: [
            { position: "1st", prize: "₹5,000" },
            { position: "2nd", prize: "₹3,000" },
            { position: "3rd", prize: "₹3,000" }
          ]
        },
        "50+": {
          men: [
            { position: "1st", prize: "₹5,000" },
            { position: "2nd", prize: "₹3,000" },
            { position: "3rd", prize: "₹2,000" }
          ],
          women: [
            { position: "1st", prize: "₹5,000" },
            { position: "2nd", prize: "₹3,000" },
            { position: "3rd", prize: "₹2,000" }
          ]
        }
      }
    }
  };
  
  const specialPrizes = [
    {
      title: "King/Queen of the Mountain",
      description: "Fastest climber on designated mountain segments",
      prize: "₹15,000",
      icon: <Mountain size={24} />
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
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-hampi-dark">₹6,00,000 Prize Pool</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The Tour of Hampi offers one of India's largest prize pools for a cycling event, with ₹3,00,000 each for men and women across all categories.
              </p>
            </div>
            
            {/* Prize Tables */}
            <Tabs defaultValue="elite" className="mb-16">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="elite" className="text-hampi-orange data-[state=active]:bg-hampi-orange/10">Elite</TabsTrigger>
                  <TabsTrigger value="amateur" className="text-hampi-blue data-[state=active]:bg-hampi-blue/10">Amateur</TabsTrigger>
                  <TabsTrigger value="common" className="text-green-600 data-[state=active]:bg-green-600/10">Common</TabsTrigger>
                </TabsList>
              </div>
              
              {Object.entries(prizeStructure).map(([categoryKey, category]) => (
                <TabsContent key={categoryKey} value={categoryKey} className="animate-fade-in-up">
                  <div className="mb-8">
                    <div className={`text-center mb-8 p-6 rounded-lg ${category.bgColor}`}>
                      <Trophy className={`mx-auto ${category.textColor} mb-4`} size={36} />
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 text-hampi-dark">{category.title} Category</h3>
                      <p className="text-gray-600 mb-3">{category.description}</p>
                      <div className="inline-flex items-center gap-2 font-medium">
                        <Users size={18} className={category.textColor} />
                        <span>{category.participants}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-10">
                      {/* Age Group Tabs */}
                      <Tabs defaultValue="18-34" className="w-full">
                        <TabsList className="grid w-full max-w-md grid-cols-3 mx-auto mb-6">
                          <TabsTrigger value="18-34">18-34 years</TabsTrigger>
                          <TabsTrigger value="35-50">35-50 years</TabsTrigger>
                          <TabsTrigger value="50+">50+ years</TabsTrigger>
                        </TabsList>
                        
                        {Object.entries(category.ageGroups).map(([ageGroup, prizes]) => (
                          <TabsContent key={ageGroup} value={ageGroup} className="animate-fade-in">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                              {/* Men's Division */}
                              <Card className={`border-t-4 ${category.borderColor}`}>
                                <CardHeader>
                                  <CardTitle className="flex items-center gap-2">
                                    <Trophy size={20} className={category.textColor} />
                                    <span>Men's Division</span>
                                  </CardTitle>
                                  <CardDescription>Age Group: {ageGroup}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                  <Table>
                                    <TableHeader>
                                      <TableRow>
                                        <TableHead>Position</TableHead>
                                        <TableHead className="text-right">Prize</TableHead>
                                      </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                      {prizes.men.map((prize, index) => (
                                        <TableRow key={index}>
                                          <TableCell className="font-medium">{prize.position}</TableCell>
                                          <TableCell className="text-right font-bold">{prize.prize}</TableCell>
                                        </TableRow>
                                      ))}
                                    </TableBody>
                                  </Table>
                                </CardContent>
                              </Card>
                              
                              {/* Women's Division */}
                              <Card className={`border-t-4 ${category.borderColor}`}>
                                <CardHeader>
                                  <CardTitle className="flex items-center gap-2">
                                    <Trophy size={20} className={category.textColor} />
                                    <span>Women's Division</span>
                                  </CardTitle>
                                  <CardDescription>Age Group: {ageGroup}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                  <Table>
                                    <TableHeader>
                                      <TableRow>
                                        <TableHead>Position</TableHead>
                                        <TableHead className="text-right">Prize</TableHead>
                                      </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                      {prizes.women.map((prize, index) => (
                                        <TableRow key={index}>
                                          <TableCell className="font-medium">{prize.position}</TableCell>
                                          <TableCell className="text-right font-bold">{prize.prize}</TableCell>
                                        </TableRow>
                                      ))}
                                    </TableBody>
                                  </Table>
                                </CardContent>
                              </Card>
                            </div>
                          </TabsContent>
                        ))}
                      </Tabs>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
            
            {/* Prize Summary */}
            <div className="bg-gray-50 rounded-xl p-8 mb-16">
              <h3 className="text-2xl font-bold mb-6 text-center text-hampi-dark">Prize Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <Card>
                  <CardHeader className="bg-hampi-orange/10">
                    <CardTitle className="text-hampi-orange">Elite</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="font-medium">Men's Prizes:</span>
                        <span className="font-bold">₹1,56,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Women's Prizes:</span>
                        <span className="font-bold">₹1,56,000</span>
                      </div>
                      <div className="pt-2 border-t flex justify-between">
                        <span className="font-semibold">Total:</span>
                        <span className="font-bold text-hampi-orange">₹3,12,000</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="bg-hampi-blue/10">
                    <CardTitle className="text-hampi-blue">Amateur</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="font-medium">Men's Prizes:</span>
                        <span className="font-bold">₹87,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Women's Prizes:</span>
                        <span className="font-bold">₹87,000</span>
                      </div>
                      <div className="pt-2 border-t flex justify-between">
                        <span className="font-semibold">Total:</span>
                        <span className="font-bold text-hampi-blue">₹1,74,000</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="bg-green-600/10">
                    <CardTitle className="text-green-600">Common</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="font-medium">Men's Prizes:</span>
                        <span className="font-bold">₹57,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Women's Prizes:</span>
                        <span className="font-bold">₹57,000</span>
                      </div>
                      <div className="pt-2 border-t flex justify-between">
                        <span className="font-semibold">Total:</span>
                        <span className="font-bold text-green-600">₹1,14,000</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center p-6 bg-hampi-orange/10 rounded-lg">
                <p className="text-2xl font-bold text-hampi-dark">Total Prize Pool: <span className="text-hampi-orange">₹6,00,000</span></p>
                <p className="text-lg text-gray-600 mt-2">27 prizes each for men and women across all categories</p>
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

export default Prizes;
