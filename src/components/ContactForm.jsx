import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { FaPaperPlane } from 'react-icons/fa';

/**
 * ContactForm component - Modern, elegant contact form
 */
const ContactForm = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_qdu6r0l', 
        'template_e3aezld', 
        form.current, 
        'd1QV9dQQmSEotQoyk'
      );
      
      Swal.fire({
        title: 'Message Sent!',
        text: 'Thank you for reaching out. We\'ll get back to you soon.',
        icon: 'success',
        confirmButtonColor: '#F5B800',
        confirmButtonText: 'Great!',
      });
      
      e.target.reset();
    } catch (error) {
      Swal.fire({
        title: 'Oops!',
        text: 'Something went wrong. Please try again or email us directly.',
        icon: 'error',
        confirmButtonColor: '#F5B800',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="connect" className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-text-primary mb-4">
          Let's Connect
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mb-6"></div>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have questions, need prayer, or just want to say hello.
        </p>
      </div>

      <form ref={form} onSubmit={sendEmail} className="bg-white rounded-2xl shadow-soft-lg border border-primary-100/50 p-8 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold text-text-primary mb-2">
              First Name
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              required
              className="block w-full rounded-lg border-2 border-gray-200 py-3 px-4 text-text-primary focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
              placeholder="John"
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold text-text-primary mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              required
              className="block w-full rounded-lg border-2 border-gray-200 py-3 px-4 text-text-primary focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
              placeholder="Doe"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-text-primary mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            required
            className="block w-full rounded-lg border-2 border-gray-200 py-3 px-4 text-text-primary focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
            placeholder="john.doe@example.com"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-text-primary mb-2">
            Your Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            required
            className="block w-full rounded-lg border-2 border-gray-200 py-3 px-4 text-text-primary focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none"
            placeholder="How can we help you?"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex items-center justify-center space-x-2 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-4 text-lg font-semibold text-white shadow-lg transition-all ${
              isSubmitting 
                ? 'opacity-70 cursor-not-allowed' 
                : 'hover:from-primary-600 hover:to-primary-700 hover:shadow-xl transform hover:-translate-y-0.5'
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <FaPaperPlane className="w-5 h-5" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
