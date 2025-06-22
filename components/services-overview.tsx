
'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Bot, Brain, TrendingUp, Zap, BookOpen, Settings, Shield, Users, Code, Database, LineChart, Cpu, Globe, Microscope, Lightbulb, Target, Layers, GitBranch, Lock, CheckCircle } from 'lucide-react'

const ServicesOverview = () => {
  const services = [
    {
      icon: Bot,
      title: 'AI Training & Workshops',
      description: 'Comprehensive programs designed to upskill your teams with practical AI knowledge and implementation strategies.',
      features: ['Hands-on Learning', 'Industry Applications', 'Certification Programs'],
      href: '/training'
    },
    {
      icon: Brain,
      title: 'Strategic AI Consulting',
      description: 'Expert guidance to identify AI opportunities, develop implementation roadmaps, and drive digital transformation.',
      features: ['Strategy Development', 'Technology Selection', 'Implementation Support'],
      href: '/consulting'
    },
    {
      icon: TrendingUp,
      title: 'Custom AI Solutions',
      description: 'Tailored artificial intelligence solutions that address your specific business challenges and objectives.',
      features: ['Machine Learning Models', 'Automation Systems', 'Data Analytics'],
      href: '/projects'
    }
  ]

  // Comprehensive AI/ML Knowledge Areas from PDF
  const knowledgeAreas = [
    {
      category: 'Foundations',
      icon: BookOpen,
      topics: [
        'History and Evolution of AI',
        'Symbolic AI vs. Statistical AI',
        'The Turing Test and AI Philosophy',
        'AI Paradigms: Symbolic, Connectionist, Evolutionary, Bayesian',
        'Intelligent Agents & Environments'
      ]
    },
    {
      category: 'Mathematics & Statistics',
      icon: LineChart,
      topics: [
        'Linear Algebra: Vectors, Matrices, Tensors',
        'Probability & Statistics: Bayes\' Theorem',
        'Calculus: Gradients, Partial Derivatives',
        'Optimization: Gradient Descent, Convex Optimization'
      ]
    },
    {
      category: 'Core Machine Learning',
      icon: Cpu,
      topics: [
        'Supervised, Unsupervised, Reinforcement Learning',
        'Regression, SVM, Decision Trees',
        'Ensemble Methods, KNN, Clustering',
        'Gradient Boosting (XGBoost, LightGBM, CatBoost)'
      ]
    },
    {
      category: 'Deep Learning',
      icon: Layers,
      topics: [
        'ANN, MLP, CNNs, RNNs (LSTM, GRU)',
        'Transformers and Attention Mechanisms',
        'Activation Functions, Backpropagation',
        'Residual Networks, Capsule Networks'
      ]
    },
    {
      category: 'Generative AI',
      icon: Lightbulb,
      topics: [
        'GANs, VAEs, Diffusion Models',
        'LLMs: GPT, BERT, T5, LLaMA, Claude',
        'Prompt Engineering, Fine-Tuning',
        'RAG, Agentic Systems'
      ]
    },
    {
      category: 'Natural Language Processing',
      icon: Globe,
      topics: [
        'Tokenization, Embeddings, NER',
        'POS Tagging, Sentiment Analysis',
        'Translation, Summarization, QA',
        'Chatbots and Conversational AI'
      ]
    },
    {
      category: 'Computer Vision',
      icon: Microscope,
      topics: [
        'Image Classification, Object Detection',
        'Image Segmentation, Face Recognition',
        'OCR, Style Transfer',
        'Vision Transformers, CLIP, SAM'
      ]
    },
    {
      category: 'MLOps & Engineering',
      icon: Settings,
      topics: [
        'Data Processing, Training, Evaluation',
        'Experiment Tracking (MLflow)',
        'Model Deployment (FastAPI, TorchServe)',
        'CI/CD, Model Monitoring, Feature Stores'
      ]
    },
    {
      category: 'Explainable AI',
      icon: Target,
      topics: [
        'SHAP, LIME, Feature Importance',
        'PDP, ICE, Counterfactuals',
        'Bias, Fairness, Transparency',
        'Model Interpretability'
      ]
    },
    {
      category: 'Responsible AI',
      icon: Shield,
      topics: [
        'AI Ethics, Bias, Fairness',
        'Privacy (Differential Privacy, Federated Learning)',
        'Regulations: EU AI Act, NIST, OECD',
        'AI Alignment & Safety'
      ]
    },
    {
      category: 'Multi-Agent Systems',
      icon: Users,
      topics: [
        'Agent Architectures, Planning Agents',
        'AutoGPT, ReAct, LangChain',
        'CrewAI, LangGraph',
        'Autonomous Orchestration'
      ]
    },
    {
      category: 'Tools & Platforms',
      icon: Code,
      topics: [
        'Python, R, Julia',
        'scikit-learn, TensorFlow, PyTorch',
        'Hugging Face, MLflow, DVC',
        'SageMaker, Vertex AI, OpenAI API'
      ]
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

  return (
    <section id="business-transform-section" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
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
            How <span className="text-[#20B2AA]">Ramp</span><span className="text-[#8A2BE2]">AI</span> Transforms Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive approach to AI transformation through training, 
            consulting, and custom solution development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white/80 backdrop-blur-sm border border-[#20B2AA]/20 rounded-2xl p-8 hover-lift shadow-lg"
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
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#20B2AA] rounded-full" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                href={service.href}
                className="group inline-flex items-center space-x-2 text-[#20B2AA] font-semibold hover:text-[#1C9999] transition-colors duration-300"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Comprehensive AI/ML Knowledge Map Section */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            <span className="text-[#20B2AA]">Ramp Up Skills.</span> <span className="text-[#8A2BE2]">Unlock Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive AI/ML knowledge map covering everything from foundations 
            to cutting-edge applications across all major domains.
          </p>
        </motion.div>

        {/* Knowledge Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {knowledgeAreas.map((area, index) => (
            <motion.div
              key={area.category}
              variants={itemVariants}
              className="bg-white border border-[#20B2AA]/20 rounded-xl p-6 hover-lift shadow-lg group"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#20B2AA] to-[#8A2BE2] rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">{area.category}</h3>
              </div>
              
              <ul className="space-y-2">
                {area.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="flex items-start space-x-2">
                    <CheckCircle className="h-3 w-3 text-[#20B2AA] mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600 leading-relaxed">{topic}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#20B2AA] to-[#8A2BE2] rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your AI Journey?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of professionals who have accelerated their careers with our comprehensive AI/ML programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-[#20B2AA] font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Your Journey
              </Link>
              <Link
                href="/training"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-[#20B2AA] transition-colors duration-300 transform hover:scale-105"
              >
                View Training Programs
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ServicesOverview
