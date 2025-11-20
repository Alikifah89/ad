import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.services': 'خدماتنا',
    'nav.rates': 'أسعار الصرف',
    'nav.about': 'من نحن',
    'nav.contact': 'اتصل بنا',
    'nav.getStarted': 'ابدأ الآن',
    
    // Hero Section
    'hero.title': 'شريكك الموثوق في <span class="text-gold">تبادل العملات</span> في العراق',
    'hero.subtitle': 'خدمة صرف عملات رائدة مقرها بغداد بأسعار تنافسية ودعم على مدار الساعة',
    'hero.cta.exchange': 'ابدأ التداول الآن',
    'hero.cta.learn': 'اعرف المزيد',
    
    // Currency Rates
    'rates.title': 'أسعار الصرف المباشرة',
    'rates.subtitle': 'أسعار تحديث مباشر للعملات الرئيسية',
    
    // Why Choose Us
    'features.title': 'لماذا تختار الدوحة للصرافة',
    'features.subtitle': 'نحن نقدم أفضل خدمات صرف العملات في العراق',
    'features.rates.title': 'أسعار تنافسية',
    'features.rates.desc': 'أفضل أسعار الصرف في السوق',
    'features.fast.title': 'معاملات سريعة',
    'features.fast.desc': 'معالجة فورية لجميع التحويلات',
    'features.support.title': 'دعم 24/7',
    'features.support.desc': 'فريق دعم متاح باللغتين العربية والإنجليزية',
    'features.secure.title': 'آمن وموثوق',
    'features.secure.desc': 'معاملات مشفرة وآمنة بالكامل',
    
    // Currency Converter
    'converter.title': 'حول العملات فوراً',
    'converter.subtitle': 'احصل على أسعار صرف دقيقة وحول عملاتك بسهولة',
    'converter.from': 'من',
    'converter.to': 'إلى',
    'converter.amount': 'المبلغ',
    'converter.convert': 'تحويل',
    'converter.rate': 'سعر الصرف',
    
    // Offices
    'offices.title': 'مكاتبنا في العراق',
    'offices.subtitle': 'قم بزيارتنا في أي من فروعنا',
    'offices.baghdad': 'بغداد',
    'offices.basra': 'البصرة',
    'offices.erbil': 'أربيل',
    'offices.doha': 'الدوحة',
    
    // Stats
    'stats.title': 'موثوق به في جميع أنحاء المنطقة',
    'stats.subtitle': 'أرقامنا تتحدث عن نفسها',
    'stats.transactions': 'معاملات سنوية',
    'stats.customers': 'عملاء راضون',
    'stats.countries': 'دولة',
    'stats.rating': 'تقييم العملاء',
    
    // Testimonials
    'testimonials.title': 'ماذا يقول عملاؤنا',
    'testimonials.subtitle': 'آراء عملائنا الكرام',
    
    // Services
    'services.title': 'خدماتنا',
    'services.subtitle': 'نقدم مجموعة واسعة من خدمات الصرافة',
    'services.exchange.title': 'صرف العملات',
    'services.exchange.desc': 'صرف جميع العملات الرئيسية بأفضل الأسعار',
    'services.transfer.title': 'تحويل الأموال',
    'services.transfer.desc': 'تحويلات دولية سريعة وآمنة',
    'services.corporate.title': 'خدمات الشركات',
    'services.corporate.desc': 'حلول مخصصة للشركات والمؤسسات',
    
    // FAQ
    'faq.title': 'الأسئلة الشائعة',
    'faq.subtitle': 'إجابات على الأسئلة الأكثر شيوعاً',
    
    // Contact
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'نحن هنا للإجابة على استفساراتك',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'رقم الهاتف',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال',
    
    // Newsletter
    'newsletter.title': 'اشترك في نشرتنا الإخبارية',
    'newsletter.subtitle': 'احصل على آخر الأخبار والعروض',
    'newsletter.email': 'بريدك الإلكتروني',
    'newsletter.subscribe': 'اشترك',
    
    // Footer
    'footer.about': 'عن الشركة',
    'footer.services': 'الخدمات',
    'footer.contact': 'اتصل بنا',
    'footer.follow': 'تابعنا',
    'footer.rights': 'جميع الحقوق محفوظة',
    
    // CTA
    'cta.title': 'هل أنت مستعد للصرافة؟',
    'cta.subtitle': 'ابدأ بتبادل عملاتك اليوم بأفضل الأسعار',
    'cta.exchange': 'ابدأ الصرافة',
    'cta.contact': 'اتصل بنا',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.rates': 'Rates',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',
    
    // Hero Section
    'hero.title': 'Your Trusted <span class="text-gold">Currency</span> Partner in Iraq',
    'hero.subtitle': 'Leading currency exchange service based in Baghdad with competitive rates and 24/7 support',
    'hero.cta.exchange': 'Start Trading Now',
    'hero.cta.learn': 'Learn More',
    
    // Currency Rates
    'rates.title': 'Live Exchange Rates',
    'rates.subtitle': 'Real-time rates for major currencies',
    
    // Why Choose Us
    'features.title': 'Why Choose Al Doha Exchange',
    'features.subtitle': 'We provide the best currency exchange services in Iraq',
    'features.rates.title': 'Competitive Rates',
    'features.rates.desc': 'Best exchange rates in the market',
    'features.fast.title': 'Fast Transactions',
    'features.fast.desc': 'Instant processing for all transfers',
    'features.support.title': '24/7 Support',
    'features.support.desc': 'Support team available in Arabic and English',
    'features.secure.title': 'Secure & Trusted',
    'features.secure.desc': 'Fully encrypted and secure transactions',
    
    // Currency Converter
    'converter.title': 'Convert Currencies Instantly',
    'converter.subtitle': 'Get accurate exchange rates and convert your currencies easily',
    'converter.from': 'From',
    'converter.to': 'To',
    'converter.amount': 'Amount',
    'converter.convert': 'Convert',
    'converter.rate': 'Exchange Rate',
    
    // Offices
    'offices.title': 'Our Offices Across Iraq',
    'offices.subtitle': 'Visit us at any of our branches',
    'offices.baghdad': 'Baghdad',
    'offices.basra': 'Basra',
    'offices.erbil': 'Erbil',
    'offices.doha': 'Doha',
    
    // Stats
    'stats.title': 'Trusted Across the Region',
    'stats.subtitle': 'Our numbers speak for themselves',
    'stats.transactions': 'Annual Transactions',
    'stats.customers': 'Happy Customers',
    'stats.countries': 'Countries',
    'stats.rating': 'Customer Rating',
    
    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Feedback from our valued customers',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'We offer a wide range of exchange services',
    'services.exchange.title': 'Currency Exchange',
    'services.exchange.desc': 'Exchange all major currencies at the best rates',
    'services.transfer.title': 'Money Transfer',
    'services.transfer.desc': 'Fast and secure international transfers',
    'services.corporate.title': 'Corporate Services',
    'services.corporate.desc': 'Customized solutions for businesses',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Answers to common questions',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'We\'re here to answer your questions',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.message': 'Message',
    'contact.send': 'Send',
    
    // Newsletter
    'newsletter.title': 'Subscribe to Our Newsletter',
    'newsletter.subtitle': 'Get the latest news and offers',
    'newsletter.email': 'Your Email',
    'newsletter.subscribe': 'Subscribe',
    
    // Footer
    'footer.about': 'About',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.follow': 'Follow Us',
    'footer.rights': 'All Rights Reserved',
    
    // CTA
    'cta.title': 'Ready to Exchange?',
    'cta.subtitle': 'Start exchanging your currencies today at the best rates',
    'cta.exchange': 'Start Exchange',
    'cta.contact': 'Contact Us',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Set Arabic as default language
  const [language, setLanguageState] = useState<Language>('ar');

  useEffect(() => {
    // Load saved language preference or default to Arabic
    const saved = localStorage.getItem('language') as Language;
    if (saved && (saved === 'ar' || saved === 'en')) {
      setLanguageState(saved);
    } else {
      setLanguageState('ar'); // Default to Arabic
      localStorage.setItem('language', 'ar');
    }
  }, []);

  useEffect(() => {
    // Update HTML dir and lang attributes
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ar']] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
