import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What currencies can I exchange at Al Doha Exchange?",
    answer: "We offer exchange services for all major currencies including USD, EUR, GBP, AED, SAR, KWD, QAR, IQD, and many more. We handle over 50 different currencies to meet your international needs.",
  },
  {
    question: "What are your exchange rates and how often do they update?",
    answer: "Our exchange rates are highly competitive and updated in real-time throughout the day based on international market conditions. You can view live rates on our website's currency ticker or contact our offices for the latest rates.",
  },
  {
    question: "Do I need to provide identification for currency exchange?",
    answer: "Yes, for your security and in compliance with Iraqi financial regulations, we require valid government-issued identification (passport or national ID) for all currency exchange transactions. This helps us maintain the highest security standards.",
  },
  {
    question: "What are your operating hours?",
    answer: "Our main Baghdad office operates 24/7 to serve you at any time. Our branch offices in Basra, Erbil, and Doha operate from 8:00 AM to 10:00 PM daily. Customer support is available 24/7 via phone and email in both Arabic and English.",
  },
  {
    question: "Is there a minimum or maximum amount for currency exchange?",
    answer: "We accept exchanges starting from as low as $50 USD equivalent. For large transactions exceeding $10,000 USD equivalent, we recommend contacting us in advance to ensure availability and potentially secure better rates for bulk exchanges.",
  },
  {
    question: "How long does a currency exchange transaction take?",
    answer: "Most standard currency exchange transactions are completed within 5-10 minutes. For larger amounts or less common currencies, it may take up to 30 minutes. Wire transfers and international transactions typically take 1-3 business days.",
  },
  {
    question: "Do you offer corporate or business exchange services?",
    answer: "Yes, we provide specialized corporate solutions including bulk currency exchange, regular business accounts, preferential rates for high-volume clients, and dedicated account managers. Contact our corporate services team for more information.",
  },
  {
    question: "Are my transactions secure and confidential?",
    answer: "Absolutely. We employ bank-level security measures including encrypted transactions, secure facilities, and strict confidentiality protocols. All customer information is protected according to international data protection standards and Iraqi banking regulations.",
  },
  {
    question: "Can I exchange damaged or old currency notes?",
    answer: "We accept slightly worn currency notes in good condition. However, heavily damaged, torn, or defaced notes may not be accepted or may be exchanged at a reduced rate. Please bring your currency to any of our offices for assessment.",
  },
  {
    question: "Do you offer money transfer services?",
    answer: "Yes, in addition to currency exchange, we offer international money transfer services to over 200 countries. Transfers are secure, fast, and competitively priced. Visit any of our offices or contact us for transfer rates and processing times.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our currency exchange services
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-gold/50"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-accent/5 transition"
              >
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 pt-2 text-foreground/70 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-foreground/60 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-gold font-semibold hover:underline"
          >
            Contact our support team →
          </a>
        </div>
      </div>
    </section>
  );
}
