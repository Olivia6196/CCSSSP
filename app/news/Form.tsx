'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call (replace with your actual submission logic)
      await new Promise(resolve => setTimeout(resolve, 1800));

      toast.success('Message sent successfully! 🎉');

      // Reset form after successful submission
      setFormData({ name: '', email: '', website: '', message: '' });

    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
         finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="w-[88vw] lg:max-w-6xl mx-5 sm:mx-10 lg:mx-20 mb-16 bg-white rounded-lg py-6 md:px-6 md:shadow overflow-hidden">
        <h2 className="text-[1.45rem] sm:text-2xl font-semibold mb-8 text-[#003629]" style={{ fontFamily: "var(--font-playfair-display)" }}>
         Send Us a Message Today!
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 overflow-x-hidden">
          <div className="flex flex-col md:flex-row gap-5 w-full">
          <div>
            <label htmlFor="name" className="block text-[1.1rem] font-normal  mb-1.5">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              disabled={isSubmitting}
              className="w-full md:w-[40vw] md:h-16 px-4 py-3 bg-zinc-5 border border-gray-400  rounded-xl focus:outline-none focus:ring-2 focus:ring-[#003629] focus:border-transparent transition-all duration-200 disabled:opacity-70"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-[1.1rem] font-normal  mb-1.5">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              disabled={isSubmitting}
              className="w-full md:w-[40vw] md:h-16 px-4 py-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#003629] focus:border-transparent transition-all duration-200 disabled:opacity-70"
            />
          </div>
          </div>
           <div className="flex flex-col md:flex-row gap-5">
          <div>
            <label htmlFor="website" className="block text-[1.1rem] font-normal mb-1.5">
              Website(optional)
            </label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="https://yourwebsite.com"
              disabled={isSubmitting}
              className="w-full md:w-[40vw] md:h-16 px-4 py-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#003629] focus:border-transparent transition-all duration-200 disabled:opacity-70"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-[1.1rem] font-normal  mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="how can we help you?"
              disabled={isSubmitting}
              className="w-full md:w-[40vw] md:h-16 px-4 py-3  border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#003629] focus:border-transparent transition-all duration-200 disabled:opacity-70 resize-none overflow-hidden"
            />
          </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative sm:left-[45%] w-32 overflow-hidden border border-[#003629] bg-[#003629] text-white  hover:text-[#003629] font-semibold py-2 px-3 rounded-full text-lg transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {/* Background fill layer */}
            <span className="absolute  bg-white inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            
            {/* Button content */}
            <span className="relative flex items-center justify-center gap-2 z-10">
              {isSubmitting ? (
                <>
                  Sending...
                </>
              ) : (
                <>
                  Submit
                </>
              )}
            </span>
          </button>
        </form>
      </div>
    </>
  );
}