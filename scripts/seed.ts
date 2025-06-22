
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // Clear existing data
  await prisma.contactInquiry.deleteMany({})
  await prisma.project.deleteMany({})
  await prisma.consultingService.deleteMany({})
  await prisma.trainingProgram.deleteMany({})

  // Seed Training Programs
  const trainingPrograms = [
    // IT Industry
    {
      title: 'AI Strategy for IT Leadership',
      description: 'Comprehensive AI strategy training for IT executives and leaders, covering technology roadmaps, budget planning, and team transformation.',
      industry: 'IT',
      audience: 'Leaders',
      duration: '2 days',
      level: 'Executive',
      price: '₹75,000',
      features: ['AI Strategy & Roadmapping', 'Technology Assessment', 'Budget Planning & ROI', 'Team Transformation'],
      outcomes: ['Develop comprehensive AI strategy', 'Understand implementation costs', 'Create transformation roadmap', 'Lead AI-driven teams']
    },
    {
      title: 'AI Fundamentals for IT Professionals',
      description: 'Essential AI knowledge for IT professionals, covering cloud AI services, data pipelines, and ethical implementation.',
      industry: 'IT',
      audience: 'AI for Everyone',
      duration: '3 days',
      level: 'Intermediate',
      price: '₹45,000',
      features: ['AI/ML Basics', 'Cloud AI Services', 'Data Pipeline Design', 'Ethics & Governance'],
      outcomes: ['Understand AI capabilities', 'Design AI-ready systems', 'Implement ethical AI practices', 'Collaborate with AI teams']
    },
    {
      title: 'Advanced AI Development for IT',
      description: 'Hands-on technical training for developers, covering deep learning frameworks, MLOps, and production deployment.',
      industry: 'IT',
      audience: 'Technical Developers',
      duration: '5 days',
      level: 'Advanced',
      price: '₹95,000',
      features: ['Deep Learning Frameworks', 'MLOps & Production', 'Model Optimization', 'Hands-on Projects'],
      outcomes: ['Build production AI systems', 'Optimize model performance', 'Deploy scalable solutions', 'Lead technical implementation']
    },
    // Finance Industry
    {
      title: 'AI Strategy for Financial Leadership',
      description: 'Strategic AI training for finance executives, focusing on risk management, compliance, and investment planning.',
      industry: 'Finance',
      audience: 'Leaders',
      duration: '2 days',
      level: 'Executive',
      price: '₹80,000',
      features: ['Financial AI Applications', 'Risk Assessment', 'Regulatory Compliance', 'Investment Planning'],
      outcomes: ['Identify AI opportunities', 'Manage AI risks', 'Ensure compliance', 'Drive innovation']
    },
    {
      title: 'AI in Finance Operations',
      description: 'Practical AI applications in financial operations, including fraud detection, trading algorithms, and customer analytics.',
      industry: 'Finance',
      audience: 'AI for Everyone',
      duration: '3 days',
      level: 'Intermediate',
      price: '₹50,000',
      features: ['Fraud Detection', 'Algorithmic Trading', 'Credit Scoring', 'Customer Analytics'],
      outcomes: ['Implement fraud detection', 'Understand trading algorithms', 'Improve credit decisions', 'Enhance customer insights']
    },
    {
      title: 'FinTech AI Development',
      description: 'Advanced technical training for financial AI applications, covering time series analysis and quantitative methods.',
      industry: 'Finance',
      audience: 'Technical Developers',
      duration: '5 days',
      level: 'Advanced',
      price: '₹110,000',
      features: ['Time Series Analysis', 'Risk Modeling', 'Real-time Processing', 'Quantitative Methods'],
      outcomes: ['Build financial models', 'Implement risk systems', 'Create trading algorithms', 'Optimize performance']
    },
    // Retail Industry
    {
      title: 'Retail AI Transformation',
      description: 'Transform retail operations with AI-driven customer experience, inventory optimization, and pricing strategies.',
      industry: 'Retail',
      audience: 'Leaders',
      duration: '2 days',
      level: 'Executive',
      price: '₹70,000',
      features: ['Customer Journey AI', 'Inventory Optimization', 'Pricing Strategies', 'Omnichannel Experience'],
      outcomes: ['Transform customer experience', 'Optimize inventory management', 'Implement dynamic pricing', 'Create unified experiences']
    },
    {
      title: 'AI for Retail Operations',
      description: 'Practical AI implementation for retail teams, covering recommendation systems and marketing automation.',
      industry: 'Retail',
      audience: 'AI for Everyone',
      duration: '3 days',
      level: 'Intermediate',
      price: '₹45,000',
      features: ['Recommendation Systems', 'Demand Forecasting', 'Customer Segmentation', 'Marketing Automation'],
      outcomes: ['Build recommendation engines', 'Forecast demand accurately', 'Segment customers effectively', 'Automate marketing campaigns']
    },
    {
      title: 'E-commerce AI Development',
      description: 'Technical development training for e-commerce AI solutions, including computer vision and NLP applications.',
      industry: 'Retail',
      audience: 'Technical Developers',
      duration: '5 days',
      level: 'Advanced',
      price: '₹90,000',
      features: ['Computer Vision', 'NLP for Reviews', 'Search Optimization', 'Real-time Analytics'],
      outcomes: ['Implement visual search', 'Analyze customer sentiment', 'Optimize search results', 'Build analytics dashboards']
    }
  ]

  console.log('📚 Seeding training programs...')
  for (const program of trainingPrograms) {
    await prisma.trainingProgram.create({ data: program })
  }

  // Seed Consulting Services
  const consultingServices = [
    // IT Consulting
    {
      title: 'AI-Powered DevOps Automation',
      description: 'Implement intelligent CI/CD pipelines with predictive deployment optimization and automated testing to accelerate development cycles.',
      industry: 'IT',
      useCase: 'DevOps Transformation',
      benefits: ['50% faster deployment cycles', 'Reduced manual errors', 'Predictive issue detection', 'Automated testing'],
      process: ['Current state assessment', 'AI tool selection', 'Pipeline redesign', 'Team training'],
      timeline: '8-12 weeks',
      roi: '40% reduction in deployment time'
    },
    {
      title: 'Intelligent Cloud Cost Optimization',
      description: 'Deploy AI models to automatically optimize cloud resource allocation and reduce operational costs through intelligent scaling.',
      industry: 'IT',
      useCase: 'Cost Optimization',
      benefits: ['30% cost reduction', 'Automated scaling', 'Resource optimization', 'Usage analytics'],
      process: ['Cost analysis', 'AI model development', 'Implementation', 'Monitoring setup'],
      timeline: '6-10 weeks',
      roi: 'Average 35% cost savings'
    },
    // Finance Consulting
    {
      title: 'Advanced Fraud Detection System',
      description: 'Build real-time fraud detection using machine learning to identify suspicious transactions instantly with high accuracy.',
      industry: 'Finance',
      useCase: 'Fraud Prevention',
      benefits: ['99.5% accuracy', 'Real-time detection', 'Reduced false positives', 'Regulatory compliance'],
      process: ['Data analysis', 'Model development', 'Integration', 'Continuous tuning'],
      timeline: '10-16 weeks',
      roi: '300% return on investment'
    },
    {
      title: 'Algorithmic Trading Strategy',
      description: 'Develop AI-driven trading algorithms that adapt to market conditions and optimize portfolio performance with risk management.',
      industry: 'Finance',
      useCase: 'Automated Trading',
      benefits: ['Consistent returns', 'Risk mitigation', 'Market adaptation', 'Performance optimization'],
      process: ['Strategy design', 'Backtesting', 'Paper trading', 'Live deployment'],
      timeline: '12-20 weeks',
      roi: '15-25% annual returns'
    },
    // Retail Consulting
    {
      title: 'Personalized Recommendation Engine',
      description: 'Create AI-powered recommendation systems that increase customer engagement and sales conversion through personalized experiences.',
      industry: 'Retail',
      useCase: 'Customer Personalization',
      benefits: ['25% increase in sales', 'Better customer experience', 'Increased retention', 'Higher engagement'],
      process: ['Customer data analysis', 'Algorithm development', 'A/B testing', 'Full deployment'],
      timeline: '6-12 weeks',
      roi: '200% increase in conversion'
    },
    {
      title: 'Dynamic Pricing Optimization',
      description: 'Implement intelligent pricing strategies that adapt to demand, competition, and inventory levels for maximum profitability.',
      industry: 'Retail',
      useCase: 'Pricing Strategy',
      benefits: ['Optimized margins', 'Competitive advantage', 'Inventory turnover', 'Revenue growth'],
      process: ['Market analysis', 'Pricing model development', 'Testing', 'Implementation'],
      timeline: '8-14 weeks',
      roi: '15% margin improvement'
    }
  ]

  console.log('🏢 Seeding consulting services...')
  for (const service of consultingServices) {
    await prisma.consultingService.create({ data: service })
  }

  // Seed Projects
  const projects = [
    {
      name: 'Stable Diffusion',
      description: 'A latent text-to-image diffusion model capable of generating photo-realistic images given any text input, revolutionizing creative AI.',
      category: 'Generative AI',
      githubUrl: 'https://github.com/Stability-AI/StableDiffusion',
      stars: 41000,
      language: 'Python',
      highlights: ['Text-to-Image Generation', 'High Resolution Output', 'Open Source License'],
      relevance: 'Demonstrates the power of generative AI for creative applications and how to make complex models accessible to users.',
      imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop'
    },
    {
      name: 'AUTOMATIC1111/stable-diffusion-webui',
      description: 'A browser interface based on Gradio library for Stable Diffusion, making AI image generation accessible to everyone through an intuitive web interface.',
      category: 'Generative AI',
      githubUrl: 'https://github.com/AUTOMATIC1111/stable-diffusion-webui',
      stars: 154000,
      language: 'Python',
      highlights: ['Web Interface', 'User-Friendly Design', 'Extensive Extensions'],
      relevance: 'Shows how to build intuitive interfaces for complex AI models, essential for business applications and user adoption.',
      imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop'
    },
    {
      name: 'AutoGPT',
      description: 'An experimental open-source attempt to make GPT-4 fully autonomous, capable of performing complex tasks independently with goal-oriented behavior.',
      category: 'Agentic AI',
      githubUrl: 'https://github.com/Significant-Gravitas/Auto-GPT',
      stars: 175000,
      language: 'Python',
      highlights: ['Autonomous Agents', 'Goal-Oriented Tasks', 'Multi-Step Reasoning'],
      relevance: 'Represents the future of autonomous AI systems that can handle complex business processes independently, reducing manual oversight.',
      imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=200&fit=crop'
    },
    {
      name: 'LangChain',
      description: 'A framework for developing applications powered by language models, enabling context-aware and reasoning applications with modular components.',
      category: 'ML Frameworks',
      githubUrl: 'https://github.com/langchain-ai/langchain',
      stars: 110000,
      language: 'Python',
      highlights: ['LLM Integration', 'Modular Architecture', 'Production Ready'],
      relevance: 'Essential framework for building production-grade AI applications with language models, crucial for enterprise implementations.',
      imageUrl: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400&h=200&fit=crop'
    },
    {
      name: 'TensorFlow',
      description: 'An end-to-end open source platform for machine learning with comprehensive tools, libraries, and community resources for ML development.',
      category: 'ML Frameworks',
      githubUrl: 'https://github.com/tensorflow/tensorflow',
      stars: 190000,
      language: 'C++',
      highlights: ['Production Scale', 'Comprehensive Ecosystem', 'Google Backed'],
      relevance: 'Industry standard for machine learning development, crucial for enterprise AI implementations requiring scalability and reliability.',
      imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop'
    },
    {
      name: 'PyTorch',
      description: 'Tensors and Dynamic neural networks in Python with strong GPU acceleration, offering research flexibility and intuitive development experience.',
      category: 'ML Frameworks',
      githubUrl: 'https://github.com/pytorch/pytorch',
      stars: 90000,
      language: 'Python',
      highlights: ['Research Friendly', 'Dynamic Computation Graphs', 'GPU Acceleration'],
      relevance: 'Preferred framework for AI research and rapid prototyping, essential for developing innovative AI solutions and experimentation.',
      imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop'
    },
    {
      name: 'Open Interpreter',
      description: 'A natural language interface for computers that runs code locally, providing full system access through conversational AI interactions.',
      category: 'Agentic AI',
      githubUrl: 'https://github.com/OpenInterpreter/open-interpreter',
      stars: 59000,
      language: 'Python',
      highlights: ['Local Code Execution', 'Natural Language Interface', 'Full System Access'],
      relevance: 'Demonstrates how AI can provide natural language interfaces to complex systems, enabling automation and accessibility improvements.',
      imageUrl: 'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=400&h=200&fit=crop'
    },
    {
      name: 'MetaGPT',
      description: 'Multi-agent framework that assigns different roles to GPTs to form a collaborative software entity for complex task completion.',
      category: 'Agentic AI',
      githubUrl: 'https://github.com/geekan/MetaGPT',
      stars: 55000,
      language: 'Python',
      highlights: ['Multi-Agent Collaboration', 'Role-Based Architecture', 'Software Development'],
      relevance: 'Shows how multiple AI agents can work together to tackle complex, multi-step business processes with specialized expertise.',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop'
    },
    {
      name: 'Ultralytics YOLO',
      description: 'State-of-the-art real-time object detection, instance segmentation and image classification models with high accuracy and speed.',
      category: 'Computer Vision',
      githubUrl: 'https://github.com/ultralytics/yolov5',
      stars: 42000,
      language: 'Python',
      highlights: ['Real-time Object Detection', 'High Accuracy', 'Easy Deployment'],
      relevance: 'Industry standard for computer vision applications, essential for manufacturing quality control and retail automation solutions.',
      imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop'
    },
    {
      name: 'OpenCV',
      description: 'Open Source Computer Vision Library with comprehensive tools for image and video processing, featuring thousands of optimized algorithms.',
      category: 'Computer Vision',
      githubUrl: 'https://github.com/opencv/opencv',
      stars: 82000,
      language: 'C++',
      highlights: ['Comprehensive Library', 'High Performance', 'Cross-platform Support'],
      relevance: 'Foundational library for computer vision applications, critical for industrial automation and healthcare AI implementations.',
      imageUrl: 'https://thumbs.dreamstime.com/z/advanced-robotic-manufacturing-scenario-large-industrial-robot-arm-precision-tools-sensors-workstation-production-348015169.jpg'
    },
    {
      name: 'Hugging Face Transformers',
      description: 'State-of-the-art Machine Learning for PyTorch, TensorFlow, and JAX with thousands of pretrained models and easy-to-use APIs.',
      category: 'NLP',
      githubUrl: 'https://github.com/huggingface/transformers',
      stars: 135000,
      language: 'Python',
      highlights: ['Pretrained Models Hub', 'Multi-framework Support', 'Active Community'],
      relevance: 'Central hub for NLP models and tools, essential for any organization implementing language understanding and generation AI.',
      imageUrl: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=400&h=200&fit=crop'
    },
    {
      name: 'OpenAI Whisper',
      description: 'Robust speech recognition via large-scale weak supervision, supporting over 100 languages with high accuracy and noise resistance.',
      category: 'NLP',
      githubUrl: 'https://github.com/openai/whisper',
      stars: 83000,
      language: 'Python',
      highlights: ['Multilingual Support', 'Noise Robust', 'High Accuracy'],
      relevance: 'Best-in-class speech recognition technology, crucial for voice-enabled business applications and accessibility improvements.',
      imageUrl: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=400&h=200&fit=crop'
    }
  ]

  console.log('🚀 Seeding projects...')
  for (const project of projects) {
    await prisma.project.create({ data: project })
  }

  console.log('✅ Database seeded successfully!')
  console.log(`📊 Created:`)
  console.log(`   - ${trainingPrograms.length} training programs`)
  console.log(`   - ${consultingServices.length} consulting services`)
  console.log(`   - ${projects.length} projects`)
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
