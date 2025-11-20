import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales";

export function FAQSection() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section className="py-20 bg-background" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.faq.title}</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            {lang === "ar"
              ? "اكتشف إجابات عن الأسئلة الشائعة حول خدماتنا"
              : "Find answers to common questions about our currency exchange services"}
          </p>
        </div>
        {/* ... rest of accordion ... */}
        <div className="text-center mt-12">
          <p className="text-foreground/60 mb-4">{t.faq.still}</p>
          <a href="#contact" className="inline-flex items-center gap-2 text-gold font-semibold hover:underline">
            {t.faq.contact}
          </a>
        </div>
      </div>
    </section>
  );
}