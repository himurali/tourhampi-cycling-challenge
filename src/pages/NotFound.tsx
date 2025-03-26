
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <AnimateOnScroll animation="bounce-in">
          <h1 className="text-6xl font-bold mb-4 text-hampi-orange">404</h1>
        </AnimateOnScroll>
        
        <AnimateOnScroll animation="fade-in" delay={200}>
          <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        </AnimateOnScroll>
        
        <AnimateOnScroll animation="slide-in-up" delay={400}>
          <a href="/" className="text-hampi-blue hover:text-hampi-orange underline transition-colors duration-300">
            Return to Home
          </a>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default NotFound;
