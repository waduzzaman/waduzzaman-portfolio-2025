'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ['Full Stack Developer', 'React Specialist', 'UI/UX Enthusiast', 'Problem Solver'];

  useEffect(() => {
    const animateText = () => {
      const currentTitle = titles[currentIndex];
      let index = 0;
      const interval = setInterval(() => {
        setDisplayText(currentTitle.substring(0, index));
        index++;
        if (index > currentTitle.length) {
          clearInterval(interval);
          setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % titles.length);
          }, 2000);
        }
      }, 100);
    };

    animateText();
  }, [currentIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-100 via-base-100 to-primary/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-primary font-medium text-lg">Hi there! 👋 I'm</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-base-content">
                Mahbub E Waduzzaman
              </h1>
              <div className="h-20 flex items-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-secondary">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </h2>
              </div>
              <p className="text-lg text-base-content/70 leading-relaxed max-w-lg">
                I craft exceptional digital experiences through clean code, innovative design, 
                and cutting-edge web technologies. Let's build something amazing together.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn btn-primary btn-lg group">
                Let's Work Together
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="/resume.pdf"
                className="btn btn-outline btn-lg group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="btn btn-ghost btn-circle btn-lg hover:text-primary hover:bg-primary/10 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="btn btn-ghost btn-circle btn-lg hover:text-primary hover:bg-primary/10 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:mwaduzzaman@gmail.com"
                className="btn btn-ghost btn-circle btn-lg hover:text-primary hover:bg-primary/10 transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img
                src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
                alt="Mahbub E Waduzzaman - Full Stack Developer"
                className="relative z-10 w-full max-w-md mx-auto rounded-full shadow-2xl border-4 border-primary/20"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-10 -right-4 animate-bounce delay-200">
              <div className="bg-primary text-primary-content p-3 rounded-lg shadow-lg">
                <Github className="w-6 h-6" />
              </div>
            </div>
            <div className="absolute bottom-10 -left-4 animate-bounce delay-500">
              <div className="bg-secondary text-secondary-content p-3 rounded-lg shadow-lg">
                <span className="font-bold">5+</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;