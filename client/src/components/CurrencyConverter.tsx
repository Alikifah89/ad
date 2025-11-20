import { useState } from "react";
import { ArrowRightLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CurrencyConverterProps {
  className?: string;
}

const CURRENCY_PAIRS = [
  { code: "USD", name: "US Dollar", rate: 1 },
  { code: "EUR", name: "Euro", rate: 0.92 },
  { code: "GBP", name: "British Pound", rate: 0.79 },
  { code: "JPY", name: "Japanese Yen", rate: 149.50 },
  { code: "AED", name: "UAE Dirham", rate: 3.67 },
  { code: "SAR", name: "Saudi Riyal", rate: 3.75 },
  { code: "INR", name: "Indian Rupee", rate: 83.12 },
  { code: "CNY", name: "Chinese Yuan", rate: 7.24 },
  { code: "QAR", name: "Qatari Riyal", rate: 3.64 },
];

export function CurrencyConverter({ className = "" }: CurrencyConverterProps) {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("QAR");
  const [amount, setAmount] = useState("1000");

  const fromRate = CURRENCY_PAIRS.find(c => c.code === fromCurrency)?.rate || 1;
  const toRate = CURRENCY_PAIRS.find(c => c.code === toCurrency)?.rate || 1;
  const convertedAmount = ((parseFloat(amount) || 0) * toRate) / fromRate;

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className={`bg-slate-800/50 backdrop-blur-sm border border-gold/30 rounded-2xl p-8 ${className}`}>
      <h3 className="text-2xl font-bold text-white mb-6">Currency Converter</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* From Currency */}
        <div className="space-y-3">
          <label className="text-sm font-semibold text-gold">From</label>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="w-full bg-slate-700/50 border border-gold/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition"
          >
            {CURRENCY_PAIRS.map((curr) => (
              <option key={curr.code} value={curr.code}>
                {curr.code} - {curr.name}
              </option>
            ))}
          </select>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full bg-slate-700/50 border border-gold/30 rounded-lg px-4 py-3 text-white text-lg font-mono focus:outline-none focus:border-gold transition"
            placeholder="Enter amount"
          />
        </div>

        {/* Swap Button */}
        <div className="flex items-end justify-center pb-3">
          <button
            onClick={handleSwap}
            className="bg-gold/20 hover:bg-gold/30 border border-gold/50 rounded-lg p-3 transition transform hover:scale-110"
            title="Swap currencies"
          >
            <ArrowRightLeft className="w-6 h-6 text-gold" />
          </button>
        </div>

        {/* To Currency */}
        <div className="space-y-3">
          <label className="text-sm font-semibold text-gold">To</label>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-full bg-slate-700/50 border border-gold/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition"
          >
            {CURRENCY_PAIRS.map((curr) => (
              <option key={curr.code} value={curr.code}>
                {curr.code} - {curr.name}
              </option>
            ))}
          </select>
          <div className="w-full bg-slate-700/50 border border-gold/30 rounded-lg px-4 py-3 text-white text-lg font-mono">
            {convertedAmount.toFixed(2)}
          </div>
        </div>
      </div>

      {/* Exchange Rate Info */}
      <div className="mt-6 pt-6 border-t border-gold/20">
        <p className="text-sm text-gray-300 text-center">
          1 {fromCurrency} = <span className="text-gold font-semibold">{(toRate / fromRate).toFixed(4)}</span> {toCurrency}
        </p>
      </div>

      {/* CTA Button */}
      <Button className="btn-premium w-full mt-6">
        Convert Now
      </Button>
    </div>
  );
}
