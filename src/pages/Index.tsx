
import { useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Categories from "@/components/Categories";
import RouteMap from "@/components/RouteMap";

const Index = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <About />
      <Categories />
      <RouteMap />
    </div>
  );
};

export default Index;
