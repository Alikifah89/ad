import { useEffect, useState } from "react";
import { DollarSign, TrendingUp, Globe } from "lucide-react";

interface LoadingScreenProps {
  isLoading: boolean;
  progress?: number;
}

const LOADING_TIPS = [
  "Did you know? Al Doha Exchange operates across 50+ countries worldwide.",
  "Tip: Use our currency converter to instantly calculate exchange rates.",
  "Fun fact: We process over $2 billion in transactions annually.",
  "Pro tip: Check our live rates banner for real-time currency updates.",
  "Did you know? We offer 24/7 customer support in multiple languages.",
  "Tip: Compare rates across 9+ major currencies with our converter.",
  "Fun fact: Our platform is trusted by 100,000+ happy clients.",
  "Pro tip: Lock in rates before market volatility with our services.",
];

export function LoadingScreen({ isLoading, progress = 0 }: LoadingScreenProps) {
  const [displayProgress, setDisplayProgress] = useState(0);
  const [currentTip, setCurrentTip] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    const tipInterval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % LOADING_TIPS.length);
    }, 4000);

    return () => clearInterval(tipInterval);
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) {
      setDisplayProgress(0);
      return;
    }

    const interval = setInterval(() => {
      setDisplayProgress((prev) => {
        if (prev >= 90) return prev;
        return prev + Math.random() * 30;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [isLoading]);

  useEffect(() => {
    if (progress > 0) {
      setDisplayProgress(Math.min(progress, 100));
    }
  }, [progress]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black z-50 flex flex-col items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-4">
        {/* Logo/Branding */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-gold to-gold/60 flex items-center justify-center animate-bounce">
            <DollarSign className="w-8 h-8 text-background" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Al Doha Exchange</h1>
            <p className="text-gold text-sm font-semibold">Loading Your Experience</p>
          </div>
        </div>

        {/* Animated Currency Symbols */}
        <div className="flex gap-6 mb-8">
          <div className="flex flex-col items-center gap-2 animate-bounce" style={{ animationDelay: "0s" }}>
            <div className="w-12 h-12 rounded-lg bg-gold/20 border border-gold/50 flex items-center justify-center">
              <span className="text-lg font-bold text-gold">$</span>
            </div>
            <span className="text-xs text-gray-300">USD</span>
          </div>

          <div className="flex flex-col items-center gap-2 animate-bounce" style={{ animationDelay: "0.2s" }}>
            <div className="w-12 h-12 rounded-lg bg-cyan/20 border border-cyan/50 flex items-center justify-center">
              <span className="text-lg font-bold text-cyan">€</span>
            </div>
            <span className="text-xs text-gray-300">EUR</span>
          </div>

          <div className="flex flex-col items-center gap-2 animate-bounce" style={{ animationDelay: "0.4s" }}>
            <div className="w-12 h-12 rounded-lg bg-gold/20 border border-gold/50 flex items-center justify-center">
              <span className="text-lg font-bold text-gold">£</span>
            </div>
            <span className="text-xs text-gray-300">GBP</span>
          </div>

          <div className="flex flex-col items-center gap-2 animate-bounce" style={{ animationDelay: "0.6s" }}>
            <div className="w-12 h-12 rounded-lg bg-cyan/20 border border-cyan/50 flex items-center justify-center">
              <span className="text-lg font-bold text-cyan">¥</span>
            </div>
            <span className="text-xs text-gray-300">JPY</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-md">
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp className="w-5 h-5 text-gold" />
            <span className="text-sm text-gray-300">Initializing Platform</span>
            <span className="text-sm font-semibold text-gold ml-auto">{Math.round(displayProgress)}%</span>
          </div>

          <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden border border-gold/30">
            <div
              className="h-full bg-gradient-to-r from-gold to-cyan rounded-full transition-all duration-500 ease-out"
              style={{ width: `${displayProgress}%` }}
            ></div>
          </div>
        </div>

        {/* Loading Tips */}
        <div className="w-full max-w-md mt-8 min-h-24 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-300 text-sm leading-relaxed mb-2">
              <span className="text-gold font-semibold">💡 Tip:</span> {LOADING_TIPS[currentTip]}
            </p>
          </div>
        </div>

        {/* Loading Status */}
        <div className="flex items-center gap-2 mt-4">
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-gold animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              ></div>
            ))}
          </div>
          <span className="text-xs text-gray-400">Loading...</span>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
    </div>
  );
}
