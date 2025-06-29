'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const PortfolioPage = () => {
  const categories = ['All', 'Web Apps', 'Websites', 'Mobile', 'E-commerce', 'UI/UX'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: 'TaskFlow Pro',
      category: 'Web Apps',
      description: 'A comprehensive project management platform built with React, Node.js, and PostgreSQL. Features real-time collaboration, advanced analytics, and team management.',
      longDescription: 'TaskFlow Pro is a full-featured project management solution designed for modern teams. It includes real-time collaboration tools, advanced reporting dashboards, time tracking, and seamless integrations with popular development tools.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'TypeScript'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      date: '2024',
      client: 'TechStartup Inc.',
      duration: '4 months'
    },
    {
      id: 2,
      title: 'EcoShop Marketplace',
      category: 'E-commerce',
      description: 'A sustainable e-commerce platform with advanced filtering, payment integration, and vendor management system.',
      longDescription: 'EcoShop is an eco-friendly marketplace that connects sustainable brands with conscious consumers. Built with Next.js and features advanced product filtering, multi-vendor support, and integrated payment processing.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      tags: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      date: '2024',
      client: 'GreenTech Solutions',
      duration: '6 months'
    },
    {
      id: 3,
      title: 'HealthTracker Mobile',
      category: 'Mobile',
      description: 'React Native health tracking app with wearable device integration and personalized insights.',
      longDescription: 'A comprehensive health tracking application that syncs with popular wearable devices to provide users with personalized health insights and recommendations.',
      image: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg',
      tags: ['React Native', 'Firebase', 'HealthKit', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      date: '2023',
      client: 'HealthTech Corp',
      duration: '5 months'
    },
    {
      id: 4,
      title: 'Creative Agency Portfolio',
      category: 'Websites',
      description: 'Modern, responsive portfolio website for a creative agency with stunning animations and CMS integration.',
      longDescription: 'A visually striking portfolio website designed to showcase creative work with smooth animations, case study presentations, and an intuitive content management system.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      tags: ['Next.js', 'Framer Motion', 'Sanity CMS', 'GSAP'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      date: '2023',
      client: 'Creative Studio XYZ',
      duration: '3 months'
    },
    {
      id: 5,
      title: 'FinanceFlow Dashboard',
      category: 'Web Apps',
      description: 'Financial analytics dashboard with real-time data visualization and reporting capabilities.',
      longDescription: 'A sophisticated financial dashboard that provides real-time market data, portfolio analytics, and customizable reporting tools for investment professionals.',
      image: 'https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg',
      tags: ['Vue.js', 'D3.js', 'Node.js', 'Redis'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      date: '2023',
      client: 'FinTech Partners',
      duration: '8 months'
    },
    {
      id: 6,
      title: 'FoodieHub Delivery',
      category: 'Web Apps',
      description: 'Food delivery platform with real-time tracking, payment processing, and restaurant management.',
      longDescription: 'A complete food delivery ecosystem including customer app, restaurant dashboard, and delivery management system with real-time order tracking.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      tags: ['React', 'Express.js', 'MongoDB', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      date: '2022',
      client: 'Local Food Consortium',
      duration: '7 months'
    },
    {
      id: 7,
      title: 'Design System Library',
      category: 'UI/UX',
      description: 'Comprehensive design system and component library for enterprise applications.',
      longDescription: 'A complete design system built with Storybook, featuring reusable components, design tokens, and comprehensive documentation for enterprise-scale applications.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      tags: ['Storybook', 'React', 'TypeScript', 'Figma'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      date: '2023',
      client: 'Enterprise Corp',
      duration: '4 months'
    },
    {
      id: 8,
      title: 'Real Estate Platform',
      category: 'Websites',
      description: 'Modern real estate platform with property listings, virtual tours, and agent management.',
      longDescription: 'A comprehensive real estate platform featuring property search, virtual tours, mortgage calculators, and agent management system.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Mapbox'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      date: '2022',
      client: 'RealEstate Pro',
      duration: '6 months'
    }
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-base-100 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-base-content mb-6">
              My Portfolio
            </h1>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
              A showcase of projects I have built, from concept to deployment. 
              Each project represents a unique challenge and innovative solution.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-base-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`btn btn-sm transition-all duration-200 ${
                  activeCategory === category 
                    ? 'btn-primary' 
                    : 'btn-ghost hover:btn-primary hover:btn-outline'
                }`}
              >
                {category}
                {category !== 'All' && (
                  <span className="ml-2 badge badge-sm">
                    {projects.filter(p => p.category === category).length}
                  </span>
                )}
              </button>
            ))}
          </div>
          
          {/* Results count */}
          <div className="text-center mt-4">
            <p className="text-base-content/60 text-sm">
              Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
              {activeCategory !== 'All' && ` in ${activeCategory}`}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-base-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-base-content/60 text-lg">No projects found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group bg-base-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Project Actions */}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.liveUrl}
                        className="btn btn-circle btn-sm bg-base-100 text-base-content hover:bg-primary hover:text-primary-content"
                        aria-label="View Live"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="btn btn-circle btn-sm bg-base-100 text-base-content hover:bg-primary hover:text-primary-content"
                        aria-label="View Code"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-primary-content px-3 py-1 rounded-full text-xs font-medium">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-8">
                    {/* Project Meta */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="badge badge-primary badge-sm">{project.category}</span>
                      <div className="flex items-center text-base-content/60 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.date}
                      </div>
                    </div>

                    {/* Project Title & Description */}
                    <h3 className="text-2xl font-bold text-base-content mb-3">
                      {project.title}
                    </h3>
                    <p className="text-base-content/70 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Client & Duration */}
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div>
                        <span className="text-base-content/60">Client:</span>
                        <div className="font-medium text-base-content">{project.client}</div>
                      </div>
                      <div>
                        <span className="text-base-content/60">Duration:</span>
                        <div className="font-medium text-base-content">{project.duration}</div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex items-center mb-2">
                        <Tag className="w-4 h-4 mr-2 text-base-content/60" />
                        <span className="text-sm text-base-content/60">Technologies:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <a
                        href={project.liveUrl}
                        className="btn btn-primary btn-sm flex-1"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="btn btn-outline btn-sm"
                      >
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-base-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary p-12 rounded-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let us create something amazing together. From concept to deployment, 
              I will help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-white text-primary hover:bg-white/90">
                Start a Project
              </Link>
              <a
                href="/resume.pdf"
                className="btn btn-outline text-white border-white hover:bg-white hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;