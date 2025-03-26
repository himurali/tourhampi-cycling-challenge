
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route as RouterRoute, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Categories from "./pages/Categories";
import RouteInfo from "./pages/Route";
import Prizes from "./pages/Prizes";
import Rules from "./pages/Rules";
import Register from "./pages/Register";
import Sponsors from "./pages/Sponsors";
import Contact from "./pages/Contact";
import CSR from "./pages/CSR";
import Docs from "./pages/Docs";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

const queryClient = new QueryClient();

// ScrollToTop component to scroll to top when route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for smoother transitions
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-hampi-orange flex items-center justify-center">
        <div className="relative w-40 h-40">
          {/* Rotating chain border */}
          <div className="absolute inset-0 animate-spin-slow border-2 border-white border-opacity-30 rounded-full"></div>
          
          {/* Simplified logo display with exact color */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-white p-2 flex items-center justify-center animate-bounce-in">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="45" fill="#FF8500" />
                <path d="M30 40 L50 60 L70 40" stroke="white" strokeWidth="5" fill="none" />
                <path d="M40 50 L50 60 L60 50" stroke="white" strokeWidth="5" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <PageTransition>
                <Routes>
                  <RouterRoute path="/" element={<Index />} />
                  <RouterRoute path="/about" element={<About />} />
                  <RouterRoute path="/categories" element={<Categories />} />
                  <RouterRoute path="/route" element={<RouteInfo />} />
                  <RouterRoute path="/prizes" element={<Prizes />} />
                  <RouterRoute path="/rules" element={<Rules />} />
                  <RouterRoute path="/register" element={<Register />} />
                  <RouterRoute path="/sponsors" element={<Sponsors />} />
                  <RouterRoute path="/contact" element={<Contact />} />
                  <RouterRoute path="/csr" element={<CSR />} />
                  <RouterRoute path="/docs" element={<Docs />} />
                  <RouterRoute path="*" element={<NotFound />} />
                </Routes>
              </PageTransition>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
