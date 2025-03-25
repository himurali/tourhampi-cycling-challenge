
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route as RouterRoute } from "react-router-dom";
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

const queryClient = new QueryClient();

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
          
          {/* Tour of Hampi Logo with corrected color */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-36 h-36 flex items-center justify-center rounded-full bg-white bg-opacity-20 backdrop-blur-sm">
              <img 
                src="/lovable-uploads/91b3a7eb-00c5-4692-be83-a47df8082675.png" 
                alt="Tour of Hampi Logo" 
                className="w-32 h-32 z-10"
                style={{ filter: "brightness(1.05) hue-rotate(15deg)" }}
              />
              
              {/* Colored overlay to ensure correct brand color */}
              <div 
                className="absolute inset-0 rounded-full z-0" 
                style={{ 
                  background: "radial-gradient(circle, rgba(255,133,0,0.4) 0%, rgba(255,133,0,0) 70%)",
                  mixBlendMode: "color"
                }}
              ></div>
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
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
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
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
