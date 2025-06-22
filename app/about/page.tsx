
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Users, Target, Award, MapPin, Mail, Lightbulb, TrendingUp, Shield } from 'lucide-react'
import Link from 'next/link'

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Satya Bonda',
      role: 'AI Strategy & Leadership Training',
      email: 'bonda.career@gmail.com',
      expertise: ['Executive AI Strategy', 'Digital Transformation', 'Leadership Development'],
      bio: 'Experienced technology leader with deep expertise in AI strategy and organizational transformation.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Arbaz Sayed',
      role: 'Technical AI Training & Implementation',
      email: 'bonda.career@gmail.com',
      expertise: ['Machine Learning', 'AI Development', 'Technical Training'],
      bio: 'Technical expert specializing in AI implementation, ML engineering, and hands-on developer training.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face'
    }
  ]

  const values = [
    {
      icon: Target,
      title: 'Human-Centric AI',
      description: 'We believe AI should empower people, not replace them. Our approach focuses on augmenting human capabilities.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Ethical Implementation',
      description: 'Responsible AI development with strong emphasis on ethics, transparency, and fairness in all implementations.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      title: 'Measurable Impact',
      description: 'Every project is designed to deliver quantifiable business outcomes and sustainable competitive advantages.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Collaborative Approach',
      description: 'We work closely with your teams to ensure knowledge transfer and long-term organizational capability building.',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const milestones = [
    {
      year: '2021',
      title: 'RampAI Founded',
      description: 'Established with a mission to democratize AI education and consulting across industries.'
    },
    {
      year: '2022',
      title: 'Initial Training Programs',
      description: 'Launched comprehensive AI training programs for leaders, professionals, and developers.'
    },
    {
      year: '2023-2024',
      title: '2000+ Professionals Trained',
      description: 'Successfully trained over 2000 professionals across IT, Finance, Retail, and other industries.'
    },
    {
      year: '2025',
      title: 'Expanding Reach',
      description: 'Growing our impact with advanced consulting services and specialized industry solutions.'
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
              About RampAI
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Where capability meets intelligence — transforming people and processes 
              through expertly crafted AI training and consulting.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="container-custom"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#101585] mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                RampAI exists to bridge the gap between artificial intelligence potential 
                and practical business implementation. We transform organizations by 
                empowering their people with the knowledge, skills, and strategic insight 
                needed to harness AI effectively.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Unlike tool-focused competitors, we take a human-centric approach, 
                ensuring that AI serves to augment human capabilities rather than 
                replace them, creating sustainable competitive advantages through 
                intelligent workforce transformation.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card p-8 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4CAF50] to-[#45a049] rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#101585] mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the world's most trusted partner in AI workforce transformation, 
                creating a future where every organization can confidently leverage 
                artificial intelligence to achieve extraordinary outcomes while 
                maintaining human values and ethical standards.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="container-custom"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#101585] mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide every training program, consulting engagement, 
              and client relationship we build.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center glass-card p-8 rounded-2xl hover-lift"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#101585] mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Team */}
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
              Meet Our Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our team combines deep technical expertise with strategic business insight 
              to deliver transformational AI solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-8 rounded-2xl hover-lift text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#101585] to-[#4CAF50] rounded-full p-1">
                    <div className="w-full h-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-[#101585] to-[#A47864] flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-[#101585] mb-2">
                  {member.name}
                </h3>
                <p className="text-[#4CAF50] font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {member.bio}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Expertise:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] text-sm rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center space-x-2 text-[#101585] hover:text-[#4CAF50] transition-colors duration-300"
                >
                  <Mail className="h-4 w-4" />
                  <span className="font-medium">{member.email}</span>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="container-custom"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#101585] mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From inception to impact — the milestones that define our commitment 
              to AI education and transformation.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex items-start space-x-6 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {index < milestones.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-full bg-gradient-to-b from-[#4CAF50] to-[#A47864]" />
                )}
                
                {/* Timeline dot */}
                <div className="w-12 h-12 bg-gradient-to-br from-[#4CAF50] to-[#45a049] rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                  <Award className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <div className="glass-card p-6 rounded-xl flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl font-bold text-[#4CAF50]">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-bold text-[#101585]">
                      {milestone.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Locations */}
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
              Where We Operate
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Based in India's technology hubs, serving organizations globally 
              with local expertise and international perspective.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              {
                city: 'Bangalore',
                description: 'India\'s Silicon Valley - Hub for technology innovation and AI research',
                highlight: 'Primary Training Center'
              },
              {
                city: 'Mumbai',
                description: 'Financial capital of India - Center for enterprise consulting services',
                highlight: 'Consulting Hub'
              }
            ].map((location, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-8 rounded-2xl text-center hover-lift"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#101585] to-[#A47864] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#101585] mb-2">
                  {location.city}
                </h3>
                <p className="text-[#4CAF50] font-semibold mb-4">
                  {location.highlight}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {location.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
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
              Ready to Transform Your Organization?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of professionals who have already begun their AI transformation 
              journey with RampAI's expert guidance and proven methodologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#4CAF50] text-white font-semibold rounded-xl hover:bg-[#45a049] transition-all duration-300 transform hover:scale-105 animate-glow"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/training"
                className="px-8 py-4 glass-card text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                Explore Training Programs
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

export default AboutPage
