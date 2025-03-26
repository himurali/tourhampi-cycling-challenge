
import { useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Categories from "@/components/Categories";
import RouteMap from "@/components/RouteMap";
import SectionSeparator from "@/components/SectionSeparator";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const Index = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <AnimateOnScroll animation="fade-in">
        <Hero />
      </AnimateOnScroll>
      
      <SectionSeparator variant="chain" />
      
      <AnimateOnScroll animation="fade-in">
        <About />
      </AnimateOnScroll>
      
      <SectionSeparator variant="mountain" bgColor="rgba(25, 118, 210, 0.1)" fillColor="#f8fafc" />
      
      <AnimateOnScroll animation="fade-in">
        <Categories />
      </AnimateOnScroll>
      
      <SectionSeparator variant="wave" orientation="up" fillColor="#ffffff" />
      
      <AnimateOnScroll animation="fade-in">
        <RouteMap />
      </AnimateOnScroll>
    </div>
  );
};

export default Index;
