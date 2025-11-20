import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { ChevronDown, TrendingUp, Zap, Clock, Shield, Globe, DollarSign, ArrowRight, Menu, X, MapPin, Phone, Mail } from "lucide-react";
import { APP_LOGO, APP_TITLE } from "@/const";
import { CurrencyConverter } from "@/components/CurrencyConverter";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { PageTransition } from "@/components/PageTransition";
import { ContactForm } from "@/components/ContactForm";
import { FAQSection } from "@/components/FAQSection";
import { ServicesDetail } from "@/components/ServicesDetail";
import { LiveStats } from "@/components/LiveStats";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Newsletter } from "@/components/Newsletter";
import { Logo3D } from "@/components/Logo3D";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { COMPANY_INFO, OFFICE_LOCATIONS, FEATURES_IRAQ } from "@/constants/company";
import { useState, useEffect, useRef } from "react";

/**
 * Al Doha Exchange - Premium Portfolio Website
 * Full-width video background homepage with auto-sliding currency rates banner
 */
export default function Home() {
  const { user, loading, isAuthenticated, logout } = useAuth();
  const { t, isRTL } = useLanguage();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <PageTransition>
      <div className="w-full min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/60 to-transparent backdrop-blur-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-background" />
            </div>
            <h1 className="text-2xl font-bold text-white">{APP_TITLE}</h1>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-white/80 hover:text-white transition">{t('nav.services')}</a>
            <a href="#rates" className="text-white/80 hover:text-white transition">{t('nav.rates')}</a>
            <a href="#about" className="text-white/80 hover:text-white transition">{t('nav.about')}</a>
            <a href="#contact" className="text-white/80 hover:text-white transition">{t('nav.contact')}</a>
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-gold transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="flex items-center gap-3">
            {isAuthenticated ? (
              <Button 
                onClick={logout}
                variant="outline" 
                className="text-white border-white/30 hover:bg-white/10"
              >
                {t('nav.logout') || 'Logout'}
              </Button>
            ) : (
              <Button 
                className="bg-gold text-background hover:bg-gold/90"
              >
                {t('nav.getStarted')}
              </Button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-16 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-gold/20 z-40 md:hidden">
          <div className="container py-4 space-y-4">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-white/80 hover:text-white transition py-2">{t('nav.services')}</a>
            <a href="#rates" onClick={() => setMobileMenuOpen(false)} className="block text-white/80 hover:text-white transition py-2">{t('nav.rates')}</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-white/80 hover:text-white transition py-2">{t('nav.about')}</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-white/80 hover:text-white transition py-2">{t('nav.contact')}</a>
          </div>
        </div>
      )}

      {/* Hero Section with Video Background */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source 
              src="https://videos.pexels.com/video-files/3945683/3945683-hd_1920_1080_25fps.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
          
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
          
          {/* 3D Logo Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
            <div className="w-full max-w-2xl h-full">
              <Logo3D />
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="hero-content container flex flex-col items-center justify-center text-center gap-8 px-4">
          <div className="space-y-4 animate-fadeInUp">
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight" dangerouslySetInnerHTML={{ __html: t('hero.title') }}>
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-slideInUp" style={{ animationDelay: "0.2s" }}>
            <Button 
              className="btn-premium px-8 py-6 text-lg rounded-lg"
            >
              {t('hero.cta.exchange')}
              <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </Button>
            <Button 
              variant="outline"
              className="px-8 py-6 text-lg text-white border-white/50 hover:bg-white/10 rounded-lg"
            >
              {t('hero.cta.learn')}
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator">
          <ChevronDown className="w-8 h-8 text-gold animate-bounce" />
        </div>
      </section>

      {/* Currency Rate Ticker Banner */}
      <section id="rates" className="w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-8 border-b border-gold/20">
        <div className="container">
          <h3 className="text-center text-sm font-semibold text-gold uppercase tracking-widest mb-6">
            Live Exchange Rates
          </h3>
          
          {/* Auto-Sliding Banner */}
          <div className="relative overflow-hidden py-4">
            <div className="flex gap-6 animate-slide" style={{ width: "200%" }}>
              {/* Currency Rate Cards - Duplicated for seamless loop */}
              {[
                { pair: "USD/QAR", rate: "3.64", change: "+0.2%", positive: true },
                { pair: "EUR/QAR", rate: "4.12", change: "-0.1%", positive: false },
                { pair: "GBP/QAR", rate: "4.58", change: "+0.3%", positive: true },
                { pair: "JPY/QAR", rate: "0.025", change: "-0.5%", positive: false },
                { pair: "AED/QAR", rate: "0.99", change: "+0.0%", positive: true },
                { pair: "SAR/QAR", rate: "0.97", change: "+0.1%", positive: true },
                { pair: "INR/QAR", rate: "0.044", change: "+0.4%", positive: true },
                { pair: "CNY/QAR", rate: "0.50", change: "-0.2%", positive: false },
              ].map((rate, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-48 bg-slate-700/50 backdrop-blur-sm border border-gold/30 rounded-lg p-4 hover:border-gold/60 hover:bg-slate-700/70 transition cursor-pointer group animate-slideUp"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <p className="text-gold font-semibold text-sm group-hover:text-gold/80 transition">{rate.pair}</p>
                  <p className="text-white text-2xl font-bold font-mono mt-2">{rate.rate}</p>
                  <p className={`text-sm font-semibold mt-1 ${rate.positive ? "text-success" : "text-danger"}`}>
                    {rate.change}
                  </p>
                </div>
              ))}
              
              {/* Duplicate for seamless loop */}
              {[
                { pair: "USD/QAR", rate: "3.64", change: "+0.2%", positive: true },
                { pair: "EUR/QAR", rate: "4.12", change: "-0.1%", positive: false },
                { pair: "GBP/QAR", rate: "4.58", change: "+0.3%", positive: true },
                { pair: "JPY/QAR", rate: "0.025", change: "-0.5%", positive: false },
                { pair: "AED/QAR", rate: "0.99", change: "+0.0%", positive: true },
                { pair: "SAR/QAR", rate: "0.97", change: "+0.1%", positive: true },
                { pair: "INR/QAR", rate: "0.044", change: "+0.4%", positive: true },
                { pair: "CNY/QAR", rate: "0.50", change: "-0.2%", positive: false },
              ].map((rate, idx) => (
                <div
                  key={`duplicate-${idx}`}
                  className="flex-shrink-0 w-48 bg-slate-700/50 backdrop-blur-sm border border-gold/30 rounded-lg p-4 hover:border-gold/60 hover:bg-slate-700/70 transition cursor-pointer group animate-slideUp"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <p className="text-gold font-semibold text-sm group-hover:text-gold/80 transition">{rate.pair}</p>
                  <p className="text-white text-2xl font-bold font-mono mt-2">{rate.rate}</p>
                  <p className={`text-sm font-semibold mt-1 ${rate.positive ? "text-success" : "text-danger"}`}>
                    {rate.change}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="services" className="w-full py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('features.title')}</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES_IRAQ.map((feature, idx) => {
              const iconMap: Record<string, any> = {
                TrendingUp,
                Zap,
                Clock,
                Shield,
              };
              const Icon = iconMap[feature.icon] || TrendingUp;
              return (
                <div
                  key={idx}
                  className="card-hover bg-card border border-border rounded-xl p-8 text-center space-y-4"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-gold" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Currency Converter Section */}
      <section className="w-full py-20 bg-gradient-to-b from-slate-900 to-slate-800 border-t border-gold/20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Convert Currencies Instantly</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get real-time exchange rates and convert between 9+ major currencies
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <CurrencyConverter />
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section id="about" className="w-full py-20 bg-card border-t border-border">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Offices Across Iraq</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Headquartered in Baghdad with branches in major Iraqi cities and the region
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {OFFICE_LOCATIONS.map((office, idx) => (
              <div
                key={idx}
                className={`card-hover rounded-xl p-6 border ${
                  office.isPrimary
                    ? "bg-gold/10 border-gold/50"
                    : "bg-card border-border"
                }`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">{office.city}</h3>
                    <p className="text-sm text-foreground/70">{office.country}</p>
                  </div>
                </div>
                <p className="text-sm text-foreground/70 mb-4">{office.address}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-foreground/70">
                    <Phone className="w-4 h-4" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <Mail className="w-4 h-4" />
                    <span>{office.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">Trusted Across the Region</h2>
              <p className="text-lg text-foreground/70">
                With operations spanning across 50+ countries, Al Doha Exchange is your trusted partner for international currency transactions.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                {[
                  { number: "50+", label: "Countries" },
                  { number: "100K+", label: "Happy Clients" },
                  { number: "$2B+", label: "Transactions" },
                  { number: "24/7", label: "Support" }
                ].map((stat, idx) => (
                  <div key={idx} className="space-y-2">
                    <p className="text-3xl font-bold text-gold">{stat.number}</p>
                    <p className="text-foreground/70">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Button className="btn-premium mt-8">
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="relative h-96 bg-gradient-to-br from-gold/10 to-cyan/10 rounded-2xl border border-gold/20 flex items-center justify-center">
              <Globe className="w-32 h-32 text-gold/30" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/5 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-20 bg-background border-t border-border">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Al Doha Exchange
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      {/* Live Stats Section */}
      <LiveStats />

      {/* Services Detail Section */}
      <ScrollReveal>
        <ServicesDetail />
      </ScrollReveal>

      {/* FAQ Section */}
      <ScrollReveal animation="fadeIn">
        <FAQSection />
      </ScrollReveal>

      {/* Newsletter Section */}
      <ScrollReveal animation="scaleIn">
        <Newsletter />
      </ScrollReveal>

      {/* Contact Form Section */}
      <section id="contact" className="w-full py-20 bg-gradient-to-b from-card/30 to-background">
        <div className="container">
          <ContactForm />
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-gradient-to-r from-slate-900 to-slate-800 border-t border-gold/20">
        <div className="container text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to Exchange?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Al Doha Exchange for their currency needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button className="btn-premium px-8 py-6 text-lg">
              Open Account Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline"
              className="px-8 py-6 text-lg text-white border-white/50 hover:bg-white/10"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-background border-t border-border py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Al Doha Exchange</h4>
              <p className="text-foreground/70 text-sm">Your trusted global currency partner</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-gold transition">Currency Exchange</a></li>
                <li><a href="#" className="hover:text-gold transition">Money Transfer</a></li>
                <li><a href="#" className="hover:text-gold transition">Corporate Solutions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-gold transition">About Us</a></li>
                <li><a href="#" className="hover:text-gold transition">Blog</a></li>
                <li><a href="#" className="hover:text-gold transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-gold transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-gold transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gold transition">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="section-divider my-8"></div>

          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-foreground/70">
            <p>&copy; 2024 Al Doha Exchange. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gold transition">Twitter</a>
              <a href="#" className="hover:text-gold transition">LinkedIn</a>
              <a href="#" className="hover:text-gold transition">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </PageTransition>
  );
}
