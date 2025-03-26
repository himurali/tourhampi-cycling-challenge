import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Send, AlertTriangle } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

// Define proper types for the form data
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Define proper types for form errors
interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [formErrors, setFormErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let errors: ContactFormErrors = {};
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        console.log("Form submitted:", formData);
        setIsSubmitting(false);
        setFormSubmitted(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      }, 1500);
    }
  };

  return (
    <>
      {/* Page Header */}
      <div className="relative pt-32 pb-20 bg-hampi-dark overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517423440433-e5d5791aa35d?q=80&w=1470&auto=format&fit=crop')" }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimateOnScroll animation="fade-in">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
              <p className="text-xl text-white/90">We'd love to hear from you! Reach out with any questions, feedback, or partnership inquiries.</p>
            </div>
          </AnimateOnScroll>
        </div>
        
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path 
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,56C1248,48,1344,32,1392,24L1440,16L1440,120L1392,120C1344,120,1152,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>
      </div>
      
      {/* Contact Form & Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimateOnScroll animation="slide-in" delay={100}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden p-8">
                <h3 className="text-2xl font-bold text-hampi-dark mb-6">Send us a Message</h3>
                
                {!formSubmitted ? (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
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
                        placeholder="Your full name"
                      />
                      {formErrors.name && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                      )}
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                        Your Email
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
                        placeholder="Your email address"
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                      )}
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2" htmlFor="subject">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hampi-orange ${
                          formErrors.subject ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Subject of your message"
                      />
                      {formErrors.subject && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.subject}</p>
                      )}
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
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
                      className="btn-primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send size={18} />
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                      <svg className="text-green-600 w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-hampi-dark mb-4">Message Sent!</h3>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                      Thank you for contacting us. We'll get back to you as soon as possible.
                    </p>
                  </div>
                )}
              </div>
            </AnimateOnScroll>
            
            {/* Contact Details */}
            <AnimateOnScroll animation="slide-in" delay={200}>
              <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden p-8">
                <h3 className="text-2xl font-bold text-hampi-dark mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-hampi-orange/10 rounded-lg">
                      <MapPin size={20} className="text-hampi-orange" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-hampi-dark">Address:</h4>
                      <p className="text-gray-700">
                        123 Hampi Main Road, <br />
                        Hampi, Karnataka 583239, <br />
                        India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-hampi-orange/10 rounded-lg">
                      <Mail size={20} className="text-hampi-orange" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-hampi-dark">Email:</h4>
                      <p className="text-gray-700">
                        <a href="mailto:info@tourofhampi.com" className="text-hampi-blue hover:underline">
                          info@tourofhampi.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-hampi-orange/10 rounded-lg">
                      <Phone size={20} className="text-hampi-orange" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-hampi-dark">Phone:</h4>
                      <p className="text-gray-700">
                        <a href="tel:+919876543210" className="text-hampi-blue hover:underline">
                          +91 9876543210
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 p-4 rounded-xl">
                    <div className="flex items-start gap-3">
                      <AlertTriangle size={18} className="text-hampi-orange shrink-0 mt-0.5" />
                      <p className="text-gray-700 text-sm">
                        <strong>Note:</strong> Our team aims to respond to all inquiries within 24-48 hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
