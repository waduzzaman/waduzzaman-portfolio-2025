'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with Next.js, Stripe, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, built using React, Node.js, and Socket.io.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts, charts, and weather alerts using modern React hooks.',
      image: 'https://images.pexels.com/photos/1089610/pexels-photo-1089610.jpeg',
      tags: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    }
  ];

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-base-content mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-base-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-base-content mb-2">
                  {project.title}
                </h3>
                <p className="text-base-content/70 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

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
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <Link href="/portfolio" className="btn btn-outline btn-lg group">
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;