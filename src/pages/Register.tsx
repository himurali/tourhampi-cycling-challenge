import { useEffect, useState } from "react";
import { CheckCircle, Calendar, User, Mail, Phone, AlertTriangle } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  dateOfBirth: string;
  category: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  acceptTerms: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  gender?: string;
  dateOfBirth?: string;
  category?: string;
  emergencyContactName?: string;
  emergencyContactPhone?: string;
  acceptTerms?: string;
}

const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    dateOfBirth: "",
    category: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    acceptTerms: false
  });

  const [activeStep, setActiveStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const validateStep = (step: number) => {
    let errors: FormErrors = {};
    let isValid = true;

    if (step === 1) {
      if (!formData.firstName.trim()) {
        errors.firstName = "First name is required";
        isValid = false;
      }
      if (!formData.lastName.trim()) {
        errors.lastName = "Last name is required";
        isValid = false;
      }
      if (!formData.email.trim()) {
        errors.email = "Email is required";
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = "Email is invalid";
        isValid = false;
      }
      if (!formData.phone.trim()) {
        errors.phone = "Phone number is required";
        isValid = false;
      }
    } else if (step === 2) {
      if (!formData.gender) {
        errors.gender = "Gender is required";
        isValid = false;
      }
      if (!formData.dateOfBirth) {
        errors.dateOfBirth = "Date of birth is required";
        isValid = false;
      }
      if (!formData.category) {
        errors.category = "Category is required";
        isValid = false;
      }
    } else if (step === 3) {
      if (!formData.emergencyContactName.trim()) {
        errors.emergencyContactName = "Emergency contact name is required";
        isValid = false;
      }
      if (!formData.emergencyContactPhone.trim()) {
        errors.emergencyContactPhone = "Emergency contact phone is required";
        isValid = false;
      }
      if (!formData.acceptTerms) {
        errors.acceptTerms = "You must accept the terms and conditions";
        isValid = false;
      }
    }

    setFormErrors(errors);
    return isValid;
  };

  const nextStep = () => {
    if (validateStep(activeStep)) {
      setActiveStep(activeStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    setActiveStep(activeStep - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validateStep(activeStep)) {
      console.log("Form submitted:", formData);
      setFormSubmitted(true);
      window.scrollTo(0, 0);
    }
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-10">
      {[1, 2, 3].map((step) => (
        <div key={step} className="flex items-center">
          <div 
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
              step < activeStep
                ? "bg-hampi-orange text-white"
                : step === activeStep
                ? "bg-hampi-orange text-white"
                : "bg-gray-200 text-gray-500"
            }`}
          >
            {step < activeStep ? <CheckCircle size={20} /> : step}
          </div>
          {step < 3 && (
            <div className={`w-24 h-1 transition-all duration-300 ${
              step < activeStep ? "bg-hampi-orange" : "bg-gray-200"
            }`}></div>
          )}
        </div>
      ))}
    </div>
  );

  const renderPersonalDetails = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-hampi-dark mb-6">Personal Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hampi-orange ${
              formErrors.firstName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Your first name"
          />
          {formErrors.firstName && (
            <p className="text-red-500 text-sm mt-1">{formErrors.firstName}</p>
          )}
        </div>
        
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hampi-orange ${
              formErrors.lastName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Your last name"
          />
          {formErrors.lastName && (
            <p className="text-red-500 text-sm mt-1">{formErrors.lastName}</p>
          )}
        </div>
      </div>
      
      <div>
        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
          Email Address
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Mail size={18} className="text-gray-500" />
          </div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full pl-10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hampi-orange ${
              formErrors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="example@email.com"
          />
        </div>
        {formErrors.email && (
          <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
        )}
      </div>
      
      <div>
        <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
          Phone Number
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Phone size={18} className="text-gray-500" />
          </div>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full pl-10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hampi-orange ${
              formErrors.phone ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="+91 9876543210"
          />
        </div>
        {formErrors.phone && (
          <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
        )}
      </div>
      
      <div className="flex justify-end mt-10">
        <button
          type="button"
          onClick={nextStep}
          className="btn-primary"
        >
          Continue to Race Details
        </button>
      </div>
    </div>
  );

  const renderRaceDetails = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-hampi-dark mb-6">Race Details</h3>
      
      <div>
        <label className="block text-gray-700 font-medium mb-2">Gender</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div 
            className={`p-4 border rounded-md cursor-pointer transition-all ${
              formData.gender === "Male" 
                ? "border-hampi-blue bg-hampi-blue/5 text-hampi-blue" 
                : "border-gray-300 hover:border-gray-400"
            }`}
            onClick={() => handleChange({ target: { name: "gender", value: "Male" } })}
          >
            <div className="flex items-center">
              <input 
                type="radio" 
                name="gender" 
                id="male" 
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="male" className="cursor-pointer">Male</label>
            </div>
          </div>
          
          <div 
            className={`p-4 border rounded-md cursor-pointer transition-all ${
              formData.gender === "Female" 
                ? "border-hampi-blue bg-hampi-blue/5 text-hampi-blue" 
                : "border-gray-300 hover:border-gray-400"
            }`}
            onClick={() => handleChange({ target: { name: "gender", value: "Female" } })}
          >
            <div className="flex items-center">
              <input 
                type="radio" 
                name="gender" 
                id="female" 
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="female" className="cursor-pointer">Female</label>
            </div>
          </div>
        </div>
        {formErrors.gender && (
          <p className="text-red-500 text-sm mt-1">{formErrors.gender}</p>
        )}
      </div>
      
      <div>
        <label className="block text-gray-700 font-medium mb-2" htmlFor="dateOfBirth">
          Date of Birth
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Calendar size={18} className="text-gray-500" />
          </div>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className={`w-full pl-10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hampi-orange ${
              formErrors.dateOfBirth ? "border-red-500" : "border-gray-300"
            }`}
          />
        </div>
        {formErrors.dateOfBirth && (
          <p className="text-red-500 text-sm mt-1">{formErrors.dateOfBirth}</p>
        )}
      </div>
      
      <div>
        <label className="block text-gray-700 font-medium mb-2">Race Category</label>
        <div className="grid grid-cols-1 gap-4">
          {formData.gender && [
            { id: "elite", name: `Elite ${formData.gender}`, description: "120km distance, 1500m elevation" },
            { id: "amateur", name: `Amateur ${formData.gender}`, description: "80km distance, 1000m elevation" },
            { id: "open", name: `Open Category ${formData.gender}`, description: "40km distance, 500m elevation" }
          ].map((category) => (
            <div 
              key={category.id}
              className={`p-4 border rounded-md cursor-pointer transition-all ${
                formData.category === category.id 
                  ? category.id === "elite" 
                    ? "border-hampi-orange bg-hampi-orange/5 text-hampi-orange" 
                    : category.id === "amateur"
                    ? "border-hampi-blue bg-hampi-blue/5 text-hampi-blue"
                    : "border-green-600 bg-green-50 text-green-600"
                  : "border-gray-300 hover:border-gray-400"
              }`}
              onClick={() => handleChange({ target: { name: "category", value: category.id } })}
            >
              <div className="flex items-start">
                <input 
                  type="radio" 
                  name="category" 
                  id={category.id} 
                  value={category.id}
                  checked={formData.category === category.id}
                  onChange={handleChange}
                  className="mr-2 mt-1"
                />
                <div>
                  <label htmlFor={category.id} className="font-medium cursor-pointer">{category.name}</label>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {formErrors.category && (
          <p className="text-red-500 text-sm mt-1">{formErrors.category}</p>
        )}
      </div>
      
      <div className="flex justify-between mt-10">
        <button
          type="button"
          onClick={prevStep}
          className="border border-hampi-orange text-hampi-orange font-semibold py-3 px-6 rounded-md transition-all duration-300 hover:bg-hampi-orange/5"
        >
          Back
        </button>
        <button
          type="button"
          onClick={nextStep}
          className="btn-primary"
        >
          Continue to Final Step
        </button>
      </div>
    </div>
  );

  const renderEmergencyContact = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-hampi-dark mb-6">Emergency Contact & Agreement</h3>
      
      <div>
        <label className="block text-gray-700 font-medium mb-2" htmlFor="emergencyContactName">
          Emergency Contact Name
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <User size={18} className="text-gray-500" />
          </div>
          <input
            type="text"
            id="emergencyContactName"
            name="emergencyContactName"
            value={formData.emergencyContactName}
            onChange={handleChange}
            className={`w-full pl-10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hampi-orange ${
              formErrors.emergencyContactName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Emergency contact full name"
          />
        </div>
        {formErrors.emergencyContactName && (
          <p className="text-red-500 text-sm mt-1">{formErrors.emergencyContactName}</p>
        )}
      </div>
      
      <div>
        <label className="block text-gray-700 font-medium mb-2" htmlFor="emergencyContactPhone">
          Emergency Contact Phone
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Phone size={18} className="text-gray-500" />
          </div>
          <input
            type="tel"
            id="emergencyContactPhone"
            name="emergencyContactPhone"
            value={formData.emergencyContactPhone}
            onChange={handleChange}
            className={`w-full pl-10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-hampi-orange ${
              formErrors.emergencyContactPhone ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="+91 9876543210"
          />
        </div>
        {formErrors.emergencyContactPhone && (
          <p className="text-red-500 text-sm mt-1">{formErrors.emergencyContactPhone}</p>
        )}
      </div>
      
      <div className="bg-gray-50 p-6 rounded-xl">
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle size={20} className="text-hampi-orange shrink-0 mt-1" />
          <p className="text-gray-700 text-sm">
            <strong>Important:</strong> Please provide accurate emergency contact information. This person should not be a participant in the race.
          </p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="acceptTerms"
            name="acceptTerms"
            checked={formData.acceptTerms}
            onChange={handleChange}
            className="mt-1"
          />
          <label htmlFor="acceptTerms" className="text-gray-700">
            I agree to the <a href="#" className="text-hampi-blue hover:underline">Terms and Conditions</a>, and acknowledge that cycling can be dangerous. I participate at my own risk and will follow all safety guidelines.
          </label>
        </div>
        {formErrors.acceptTerms && (
          <p className="text-red-500 text-sm">{formErrors.acceptTerms}</p>
        )}
      </div>
      
      <div className="flex justify-between mt-10">
        <button
          type="button"
          onClick={prevStep}
          className="border border-hampi-orange text-hampi-orange font-semibold py-3 px-6 rounded-md transition-all duration-300 hover:bg-hampi-orange/5"
        >
          Back
        </button>
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn-primary"
        >
          Complete Registration
        </button>
      </div>
    </div>
  );

  const renderSuccess = () => (
    <div className="text-center py-12">
      <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
        <CheckCircle size={48} className="text-green-600" />
      </div>
      <h3 className="text-3xl font-bold text-hampi-dark mb-4">Registration Successful!</h3>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        Thank you for registering for the Tour of Hampi. We've sent a confirmation email to {formData.email} with all the details.
      </p>
      <div className="bg-gray-50 p-6 rounded-xl max-w-md mx-auto mb-8">
        <div className="text-left">
          <h4 className="font-semibold mb-4 text-hampi-dark">Next Steps:</h4>
          <ol className="list-decimal pl-5 space-y-2 text-gray-700">
            <li>Check your email for registration confirmation</li>
            <li>Complete the payment process using the link in the email</li>
            <li>Receive your participant kit at the venue</li>
            <li>Attend the pre-race briefing on November 14, 2023</li>
          </ol>
        </div>
      </div>
      <a href="/" className="btn-primary inline-flex">
        Return to Homepage
      </a>
    </div>
  );

  return (
    <>
      <div className="relative pt-32 pb-20 bg-hampi-orange overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?q=80&w=1374&auto=format&fit=crop')" }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Register for Tour of Hampi</h1>
            <p className="text-xl text-white/90">Secure your spot in India's premier cycling challenge and experience the magic of cycling through historic Hampi.</p>
          </div>
        </div>
        
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
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {!formSubmitted ? (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden p-8">
                {renderStepIndicator()}
                <form>
                  {activeStep === 1 && renderPersonalDetails()}
                  {activeStep === 2 && renderRaceDetails()}
                  {activeStep === 3 && renderEmergencyContact()}
                </form>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden p-8">
                {renderSuccess()}
              </div>
            )}
            
            {!formSubmitted && (
              <div className="mt-8 bg-gray-50 p-6 rounded-xl">
                <h4 className="font-semibold mb-4 text-hampi-dark">Registration Notes:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-hampi-orange shrink-0 mt-1" />
                    <span className="text-gray-700 text-sm">Registration fee will be collected after form submission</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-hampi-orange shrink-0 mt-1" />
                    <span className="text-gray-700 text-sm">Limited spots available - register early to secure your participation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-hampi-orange shrink-0 mt-1" />
                    <span className="text-gray-700 text-sm">All participants receive an official race jersey, number plate, and finisher medal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-hampi-orange shrink-0 mt-1" />
                    <span className="text-gray-700 text-sm">Registration closes on October 31, 2023 or when all spots are filled</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
