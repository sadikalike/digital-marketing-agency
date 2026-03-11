"use client";


import Image from "next/image";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    service: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [statusMessage, setStatusMessage] = useState("");

  // ✅ ನಿಮ್ಮ EmailJS credentials - ಇವುಗಳನ್ನು ಹಾಕಿದ್ದೀರಾ?
  const EMAILJS_SERVICE_ID = "service_0s5mpsp";
  const EMAILJS_TEMPLATE_ID = "template_wja0q1e";
  const EMAILJS_PUBLIC_KEY = "3hhYTPcssbfZXSCcJ";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // EmailJS ಗೆ ಕಳುಹಿಸಿ
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully:", result.text);
      
      // ಸಕ್ಸೆಸ್
      setSubmitStatus("success");
      setStatusMessage("Thank you! Your message has been sent successfully. We'll get back to you soon.");
      
      // ಫಾರ್ಮ್ ಕ್ಲಿಯರ್ ಮಾಡಿ
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        service: ""
      });
      
    } catch (error) {
      console.error("Email send failed:", error);
      setSubmitStatus("error");
      setStatusMessage("Failed to send message. Please try again or email us directly at hello@nexodigital.com");
    } finally {
      setIsSubmitting(false);
      
      // 5 ಸೆಕೆಂಡ್ ನಂತರ ಸ್ಟೇಟಸ್ ಮೆಸೇಜ್ ಕ್ಲಿಯರ್ ಮಾಡಿ
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden scroll-mt-24 py-16 md:py-24">
      {/* Background Shape */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-linear-to-r from-transparent via-blue-900/30 py-12 md:py-16 rounded-2xl">
          
          {/* Header Section */}
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-blue-200),var(--color-blue-400),var(--color-blue-100),var(--color-blue-500),var(--color-blue-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              Get in Touch
            </h2>
            <p className="text-xl text-blue-100/80" data-aos="fade-up" data-aos-delay="200">
              Ready to accelerate your business growth? Let's discuss how we can help.
            </p>
          </div>

          {/* Contact Form and Info Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Left Side - Contact Form */}
            <div className="bg-blue-900/20 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-blue-400/20" data-aos="fade-right">
              <h3 className="text-2xl font-semibold text-white mb-6">Send us a Message</h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-100 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-blue-950/50 border border-blue-800/50 rounded-lg text-white placeholder-blue-300/30 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-blue-950/50 border border-blue-800/50 rounded-lg text-white placeholder-blue-300/30 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-blue-100 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-blue-950/50 border border-blue-800/50 rounded-lg text-white placeholder-blue-300/30 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Company Field */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-blue-100 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-blue-950/50 border border-blue-800/50 rounded-lg text-white placeholder-blue-300/30 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your Business"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-blue-100 mb-1">
                    Service You're Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-blue-950/50 border border-blue-800/50 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="Performance Marketing">Performance Marketing</option>
                    <option value="Social Media Marketing">Social Media Marketing</option>
                    <option value="SEO">SEO</option>
                    <option value="Lead Generation">Lead Generation</option>
                    <option value="Branding">Branding</option>
                    <option value="Content Marketing">Content Marketing</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-blue-100 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-blue-950/50 border border-blue-800/50 rounded-lg text-white placeholder-blue-300/30 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] py-3 px-6 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : "Send Message"}
                </button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-100 text-center animate-pulse">
                    {statusMessage}
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-100 text-center">
                    {statusMessage}
                  </div>
                )}
              </form>
            </div>

            {/* Right Side - Contact Information */}
            <div className="space-y-6" data-aos="fade-left">
              {/* Contact Info Cards */}
              <div className="bg-blue-900/20 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-blue-400/20">
                <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  {/* Email */}
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-blue-200">Email Us</p>
                      <a href="mailto:hello@nexodigital.com" className="text-white hover:text-blue-300 transition-colors">
                        hello@nexodigital.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-blue-200">Call Us</p>
                      <a href="tel:+919876543210" className="text-white hover:text-blue-300 transition-colors">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-blue-200">Office Address</p>
                      <p className="text-white">
                        123 Business Avenue<br />
                        Bengaluru, Karnataka 560001<br />
                        India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-6 pt-6 border-t border-blue-800/30">
                  <p className="text-sm text-blue-200 mb-3">Follow Us</p>
                  <div className="flex space-x-3">
                    {["LinkedIn", "Twitter", "Instagram"].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="w-10 h-10 bg-blue-500/10 hover:bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-300 hover:text-white transition-all"
                      >
                        <span className="sr-only">{social}</span>
                        <span className="text-sm">{social[0]}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-blue-900/20 backdrop-blur-sm p-6 rounded-xl border border-blue-400/20">
                <h4 className="text-lg font-semibold text-white mb-3">Office Hours</h4>
                <div className="space-y-2 text-blue-100">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA Buttons */}
          <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center mt-12">
            <div data-aos="fade-up" data-aos-delay={400}>
              <a
                className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                href="#contact"
              >
                <span className="relative inline-flex items-center">
                  Start Building
                  <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </span>
              </a>
            </div>
            <div data-aos="fade-up" data-aos-delay={600}>
              <a
                className="btn relative w-full bg-gradient-to-b from-blue-900 to-blue-800/60 text-blue-100 hover:text-white sm:ml-4 sm:w-auto flex items-center justify-center"
                href="#contact"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}