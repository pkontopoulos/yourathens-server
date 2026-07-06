"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const C = {
  terracotta: "#B85A35",
  gold: "#C9973E",
  cream: "#FBF6EE",
  dark: "#1B0D05",
};

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        throw new Error("EmailJS is not configured.");
      }

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "info@yourathens.gr",
        },
        PUBLIC_KEY,
      );

      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("There was an error sending your message. Please try again or contact us directly at info@yourathens.gr");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-6 text-center rounded-2xl border border-stone-100 bg-white">
        <CheckCircle
          className="w-12 h-12 mb-5"
          style={{ color: C.terracotta }}
        />
        <h3 className="font-serif text-xl font-bold mb-3">Message sent.</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-2 max-w-xs">
          Thank you for reaching out. We&apos;ll get back to you shortly.
        </p>
        <p className="text-xs text-muted-foreground">
          For urgent inquiries: +30 6973800584
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
            First Name
          </label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="contact-input" required disabled={isSubmitting} />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
            Last Name
          </label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="contact-input" required disabled={isSubmitting} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
          Email
        </label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="contact-input" required disabled={isSubmitting} />
      </div>

      <div>
        <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
          Subject
        </label>
        <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className="contact-input" required disabled={isSubmitting}>
          <option value="">Select a subject</option>
          <option value="Jack Apartment Booking">Jack Apartment Booking</option>
          <option value="Alice Apartment Booking">Alice Apartment Booking</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Support">Support</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="contact-input"
          placeholder="Tell us about your stay dates, number of guests, or any questions you have..."
          required
          disabled={isSubmitting}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 rounded-lg font-semibold text-sm text-white transition-opacity duration-200 hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ background: `linear-gradient(130deg, ${C.terracotta} 0%, ${C.gold} 100%)` }}
      >
        {isSubmitting ? "Sending…" : "Send Message"}
      </button>

      <p className="text-xs text-muted-foreground text-center">
        Your message will be sent directly to our team for immediate attention.
      </p>
    </form>
  );
}
