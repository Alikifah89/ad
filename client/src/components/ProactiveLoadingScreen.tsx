import { useEffect, useState } from "react";
import { useLoading } from "@/contexts/LoadingContext";
import { DollarSign, TrendingUp, Zap, CheckCircle2 } from "lucide-react";

const LOADING_TIPS = [
  "Did you know? Al Doha Exchange operates across 50+ countries worldwide.",
  "Tip: Use our currency converter to instantly calculate exchange rates.",
  "Fun fact: We process over $2 billion in transactions annually.",
  "Pro tip: Check our live rates banner for real-time currency updates.",
  "Did you know? We offer 24/7 customer support in multiple languages.",
  "Tip: Compare rates across 9+ major currencies with our converter.",
  "Fun fact: Our platform is trusted by 100,000+ happy clients.",
  "Pro tip: Lock in rates before market volatility with our services.",
  "Did you know? Based in Baghdad, Iraq with offices across the region.",
  "Tip: Our team is available in Arabic and English 24/7.",
];

const LOADING_STAGES = [
  { id: "initializing", label: "Initializing", icon: "globe" },
  { id: "authenticating", label: "Authenticating", icon: "lock" },
  { id: "loading-content", label: "Loading Content", icon: "zap" },
  { id: "rendering", label: "Rendering", icon: "trending" },
  { id: "complete", label: "Complete", icon: "check" },
];

export function ProactiveLoadingScreen() {
  const { isLoading, progress, stage } = useLoading();
  const [displayProgress, setDisplayProgress] = useState(0);
  const [currentTip, setCurrentTip] = useState(0);

  // Animate progress bar
  useEffect(() => {
    if (!isLoading) {
      setDisplayProgress(0);
      return;
    }

    const interval = setInterval(() => {
      setDisplayProgress((prev) => {
        const target = progress;
        if (prev >= target) return prev;
        return Math.min(prev + Math.random() * 15, target);
      });
    }, 200);

    return () => clearInterval(interval);
  }, [isLoading, progress]);

  // Rotate tips
  useEffect(() => {
    if (!isLoading) return;

    const tipInterval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % LOADING_TIPS.length);
    }, 4000);

    return () => clearInterval(tipInterval);
  }, [isLoading]);

  if (!isLoading) return null;

  const currentStageIndex = LOADING_STAGES.findIndex((s) => s.id === stage);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/loading-animation.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-4 max-w-2xl">
        {/* Logo/Branding */}
        <div className="flex items-center gap-3 mb-4 animate-fadeInDown">
          <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-gold to-gold/60 flex items-center justify-center animate-bounce shadow-xl shadow-gold/50">
            <DollarSign className="w-8 h-8 text-background" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">Al Doha Exchange</h1>
            <p className="text-gold text-sm font-semibold">Preparing Your Experience</p>
          </div>
        </div>

        {/* Stage Indicators */}
        <div className="w-full max-w-md mb-8">
          <div className="flex justify-between gap-2">
            {LOADING_STAGES.map((stageItem, idx) => {
              const isActive = idx <= currentStageIndex;
              const isComplete = idx < currentStageIndex;

              return (
                <div
                  key={stageItem.id}
                  className={`flex-1 flex flex-col items-center gap-2 transition-all duration-500 ${
                    isActive ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg ${
                      isComplete
                        ? "bg-gold text-background shadow-gold/50"
                        : isActive
                        ? "bg-gold/50 text-white border-2 border-gold shadow-gold/30"
                        : "bg-slate-700 text-gray-400"
                    }`}
                  >
                    {isComplete ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : isActive ? (
                      <Zap className="w-5 h-5 animate-pulse" />
                    ) : (
                      <span className="text-xs font-bold">{idx + 1}</span>
                    )}
                  </div>
                  <span className="text-xs text-center text-white drop-shadow hidden sm:block">
                    {stageItem.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Progress Bar */}
        <div className="w-full max-w-md">
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp className="w-5 h-5 text-gold drop-shadow" />
            <span className="text-sm text-white drop-shadow">Initializing Platform</span>
            <span className="text-sm font-semibold text-gold ml-auto drop-shadow">{Math.round(displayProgress)}%</span>
          </div>

          <div className="w-full h-3 bg-black/40 backdrop-blur-sm rounded-full overflow-hidden border border-gold/30 shadow-lg">
            <div
              className="h-full bg-gradient-to-r from-gold via-gold to-cyan rounded-full transition-all duration-500 ease-out shadow-lg shadow-gold/50"
              style={{ width: `${displayProgress}%` }}
            ></div>
          </div>

          {/* Stage-specific sub-progress */}
          <div className="mt-4 space-y-2">
            {[
              { label: "System Check", width: displayProgress > 15 ? 100 : (displayProgress / 15) * 100 },
              { label: "Security Validation", width: displayProgress > 35 ? 100 : Math.max(0, (displayProgress - 15) / 20) * 100 },
              { label: "Data Sync", width: displayProgress > 65 ? 100 : Math.max(0, (displayProgress - 35) / 30) * 100 },
              { label: "UI Rendering", width: displayProgress > 85 ? 100 : Math.max(0, (displayProgress - 65) / 20) * 100 },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-xs text-white/80 w-24 drop-shadow">{item.label}</span>
                <div className="flex-1 h-1.5 bg-black/30 backdrop-blur-sm rounded-full overflow-hidden border border-white/10">
                  <div
                    className="h-full bg-cyan/80 rounded-full transition-all duration-300 shadow-sm shadow-cyan/50"
                    style={{ width: `${item.width}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Loading Tips */}
        <div className="w-full max-w-md mt-8 min-h-20 flex items-center justify-center">
          <div className="text-center animate-fadeInUp bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <p className="text-white text-sm leading-relaxed drop-shadow">
              <span className="text-gold font-semibold">💡 Tip:</span> {LOADING_TIPS[currentTip]}
            </p>
          </div>
        </div>

        {/* Animated Loading Dots */}
        <div className="flex items-center gap-2 mt-4">
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-gold to-cyan animate-pulse shadow-lg shadow-gold/50"
                style={{ animationDelay: `${i * 0.3}s` }}
              ></div>
            ))}
          </div>
          <span className="text-xs text-white/60 drop-shadow">Loading...</span>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
    </div>
  );
}
