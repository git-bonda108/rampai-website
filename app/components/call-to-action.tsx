
'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Bot, Brain } from 'lucide-react'

const CallToAction = () => {
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
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-br from-[#20B2AA] to-[#1C9999] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            scale: [1.1, 1, 1.1],
            rotate: [0, -15, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 left-10 w-40 h-40 bg-[#8A2BE2]/20 rounded-full blur-2xl"
        />
      </div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container-custom relative z-10 text-center text-white"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
            <Brain className="h-5 w-5" />
            <span className="text-sm font-medium">Ready to Transform?</span>
          </div>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
        >
          Start Your AI Journey with{' '}
          <span className="text-[#8A2BE2] drop-shadow-lg">
            RampAI
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed"
        >
          Join leading organizations who trust RampAI to accelerate their artificial 
          intelligence transformation and unlock unprecedented business value.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/contact"
            className="group px-8 py-4 bg-white text-[#20B2AA] font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
          >
            <span>Schedule Free Strategy Session</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link
            href="/training"
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-[#20B2AA] transition-all duration-300 transform hover:scale-105"
          >
            View Training Programs
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 text-white/80 text-sm"
        >
          <p>No commitment required • Free consultation • Custom solutions</p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default CallToAction
