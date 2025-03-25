
import { useEffect, useState } from "react";
import { ArrowRight, Bike, Leaf, HeartHandshake, MapPin, CalendarCheck, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const corporateFormSchema = z.object({
  companyName: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  contactName: z.string().min(2, {
    message: "Contact name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  teamSize: z.string().min(1, {
    message: "Please specify your team size.",
  }),
  initiativeType: z.string({
    required_error: "Please select an initiative type.",
  }),
  message: z.string().optional(),
});

type CorporateFormValues = z.infer<typeof corporateFormSchema>;

const CSR = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initiatives data
  const initiatives = [
    {
      id: "green-initiative",
      title: "Hampi Green Initiative",
      icon: <Leaf className="w-10 h-10 text-green-600" />,
      description: "Support environmental conservation efforts around Hampi's archaeological sites.",
      benefits: [
        "Contribute to forest restoration and biodiversity conservation",
        "Help develop sustainable waste management systems",
        "Support renewable energy installations at heritage sites",
        "Fund environmental education programs for local communities"
      ],
      impact: "Your contribution helps preserve Hampi's natural environment for future generations while combating climate change locally."
    },
    {
      id: "livelihood-initiative",
      title: "Livelihood Initiative",
      icon: <HeartHandshake className="w-10 h-10 text-hampi-orange" />,
      description: "Empower local communities with sustainable livelihood opportunities connected to cycling tourism.",
      benefits: [
        "Support training programs for local cycling guides",
        "Fund small business development for cycle repair shops",
        "Help create souvenir crafts by local artisans",
        "Provide microfinance for tourism-related enterprises"
      ],
      impact: "Your support directly improves the economic well-being of Hampi's communities while preserving traditional skills."
    },
    {
      id: "trail-creation",
      title: "Trail Creation & Maintenance",
      icon: <MapPin className="w-10 h-10 text-hampi-blue" />,
      description: "Help develop and maintain cycling trails that showcase Hampi's heritage while ensuring minimal environmental impact.",
      benefits: [
        "Support trail design with archaeological preservation in mind",
        "Fund signage and safety features on cycling routes",
        "Help develop rest areas and viewing points along trails",
        "Support documentation and mapping of heritage-friendly routes"
      ],
      impact: "Your contribution ensures sustainable access to Hampi's treasures while protecting sensitive archaeological zones."
    },
    {
      id: "wellness-workshops",
      title: "Wellness Workshops",
      icon: <CalendarCheck className="w-10 h-10 text-purple-600" />,
      description: "Sponsor yoga and meditation sessions for participants and locals, leveraging Hampi's spiritual significance.",
      benefits: [
        "Fund yoga instructors and meditation experts",
        "Support creation of wellness spaces amidst heritage settings",
        "Provide mats and equipment for participants",
        "Help develop multilingual wellness guides"
      ],
      impact: "Your sponsorship creates holistic experiences that connect physical activity with Hampi's spiritual heritage."
    },
    {
      id: "bicycle-stations",
      title: "Bicycle Stations",
      icon: <Bike className="w-10 h-10 text-blue-500" />,
      description: "Sponsor bicycle rental and repair stations that provide easy access to eco-friendly transportation.",
      benefits: [
        "Fund bicycle fleets for communal use",
        "Support construction of solar-powered charging stations for e-bikes",
        "Help train local youth in bicycle maintenance",
        "Support development of bike-sharing applications"
      ],
      impact: "Your contribution revolutionizes mobility in Hampi, reducing carbon footprint while creating local employment."
    },
    {
      id: "team-participation",
      title: "Team Participation",
      icon: <Users className="w-10 h-10 text-indigo-600" />,
      description: "Register your corporate team to participate in the Tour of Hampi while supporting CSR initiatives.",
      benefits: [
        "Custom team jerseys with your company logo",
        "Dedicated team support vehicle during the event",
        "Private camping area for your team",
        "Team-building activities coordinated with event staff"
      ],
      impact: "Your team's participation creates unforgettable bonds while directly supporting conservation and community development."
    }
  ];

  const form = useForm<CorporateFormValues>({
    resolver: zodResolver(corporateFormSchema),
    defaultValues: {
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      teamSize: "",
      initiativeType: "",
      message: "",
    },
  });

  function onSubmit(data: CorporateFormValues) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form data submitted:", data);
      setIsSubmitting(false);
      
      toast({
        title: "Inquiry Submitted",
        description: "Thank you for your interest in supporting Tour of Hampi. Our team will contact you shortly.",
      });
      
      form.reset();
    }, 1500);
  }

  return (
    <>
      {/* Page Header */}
      <div className="relative pt-32 pb-20 bg-gradient-to-r from-hampi-blue to-hampi-blue/70 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=1471&auto=format&fit=crop')" }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Corporate Social Responsibility</h1>
            <p className="text-xl text-white/90">Partner with us to make a lasting impact on Hampi's environment and communities through our dedicated CSR initiatives.</p>
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
            
            {/* Introduction */}
            <div className="mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-hampi-dark mb-6">Make a Meaningful Impact</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
                The Tour of Hampi offers unique opportunities for corporate partners to contribute to sustainable development and community welfare. 
                Your participation helps preserve this UNESCO World Heritage site while creating lasting positive impacts.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 bg-green-50 py-2 px-4 rounded-full">
                  <Leaf className="w-5 h-5 text-green-600" />
                  <span className="text-green-800">Environmental Conservation</span>
                </div>
                <div className="flex items-center gap-2 bg-orange-50 py-2 px-4 rounded-full">
                  <HeartHandshake className="w-5 h-5 text-hampi-orange" />
                  <span className="text-orange-800">Community Development</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-50 py-2 px-4 rounded-full">
                  <Users className="w-5 h-5 text-hampi-blue" />
                  <span className="text-blue-800">Team Building</span>
                </div>
              </div>
            </div>
            
            {/* CSR Initiatives Tabs */}
            <div className="mb-20">
              <Tabs defaultValue="green-initiative" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList className="grid grid-cols-3 md:grid-cols-6">
                    {initiatives.map((initiative) => (
                      <TabsTrigger key={initiative.id} value={initiative.id} className="px-3 py-2 text-xs md:text-sm">
                        {initiative.title.split(' ')[0]}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
                
                {initiatives.map((initiative) => (
                  <TabsContent key={initiative.id} value={initiative.id}>
                    <Card>
                      <CardHeader className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                        <div className="p-3 rounded-full bg-slate-100">
                          {initiative.icon}
                        </div>
                        <div>
                          <CardTitle className="text-2xl md:text-3xl">{initiative.title}</CardTitle>
                          <CardDescription className="text-base mt-2">{initiative.description}</CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="font-bold text-lg mb-4 text-hampi-dark">Key Benefits</h4>
                            <ul className="space-y-3">
                              {initiative.benefits.map((benefit, index) => (
                                <li key={index} className="flex gap-3">
                                  <div className="h-2 w-2 bg-hampi-orange rounded-full mt-2.5"></div>
                                  <span className="text-gray-700">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold text-lg mb-4 text-hampi-dark">Impact</h4>
                            <p className="text-gray-700">{initiative.impact}</p>
                            <Button variant="default" className="mt-6 bg-hampi-orange hover:bg-hampi-orange/90">
                              Learn More <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
            
            {/* Corporate Registration Form */}
            <div className="mb-20">
              <div className="bg-slate-50 rounded-xl p-8 md:p-12">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-hampi-dark mb-4">Register Your Corporate Interest</h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Complete the form below to express your interest in our CSR initiatives. Our team will reach out to discuss 
                    customized partnership opportunities that align with your company's values and objectives.
                  </p>
                </div>
                
                <div className="max-w-3xl mx-auto">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="companyName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your Company Ltd." {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="contactName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Contact Person</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input placeholder="john.doe@company.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="+91 98765 43210" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="teamSize"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Team Size (if participating)</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g. 10-15" {...field} />
                              </FormControl>
                              <FormDescription>
                                Leave blank if not sending a corporate team
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="initiativeType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Initiative of Interest</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select an initiative" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="green-initiative">Hampi Green Initiative</SelectItem>
                                  <SelectItem value="livelihood-initiative">Livelihood Initiative</SelectItem>
                                  <SelectItem value="trail-creation">Trail Creation</SelectItem>
                                  <SelectItem value="wellness-workshops">Wellness Workshops</SelectItem>
                                  <SelectItem value="bicycle-stations">Bicycle Stations</SelectItem>
                                  <SelectItem value="team-participation">Team Participation</SelectItem>
                                  <SelectItem value="custom">Custom Initiative</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Information</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us more about your company's CSR goals and how you'd like to contribute..." 
                                className="min-h-[120px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="flex justify-center">
                        <Button 
                          type="submit" 
                          className="btn-primary px-8 py-6" 
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                          {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
            
            {/* CSR Success Stories */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-hampi-dark mb-4">Success Stories</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  See how corporate partners have made a difference through their contributions to Tour of Hampi initiatives.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="border-t-4 border-green-500">
                  <CardHeader>
                    <CardTitle>EcoTech Solutions</CardTitle>
                    <CardDescription>Green Initiative Partner</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      "Our team planted over 500 trees along the cycling route and installed solar-powered rest stops. 
                      The experience brought our employees together while making a tangible environmental impact."
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t pt-4">
                    <p className="text-sm text-gray-500">Rahul Sharma, CSR Director</p>
                    <Button variant="ghost" size="sm">Read More</Button>
                  </CardFooter>
                </Card>
                
                <Card className="border-t-4 border-hampi-orange">
                  <CardHeader>
                    <CardTitle>Global Finance Group</CardTitle>
                    <CardDescription>Livelihood Initiative Partner</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      "We funded training for 25 local youth to become certified cycle mechanics and tour guides. 
                      Seeing their businesses thrive has been the most rewarding outcome of our CSR investment."
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t pt-4">
                    <p className="text-sm text-gray-500">Priya Nair, Head of Sustainability</p>
                    <Button variant="ghost" size="sm">Read More</Button>
                  </CardFooter>
                </Card>
                
                <Card className="border-t-4 border-hampi-blue">
                  <CardHeader>
                    <CardTitle>TechCorp India</CardTitle>
                    <CardDescription>Team Participation & Trail Creation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      "Our 30-member team not only participated in the race but also helped create a new heritage trail. 
                      The experience significantly improved team cohesion and employee satisfaction scores."
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t pt-4">
                    <p className="text-sm text-gray-500">Vikram Mehta, CEO</p>
                    <Button variant="ghost" size="sm">Read More</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default CSR;
