import { DollarSign, TrendingUp, Users, Building2, Smartphone, Globe2 } from "lucide-react";

const services = [
  {
    icon: DollarSign,
    title: "Currency Exchange",
    description: "Exchange over 50 major and minor currencies at competitive rates with instant processing.",
    features: ["Real-time rates", "Instant processing", "No hidden fees", "Bulk discounts available"],
  },
  {
    icon: TrendingUp,
    title: "Rate Alerts",
    description: "Set custom rate alerts and get notified when your target exchange rate is reached.",
    features: ["Custom alerts", "SMS notifications", "Email updates", "Mobile app integration"],
  },
  {
    icon: Users,
    title: "Personal Accounts",
    description: "Open a personal account for faster transactions and exclusive member benefits.",
    features: ["Priority service", "Better rates", "Transaction history", "Dedicated support"],
  },
  {
    icon: Building2,
    title: "Corporate Solutions",
    description: "Tailored currency exchange solutions for businesses with high-volume needs.",
    features: ["Volume discounts", "Account manager", "Custom reporting", "API integration"],
  },
  {
    icon: Smartphone,
    title: "Mobile Exchange",
    description: "Exchange currencies on-the-go with our secure mobile platform.",
    features: ["iOS & Android apps", "Biometric security", "Quick transfers", "Live rate tracking"],
  },
  {
    icon: Globe2,
    title: "International Transfers",
    description: "Send money globally to over 200 countries with competitive fees and fast processing.",
    features: ["200+ countries", "Fast transfers", "Secure platform", "Track your transfer"],
  },
];

export function ServicesDetail() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Comprehensive currency exchange solutions designed to meet all your financial needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-2xl p-8 hover:border-gold/50 transition-all duration-300 hover:shadow-xl hover:shadow-gold/10 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold/20 to-cyan/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-gold" />
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>

                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="mt-6 text-gold font-semibold hover:underline flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
