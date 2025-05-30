
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, FileText } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Categories", path: "/categories" },
    { name: "Route", path: "/route" },
    { name: "Prizes", path: "/prizes" },
    { name: "Rules", path: "/rules" },
    { name: "CSR", path: "/csr" },
    { name: "Docs", path: "/docs", icon: FileText },
    { name: "Sponsors", path: "/sponsors" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Always show solid background for pages other than home
  const isHomePage = location.pathname === "/";
  const shouldShowSolidBackground = scrolled || !isHomePage;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        shouldShowSolidBackground
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/lovable-uploads/91b3a7eb-00c5-4692-be83-a47df8082675.png"
            alt="Tour of Hampi Logo"
            className="h-12 w-auto"
          />
          <div className="font-display text-hampi-dark font-bold text-xl">
            Tour of Hampi
          </div>
        </Link>

        {isMobile ? (
          <button
            onClick={toggleMenu}
            className="p-2 text-hampi-dark focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        ) : (
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-medium transition-all duration-300 hover:text-hampi-orange text-sm flex items-center gap-1
                  ${
                    location.pathname === item.path
                      ? "text-hampi-orange"
                      : "text-hampi-dark"
                  }
                  after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 
                  after:bg-hampi-orange after:origin-bottom-right after:transition-transform after:duration-300 
                  hover:after:scale-x-100 hover:after:origin-bottom-left
                  ${
                    location.pathname === item.path
                      ? "after:scale-x-100 after:origin-bottom-left"
                      : ""
                  }`}
              >
                {item.icon && <item.icon size={16} />} {item.name}
              </Link>
            ))}
            <Link
              to="/register"
              className="btn-primary text-sm ml-6"
            >
              Register Now
            </Link>
          </nav>
        )}
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden pt-20`}
      >
        <nav className="flex flex-col p-8 space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-xl font-medium flex items-center gap-2 ${
                location.pathname === item.path
                  ? "text-hampi-orange"
                  : "text-hampi-dark"
              }`}
            >
              {item.icon && <item.icon size={20} />} {item.name}
            </Link>
          ))}
          <Link
            to="/register"
            className="btn-primary w-full mt-8 justify-center"
          >
            Register Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
