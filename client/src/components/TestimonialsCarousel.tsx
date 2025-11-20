import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  text: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ahmed Al-Mansouri",
    company: "Global Trade Solutions",
    text: "Al Doha Exchange has been instrumental in our international business operations. Their competitive rates and fast processing have saved us thousands of dollars.",
    rating: 5,
    avatar: "AM"
  },
  {
    id: 2,
    name: "Fatima Al-Kaabi",
    company: "Middle East Finance Group",
    text: "Exceptional service and support! The team is always available to help with any currency exchange needs. Highly recommended for businesses and individuals.",
    rating: 5,
    avatar: "FK"
  },
  {
    id: 3,
    name: "Mohammed Al-Thani",
    company: "International Trading Corp",
    text: "The best exchange rates I've found in the market. Their platform is user-friendly and the customer service is outstanding. Five stars!",
    rating: 5,
    avatar: "MT"
  },
  {
    id: 4,
    name: "Layla Al-Dosari",
    company: "Global Investment Partners",
    text: "Professional, reliable, and trustworthy. Al Doha Exchange has become our go-to partner for all currency conversion needs.",
    rating: 5,
    avatar: "LD"
  },
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoPlay]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="w-full">
      <div className="relative bg-slate-800/50 backdrop-blur-sm border border-gold/30 rounded-2xl p-8 md:p-12 min-h-96 flex flex-col justify-between">
        {/* Stars */}
        <div className="flex gap-1 mb-6">
          {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-gold text-gold" />
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed italic">
          "{currentTestimonial.text}"
        </p>

        {/* Author Info */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold to-gold/60 flex items-center justify-center">
            <span className="text-sm font-bold text-background">{currentTestimonial.avatar}</span>
          </div>
          <div>
            <p className="font-semibold text-white">{currentTestimonial.name}</p>
            <p className="text-sm text-gray-400">{currentTestimonial.company}</p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 left-4 -translate-y-1/2">
          <button
            onClick={goToPrevious}
            className="bg-gold/20 hover:bg-gold/30 border border-gold/50 rounded-full p-2 transition transform hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gold" />
          </button>
        </div>

        <div className="absolute top-1/2 right-4 -translate-y-1/2">
          <button
            onClick={goToNext}
            className="bg-gold/20 hover:bg-gold/30 border border-gold/50 rounded-full p-2 transition transform hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gold" />
          </button>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setAutoPlay(false);
            }}
            className={`h-2 rounded-full transition ${
              index === currentIndex
                ? "bg-gold w-8"
                : "bg-gold/30 w-2 hover:bg-gold/50"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
