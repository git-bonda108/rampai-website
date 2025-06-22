
'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, TrendingUp, Shield, Zap, CheckCircle, ArrowRight, Calendar, Users, Target } from 'lucide-react'
import Link from 'next/link'

const ConsultingPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('IT')

  const consultingServices = {
    'IT': {
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      useCases: [
        {
          title: 'AI-Powered DevOps Automation',
          description: 'Implement intelligent CI/CD pipelines with predictive deployment optimization and automated testing.',
          benefits: ['50% faster deployment cycles', 'Reduced manual errors', 'Predictive issue detection'],
          process: ['Current state assessment', 'AI tool selection', 'Pipeline redesign', 'Team training'],
          timeline: '8-12 weeks',
          roi: '40% reduction in deployment time'
        },
        {
          title: 'Intelligent Cloud Cost Optimization',
          description: 'Deploy AI models to automatically optimize cloud resource allocation and reduce operational costs.',
          benefits: ['30% cost reduction', 'Automated scaling', 'Resource optimization'],
          process: ['Cost analysis', 'AI model development', 'Implementation', 'Monitoring setup'],
          timeline: '6-10 weeks',
          roi: 'Average 35% cost savings'
        },
        {
          title: 'Code Quality Enhancement with AI',
          description: 'Integrate AI-powered code review, bug detection, and performance optimization tools.',
          benefits: ['Higher code quality', 'Faster reviews', 'Automated refactoring'],
          process: ['Tool evaluation', 'Integration planning', 'Developer training', 'Quality metrics'],
          timeline: '4-8 weeks',
          roi: '60% reduction in bugs'
        }
      ]
    },
    'Finance': {
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      useCases: [
        {
          title: 'Advanced Fraud Detection System',
          description: 'Build real-time fraud detection using machine learning to identify suspicious transactions instantly.',
          benefits: ['99.5% accuracy', 'Real-time detection', 'Reduced false positives'],
          process: ['Data analysis', 'Model development', 'Integration', 'Continuous tuning'],
          timeline: '10-16 weeks',
          roi: '300% return on investment'
        },
        {
          title: 'Algorithmic Trading Strategy',
          description: 'Develop AI-driven trading algorithms that adapt to market conditions and optimize portfolio performance.',
          benefits: ['Consistent returns', 'Risk mitigation', 'Market adaptation'],
          process: ['Strategy design', 'Backtesting', 'Paper trading', 'Live deployment'],
          timeline: '12-20 weeks',
          roi: '15-25% annual returns'
        },
        {
          title: 'Credit Risk Assessment AI',
          description: 'Implement intelligent credit scoring models that improve approval rates while reducing default risk.',
          benefits: ['Better risk assessment', 'Faster approvals', 'Regulatory compliance'],
          process: ['Data preparation', 'Model training', 'Validation', 'Production deployment'],
          timeline: '8-14 weeks',
          roi: '20% improvement in approval accuracy'
        }
      ]
    },
    'Retail': {
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      useCases: [
        {
          title: 'Personalized Recommendation Engine',
          description: 'Create AI-powered recommendation systems that increase customer engagement and sales conversion.',
          benefits: ['25% increase in sales', 'Better customer experience', 'Increased retention'],
          process: ['Customer data analysis', 'Algorithm development', 'A/B testing', 'Full deployment'],
          timeline: '6-12 weeks',
          roi: '200% increase in conversion'
        },
        {
          title: 'Dynamic Pricing Optimization',
          description: 'Implement intelligent pricing strategies that adapt to demand, competition, and inventory levels.',
          benefits: ['Optimized margins', 'Competitive advantage', 'Inventory turnover'],
          process: ['Market analysis', 'Pricing model development', 'Testing', 'Implementation'],
          timeline: '8-14 weeks',
          roi: '15% margin improvement'
        },
        {
          title: 'Supply Chain Intelligence',
          description: 'Deploy AI for demand forecasting, inventory optimization, and supply chain risk management.',
          benefits: ['Reduced stockouts', 'Lower inventory costs', 'Better planning'],
          process: ['Supply chain mapping', 'Demand modeling', 'Risk assessment', 'System integration'],
          timeline: '10-16 weeks',
          roi: '30% inventory cost reduction'
        }
      ]
    },
    'Manufacturing': {
      icon: Shield,
      color: 'from-orange-500 to-red-500',
      useCases: [
        {
          title: 'Predictive Maintenance System',
          description: 'Implement IoT and AI for equipment monitoring to predict failures before they occur.',
          benefits: ['90% uptime improvement', 'Reduced maintenance costs', 'Extended equipment life'],
          process: ['Sensor deployment', 'Data collection', 'Model training', 'Alert system setup'],
          timeline: '12-18 weeks',
          roi: '25% maintenance cost reduction'
        },
        {
          title: 'Quality Control Automation',
          description: 'Deploy computer vision AI for automated quality inspection and defect detection.',
          benefits: ['99% defect detection', 'Consistent quality', 'Reduced labor costs'],
          process: ['Image data collection', 'Model training', 'System integration', 'Operator training'],
          timeline: '8-14 weeks',
          roi: '40% quality improvement'
        },
        {
          title: 'Production Optimization AI',
          description: 'Optimize manufacturing processes using AI to improve efficiency and reduce waste.',
          benefits: ['20% efficiency gain', 'Waste reduction', 'Energy savings'],
          process: ['Process analysis', 'Optimization modeling', 'Implementation', 'Performance monitoring'],
          timeline: '10-16 weeks',
          roi: '18% productivity increase'
        }
      ]
    },
    'Healthcare': {
      icon: Target,
      color: 'from-teal-500 to-blue-500',
      useCases: [
        {
          title: 'Medical Image Analysis AI',
          description: 'Develop AI systems for radiology and pathology image analysis to assist in diagnosis.',
          benefits: ['95% diagnostic accuracy', 'Faster diagnoses', 'Reduced workload'],
          process: ['Data preparation', 'Model development', 'Clinical validation', 'Integration'],
          timeline: '16-24 weeks',
          roi: '50% faster diagnosis'
        },
        {
          title: 'Patient Risk Prediction',
          description: 'Implement predictive models to identify patients at risk of complications or readmission.',
          benefits: ['Early intervention', 'Better outcomes', 'Cost reduction'],
          process: ['EHR integration', 'Risk modeling', 'Clinical workflow', 'Monitoring setup'],
          timeline: '12-18 weeks',
          roi: '30% reduction in readmissions'
        },
        {
          title: 'Drug Discovery Acceleration',
          description: 'Apply AI to accelerate drug discovery and clinical trial optimization.',
          benefits: ['Faster discovery', 'Lower costs', 'Higher success rates'],
          process: ['Data integration', 'Model development', 'Trial design', 'Validation'],
          timeline: '20-30 weeks',
          roi: '40% faster time to market'
        }
      ]
    }
  }

  const industries = Object.keys(consultingServices)

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
              AI Consulting Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Strategic consulting to help organizations successfully implement 
              and scale AI solutions with measurable business impact.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Industry Selector */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 justify-center">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedIndustry === industry
                    ? 'bg-[#4CAF50] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="container-custom"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#101585] mb-4">
              {selectedIndustry} AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Proven use cases and implementations that deliver measurable results 
              for {selectedIndustry.toLowerCase()} organizations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {consultingServices[selectedIndustry as keyof typeof consultingServices].useCases.map((useCase, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-8 rounded-2xl hover-lift"
              >
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#101585] mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#4CAF50] mr-2" />
                    Key Benefits
                  </h4>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-[#4CAF50] rounded-full flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <ArrowRight className="h-5 w-5 text-[#A47864] mr-2" />
                    Implementation Process
                  </h4>
                  <ul className="space-y-2">
                    {useCase.process.map((step, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <span className="w-6 h-6 bg-[#A47864] text-white text-xs rounded-full flex items-center justify-center flex-shrink-0">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timeline & ROI */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-[#4CAF50]/10 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Timeline</div>
                    <div className="font-semibold text-[#4CAF50]">{useCase.timeline}</div>
                  </div>
                  <div className="text-center p-3 bg-[#101585]/10 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Expected ROI</div>
                    <div className="font-semibold text-[#101585]">{useCase.roi}</div>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={`/contact?service=${encodeURIComponent(useCase.title)}`}
                  className="w-full flex items-center justify-center space-x-2 py-3 bg-[#4CAF50] text-white font-semibold rounded-lg hover:bg-[#45a049] transition-all duration-300 transform hover:scale-105"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Get Started</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Consulting Process */}
      <section className="py-16 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="container-custom"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#101585] mb-4">
              Our Proven Consulting Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach to AI implementation that ensures success 
              and delivers measurable business outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Discovery & Assessment',
                description: 'Comprehensive analysis of your current state, challenges, and AI readiness.',
                icon: Target,
                color: 'from-blue-500 to-cyan-500'
              },
              {
                step: '2', 
                title: 'Strategy Development',
                description: 'Custom AI strategy aligned with your business objectives and technical capabilities.',
                icon: Lightbulb,
                color: 'from-green-500 to-emerald-500'
              },
              {
                step: '3',
                title: 'Implementation',
                description: 'Agile development and deployment with continuous testing and optimization.',
                icon: Zap,
                color: 'from-purple-500 to-pink-500'
              },
              {
                step: '4',
                title: 'Optimization & Scale',
                description: 'Performance monitoring, continuous improvement, and scaling across the organization.',
                icon: TrendingUp,
                color: 'from-orange-500 to-red-500'
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center glass-card p-8 rounded-2xl hover-lift"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${phase.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <phase.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-[#101585] mb-2">
                  {phase.step}
                </div>
                <h3 className="text-lg font-semibold text-[#101585] mb-3">
                  {phase.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 hero-gradient text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="container-custom text-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your AI goals and discover 
              how our consulting services can drive measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?type=consultation"
                className="px-8 py-4 bg-[#4CAF50] text-white font-semibold rounded-xl hover:bg-[#45a049] transition-all duration-300 transform hover:scale-105 animate-glow"
              >
                Schedule Free Consultation
              </Link>
              <Link
                href="/projects"
                className="px-8 py-4 glass-card text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

export default ConsultingPage
