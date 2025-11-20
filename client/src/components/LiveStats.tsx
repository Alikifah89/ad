import { useEffect } from "react";
import { TrendingUp, Users, Globe, DollarSign } from "lucide-react";
import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";

const stats = [
  {
    icon: DollarSign,
    value: 2000000000,
    suffix: "+",
    label: "Annual Transactions",
    prefix: "$",
    format: (val: number) => {
      if (val >= 1000000000) return `${(val / 1000000000).toFixed(1)}B`;
      if (val >= 1000000) return `${(val / 1000000).toFixed(0)}M`;
      return val.toLocaleString();
    },
  },
  {
    icon: Users,
    value: 100000,
    suffix: "+",
    label: "Happy Customers",
    format: (val: number) => {
      if (val >= 1000) return `${(val / 1000).toFixed(0)}K`;
      return val.toLocaleString();
    },
  },
  {
    icon: Globe,
    value: 50,
    suffix: "+",
    label: "Countries Served",
    format: (val: number) => val.toString(),
  },
  {
    icon: TrendingUp,
    value: 247,
    suffix: "",
    label: "24/7 Support",
    format: (val: number) => "24/7",
  },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const { count, setIsActive } = useCountUp(stat.value, 2500);
  const Icon = stat.icon;

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setIsActive(true), index * 100);
    }
  }, [isVisible, setIsActive, index]);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center p-8 bg-card border border-border rounded-2xl transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold/20 to-cyan/20 flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-gold" />
      </div>

      <div className="text-4xl md:text-5xl font-bold mb-2">
        {stat.prefix}
        {stat.format(count)}
        {stat.suffix}
      </div>

      <div className="text-foreground/60 font-medium">{stat.label}</div>
    </div>
  );
}

export function LiveStats() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted Worldwide
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their currency exchange needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
