
'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Users, Code, Calendar, Clock, Award, CheckCircle, Target, BookOpen, Brain, Building, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const TrainingPage = () => {
  const [selectedProgram, setSelectedProgram] = useState<string | null>('ai-for-all')

  const trainingPrograms = {
    'ai-for-all': {
      title: 'AI for All',
      subtitle: 'Understanding and Embracing Artificial Intelligence in the Workplace',
      duration: '1.5-2 Days (12-16 hours)',
      target: 'All employees - technical and non-technical',
      level: 'Foundational',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      description: 'Comprehensive foundational training designed for employees across all functions who wish to gain practical understanding of AI and its workplace applications.',
      image: 'https://img.freepik.com/premium-photo/diverse-group-professionals-collaborating-laptops-modern-office-setting-generative-ai_561855-47206.jpg',
      prerequisites: [
        'No prior AI experience required',
        'Basic digital literacy',
        'Openness to learn new technology concepts'
      ],
      objectives: [
        'Understand core AI concepts and history',
        'Identify types and real-world applications of AI',
        'Explore AI impact on different workplace functions',
        'Experience hands-on AI simulations and tools',
        'Cultivate mindset to collaborate with AI as productivity partner',
        'Discuss ethical concerns and responsible AI use'
      ],
      modules: [
        {
          title: 'AI Fundamentals & Impact',
          topics: ['Definition and History of AI', 'AI vs ML vs Deep Learning', 'Evolution and Hype Cycle', 'Interactive Polls and Discussions']
        },
        {
          title: 'AI Technologies & Types',
          topics: ['Reactive Machines, Limited Memory, Theory of Mind', 'NLP, Computer Vision, Robotics', 'Live Demos: Chatbot & Image Recognition']
        },
        {
          title: 'AI in Everyday Life',
          topics: ['Consumer Technology Applications', 'Workplace Applications in HR, Marketing, Finance', 'Industry Case Studies']
        },
        {
          title: 'Workplace AI Benefits',
          topics: ['Productivity & Decision-Making Support', 'Task Automation', 'AI as Collaborative Tool', 'Role Play: "AI Buddy" Activities']
        },
        {
          title: 'Hands-On AI Concepts',
          topics: ['Visualizing Machine Learning', 'Build Mini Models', 'Teachable Machine Exercises', 'Reflection Sessions']
        },
        {
          title: 'ChatGPT & Claude Mastery',
          topics: ['Platform Setup & Navigation', 'Prompting Basics: Role, Context, Intent', 'Practical Exercises: Reports, Templates']
        },
        {
          title: 'AI Tools Ecosystem',
          topics: ['Microsoft Copilot, Google Gemini', 'Canva Magic Studio, Notion AI', 'Tool Matching Activities']
        },
        {
          title: 'Ethics & Responsible AI',
          topics: ['Data Bias, Privacy, Transparency', 'Workplace Ethics', 'Trust-based Discussions']
        }
      ],
      outcomes: [
        'Foundational AI literacy across the organization',
        'Increased confidence with AI tools and concepts',
        'Enhanced productivity through AI adoption',
        'Ethical AI awareness and best practices'
      ]
    },
    'ai-ml-developer': {
      title: 'AI/ML Developer Learning Path',
      subtitle: 'From Fundamentals to Full Deployment',
      duration: '30-45 Days',
      target: 'Experienced software developers transitioning to AI/ML',
      level: 'Comprehensive Technical',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      description: 'Intensive technical program for developers with 2+ years experience in any programming language, designed to build production-ready AI/ML skills from scratch.',
      image: 'https://img.freepik.com/premium-photo/it-specialist-working-computer-with-multiple-monitors-showing-software-neural-network-artificial_753333-16274.jpg',
      prerequisites: [
        '2+ years programming experience (any language)',
        'Familiarity with software development principles',
        'Willingness to learn Python syntax',
        'Curiosity about data-driven systems'
      ],
      objectives: [
        'Master core AI and ML concepts with real-world applications',
        'Develop proficiency in Python for data science and ML',
        'Build, train, and evaluate supervised/unsupervised models',
        'Implement deep learning with TensorFlow and PyTorch',
        'Deploy complete end-to-end ML projects',
        'Apply professional best practices and ethics in AI'
      ],
      modules: [
        {
          title: 'AI & Machine Learning Foundation',
          topics: ['AI, ML, Deep Learning Relationships', 'Key Terminology & Concepts', 'Real-World Use Cases', 'Types of Machine Learning']
        },
        {
          title: 'Python Essentials (Fast-Track)',
          topics: ['Environment Setup: Jupyter, Anaconda, VS Code', 'NumPy & Pandas for Data Handling', 'Matplotlib & Seaborn Visualization']
        },
        {
          title: 'Core Math & Statistics',
          topics: ['Linear Algebra with NumPy', 'Probability & Statistics Essentials', 'Gradient Descent & Optimization']
        },
        {
          title: 'Data Handling & Engineering',
          topics: ['Data Collection: APIs, JSON, SQL', 'Data Cleaning & Feature Engineering', 'Visualization for Insights']
        },
        {
          title: 'Supervised Learning',
          topics: ['Linear & Logistic Regression', 'Decision Trees & Random Forests', 'SVMs, KNN, XGBoost']
        },
        {
          title: 'Unsupervised Learning',
          topics: ['K-Means & DBSCAN Clustering', 'PCA & t-SNE Dimensionality Reduction', 'Anomaly Detection']
        },
        {
          title: 'Model Evaluation & Tuning',
          topics: ['Cross-Validation & Metrics', 'Hyperparameter Tuning', 'Model Interpretability with SHAP/LIME']
        },
        {
          title: 'Deep Learning Introduction',
          topics: ['Neural Networks with Keras/TensorFlow', 'CNNs for Image Recognition', 'RNNs & LSTMs for Sequences']
        },
        {
          title: 'Frameworks & Libraries',
          topics: ['Scikit-Learn Mastery', 'TensorFlow & PyTorch', 'Hugging Face Transformers']
        },
        {
          title: 'End-to-End Projects',
          topics: ['Project Planning & Problem Framing', 'Data Pipeline Development', 'Model Selection & Training']
        },
        {
          title: 'Model Deployment',
          topics: ['Flask & FastAPI Development', 'Streamlit Interactive Demos', 'Docker & Cloud Deployment']
        },
        {
          title: 'Professional Practices',
          topics: ['Git for ML Projects', 'Reproducible Environments', 'ML Experiment Tracking']
        },
        {
          title: 'Ethics & Responsible AI',
          topics: ['AI Bias & Fairness', 'Privacy & Data Protection', 'Sustainable AI Practices']
        }
      ],
      outcomes: [
        'Production-ready AI/ML development skills',
        'Portfolio of deployed ML applications',
        'Professional development workflow mastery',
        'Industry-standard coding and deployment practices'
      ]
    },
    'ai-driven-dev': {
      title: 'AI-Driven Software Development',
      subtitle: 'Enhancing the SDLC for Java, .NET, and Python Developers',
      duration: '3-5 Days',
      target: 'Mid-to-senior level software developers',
      level: 'Advanced Integration',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      description: 'Specialized training for experienced developers to integrate AI tools and techniques into the Software Development Lifecycle for enhanced productivity and code quality.',
      image: 'https://www.code-intelligence.com/hubfs/Embedded%20Blog%20Thumbnails%20(23).png#keepProtocol',
      prerequisites: [
        '3+ years experience with Java, .NET, or Python',
        'Familiarity with software design patterns and APIs',
        'Basic knowledge of Git and CI/CD concepts',
        'Understanding of IDEs like VS Code, IntelliJ, or Visual Studio'
      ],
      objectives: [
        'Apply AI and Generative AI to automate SDLC stages',
        'Master prompt engineering for development tasks',
        'Leverage AI tools like GitHub Copilot, Claude, ChatGPT',
        'Integrate LLMs into backend applications',
        'Automate testing, documentation, and CI/CD processes',
        'Implement responsible AI practices in development'
      ],
      modules: [
        {
          title: 'AI in Software Development',
          topics: ['Evolution of AI in Dev Workflows', 'Generative AI & LLMs Overview', 'Real-world Implementation Examples']
        },
        {
          title: 'Prompt Engineering for Developers',
          topics: ['Developer-Focused Prompt Crafting', 'Controlled Output Techniques', 'Chaining and Refinement Methods']
        },
        {
          title: 'AI Code Generation & Suggestions',
          topics: ['GitHub Copilot, Tabnine, CodeWhisperer', 'CRUD, REST API Generation', 'AI Code Review Best Practices']
        },
        {
          title: 'AI-Assisted Debugging & Refactoring',
          topics: ['Automated Bug Detection', 'Legacy Code Refactoring', 'Real-Time AI Pair Programming']
        },
        {
          title: 'Test Automation with AI',
          topics: ['Unit & Integration Test Generation', 'Test Coverage Optimization', 'Visual Regression Testing']
        },
        {
          title: 'Documentation & Knowledge Transfer',
          topics: ['Auto-generating Documentation', 'System Diagrams from Code', 'PR and Git History Summaries']
        },
        {
          title: 'LLM Integration in Backend',
          topics: ['OpenAI, Azure OpenAI, Anthropic APIs', 'AI-Powered Microservices', 'Caching & Cost Optimization']
        },
        {
          title: 'Performance Optimization',
          topics: ['AI-Driven Performance Analysis', 'Code Efficiency Recommendations', 'Memory & DB Optimization']
        },
        {
          title: 'CI/CD Enhancement',
          topics: ['Smart Pipeline Generation', 'Predictive Deployment Failures', 'Automated Release Notes']
        },
        {
          title: 'AI-Assisted Code Reviews',
          topics: ['GitHub Copilot Labs & Review Bots', 'Custom LLM Agents', 'Pull Request Annotations']
        },
        {
          title: 'Security, Ethics & Governance',
          topics: ['AI-Specific Vulnerabilities', 'IP & Licensing Considerations', 'Human-in-the-Loop Best Practices']
        }
      ],
      outcomes: [
        'Increased development velocity and code quality',
        'Mastery of AI-powered development tools',
        'Automated testing and documentation workflows',
        'Secure and ethical AI integration practices'
      ]
    },
    'leadership-ai': {
      title: 'Leadership with AI Driven Mindset',
      subtitle: 'Strategic AI Leadership for the Modern Era',
      duration: 'Workshop Format (2-3 Days)',
      target: 'Senior executives, managers, team leaders, HR leaders',
      level: 'Executive Strategic',
      icon: Building,
      color: 'from-orange-500 to-red-500',
      description: 'Executive workshop designed to help leaders harness AI power for innovation, informed decision-making, and building future-ready organizations with human-centric approach.',
      image: 'https://thumbs.dreamstime.com/b/boardroom-table-executives-discussing-business-strategy-documents-laptops-charts-laid-out-showing-collaborative-352357220.jpg',
      prerequisites: [
        'Leadership or management role',
        'Strategic decision-making responsibility',
        'Interest in organizational transformation',
        'No technical AI background required'
      ],
      objectives: [
        'Understand AI fundamentals relevant to leadership',
        'Embed AI into organizational strategy',
        'Use AI tools for actionable insights and decision-making',
        'Navigate ethical considerations and biases responsibly',
        'Develop adaptive mindset for AI-driven era',
        'Improve collaboration with AI teams and specialists'
      ],
      modules: [
        {
          title: 'AI in Leadership Overview',
          topics: ['AI Fundamentals for Leaders', 'Mindset Shifts for AI Adoption', 'AI Role in Decision-Making', 'Case Studies of AI-Driven Leadership']
        },
        {
          title: 'AI Tools for Leaders',
          topics: ['AI Tools Overview for Executives', 'Ethics & Responsible AI Leadership', 'Integration Best Practices', 'Training & Implementation Strategies']
        },
        {
          title: 'Leading AI Implementation',
          topics: ['AI in Strategic Planning', 'Overcoming Resistance to AI', 'Team Dynamics & Collaboration', 'Fostering Innovation with AI', 'Diversity & Inclusion in AI']
        }
      ],
      outcomes: [
        'Lead organizations through AI transformation',
        'Evaluate AI solutions and make informed investments',
        'Foster culture of innovation with AI insights',
        'Navigate AI adoption challenges effectively',
        'Leverage AI for strategic planning and forecasting'
      ]
    }
  }

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

  const selectedProgramData = selectedProgram ? trainingPrograms[selectedProgram as keyof typeof trainingPrograms] : null

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
              RampAI Training Programs
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
              Comprehensive AI training solutions designed by EduRamp Learning Services. 
              From foundational AI literacy to advanced technical development - transform your workforce for the AI era.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Program Selection */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(trainingPrograms).map(([key, program]) => (
              <button
                key={key}
                onClick={() => setSelectedProgram(key)}
                className={`p-4 rounded-xl text-left transition-all duration-300 ${
                  selectedProgram === key
                    ? 'bg-gradient-to-br from-[#20B2AA] to-[#8A2BE2] text-white shadow-lg scale-105'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <program.icon className="h-6 w-6" />
                  <span className="font-semibold text-sm">{program.title}</span>
                </div>
                <p className="text-xs opacity-80">{program.target}</p>
                <p className="text-xs font-medium mt-1">{program.duration}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Program Details */}
      {selectedProgramData && (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="container-custom"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Program Overview */}
              <motion.div variants={itemVariants} className="lg:col-span-2">
                <div className="glass-card rounded-2xl p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${selectedProgramData.color} rounded-xl flex items-center justify-center`}>
                      <selectedProgramData.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-[#101585]">{selectedProgramData.title}</h2>
                      <p className="text-lg text-gray-600">{selectedProgramData.subtitle}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-gradient-to-r from-[#20B2AA]/10 to-[#8A2BE2]/10 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="h-5 w-5 text-[#20B2AA]" />
                        <span className="font-semibold text-[#101585]">Duration</span>
                      </div>
                      <p className="text-sm text-gray-700">{selectedProgramData.duration}</p>
                    </div>
                    <div className="bg-gradient-to-r from-[#8A2BE2]/10 to-[#20B2AA]/10 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Target className="h-5 w-5 text-[#8A2BE2]" />
                        <span className="font-semibold text-[#101585]">Target</span>
                      </div>
                      <p className="text-sm text-gray-700">{selectedProgramData.target}</p>
                    </div>
                    <div className="bg-gradient-to-r from-[#20B2AA]/10 to-[#8A2BE2]/10 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Award className="h-5 w-5 text-[#20B2AA]" />
                        <span className="font-semibold text-[#101585]">Level</span>
                      </div>
                      <p className="text-sm text-gray-700">{selectedProgramData.level}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-8 leading-relaxed">{selectedProgramData.description}</p>

                  {/* Prerequisites */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-[#101585] mb-4 flex items-center space-x-2">
                      <CheckCircle className="h-6 w-6 text-[#20B2AA]" />
                      <span>Prerequisites</span>
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProgramData.prerequisites.map((prereq, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#8A2BE2] rounded-full flex-shrink-0" />
                          <span className="text-gray-700">{prereq}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Learning Objectives */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-[#101585] mb-4 flex items-center space-x-2">
                      <Target className="h-6 w-6 text-[#8A2BE2]" />
                      <span>Learning Objectives</span>
                    </h3>
                    <ul className="grid grid-cols-1 gap-3">
                      {selectedProgramData.objectives.map((objective, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-[#20B2AA] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Program Image & CTA */}
              <motion.div variants={itemVariants} className="lg:col-span-1">
                <div className="glass-card rounded-2xl p-6 sticky top-8">
                  <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-6 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#101585]/20 to-[#20B2AA]/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <selectedProgramData.icon className="h-16 w-16 text-[#20B2AA] opacity-50" />
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-[#101585] mb-4">Ready to Transform Your Skills?</h4>
                  <p className="text-gray-600 mb-6">Contact us to learn more about this program and customize it for your organization's needs.</p>

                  <div className="space-y-4">
                    <Link
                      href="/contact?program=training"
                      className="w-full flex items-center justify-center space-x-2 py-3 bg-[#20B2AA] text-white font-semibold rounded-lg hover:bg-[#1C9999] transition-all duration-300 transform hover:scale-105"
                    >
                      <Calendar className="h-5 w-5" />
                      <span>Schedule Consultation</span>
                    </Link>
                    <Link
                      href="/contact?type=custom-training"
                      className="w-full flex items-center justify-center space-x-2 py-3 glass-card text-[#101585] font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300"
                    >
                      <GraduationCap className="h-5 w-5" />
                      <span>Request Custom Program</span>
                    </Link>
                  </div>

                  {/* Expected Outcomes */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h5 className="font-semibold text-[#101585] mb-3">Expected Outcomes:</h5>
                    <ul className="space-y-2">
                      {selectedProgramData.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <ArrowRight className="h-4 w-4 text-[#8A2BE2] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Detailed Modules */}
            <motion.div variants={itemVariants} className="mt-12">
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[#101585] mb-6 flex items-center space-x-2">
                  <BookOpen className="h-7 w-7 text-[#20B2AA]" />
                  <span>Program Modules</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedProgramData.modules.map((module, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border border-gray-100">
                      <h4 className="font-bold text-[#101585] mb-3 flex items-center space-x-2">
                        <span className="w-8 h-8 bg-gradient-to-br from-[#20B2AA] to-[#8A2BE2] text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {idx + 1}
                        </span>
                        <span>{module.title}</span>
                      </h4>
                      <ul className="space-y-2">
                        {module.topics.map((topic, topicIdx) => (
                          <li key={topicIdx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-[#8A2BE2] rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>
      )}

      {/* Bottom CTA */}
      <motion.div
        variants={itemVariants}
        className="py-16 bg-gradient-to-br from-[#101585] to-[#20B2AA] text-white"
      >
        <div className="container-custom text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Organization with AI?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join thousands of professionals who have already transformed their careers with RampAI training programs. 
            Start your AI journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact?program=training"
              className="px-8 py-4 bg-white text-[#101585] font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-[#101585] transition-all duration-300"
            >
              Learn About RampAI
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default TrainingPage
