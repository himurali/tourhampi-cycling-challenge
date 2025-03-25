
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, ArrowRight } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here would be the API call to submit the form
      console.log("Form submitted:", formData);
      setFormSubmitted(true);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Show success state briefly
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }
  };

  const faqs = [
    {
      question: "What is the registration fee for the Tour of Hampi?",
      answer: "Registration fees vary by category: Elite: ₹2,500, Amateur: ₹1,800, Open: ₹1,200. Early bird discounts are available until September 15, 2023."
    },
    {
      question: "Is there accommodation available for participants?",
      answer: "While we don't provide accommodation directly, we have partnered with several hotels and guesthouses in Hampi that offer special rates for participants. You'll receive a list of recommended accommodations after registration."
    },
    {
      question: "What happens in case of bad weather?",
      answer: "The event will proceed in light rain, but may be delayed or rescheduled in case of severe weather conditions that pose safety risks. Any changes will be communicated to all participants via email and SMS."
    },
    {
      question: "Are there transportation options to Hampi?",
      answer: "Hampi is accessible by road from Hospet (13km) and Bellary (60km). The nearest railway station is Hospet Junction, and the nearest airports are Bellary (60km) and Hubli (143km). We can arrange shuttles from Hospet to the race venue for participants."
    },
    {
      question: "Is mechanical support available during the race?",
      answer: "Yes, we provide mechanical support stations at key points along the route. We recommend carrying basic spares and tools, but our technical team can assist with more significant issues."
    },
    {
      question: "Can I use an e-bike for the race?",
      answer: "E-bikes are not permitted in the competitive categories. However, we have a separate non-competitive e-bike tour category that follows a modified route."
    }
  ];

  return (
    <>
      {/* Page Header */}
      <div className="relative pt-32 pb-20 bg-hampi-orange overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582578598774-a377d4eb8616?q=80&w=1471&auto=format&fit=crop')" }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-white/90">Have questions about the Tour of Hampi? We're here to help.</p>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-hampi-dark mb-8">Get in Touch</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hampi-orange ${
                        formErrors.name ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Enter your name"
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hampi-orange ${
                        formErrors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Enter your email"
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="subject">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hampi-orange ${
                        formErrors.subject ? "border-red-500" : "border-gray-300"
                      }`}
                    >
                      <option value="">Select a subject</option>
                      <option value="Registration Inquiry">Registration Inquiry</option>
                      <option value="Sponsorship Opportunity">Sponsorship Opportunity</option>
                      <option value="Volunteer Information">Volunteer Information</option>
                      <option value="Media Inquiry">Media Inquiry</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Other">Other</option>
                    </select>
                    {formErrors.subject && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.subject}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hampi-orange ${
                        formErrors.message ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Your message here..."
                    ></textarea>
                    {formErrors.message && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    Send Message <Send size={18} />
                  </button>
                </form>
                
                {formSubmitted && (
                  <div className="mt-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Message sent successfully!</p>
                      <p className="text-sm">Thank you for reaching out. We'll get back to you within 24-48 hours.</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-hampi-dark mb-8">Contact Information</h2>
                
                <div className="bg-gray-50 rounded-xl p-8 mb-10">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-hampi-orange rounded-full p-3 text-white shrink-0">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-hampi-dark mb-1">Race Office</h3>
                        <p className="text-gray-600">
                          Tour of Hampi Race HQ<br />
                          Hampi Bazaar, Near Virupaksha Temple<br />
                          Hampi, Karnataka, India
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-hampi-orange rounded-full p-3 text-white shrink-0">
                        <Mail size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-hampi-dark mb-1">Email</h3>
                        <p className="text-gray-600">
                          General Inquiries: <a href="mailto:info@tourofhampi.com" className="text-hampi-blue hover:underline">info@tourofhampi.com</a><br />
                          Registration Support: <a href="mailto:register@tourofhampi.com" className="text-hampi-blue hover:underline">register@tourofhampi.com</a><br />
                          Sponsorship: <a href="mailto:sponsors@tourofhampi.com" className="text-hampi-blue hover:underline">sponsors@tourofhampi.com</a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-hampi-orange rounded-full p-3 text-white shrink-0">
                        <Phone size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-hampi-dark mb-1">Phone</h3>
                        <p className="text-gray-600">
                          Main Office: <a href="tel:+919876543210" className="text-hampi-blue hover:underline">+91 987 654 3210</a><br />
                          Race Day Support: <a href="tel:+919876543211" className="text-hampi-blue hover:underline">+91 987 654 3211</a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-hampi-orange rounded-full p-3 text-white shrink-0">
                        <Clock size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-hampi-dark mb-1">Office Hours</h3>
                        <p className="text-gray-600">
                          Monday to Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 2:00 PM<br />
                          Sunday: Closed
                        </p>
                        <p className="mt-1 text-sm text-gray-600">
                          <strong>Race Week:</strong> Extended hours, 8:00 AM - 8:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="font-semibold text-lg text-hampi-dark mb-4">Follow Us</h3>
                  <p className="text-gray-600 mb-4">
                    Stay updated with the latest news, training tips, and event information by following us on social media.
                  </p>
                  <div className="flex gap-4">
                    <a href="#" className="bg-gray-100 hover:bg-gray-200 transition-colors p-3 rounded-full text-gray-700">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="bg-gray-100 hover:bg-gray-200 transition-colors p-3 rounded-full text-gray-700">
                      <Facebook size={20} />
                    </a>
                    <a href="#" className="bg-gray-100 hover:bg-gray-200 transition-colors p-3 rounded-full text-gray-700">
                      <Twitter size={20} />
                    </a>
                    <a href="#" className="bg-gray-100 hover:bg-gray-200 transition-colors p-3 rounded-full text-gray-700">
                      <Youtube size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* FAQs */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-hampi-dark mb-10 text-center">Frequently Asked Questions</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <div className="p-6">
                      <h3 className="font-semibold text-lg text-hampi-dark mb-3">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <p className="text-gray-600 mb-6">
                  Don't see your question here? Feel free to reach out to us directly.
                </p>
                <Link to="/register" className="btn-primary inline-flex">
                  Register Now <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Instagram = (props) => (
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
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Facebook = (props) => (
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
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Twitter = (props) => (
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
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Youtube = (props) => (
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
    <path d="M12 19c-2.3 0-6.4-.2-8.1-.6-.7-.2-1.2-.7-1.4-1.4-.3-1.1-.5-3.4-.5-5s.2-3.9.5-5c.2-.7.7-1.2 1.4-1.4C5.6 5.2 9.7 5 12 5s6.4.2 8.1.6c.7.2 1.2.7 1.4 1.4.3 1.1.5 3.4.5 5s-.2 3.9-.5 5c-.2.7-.7 1.2-1.4 1.4-1.7.4-5.8.6-8.1.6z" />
    <polygon points="10 15 15 12 10 9 10 15" />
  </svg>
);

export default Contact;
