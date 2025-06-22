
'use client'

import React from 'react'
import Link from 'next/link'
import { Brain, Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const quickLinks = [
    { href: '/training', label: 'Training Programs' },
    { href: '/consulting', label: 'Consulting Services' },
    { href: '/projects', label: 'Project Showcase' },
    { href: '/about', label: 'About Us' },
  ]

  const industries = [
    'Information Technology',
    'Finance & Banking',
    'Retail & E-commerce',
    'Manufacturing',
    'Healthcare',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <footer className="relative bg-gradient-to-br from-[#101585] via-[#1e3a8a] to-[#A47864] text-white">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#20B2AA] via-[#8A2BE2] to-[#20B2AA]" />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container-custom py-20 px-6 md:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
            <Link href="/" className="flex items-center space-x-3 mb-8 group">
              <Brain className="h-8 w-8 text-[#20B2AA] group-hover:scale-110 transition-transform duration-300" />
              <span className="text-2xl font-bold">
                <span className="text-[#20B2AA]">Ramp</span><span className="text-[#8A2BE2]">AI</span>
              </span>
            </Link>
            <p className="text-white/80 mb-8 leading-relaxed text-sm md:text-base">
              Intelligence in Motion! Where capability meets intelligence — 
              transforming people and processes through expertly crafted AI training and consulting.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="p-2 rounded-lg bg-white/10 hover:bg-[#20B2AA] transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-white/10 hover:bg-[#20B2AA] transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-white/10 hover:bg-[#20B2AA] transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg font-semibold mb-8 text-[#20B2AA] border-b border-[#20B2AA]/20 pb-3">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-[#20B2AA] transition-colors duration-300 flex items-center group text-sm md:text-base py-1"
                  >
                    <span className="w-2 h-2 bg-[#20B2AA] rounded-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Industries */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg font-semibold mb-8 text-[#20B2AA] border-b border-[#20B2AA]/20 pb-3">Industries We Serve</h3>
            <ul className="space-y-4">
              {industries.map((industry) => (
                <li key={industry}>
                  <span className="text-white/80 flex items-center text-sm md:text-base py-1">
                    <span className="w-2 h-2 bg-[#8A2BE2] rounded-full mr-4" />
                    {industry}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg font-semibold mb-8 text-[#20B2AA] border-b border-[#20B2AA]/20 pb-3">Contact Us</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-[#20B2AA] mt-1 flex-shrink-0" />
                <div className="text-white/80 text-sm md:text-base">
                  <p className="mb-2">Bangalore, India</p>
                  <p>Mumbai, India</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-5 w-5 text-[#20B2AA] mt-1 flex-shrink-0" />
                <div className="text-white/80 text-sm md:text-base space-y-2">
                  <div>
                    <a 
                      href="mailto:bonda.career@gmail.com"
                      className="hover:text-[#20B2AA] transition-colors duration-300 block py-1"
                    >
                      bonda.career@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
        >
          <p className="text-white/60 text-sm md:text-base text-center md:text-left">
            © 2025 RampAI. All rights reserved. Intelligence in Motion - transforming the future of work.
          </p>
          <div className="flex space-x-8 text-sm md:text-base">
            <Link href="/contact" className="text-white/60 hover:text-[#20B2AA] transition-colors duration-300 px-4 py-2">
              Schedule Consultation
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer
