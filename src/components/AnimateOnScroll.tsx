
import React, { useEffect, useRef, useState, ReactNode } from 'react';
import { cn } from "@/lib/utils";

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: 'fade-in' | 'slide-in-right' | 'slide-in-left' | 'slide-in-up' | 'slide-in-down' | 'scale-in' | 'bounce-in';
  threshold?: number;
  delay?: number;
  className?: string;
  once?: boolean;
}

const AnimateOnScroll = ({
  children,
  animation = 'fade-in',
  threshold = 0.1,
  delay = 0,
  className = '',
  once = true
}: AnimateOnScrollProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  // Animation classes based on type
  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-in':
        return 'animate-fade-in';
      case 'slide-in-right':
        return 'animate-slide-in-right';
      case 'slide-in-left':
        return 'animate-slide-in-left';
      case 'slide-in-up':
        return 'animate-slide-in-up';
      case 'slide-in-down':
        return 'animate-slide-in-down';
      case 'scale-in':
        return 'animate-scale-in';
      case 'bounce-in':
        return 'animate-bounce-in';
      default:
        return 'animate-fade-in';
    }
  };

  // Delay class
  const getDelayClass = () => {
    switch (delay) {
      case 100:
        return 'delay-100';
      case 200:
        return 'delay-200';
      case 300:
        return 'delay-300';
      case 400:
        return 'delay-400';
      case 500:
        return 'delay-500';
      case 700:
        return 'delay-700';
      case 1000:
        return 'delay-1000';
      default:
        return '';
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        getAnimationClass(),
        getDelayClass(),
        isVisible ? 'opacity-100' : 'opacity-0',
        className
      )}
      style={{
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
