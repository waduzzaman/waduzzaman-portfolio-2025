'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    projectType: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      company: '',
      budget: '',
      projectType: '',
      timeline: '',
      message: ''
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'mwaduzzaman@gmail.com',
      description: 'Best for detailed project discussions',
      href: 'mailto:mwaduzzaman@gmail.com',
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Available Mon-Fri, 9AM-6PM PST',
      href: 'tel:+15551234567',
      color: 'text-green-600'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      value: 'Available Now',
      description: 'Quick questions and consultations',
      href: '#',
      color: 'text-purple-600'
    }
  ];

  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex web applications can take 2-6 months. I provide detailed timelines during our initial consultation.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Yes! I work with clients worldwide and am comfortable with remote collaboration across different time zones.'
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'I specialize in React, Next.js, Node.js, TypeScript, and modern web technologies. I also work with cloud platforms like AWS and Vercel.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, I offer ongoing support and maintenance packages to keep your application running smoothly after launch.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-base-100 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-base-content mb-6">
              Let's Build Something Amazing
            </h1>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your project to life? I'd love to hear about your ideas 
              and discuss how we can work together to create exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-base-content mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-base-content/70">
              Choose the best way to reach out based on your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  key={index}
                  href={method.href}
                  className="bg-base-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center group"
                >
                  <div className={`${method.color} bg-current/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-base-content mb-2">
                    {method.title}
                  </h3>
                  <p className="text-lg font-medium text-primary mb-2">
                    {method.value}
                  </p>
                  <p className="text-sm text-base-content/60">
                    {method.description}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-base-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-base-content mb-4">
              Project Inquiry Form
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-base-content/70">
              Tell me about your project and I'll get back to you within 24 hours
            </p>
          </div>

          <div className="bg-base-200 p-8 md:p-12 rounded-2xl shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-success mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-base-content mb-4">
                  Thank You!
                </h3>
                <p className="text-base-content/70 mb-6">
                  Your message has been sent successfully. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Full Name *</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="input input-bordered w-full focus:input-primary"
                      placeholder="Waduzzaman Smith"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Email Address *</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input input-bordered w-full focus:input-primary"
                      placeholder="Waduzzaman@company.com"
                      required
                    />
                  </div>
                </div>

                {/* Company & Budget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Company/Organization</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="input input-bordered w-full focus:input-primary"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Project Budget</span>
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="select select-bordered w-full focus:select-primary"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-30k">$15,000 - $30,000</option>
                      <option value="30k-plus">$30,000+</option>
                      <option value="discuss">Let's discuss</option>
                    </select>
                  </div>
                </div>

                {/* Project Type & Timeline */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Project Type</span>
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="select select-bordered w-full focus:select-primary"
                    >
                      <option value="">Select project type</option>
                      <option value="website">Website Development</option>
                      <option value="webapp">Web Application</option>
                      <option value="mobile">Mobile App</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="redesign">Website Redesign</option>
                      <option value="consultation">Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Timeline</span>
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="select select-bordered w-full focus:select-primary"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="flexible">Flexible</option>
                      <option value="planning">Still planning</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Project Details *</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="textarea textarea-bordered h-32 resize-none focus:textarea-primary"
                    placeholder="Tell me about your project goals, target audience, key features, and any specific requirements..."
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary btn-lg px-12"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="loading loading-spinner loading-sm mr-2"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Project Inquiry
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-base-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-base-content mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-base-content/70">
              Common questions about working together
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="collapse collapse-arrow bg-base-100 shadow-lg">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-lg font-medium text-base-content">
                  {faq.question}
                </div>
                <div className="collapse-content">
                  <p className="text-base-content/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;