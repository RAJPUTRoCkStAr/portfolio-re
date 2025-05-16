import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // In a real scenario, you'd send this data to a backend endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Failed to submit. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 p-8 rounded-xl flex flex-col items-center text-center"
      >
        <CheckCircle2 className="text-green-500 w-16 h-16 mb-4" />
        <h3 className="text-2xl font-semibold text-green-700 mb-2">Message Sent Successfully!</h3>
        <p className="text-green-600 mb-6">Thank you for your message. I'll get back to you as soon as possible.</p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 text-red-700 p-3 rounded-md text-sm">
          {error}
        </div>
      )}
      
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-slate-700">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formState.name}
          onChange={handleChange}
          className="block w-full px-4 py-3 border border-slate-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
          placeholder="Your name"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-slate-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formState.email}
          onChange={handleChange}
          className="block w-full px-4 py-3 border border-slate-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
          placeholder="your.email@example.com"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-slate-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formState.message}
          onChange={handleChange}
          className="block w-full px-4 py-3 border border-slate-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
          placeholder="Your message here..."
        />
      </div>
      
      <div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={isSubmitting}
          type="submit"
          className={`w-full flex justify-center items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white ${
            isSubmitting ? 'bg-slate-400' : 'bg-primary-600 hover:bg-primary-700'
          } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            <>
              Send Message <Send size={18} className="ml-2" />
            </>
          )}
        </motion.button>
      </div>
    </form>
  );
};

export default ContactForm;