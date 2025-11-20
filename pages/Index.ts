"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const translations = {
  en: {
    video: "/my-awesome-background1.mp4",
  },
  ar: {
    video: "/my-awesome-background1.mp4", // same file – no need to duplicate
  },
};

const Index: React.FC = () => {
  const { lang, dir } = useLanguage();
  const t = translations[lang];

  return (
    <div
      dir={dir}
      className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <HeroSection videoSrc={t.video} />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
