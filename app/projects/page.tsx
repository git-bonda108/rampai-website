
'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Star, ExternalLink, Filter, Code, Zap, Eye, Cpu, MessageSquare } from 'lucide-react'
import Image from 'next/image'

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchTerm, setSearchTerm] = useState<string>('')

  const projects = [
    {
      name: 'Stable Diffusion',
      description: 'A latent text-to-image diffusion model capable of generating photo-realistic images given any text input.',
      category: 'Generative AI',
      stars: 41000,
      language: 'Python',
      highlights: ['Text-to-Image', 'High Resolution', 'Open Source'],
      relevance: 'Demonstrates the power of generative AI for creative applications and how to make complex models accessible.',
      imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop',
      githubUrl: 'https://github.com/Stability-AI/StableDiffusion',
      featured: true
    },
    {
      name: 'AUTOMATIC1111/stable-diffusion-webui',
      description: 'A browser interface based on Gradio library for Stable Diffusion, making AI image generation accessible to everyone.',
      category: 'Generative AI',
      stars: 154000,
      language: 'Python',
      highlights: ['Web Interface', 'User-Friendly', 'Extensions'],
      relevance: 'Shows how to build intuitive interfaces for complex AI models, essential for business applications.',
      imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop',
      githubUrl: 'https://github.com/AUTOMATIC1111/stable-diffusion-webui',
      featured: true
    },
    {
      name: 'AutoGPT',
      description: 'An experimental open-source attempt to make GPT-4 fully autonomous, capable of performing tasks independently.',
      category: 'Agentic AI',
      stars: 175000,
      language: 'Python',
      highlights: ['Autonomous Agents', 'Goal-Oriented', 'Multi-Step'],
      relevance: 'Represents the future of autonomous AI systems that can handle complex business processes independently.',
      imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=200&fit=crop',
      githubUrl: 'https://github.com/Significant-Gravitas/Auto-GPT',
      featured: true
    },
    {
      name: 'LangChain',
      description: 'A framework for developing applications powered by language models, enabling context-aware reasoning applications.',
      category: 'ML Frameworks',
      stars: 110000,
      language: 'Python',
      highlights: ['LLM Integration', 'Chaining', 'Production Ready'],
      relevance: 'Essential framework for building production-grade AI applications with language models.',
      imageUrl: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400&h=200&fit=crop',
      githubUrl: 'https://github.com/langchain-ai/langchain',
      featured: false
    },
    {
      name: 'TensorFlow',
      description: 'An end-to-end open source platform for machine learning with comprehensive tools and libraries.',
      category: 'ML Frameworks',
      stars: 190000,
      language: 'C++',
      highlights: ['Production Scale', 'Comprehensive', 'Google Backed'],
      relevance: 'Industry standard for machine learning development, crucial for enterprise AI implementations.',
      imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop',
      githubUrl: 'https://github.com/tensorflow/tensorflow',
      featured: false
    },
    {
      name: 'PyTorch',
      description: 'Tensors and Dynamic neural networks in Python with strong GPU acceleration and research flexibility.',
      category: 'ML Frameworks',
      stars: 90000,
      language: 'Python',
      highlights: ['Research Friendly', 'Dynamic Graphs', 'GPU Acceleration'],
      relevance: 'Preferred framework for AI research and rapid prototyping, essential for innovative AI solutions.',
      imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop',
      githubUrl: 'https://github.com/pytorch/pytorch',
      featured: false
    },
    {
      name: 'Open Interpreter',
      description: 'A natural language interface for computers that runs code locally, providing full system access.',
      category: 'Agentic AI',
      stars: 59000,
      language: 'Python',
      highlights: ['Local Execution', 'Natural Language', 'System Access'],
      relevance: 'Demonstrates how AI can provide natural language interfaces to complex systems and automation.',
      imageUrl: 'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=400&h=200&fit=crop',
      githubUrl: 'https://github.com/OpenInterpreter/open-interpreter',
      featured: false
    },
    {
      name: 'MetaGPT',
      description: 'Multi-agent framework that assigns different roles to GPTs to form a collaborative software entity.',
      category: 'Agentic AI',
      stars: 55000,
      language: 'Python',
      highlights: ['Multi-Agent', 'Collaboration', 'Software Development'],
      relevance: 'Shows how multiple AI agents can work together to tackle complex, multi-step business processes.',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
      githubUrl: 'https://github.com/geekan/MetaGPT',
      featured: false
    },
    {
      name: 'Ultralytics YOLO',
      description: 'State-of-the-art real-time object detection, instance segmentation and image classification models.',
      category: 'Computer Vision',
      stars: 42000,
      language: 'Python',
      highlights: ['Real-time Detection', 'High Accuracy', 'Easy Deployment'],
      relevance: 'Industry standard for computer vision applications, essential for manufacturing and retail AI solutions.',
      imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop',
      githubUrl: 'https://github.com/ultralytics/yolov5',
      featured: false
    },
    {
      name: 'OpenCV',
      description: 'Open Source Computer Vision Library with comprehensive tools for image and video processing.',
      category: 'Computer Vision',
      stars: 82000,
      language: 'C++',
      highlights: ['Comprehensive', 'Performance', 'Cross-platform'],
      relevance: 'Foundational library for computer vision applications, critical for industrial and healthcare AI.',
      imageUrl: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_Computer_Vision.jpg',
      githubUrl: 'https://github.com/opencv/opencv',
      featured: false
    },
    {
      name: 'Hugging Face Transformers',
      description: 'State-of-the-art Machine Learning for PyTorch, TensorFlow, and JAX with thousands of pretrained models.',
      category: 'NLP',
      stars: 135000,
      language: 'Python',
      highlights: ['Pretrained Models', 'Multi-framework', 'Community Hub'],
      relevance: 'Central hub for NLP models, essential for any organization implementing language understanding AI.',
      imageUrl: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=400&h=200&fit=crop',
      githubUrl: 'https://github.com/huggingface/transformers',
      featured: false
    },
    {
      name: 'OpenAI Whisper',
      description: 'Robust speech recognition via large-scale weak supervision, supporting 100+ languages.',
      category: 'NLP',
      stars: 83000,
      language: 'Python',
      highlights: ['Multilingual', 'Robust', 'High Accuracy'],
      relevance: 'Best-in-class speech recognition, crucial for voice-enabled business applications and accessibility.',
      imageUrl: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=400&h=200&fit=crop',
      githubUrl: 'https://github.com/openai/whisper',
      featured: false
    }
  ]

  const categories = ['All', 'Generative AI', 'Agentic AI', 'ML Frameworks', 'Computer Vision', 'NLP']

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Generative AI':
        return Zap
      case 'Agentic AI':
        return Cpu
      case 'ML Frameworks':
        return Code
      case 'Computer Vision':
        return Eye
      case 'NLP':
        return MessageSquare
      default:
        return Filter
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Generative AI':
        return 'from-purple-500 to-pink-500'
      case 'Agentic AI':
        return 'from-blue-500 to-cyan-500'
      case 'ML Frameworks':
        return 'from-green-500 to-teal-500'
      case 'Computer Vision':
        return 'from-orange-500 to-red-500'
      case 'NLP':
        return 'from-indigo-500 to-purple-500'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredProjects = projects.filter(p => p.featured)

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
              AI Project Showcase
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Explore the cutting-edge open-source AI projects that are shaping the future. 
              Our expertise spans these innovative technologies to help your organization succeed.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="container-custom"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#101585] mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These groundbreaking projects represent the pinnacle of AI innovation 
              and form the foundation of our training and consulting expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card rounded-2xl overflow-hidden hover-lift group"
              >
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(project.category)} text-white text-xs font-semibold rounded-full`}>
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm font-medium">
                      {(project.stars / 1000).toFixed(0)}k
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1">
                      {project.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] text-xs rounded-full font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-[#101585]/5 to-[#4CAF50]/5 p-3 rounded-lg mb-4">
                    <p className="text-xs text-gray-700 italic">
                      <strong>RampAI Insight:</strong> {project.relevance}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 hover:text-[#101585] transition-colors duration-300"
                    >
                      <Github className="h-4 w-4" />
                      <span className="text-sm font-medium">View Code</span>
                    </a>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded font-mono">
                      {project.language}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-gray-50 border-t border-b">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const Icon = getCategoryIcon(category)
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-[#4CAF50] text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{category}</span>
                  </button>
                )
              })}
            </div>

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent outline-none"
              />
              <Filter className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
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
              Complete Project Collection
            </h2>
            <p className="text-xl text-gray-600">
              {filteredProjects.length} projects in {selectedCategory === 'All' ? 'all categories' : selectedCategory}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-lg hover-lift group border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-br ${getCategoryColor(project.category)} rounded-lg flex items-center justify-center`}>
                    {React.createElement(getCategoryIcon(project.category), {
                      className: "h-5 w-5 text-white"
                    })}
                  </div>
                  <div className="flex items-center space-x-1 bg-gray-100 rounded-full px-2 py-1">
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-medium text-gray-600">
                      {(project.stars / 1000).toFixed(0)}k
                    </span>
                  </div>
                </div>

                <h3 className="font-bold text-[#101585] mb-2 group-hover:text-[#4CAF50] transition-colors duration-300">
                  {project.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.highlights.slice(0, 2).map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-mono">
                    {project.language}
                  </span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#101585] transition-colors duration-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              variants={itemVariants}
              className="text-center py-12"
            >
              <div className="text-gray-400 mb-4">
                <Filter className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No projects found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search terms or category filters.
              </p>
            </motion.div>
          )}
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
              Ready to Leverage These Technologies?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our training programs and consulting services help you understand, implement, 
              and scale these cutting-edge AI technologies in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/training"
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 bg-[#4CAF50] text-white font-semibold rounded-xl hover:bg-[#45a049] transition-all duration-300 animate-glow"
              >
                Explore Training Programs
              </motion.a>
              <motion.a
                href="/consulting"
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 glass-card text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                Consulting Services
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

export default ProjectsPage
