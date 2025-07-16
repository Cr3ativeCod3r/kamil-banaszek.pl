import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { MdEmail } from 'react-icons/md';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { FaCode } from 'react-icons/fa';
import {
  EmailIcon,
  LinkedInIcon,
  GitHubIcon,
  LeetCodeIcon

} from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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
      alert('Wiadomość została wysłana!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Błąd wysyłania:', error);
      alert('Wystąpił błąd podczas wysyłania wiadomości.');
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 md:py-32 text-center bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready for Goals?
        </h2>
        <p className="text-lg text-slate-400 mt-4 mb-12 max-w-2xl mx-auto">
          I'm a full-stack web developer ready to bring your ideas to life. Let's discuss how I can help you achieve your development goals.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 my-12">
          <a
            href="mailto:banaszekk123@gmail.com"
            className="group bg-slate-800 hover:bg-sky-500 p-4 rounded-full transition-all duration-300 transform hover:scale-110"
            aria-label="Email"
          >
            <EmailIcon className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
          </a>

          <a
            href="https://www.linkedin.com/in/kamil-banaszek-956938267/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-slate-800 hover:bg-sky-500 p-4 rounded-full transition-all duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
          </a>

          <a
            href="https://github.com/Cr3ativeCod3r"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-slate-800 hover:bg-sky-500 p-4 rounded-full transition-all duration-300 transform hover:scale-110"
            aria-label="GitHub"
          >
            <GitHubIcon className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
          </a>

          <a
            href="https://leetcode.com/Cr3ativeCod3r"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-slate-800 hover:bg-sky-500 p-4 rounded-full transition-all duration-300 transform hover:scale-110"
            aria-label="LeetCode"
          >
            <LeetCodeIcon className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
          </a>
        </div>

        {/* Contact Form */}
        <div className="max-w-lg mx-auto mb-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={5}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-sky-500 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;