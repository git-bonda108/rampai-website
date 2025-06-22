
'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Clock, Send, CheckCircle, Calendar, Users, Target } from 'lucide-react'
import { toast } from 'sonner'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    type: 'consultation',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Pre-fill form based on URL parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const type = urlParams.get('type')
    const program = urlParams.get('program')
    const service = urlParams.get('service')

    if (type) {
      setFormData(prev => ({ ...prev, type }))
    }
    if (program) {
      setFormData(prev => ({ ...prev, type: 'training', message: `I'm interested in the ${program} program.` }))
    }
    if (service) {
      setFormData(prev => ({ ...prev, type: 'consulting', message: `I'm interested in ${service}.` }))
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success('Thank you! We\'ll get back to you within 24 hours.')
        setFormData({
          name: '',
          email: '',
          company: '',
          industry: '',
          type: 'consultation',
          message: ''
        })
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again or email us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const consultationProcess = [
    {
      step: '1',
      title: 'Initial Discussion',
      description: 'We\'ll understand your AI goals, current challenges, and organizational context.',
      duration: '30 minutes',
      icon: Users
    },
    {
      step: '2',
      title: 'AI Readiness Assessment',
      description: 'Comprehensive evaluation of your technical infrastructure and team capabilities.',
      duration: '1-2 hours',
      icon: Target
    },
    {
      step: '3',
      title: 'Strategic Roadmap',
      description: 'Detailed plan with recommendations, timelines, and success metrics.',
      duration: '1-2 weeks',
      icon: Calendar
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 hero-gradient text-white">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="container-custom"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Transform Your Organization
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Ready to harness the power of AI? Start with a free consultation 
              and discover how BrewAI can accelerate your transformation journey.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="container-custom"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-[#101585] mb-6">
                  Get Started Today
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent outline-none transition-colors duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent outline-none transition-colors duration-300"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent outline-none transition-colors duration-300"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                        Industry
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent outline-none transition-colors duration-300"
                      >
                        <option value="">Select your industry</option>
                        <option value="IT">Information Technology</option>
                        <option value="Finance">Finance & Banking</option>
                        <option value="Retail">Retail & E-commerce</option>
                        <option value="Manufacturing">Manufacturing</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                      I'm Interested In *
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent outline-none transition-colors duration-300"
                    >
                      <option value="consultation">Free Consultation</option>
                      <option value="training">Training Programs</option>
                      <option value="consulting">Consulting Services</option>
                      <option value="custom-training">Custom Training</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent outline-none transition-colors duration-300"
                      placeholder="Tell us about your AI goals, current challenges, or specific questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 py-4 bg-[#4CAF50] text-white font-semibold rounded-lg hover:bg-[#45a049] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed animate-glow"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-8 p-4 bg-[#4CAF50]/10 rounded-lg">
                  <div className="flex items-center space-x-2 text-[#4CAF50] mb-2">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-semibold">Response Guarantee</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    We respond to all inquiries within 24 hours. For urgent matters, 
                    feel free to email us directly.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Details */}
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-[#101585] mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#4CAF50] to-[#45a049] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Email Us</h4>
                      <div className="space-y-1 text-gray-600">
                        <p>
                          <a 
                            href="mailto:bonda.career@gmail.com"
                            className="hover:text-[#4CAF50] transition-colors duration-300"
                          >
                            bonda.career@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#101585] to-[#1e3a8a] rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Our Locations</h4>
                      <div className="text-gray-600 space-y-1">
                        <p>Bangalore, India</p>
                        <p>Mumbai, India</p>
                        <p className="text-sm">Serving clients globally</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#A47864] to-[#8B6B52] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Response Time</h4>
                      <div className="text-gray-600">
                        <p>Within 24 hours</p>
                        <p className="text-sm">Monday - Friday, 9 AM - 6 PM IST</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Process */}
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-[#101585] mb-6">
                  What to Expect
                </h3>
                
                <div className="space-y-6">
                  {consultationProcess.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#4CAF50] to-[#45a049] rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">{step.step}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-800">{step.title}</h4>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default ContactPage
