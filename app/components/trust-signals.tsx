
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Bot, Brain, TrendingUp, Zap } from 'lucide-react'

const TrustSignals = () => {

  const services = [
    {
      icon: Bot,
      title: 'Gen AI and Automation',
      points: [
        'Workflow automation and LLM integration',
        'Copilots/assistants for existing workflows',
        'Automate routine tasks intelligently',
        'Embed AI in M365 suite seamlessly',
        'Speed up organizing and writing tasks contextually'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Machine Learning & Statistics',
      points: [
        'Exploratory Data Analysis and insights',
        'Statistics - Linear Algebra and Calculus',
        'Gradient descent and optimization techniques',
        'Model Building, Training, and Optimization',
        'Model deployment on Azure, GCP, AWS'
      ]
    },
    {
      icon: Brain,
      title: 'Deep Learning',
      points: [
        'Neural network architecture design',
        'Computer vision and image recognition',
        'Natural language processing models',
        'Generative AI and transformer networks',
        'Advanced deep learning frameworks'
      ]
    },
    {
      icon: Zap,
      title: 'Agentic AI',
      points: [
        'Autonomous AI agents development',
        'Multi-agent system orchestration',
        'Intelligent decision-making frameworks',
        'Adaptive learning and reasoning systems',
        'Goal-oriented AI behavior modeling'
      ]
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#20B2AA]/5 via-transparent to-[#8A2BE2]/5" />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container-custom relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            <span className="text-[#20B2AA]">Ramp</span> Up Skills. Unlock Results
          </h2>
          <p className="text-xl text-[#8A2BE2] max-w-2xl mx-auto">
            Where capability meets intelligence — transforming people and processes 
            through expertly crafted AI training and consulting.
          </p>
        </motion.div>

        {/* Service Tiles replacing testimonial */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm border border-[#20B2AA]/20 p-8 rounded-2xl hover-lift group shadow-lg"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#20B2AA] to-[#1C9999] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <div className="absolute inset-0 bg-[#20B2AA]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              
              <ul className="space-y-2 text-gray-600">
                {service.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default TrustSignals
