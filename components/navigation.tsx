
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Training', href: '/training' },
    { name: 'Consulting', href: '/consulting' },
    { name: 'Showcase', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ]

  const scrollToBusinessTransform = () => {
    const element = document.getElementById('business-transform-section')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg backdrop-blur-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      {/* Increased width container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo - Square icon with RampAI text */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative">
              {/* Square neural network icon */}
              <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/neural-network-refined.png"
                  alt="RampAI Neural Network Logo"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
              
              {/* Enhanced glow effects */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#20B2AA]/30 to-[#8A2BE2]/30 blur-lg animate-pulse" />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#8A2BE2]/20 to-[#20B2AA]/20 blur-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
            {/* RampAI brand text and tagline next to square icon */}
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 group-hover:text-[#20B2AA] transition-colors duration-300 leading-none">
                <span className="text-[#20B2AA]">Ramp</span>
                <span className="text-[#8A2BE2]">AI</span>
              </span>
              <span className="text-base md:text-lg lg:text-xl text-gray-600 font-medium mt-1">
                Intelligence in Motion!
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Purple color and increased font sizes */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#8A2BE2] hover:text-[#20B2AA] font-medium transition-colors duration-200 relative group text-lg lg:text-xl"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#20B2AA] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            {/* Purple Get Started button */}
            <button
              onClick={scrollToBusinessTransform}
              className="bg-[#8A2BE2] text-white px-8 py-3 lg:px-10 lg:py-4 rounded-full hover:bg-[#20B2AA] transition-colors duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 text-lg lg:text-xl"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button - Purple color */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#8A2BE2] hover:text-[#20B2AA] transition-colors duration-200"
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-[#8A2BE2] hover:text-[#20B2AA] font-medium transition-colors duration-200 py-2 text-lg"
                  >
                    {item.name}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    setIsOpen(false)
                    scrollToBusinessTransform()
                  }}
                  className="bg-[#8A2BE2] text-white px-6 py-3 rounded-full hover:bg-[#20B2AA] transition-colors duration-300 font-medium text-center mt-4 text-lg w-full"
                >
                  Get Started
                </button>
              </div>
            </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
