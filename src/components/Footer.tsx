
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hampi-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img
                src="/lovable-uploads/91b3a7eb-00c5-4692-be83-a47df8082675.png"
                alt="Tour of Hampi Logo"
                className="h-12 w-auto"
              />
              <h3 className="font-display text-xl font-bold">Tour of Hampi</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Experience the ultimate cycling challenge amidst the ancient ruins of Hampi.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-hampi-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-hampi-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-hampi-orange transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-hampi-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-hampi-orange transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-300 hover:text-hampi-orange transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/route" className="text-gray-300 hover:text-hampi-orange transition-colors">
                  Route
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-300 hover:text-hampi-orange transition-colors">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Information</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/prizes" className="text-gray-300 hover:text-hampi-orange transition-colors">
                  Prizes
                </Link>
              </li>
              <li>
                <Link to="/rules" className="text-gray-300 hover:text-hampi-orange transition-colors">
                  Rules & Regulations
                </Link>
              </li>
              <li>
                <Link to="/sponsors" className="text-gray-300 hover:text-hampi-orange transition-colors">
                  Sponsors
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-hampi-orange transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-hampi-orange transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-hampi-orange shrink-0 mt-1" />
                <span className="text-gray-300">
                  Race Office, Hampi Bazaar, Hampi, Karnataka, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-hampi-orange shrink-0" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-hampi-orange transition-colors">
                  +91 987 654 3210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-hampi-orange shrink-0" />
                <a href="mailto:info@tourofhampi.com" className="text-gray-300 hover:text-hampi-orange transition-colors">
                  info@tourofhampi.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tour of Hampi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
