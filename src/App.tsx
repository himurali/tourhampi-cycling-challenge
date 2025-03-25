
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Route from "./pages/Route";
import Prizes from "./pages/Prizes";
import Rules from "./pages/Rules";
import Register from "./pages/Register";
import Sponsors from "./pages/Sponsors";
import Contact from "./pages/Contact";
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
        <div className="relative w-32 h-32">
          <img 
            src="/lovable-uploads/a60baad1-ca88-4337-9ca2-9ea9dfc7c585.png" 
            alt="Tour of Hampi Logo" 
            className="w-full h-full"
          />
          <div className="absolute inset-0 animate-spin-slow border-4 border-hampi-light border-opacity-30 rounded-full"></div>
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
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/route" element={<Route />} />
                <Route path="/prizes" element={<Prizes />} />
                <Route path="/rules" element={<Rules />} />
                <Route path="/register" element={<Register />} />
                <Route path="/sponsors" element={<Sponsors />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
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
