import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import {
  EmailIcon,
  LinkedInIcon,
  GitHubIcon,
  LeetCodeIcon,
  PhoneIcon,
  MapPinIcon,
  CheckCircleIcon
} from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = 'service_yznp3n5';
    const templateID = 'template_oxws1c5';
    const userID = 'uC1PgrmDo-XVGQ_ZH';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, userID);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Błąd wysyłania:', error);
      alert('Wystąpił błąd podczas wysyłania wiadomości.');
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? I'm here to help you build exceptional digital experiences that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Social Links */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:banaszekk123@gmail.com"
                className="group bg-slate-700/50 hover:bg-sky-500/20 p-4 rounded-xl transition-all duration-300 transform hover:scale-105 border border-slate-600/50 hover:border-sky-500/50"
                aria-label="Email"
              >
                <EmailIcon className="w-6 h-6 text-slate-400 group-hover:text-sky-400 transition-colors" />
              </a>

              <a
                href="https://www.linkedin.com/in/kamil-banaszek-956938267/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-700/50 hover:bg-blue-500/20 p-4 rounded-xl transition-all duration-300 transform hover:scale-105 border border-slate-600/50 hover:border-blue-500/50"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors" />
              </a>

              <a
                href="https://github.com/Cr3ativeCod3r"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-700/50 hover:bg-gray-500/20 p-4 rounded-xl transition-all duration-300 transform hover:scale-105 border border-slate-600/50 hover:border-gray-500/50"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-6 h-6 text-slate-400 group-hover:text-gray-300 transition-colors" />
              </a>

              <a
                href="https://leetcode.com/Cr3ativeCod3r"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-700/50 hover:bg-yellow-500/20 p-4 rounded-xl transition-all duration-300 transform hover:scale-105 border border-slate-600/50 hover:border-yellow-500/50"
                aria-label="LeetCode"
              >
                <LeetCodeIcon className="w-6 h-6 text-slate-400 group-hover:text-yellow-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center space-x-3">
                <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                <p className="text-green-400 font-medium">Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-sky-500 to-purple-500 text-white font-bold py-4 px-8 rounded-lg text-lg hover:from-sky-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center space-x-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Sending...</span>
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;