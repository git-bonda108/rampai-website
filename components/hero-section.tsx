
'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Bot, Brain, TrendingUp, Zap, Eye, Cog, BarChart3, Network, Trophy, Wrench, BookOpen, Calculator, Database, Target, Code, Layers, MessageSquare, Image as ImageIcon, GitBranch, FileText, Settings } from 'lucide-react'
import Image from 'next/image'

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  // Combined tiles for stock ticker animation - Row 1 (15 tiles)
  const tickerRow1Tiles = [
    { title: 'Generative AI', icon: Bot },
    { title: 'Machine Learning', icon: TrendingUp },
    { title: 'Deep Learning', icon: Brain },
    { title: 'Neural Networks', icon: Network },
    { title: 'History of AI', icon: BookOpen },
    { title: 'Linear Algebra', icon: Calculator },
    { title: 'Supervised Learning', icon: Target },
    { title: 'Python for Data Science', icon: Code },
    { title: 'Decision Trees & SVM', icon: GitBranch },
    { title: 'Clustering Methods', icon: Layers },
    { title: 'CNNs', icon: ImageIcon },
    { title: 'RNNs & LSTM', icon: Brain },
    { title: 'GANs & Autoencoders', icon: Bot },
    { title: 'Object Detection', icon: Eye },
    { title: 'Model Deployment', icon: Cog },
  ]

  // Combined tiles for stock ticker animation - Row 2 (16 tiles)
  const tickerRow2Tiles = [
    { title: 'Agentic AI', icon: Zap },
    { title: 'NLP & Computer Vision', icon: Eye },
    { title: 'Workflow Automation', icon: Cog },
    { title: 'Statistics for ML', icon: BarChart3 },
    { title: 'Reinforcement Learning', icon: Trophy },
    { title: 'AI/ML Tools & Frameworks', icon: Wrench },
    { title: 'Basic Statistics', icon: BarChart3 },
    { title: 'Data Preprocessing', icon: Database },
    { title: 'Exploratory Data Analysis', icon: TrendingUp },
    { title: 'NLP Basics', icon: MessageSquare },
    { title: 'Computer Vision Intro', icon: Eye },
    { title: 'Performance Metrics', icon: Target },
    { title: 'Regularization', icon: Settings },
    { title: 'Gradient Descent', icon: TrendingUp },
    { title: 'Advanced NLP', icon: MessageSquare },
    { title: 'Neural Networks Intro', icon: Network },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Enhanced Neural Network Background - Prominently Visible on White */}
      <div 
        className="absolute inset-0 neural-network-layer z-0"
        style={{
          transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3 - scrollY * 0.08}px) scale(1.1)`,
          filter: 'brightness(0.7) contrast(1.8) saturate(1.4) hue-rotate(0deg)',
        }}
      >
        <Image
          src="/neural-network-2025-latest.png"
          alt="Neural Network Background"
          fill
          className="object-cover object-center opacity-90"
          priority
        />
      </div>
      
      {/* Enhanced Interactive Neural Network Overlay */}
      <div className="absolute inset-0 neural-glow-overlay z-10">
        {/* Primary enhanced neural nodes - Smaller sizes */}
        <div 
          className="absolute w-3 h-3 bg-[#20B2AA] rounded-full neural-node animate-neural-pulse shadow-xl"
          style={{
            top: '15%',
            left: '10%',
            transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`,
            boxShadow: '0 0 15px #20B2AA, 0 0 30px #20B2AA, 0 0 45px #20B2AA',
          }}
        />
        <div 
          className="absolute w-2 h-2 bg-[#8A2BE2] rounded-full neural-node animate-neural-pulse-delayed shadow-xl"
          style={{
            top: '25%',
            right: '12%',
            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * 0.5}px)`,
            boxShadow: '0 0 12px #8A2BE2, 0 0 24px #8A2BE2, 0 0 36px #8A2BE2',
          }}
        />
        <div 
          className="absolute w-4 h-4 bg-gray-500 rounded-full neural-node animate-neural-pulse-slow shadow-xl"
          style={{
            bottom: '20%',
            left: '20%',
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * -0.3}px)`,
            boxShadow: '0 0 20px #666666, 0 0 40px #666666',
          }}
        />
        <div 
          className="absolute w-2 h-2 bg-[#20B2AA] rounded-full neural-node animate-neural-pulse shadow-xl"
          style={{
            bottom: '35%',
            right: '8%',
            transform: `translate(${mousePosition.x * -0.4}px, ${mousePosition.y * 0.4}px)`,
            boxShadow: '0 0 14px #20B2AA, 0 0 28px #20B2AA',
          }}
        />
        <div 
          className="absolute w-3 h-3 bg-[#8A2BE2] rounded-full neural-node animate-neural-pulse-delayed shadow-xl"
          style={{
            top: '45%',
            left: '5%',
            transform: `translate(${mousePosition.x * 0.6}px, ${mousePosition.y * -0.2}px)`,
            boxShadow: '0 0 18px #8A2BE2, 0 0 36px #8A2BE2',
          }}
        />
        <div 
          className="absolute w-1.5 h-1.5 bg-gray-400 rounded-full neural-node animate-neural-pulse-slow shadow-xl"
          style={{
            top: '60%',
            right: '25%',
            transform: `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * 0.3}px)`,
            boxShadow: '0 0 10px #999999, 0 0 20px #999999',
          }}
        />
        
        {/* Additional nodes for richer network - Smaller sizes */}
        <div 
          className="absolute w-2 h-2 bg-[#20B2AA] rounded-full neural-node animate-neural-pulse shadow-xl"
          style={{
            top: '35%',
            left: '40%',
            transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.6}px)`,
            boxShadow: '0 0 12px #20B2AA, 0 0 24px #20B2AA',
          }}
        />
        <div 
          className="absolute w-2 h-2 bg-[#8A2BE2] rounded-full neural-node animate-neural-pulse-delayed shadow-xl"
          style={{
            bottom: '45%',
            right: '35%',
            transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.4}px)`,
            boxShadow: '0 0 12px #8A2BE2, 0 0 24px #8A2BE2',
          }}
        />
        <div 
          className="absolute w-1.5 h-1.5 bg-gray-500 rounded-full neural-node animate-neural-pulse-slow shadow-xl"
          style={{
            top: '75%',
            left: '60%',
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.2}px)`,
            boxShadow: '0 0 8px #666666, 0 0 16px #666666',
          }}
        />
        
        {/* Enhanced Neural connection lines with better visibility */}
        <svg className="absolute inset-0 w-full h-full neural-connections opacity-90" style={{ pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="connectionGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#20B2AA" stopOpacity="0.9"/>
              <stop offset="50%" stopColor="#20B2AA" stopOpacity="0.7"/>
              <stop offset="100%" stopColor="#8A2BE2" stopOpacity="0.6"/>
            </linearGradient>
            <linearGradient id="connectionGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8A2BE2" stopOpacity="0.8"/>
              <stop offset="50%" stopColor="#8A2BE2" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#666666" stopOpacity="0.5"/>
            </linearGradient>
            <linearGradient id="connectionGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#666666" stopOpacity="0.7"/>
              <stop offset="50%" stopColor="#20B2AA" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#8A2BE2" stopOpacity="0.5"/>
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Main connection lines - Thinner for smaller neurons */}
          <line 
            x1="10%" y1="15%" x2="87%" y2="25%" 
            stroke="url(#connectionGradient1)" 
            strokeWidth="1.5" 
            filter="url(#glow)"
            className="animate-neural-flow"
          />
          <line 
            x1="20%" y1="80%" x2="75%" y2="35%" 
            stroke="url(#connectionGradient2)" 
            strokeWidth="1.5" 
            filter="url(#glow)"
            className="animate-neural-flow-delayed"
          />
          <line 
            x1="5%" y1="45%" x2="92%" y2="60%" 
            stroke="url(#connectionGradient1)" 
            strokeWidth="1.5" 
            filter="url(#glow)"
            className="animate-neural-flow-slow"
          />
          
          {/* Additional connection lines - Thinner */}
          <line 
            x1="40%" y1="35%" x2="65%" y2="55%" 
            stroke="url(#connectionGradient3)" 
            strokeWidth="1" 
            filter="url(#glow)"
            className="animate-neural-flow"
          />
          <line 
            x1="15%" y1="60%" x2="60%" y2="20%" 
            stroke="url(#connectionGradient2)" 
            strokeWidth="1" 
            filter="url(#glow)"
            className="animate-neural-flow-delayed"
          />
          <line 
            x1="25%" y1="25%" x2="70%" y2="75%" 
            stroke="url(#connectionGradient1)" 
            strokeWidth="1" 
            filter="url(#glow)"
            className="animate-neural-flow-slow"
          />
          
          {/* Curved connections for more complexity - Thinner */}
          <path 
            d="M 60 75 Q 300 200 800 300" 
            stroke="url(#connectionGradient3)" 
            strokeWidth="1" 
            fill="none"
            filter="url(#glow)"
            className="animate-neural-flow"
          />
          <path 
            d="M 100 400 Q 400 100 750 500" 
            stroke="url(#connectionGradient1)" 
            strokeWidth="1" 
            fill="none"
            filter="url(#glow)"
            className="animate-neural-flow-delayed"
          />
        </svg>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: mousePosition.x + Math.sin(scrollY * 0.01) * 20,
            y: mousePosition.y + Math.cos(scrollY * 0.01) * 15,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
          className="absolute top-20 left-20 w-72 h-72 bg-[#20B2AA]/10 rounded-full blur-3xl animate-neural-breathe"
        />
        <motion.div
          animate={{
            x: mousePosition.x * -0.5 + Math.cos(scrollY * 0.008) * 25,
            y: mousePosition.y * -0.5 + Math.sin(scrollY * 0.008) * 20,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-[#8A2BE2]/10 rounded-full blur-3xl animate-neural-breathe-delayed"
        />
        <motion.div
          animate={{
            x: mousePosition.x * 0.3 + Math.sin(scrollY * 0.012) * 15,
            y: mousePosition.y * 0.3 + Math.cos(scrollY * 0.012) * 10,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-400/5 rounded-full blur-2xl animate-neural-breathe-slow"
        />
      </div>

      {/* Content */}
      <div className="relative z-50 container-custom text-center text-gray-800 min-h-screen flex flex-col justify-center">
        {/* Main Hero Content - Removed RampAI title */}
        <div className="mb-12">
          {/* RampAI title removed from hero area */}
        </div>

        {/* Stock Ticker-Style Rolling Banner Animation */}
        <div className="max-w-full mx-auto mb-16 overflow-hidden">
          {/* Row 1 - Continuous Right to Left Scrolling */}
          <div className="relative mb-6 overflow-hidden">
            <div className="flex animate-ticker-right-to-left">
              {/* Duplicate tiles for seamless infinite scrolling */}
              {[...tickerRow1Tiles, ...tickerRow1Tiles].map((tile, index) => (
                <div 
                  key={`${tile.title}-${index}`}
                  className="bg-white/95 backdrop-blur-sm flex-shrink-0 w-48 h-48 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-2xl hover:shadow-[0_0_40px_rgba(32,178,170,0.6)] transition-all duration-500 group border border-gray-200/50 mx-2 hover:border-[#20B2AA]/60 hover:bg-gradient-to-br hover:from-white hover:to-[#20B2AA]/5 hover:scale-105 hover:-translate-y-2"
                  style={{
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1), 0 0 20px rgba(32,178,170,0.1), inset 0 1px 0 rgba(255,255,255,0.6)'
                  }}
                >
                  <tile.icon className="h-12 w-12 md:h-14 md:w-14 text-[#20B2AA] mb-4 group-hover:text-[#8A2BE2] transition-all duration-300 drop-shadow-lg group-hover:scale-110" />
                  <div className="text-base md:text-lg font-bold text-gray-800 leading-tight group-hover:text-gray-900 transition-all duration-300">
                    {tile.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Continuous Left to Right Scrolling */}
          <div className="relative overflow-hidden">
            <div className="flex animate-ticker-left-to-right">
              {/* Duplicate tiles for seamless infinite scrolling */}
              {[...tickerRow2Tiles, ...tickerRow2Tiles].map((tile, index) => (
                <div 
                  key={`${tile.title}-${index}`}
                  className="bg-white/95 backdrop-blur-sm flex-shrink-0 w-48 h-48 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-2xl hover:shadow-[0_0_40px_rgba(138,43,226,0.6)] transition-all duration-500 group border border-gray-200/50 mx-2 hover:border-[#8A2BE2]/60 hover:bg-gradient-to-br hover:from-white hover:to-[#8A2BE2]/5 hover:scale-105 hover:-translate-y-2"
                  style={{
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1), 0 0 20px rgba(138,43,226,0.1), inset 0 1px 0 rgba(255,255,255,0.6)'
                  }}
                >
                  <tile.icon className="h-12 w-12 md:h-14 md:w-14 text-[#8A2BE2] mb-4 group-hover:text-[#20B2AA] transition-all duration-300 drop-shadow-lg group-hover:scale-110" />
                  <div className="text-base md:text-lg font-bold text-gray-800 leading-tight group-hover:text-gray-900 transition-all duration-300">
                    {tile.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-1 h-16 bg-gradient-to-b from-[#20B2AA]/60 to-transparent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
