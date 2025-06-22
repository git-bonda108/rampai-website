
'use client'

import React from 'react'
import HeroSection from '@/components/hero-section'
import ServicesOverview from '@/components/services-overview'
import TrustSignals from '@/components/trust-signals'
import FeaturedProjects from '@/components/featured-projects'
import CallToAction from '@/components/call-to-action'
import { motion } from 'framer-motion'

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Trust Signals */}
      <TrustSignals />
      
      {/* Services Overview */}
      <ServicesOverview />
      
      {/* Featured Projects Preview */}
      <FeaturedProjects />
      
      {/* Call to Action */}
      <CallToAction />
    </div>
  )
}

export default HomePage
