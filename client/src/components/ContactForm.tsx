import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Message sent successfully! We'll get back to you soon.");

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Information */}
      <div className="space-y-8">
        <div>
          <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
          <p className="text-foreground/70 text-lg">
            Have questions about our services? Our team is here to help you with all your currency exchange needs.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
            <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Visit Us</h4>
              <p className="text-sm text-foreground/70">
                Al-Mansour District, Baghdad, Iraq
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
            <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Call Us</h4>
              <p className="text-sm text-foreground/70">+964 1 XXX XXXX</p>
              <p className="text-xs text-foreground/50 mt-1">Available 24/7</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
            <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Email Us</h4>
              <p className="text-sm text-foreground/70">info@aldohaexchange.com</p>
              <p className="text-xs text-foreground/50 mt-1">We reply within 24 hours</p>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="pt-6 border-t border-border">
          <p className="text-sm text-foreground/60 mb-4">Trusted by thousands of customers</p>
          <div className="flex gap-4">
            <div className="px-4 py-2 bg-card border border-border rounded-lg text-sm">
              ⭐ 4.9/5 Rating
            </div>
            <div className="px-4 py-2 bg-card border border-border rounded-lg text-sm">
              🔒 Secure
            </div>
            <div className="px-4 py-2 bg-card border border-border rounded-lg text-sm">
              ✓ Licensed
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-card border border-border rounded-2xl p-8">
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-success" />
            </div>
            <h3 className="text-2xl font-bold">Message Sent!</h3>
            <p className="text-foreground/70">
              Thank you for contacting us. We'll get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-gold transition"
                placeholder="Enter your full name"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-gold transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-gold transition"
                  placeholder="+964 XXX XXXX"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-gold transition"
              >
                <option value="">Select a subject</option>
                <option value="exchange">Currency Exchange Inquiry</option>
                <option value="rates">Exchange Rates Question</option>
                <option value="account">Account Services</option>
                <option value="corporate">Corporate Solutions</option>
                <option value="support">Technical Support</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-gold transition resize-none"
                placeholder="Tell us how we can help you..."
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="btn-premium w-full"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-background mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </>
              )}
            </Button>

            <p className="text-xs text-center text-foreground/50">
              By submitting this form, you agree to our privacy policy
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
