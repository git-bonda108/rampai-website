

'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, Star, ExternalLink, ArrowRight } from 'lucide-react'

const FeaturedProjects = () => {
  const projects = [
    {
      name: 'RampAI - Agentic SDLC Automation',
      description: 'Reimagines the software development lifecycle by fusing Agentic AI with real-world engineering workflows. Built on advanced multi-agent systems like CrewAI and AutoGen.',
      category: 'Agentic AI',
      stars: 0,
      language: 'Python',
      highlights: ['Multi-Agent Systems', 'SDLC Automation', 'Streamlit Interface'],
      relevance: 'Transforms SDLC from manual process into seamless, intelligent automation pipeline',
      imageUrl: 'https://i.ytimg.com/vi/g4gaVxaFFYI/maxresdefault.jpg',
      githubUrl: '#'
    },
    {
      name: 'Data Lens - Conversational Insights',
      description: 'Empowers users to have natural language conversations with structured data. Upload spreadsheets and extract deep insights instantly - no coding or SQL required.',
      category: 'Data Analytics',
      stars: 0,
      language: 'Python',
      highlights: ['Natural Language Queries', 'Excel & CSV Support', 'SmartDataframe'],
      relevance: 'Democratizes data access across business functions with conversational AI',
      imageUrl: 'https://blog.kore.ai/hubfs/Analytics-in-Conversational-AI.jpg',
      githubUrl: '#'
    },
    {
      name: 'Meeting Summary Generator',
      description: 'Transforms verbose meeting notes into structured, action-oriented executive summaries. Powered by GPT-4o with timestamped precision and actionable insights.',
      category: 'Productivity AI',
      stars: 0,
      language: 'Python',
      highlights: ['Meeting Analysis', 'Action Items', 'Executive Summaries'],
      relevance: 'Turns meetings into momentum by eliminating ambiguity and ensuring team alignment',
      imageUrl: 'https://cdn.pixabay.com/photo/2023/03/09/20/41/ai-generated-7840859_1280.jpg',
      githubUrl: '#'
    },
    {
      name: 'RAG System - Chat with Documents',
      description: 'AI-powered conversations with uploaded documents using LangChain, FAISS, and GPT-4. Enables dynamic summarization, memory-based Q&A, and contextual follow-up.',
      category: 'Knowledge AI',
      stars: 0,
      language: 'Python',
      highlights: ['Document Intelligence', 'RAG Architecture', 'Memory-based QA'],
      relevance: 'Creates an always-available knowledge assistant for document intelligence',
      imageUrl: 'https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/media/rag/azure-rag-processing.png?view=doc-intel-4.0.0',
      githubUrl: '#'
    },
    {
      name: 'Competency Mapping - AI Learning Tracks',
      description: 'Upload skill-role mapping sheets and craft fully customized upskilling journeys. Analyzes roles, skills, and experience levels to produce interactive roadmaps from L1 to L4.',
      category: 'Learning AI',
      stars: 0,
      language: 'Python',
      highlights: ['Skill Assessment', 'Learning Paths', 'Progress Tracking'],
      relevance: 'Workforce development reimagined through AI personalization at scale',
      imageUrl: 'https://i.pinimg.com/originals/7d/8c/b0/7d8cb05f95ff373c2ba63d77041b820b.jpg',
      githubUrl: '#'
    },
    {
      name: 'Sage Lens - Multi-Agent Skilling Engine',
      description: 'Intelligent learning orchestrator built using multi-agent LLMs like GPT, Claude, Tavily, and YouTube agents. Generates, critiques, and enriches competency-based learning paths.',
      category: 'Multi-Agent AI',
      stars: 0,
      language: 'Python',
      highlights: ['Multi-Agent LLMs', 'Learning Orchestration', 'Real-time Enrichment'],
      relevance: 'Ultimate co-pilot for HR, L&D, and capability building in the AI era',
      imageUrl: 'https://dz2cdn1.dzone.com/storage/temp/18012613-flow.jpg',
      githubUrl: '#'
    }
  ]

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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Agentic AI':
        return 'from-blue-500 to-cyan-500'
      case 'Data Analytics':
        return 'from-[#20B2AA] to-teal-500'
      case 'Productivity AI':
        return 'from-purple-500 to-pink-500'
      case 'Knowledge AI':
        return 'from-green-500 to-emerald-500'
      case 'Learning AI':
        return 'from-orange-500 to-red-500'
      case 'Multi-Agent AI':
        return 'from-indigo-500 to-purple-500'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#101585]/5 via-transparent to-[#20B2AA]/5" />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container-custom relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#101585] mb-4">
            RampAI Creative Project Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our innovative AI-powered solutions that transform how businesses operate. 
            From agentic automation to intelligent document processing - we build the future of work.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 text-[#20B2AA] font-semibold hover:text-[#1C9999] transition-colors duration-300 group"
          >
            <span>Explore Full Showcase</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card rounded-2xl overflow-hidden hover-lift group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#101585]/20 to-[#20B2AA]/20" />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(project.category)} text-white text-xs font-semibold rounded-full`}>
                    {project.category}
                  </span>
                </div>
                {project.stars > 0 && (
                  <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm font-medium">
                      {(project.stars / 1000).toFixed(0)}k
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-[#101585] group-hover:text-[#20B2AA] transition-colors duration-300">
                    {project.name}
                  </h3>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded font-mono">
                    {project.language}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#20B2AA]/10 text-[#20B2AA] text-xs rounded-full font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Relevance */}
                <div className="bg-gradient-to-r from-[#101585]/5 to-[#20B2AA]/5 p-3 rounded-lg mb-4">
                  <p className="text-xs text-gray-700 italic">
                    <strong>RampAI Insight:</strong> {project.relevance}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="flex items-center space-x-2 text-gray-600 hover:text-[#101585] transition-colors duration-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="text-sm font-medium">Learn More</span>
                  </Link>
                  <div className="text-xs text-gray-500 bg-[#20B2AA]/10 px-2 py-1 rounded-full">
                    RampAI Project
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center glass-card p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-[#101585] mb-4">
            Ready to Build Your Custom AI Solution?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's collaborate to create intelligent automation solutions tailored to your business needs. 
            From concept to deployment, RampAI transforms your vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#20B2AA] text-white font-semibold rounded-lg hover:bg-[#1C9999] transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </Link>
            <Link
              href="/consulting"
              className="px-6 py-3 glass-card text-[#101585] font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300"
            >
              Strategic Consulting
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default FeaturedProjects

