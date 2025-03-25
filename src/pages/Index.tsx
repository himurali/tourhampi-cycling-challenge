
import { useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Categories from "@/components/Categories";
import RouteMap from "@/components/RouteMap";
import SectionSeparator from "@/components/SectionSeparator";

const Index = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <SectionSeparator variant="chain" />
      <About />
      <SectionSeparator variant="mountain" bgColor="rgba(25, 118, 210, 0.1)" fillColor="#f8fafc" />
      <Categories />
      <SectionSeparator variant="wave" orientation="up" fillColor="#ffffff" />
      <RouteMap />
    </div>
  );
};

export default Index;
