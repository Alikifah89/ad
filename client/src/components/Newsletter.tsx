import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubscribed(true);
    toast.success("Successfully subscribed to our newsletter!");

    setTimeout(() => {
      setEmail("");
      setIsSubscribed(false);
    }, 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-gold/10 via-cyan/5 to-gold/10 border-y border-gold/20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-gold" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with Exchange Rates
          </h2>
          <p className="text-foreground/70 text-lg mb-8">
            Subscribe to our newsletter and get daily exchange rate updates, exclusive offers, and financial tips delivered to your inbox.
          </p>

          {isSubscribed ? (
            <div className="flex flex-col items-center gap-4 py-8">
              <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-success" />
              </div>
              <p className="text-xl font-semibold">Thank you for subscribing!</p>
              <p className="text-foreground/70">Check your inbox for a confirmation email.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-background border border-border rounded-lg focus:outline-none focus:border-gold transition text-lg"
                required
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-premium px-8 py-4 text-lg whitespace-nowrap"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-background mr-2"></div>
                    Subscribing...
                  </>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </form>
          )}

          <p className="text-sm text-foreground/50 mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-foreground/60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gold"></div>
              <span>Daily Rate Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan"></div>
              <span>Exclusive Offers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success"></div>
              <span>Financial Tips</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
